import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const images = [
  {
    name: 'peperoni.webp',
    url: 'https://raw.githubusercontent.com/mgp94/sintenedorReact/main/src/assets/peperoni.webp'
  },
  {
    name: 'hawaina.webp',
    url: 'https://raw.githubusercontent.com/mgp94/sintenedorReact/main/src/assets/hawaina.webp'
  },
  {
    name: 'vegetariana.webp',
    url: 'https://raw.githubusercontent.com/mgp94/sintenedorReact/main/src/assets/vegetariana.webp'
  },
  {
    name: 'cuatro-quesos.webp',
    url: 'https://raw.githubusercontent.com/mgp94/sintenedorReact/main/src/assets/cuatro-quesos.webp'
  },
  {
    name: 'barbacoa.webp',
    url: 'https://raw.githubusercontent.com/mgp94/sintenedorReact/main/src/assets/barbacoa.webp'
  },
  {
    name: 'marinera.webp',
    url: 'https://raw.githubusercontent.com/mgp94/sintenedorReact/main/src/assets/marinera.webp'
  },
  {
    name: 'logoSintenedor.webp',
    url: 'https://raw.githubusercontent.com/mgp94/sintenedorReact/main/src/assets/logoSintenedor.webp'
  }
];

const assetsDir = path.join(__dirname, 'src', 'assets');

// Crear el directorio de assets si no existe
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

// Función para descargar una imagen
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const file = fs.createWriteStream(path.join(assetsDir, filename));
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      } else {
        reject(`Error al descargar ${filename}: ${response.statusCode}`);
      }
    }).on('error', (err) => {
      reject(`Error al descargar ${filename}: ${err.message}`);
    });
  });
}

// Descargar todas las imágenes
async function downloadAllImages() {
  console.log('Descargando imágenes...');
  for (const image of images) {
    try {
      await downloadImage(image.url, image.name);
      console.log(`✓ ${image.name} descargada`);
    } catch (error) {
      console.error(`✗ ${error}`);
    }
  }
  console.log('Proceso completado');
}

downloadAllImages(); 