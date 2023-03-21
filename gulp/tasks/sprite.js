import svgSprite from "gulp-svg-sprite";

export const sprite = () => {
  return app.gulp.src(app.path.src.sprite)
  .pipe(app.plugins.plumber(
    app.plugins.notify.onError({
      title: "SPRITE",
      message: "Error: <%= error.message %>",
    })
  ))
  .pipe(svgSprite({
    mode: {
      stack: {
        sprite: `../sprite.svg`,
        // example: true,
      }
    },
  }))
  .pipe(app.gulp.dest(app.path.build.images))
  .pipe(app.plugins.browserSync.stream())
}
