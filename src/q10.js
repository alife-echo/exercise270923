import { promises as fs } from 'fs';

async function readdirPromise(caminho) {
  try {
    const files = await fs.readdir(caminho);
    return files;
  } catch (err) {
    throw err;
  }
}

async function main() {
  try {
    const files = await readdirPromise('./');
    console.log('Conteúdo do diretório:', files);
  } catch (err) {
    console.error('Erro ao ler diretório:', err);
  }
}

main();
