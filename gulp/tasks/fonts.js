import fs, { appendFile } from "fs";
import fonter from "gulp-fonter";
import ttf2woff from "gulp-ttf2woff";
import ttf2woff2 from "gulp-ttf2woff2";

export const otfToTtf = () => {                   // convert to .ttf
  return app.gulp.src(`${app.path.src.fonts}*.otf`, {})
  .pipe(app.plugins.plumber(
    app.plugins.notify.onError({
      title: "FONTS",
      message: "Error: <%= error.message %>",
    })
  ))
  .pipe(fonter({
    formats: ['ttf']
  }))
  .pipe(app.gulp.dest(app.path.src.fonts))
}

export const ttfToWoff = () => {
  return app.gulp.src(`${app.path.src.fonts}*.ttf`, {})  // convert to .woff
  .pipe(app.plugins.plumber(
    app.plugins.notify.onError({
      title: "FONTS",
      message: "Error: <%= error.message %>",
    })
  ))
  // .pipe(fonter({ formats: ['woff'] }))
  .pipe(ttf2woff())
  .pipe(app.gulp.dest(app.path.src.fonts))
  .pipe(app.gulp.src(`${app.path.src.fonts}*.ttf`, {}))      // convert to .woff2
  .pipe(ttf2woff2())
  .pipe(app.gulp.dest(app.path.src.fonts))
}

export const copyWoff = () => {
  return app.gulp.src(`${app.path.src.fonts}*.{woff2,woff}`)
  .pipe(app.plugins.plumber(
    app.plugins.notify.onError({
      title: "FONTS",
      message: "Error: <%= error.message %>",
    })
  ))
  .pipe(app.gulp.dest(app.path.build.fonts))
}

export const fontsToStyle = () => {
  let fontsScssFile = `${app.path.srcFolder}/scss/common/_fonts.scss`
  fs.readdir(app.path.build.fonts, function (err, fontsFiles) {
    if (fontsFiles) {
      if (!fs.existsSync(fontsScssFile)) {
        fs.writeFile(fontsScssFile, '', cb)
        let newFileOnly
        for (let i = 0; i < fontsFiles.length; i++) {
          let fontFileName = fontsFiles[i].split('.')[0]
          if (newFileOnly !== fontFileName) {
            let fontName = fontFileName.split('-')[0] ? fontFileName.split('-')[0] : fontFileName
            let fontWeight = fontFileName.split('-')[1] ? fontFileName.split('-')[1] : fontFileName
            switch (fontWeight.toLowerCase()) {
              case 'thin':
                fontWeight = 100;
                break;
              case 'hair':
                fontWeight = 100;
                break;
              case 'extralight':
                fontWeight = 200;
                break;
              case 'light':
                fontWeight = 300;
                break;
              case 'regular':
                fontWeight = 400;
                break;
              case 'normal':
                fontWeight = 400;
                break;
              case 'medium':
                fontWeight = 500;
                break;
              case 'semibold':
                fontWeight = 600;
                break;
              case 'demidold':
                fontWeight = 600;
                break;
              case 'bold':
                fontWeight = 700;
                break;
              case 'extrabold':
                fontWeight = 800;
                break;
              case 'black':
                fontWeight = 900;
                break;
              case 'ultra':
                fontWeight = 900;
                break;
              case 'heavy':
                fontWeight = 900;
                break;
              default:
                fontWeight = 400;
                break;
            }
            fs.appendFile(fontsScssFile,
              `@font-face{\n\tfont-family: "${fontName}";
              \n\tfont-display: swap;
              \n\tsrc: local("${fontFileName}"), url("../fonts/${fontFileName}.woff2") format("woff2"), url("../fonts/${fontFileName}.woff") format("woff");
              \n\tfont-weight: ${fontWeight};
              \n\tfont-style: normal;\n}\r\n`, cb)
            newFileOnly = fontFileName
          }
        }
      } else console.log("Файл scss/fonts.scss уже существует. Для обновления файла нужно его удалить!");
    }
  });
  return app.gulp.src(`${app.path.srcFolder}`);
  function cb() { }
}
