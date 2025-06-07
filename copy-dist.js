// copy-dist.js
import fs from 'fs';
import path from 'path';
import fse from 'fs-extra';

// Path to Hugo static directory
const destinationPath = path.resolve('../synosys-hugo/static/teaching/complex-systems');

// Path to Astro dist
const sourcePath = path.resolve('./dist');

(async () => {
    try {
        await fse.ensureDir(destinationPath);
        await fse.emptyDir(destinationPath); // Clears old files
        await fse.copy(sourcePath, destinationPath);
        console.log('✅ Astro dist copied to Hugo static/teaching/complex-systems');
    } catch (err) {
        console.error('❌ Copy failed:', err);
    }
})();
