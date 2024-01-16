import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import concat from "gulp-concat"

import cleanCss from 'gulp-clean-css' // Стиск css файлу
import webpcss from 'gulp-webpcss' // Виведення WEBP зображення
import autoprefixer from 'gulp-autoprefixer'; // Додавання векторних префіксів
import groupCssMediaQueries from 'gulp-group-css-media-queries' // Групування медіа запросів

const sass = gulpSass(dartSass);

export const scss = () => {
  return app.gulp.src(app.path.src.scss, { sourcemaps: app.isDev })
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "SCSS",
        message: "Error: <%= error.message %>"
      })
    ))
    .pipe(app.plugins.replace(/@img\//g, '../img/'))
    
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(
      app.plugins.if(
        app.isBuild,
        groupCssMediaQueries()
      )
    )
    .pipe(
      app.plugins.if(
        app.isBuild,
        webpcss(
          {
            webpClass: ".webp",
            noWebpClass: ".no-webp",
          }
        )
      )
    )
    .pipe(
      app.plugins.if(
        app.isBuild,
        autoprefixer({
          grid: true,
          overrideBrowserslist: ["last 3 versions"],
          cascade: true,
        })
      )
    )
    // Розкоментувати якщо потрібен не стистутий дубль файлу стилей
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(
      app.plugins.if(
        app.isBuild,
        cleanCss()
      )
    )
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browsersync.stream());
}

export const pluginscss = () => {
  return app.gulp.src(app.path.src.pluginscss, { sourcemaps: app.isDev })
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "JS",
        message: "Error: <%= error.message %>"
      })
    ))
    .pipe(concat('plugins.css'))
    .pipe(
      app.plugins.if(
        app.isBuild,
        cleanCss()
      )
    )
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(app.gulp.dest(app.path.build.pluginscss))
    .pipe(app.plugins.browsersync.stream());
}