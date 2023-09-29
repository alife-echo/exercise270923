import { promises as fs, stat } from 'fs';

async function getSubdirectories(caminho) {
  try {
    const files = await fs.readdir(caminho);
    const subdirectories = await Promise.all(
      files.map(async file => {
        const fullPath = `${caminho}/${file}`;
        const fileStat = await fs.stat(fullPath);
        if (fileStat.isDirectory()) {
          return fullPath;
        } else {
          return null;
        }
      })
    );
    return subdirectories.filter(Boolean);
  } catch (err) {
    throw err;
  }
}
async function main() {
  try {
    const subdirectories = await getSubdirectories('./');
    console.log('Subdiretórios:', subdirectories);
  } catch (err) {
    console.error('Erro ao obter subdiretórios:', err);
  }
}

main();
