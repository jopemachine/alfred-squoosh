import fse from 'fs-extra';
import { ImagePool } from '@squoosh/lib';
import { cpus } from 'os';
import path from 'path';

const imagePool = new ImagePool(cpus().length);

const imgFilePaths = process.argv[2].split('\t').map((str) => str.trim());

const preprocessOptions = {
  resize: {
    enabled: true,
    width: Number(process.env.width),
    height: Number(process.env.height),
  },
};

(async () => {
  for (const imgFilePath of imgFilePaths) {

    try {
      const imgFile = await fse.readFile(imgFilePath);

      const imgArrayBuf = imagePool.ingestImage(imgFile);

      if (process.env.width || process.env.height) {
        console.log('Image resized.');
        await imgArrayBuf.decoded;
        await imgArrayBuf.preprocess(preprocessOptions);
      }

      const filename = (path.basename(imgFilePath)).split('.')[0];
      await imgArrayBuf.encode({
        [process.env.format]: {
          'quality': Number(process.env.quality)
        }
      });

      const dst = path.resolve(process.env.dest ?? path.dirname(imgFilePath), filename + `.${process.env.format}`);
      await fse.writeFile(dst, imgArrayBuf.file);
    } catch (err) {
      console.error(err);
      continue;
    }
  }

  await imagePool.close();
  console.log('Jobs done successfully!');
})();
