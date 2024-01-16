// Загальний модуль
import gulp from "gulp";
// Імпорт 
import { path } from "./gulp/config/path.js";
// Імпорт загальних плагінів
import { plugins } from "./gulp/config/plugins.js";

// Передаєм значення в шлобальну змінну
global.app = {
  isBuild: process.argv.includes('--build'),
  isDev: !process.argv.includes('--build'),
  path: path,
  gulp: gulp,
  plugins: plugins,
}

// Імпорт задач
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { pluginscss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { pluginsjs } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";
import { svgSprive } from "./gulp/tasks/svgSprive.js";

// Наглядач за змінами в файлах
function watcher() {
  gulp.watch(path.watch.files, copy)
  gulp.watch(path.watch.html, html)
  gulp.watch(path.watch.scss, scss)
  gulp.watch(path.watch.pluginscss, pluginscss)
  gulp.watch(path.watch.js, js)
  gulp.watch(path.watch.pluginsjs, pluginsjs)
  gulp.watch(path.watch.images, images)
}

export { svgSprive }

//  Обробка шрифтів
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

// Основні задачі
const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, pluginscss, js, pluginsjs, images));

// Сценарії виконання задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);

// Експорт сценаріїв
export { dev }
export { build }

// Виконання сценарія за замовчуванням
gulp.task('default', dev);