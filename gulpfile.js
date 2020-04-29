"use strict";
const gulp = require("gulp"),
  gulpSass = require("gulp-sass"),
  babel = require("gulp-babel"),
  removeFiles = require("gulp-clean"),
  browserSync = require("browser-sync").create(),
  mainCssPath = "./src/scss/**/*.scss";

// BROWSER SYNC \\
gulp.task("serve", () => {
  browserSync.init({
    server: {
      baseDir: "dist/",
    },
  });
  browserSync.watch("dist/**/*.*").on("change", browserSync.reload);
});
// CLEAR DIR \\
gulp.task("clear", (done) => {
  gulp.src("dist/*").pipe(removeFiles());
  done();
});
// HTML \\
gulp.task("html", (done) => {
  gulp.src("./src/*.html").pipe(gulp.dest("./dist"));
  done();
});
// SCSS => CSS \\
gulp.task("build style", (done) => {
  gulp
    .src(mainCssPath)
    .pipe(gulpSass().on("error", gulpSass.logError))
    .pipe(gulp.dest("./dist/styles"));
  done();
});
// BABEL JS \\
gulp.task("js babel", () =>
  gulp
    .src("src/js/*.js")
    .pipe(
      babel({
        presets: ["@babel/preset-env"],
      })
    )
    .pipe(gulp.dest("dist/js"))
);
// );
// WATCH \\
gulp.task("watch", () => {
  gulp.watch("./src/*.html", gulp.series("html"));
  gulp.watch(mainCssPath, gulp.series("build style"));
  gulp.watch("src/js/*.js", gulp.series("js babel"));
});
// DEFAULD TASK \\
gulp.task("default", gulp.series("clear", "js babel", "html", "build style"));

gulp.task("start", gulp.series("default", gulp.parallel("watch", "serve")));