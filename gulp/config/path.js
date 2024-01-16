// Отримуємо ім'я папки проєкта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());


const buildFolder = `./dist`; // Можна використовувати rootFolder
const srcFolder = `./src`;


export const path = {
  build: {
    js: `${buildFolder}/js/`,
    pluginsjs: `${buildFolder}/js/plugins/`,
    css: `${buildFolder}/css/`,
    pluginscss: `${buildFolder}/css/plugins/`,
    html: `${buildFolder}/`,
    images: `${buildFolder}/img/`,
    fonts: `${buildFolder}/fonts/`,
    files: `${buildFolder}/files/`
  },
  src: {
    js: `${srcFolder}/js/app.js`,
    pluginsjs: `${srcFolder}/js/plugins/*.js`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcFolder}/img/**/*.svg`,
    scss: `${srcFolder}/styles/style.scss`,
    pluginscss: `${srcFolder}/styles/plugins/*.css`,
    html: `${srcFolder}/*.html`,
    files: `${srcFolder}/files/**/*.*`,
    svgicons: `${srcFolder}/svgicons/*.svg`
  },
  watch: {
    js: `${srcFolder}/js/**/*.js`,
    pluginsjs: `${srcFolder}/js/plugins/*.js`,
    scss: `${srcFolder}/styles/**/*.scss`,
    pluginscss: `${srcFolder}/styles/plugins/*.css`,
    html: `${srcFolder}/**/*.html`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
    files: `${srcFolder}/files/**/*.*`,
    svgicons: `${srcFolder}/svgicons/*.svg`
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ``
}