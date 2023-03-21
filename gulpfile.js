import gulp from "gulp";
import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";

global.app = {
  gulp: gulp,
  path: path,
  plugins: plugins,
  isBuild: process.argv.includes('--build'),
  isDev: !process.argv.includes('--build'),
}

import { reset } from "./gulp/tasks/reset.js";
import { copy } from "./gulp/tasks/copy.js";
import { html } from "./gulp/tasks/html.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { sprite } from "./gulp/tasks/sprite.js";
import { server } from "./gulp/tasks/server.js";
import { zip } from "./gulp/tasks/zip.js";
import { ftp } from "./gulp/tasks/ftp.js";

import { otfToTtf, ttfToWoff, copyWoff, fontsToStyle } from "./gulp/tasks/fonts.js";

function watcher() {
  gulp.watch(path.watch.files, copy)
  gulp.watch(path.watch.html, html)
  gulp.watch(path.watch.scss, scss)
  gulp.watch(path.watch.js, js)
  gulp.watch(path.watch.images, images)
  gulp.watch(path.watch.sprite, sprite)
}

const clean = gulp.series(reset)
const fontsCreateWoff = gulp.series(otfToTtf, ttfToWoff)
const fonts = gulp.series(copyWoff, fontsToStyle)

const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, images, sprite))

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server))
const build = gulp.series(reset, mainTasks)
const deployZip = gulp.series(reset, mainTasks, zip)
const deployFtp = gulp.series(reset, mainTasks, ftp)

export { dev }
export { build }
export { fontsCreateWoff }
export { fonts }
export { clean }
export { deployZip }
export { deployFtp }

gulp.task('default', dev)
gulp.task('s', server)
gulp.task('clean', reset)
gulp.task('fncreate', fontsCreateWoff)
gulp.task('fn', fonts)
gulp.task('fnc', copyWoff)
gulp.task('spr', sprite)
gulp.task('ftp', ftp)
