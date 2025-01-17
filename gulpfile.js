
import { src, dest, watch } from "gulp";
import * as dartSass from "sass";
import gulpSass from "gulp-sass";

// Creamos la instancia de Gulp Sass con Dart Sass
const sass = gulpSass(dartSass);

export function css(done) {
  src("src/scss/app.scss")
    .pipe(sass().on("error", sass.logError))  // Aquí está el manejo del error
    .pipe(dest("build/css"));
  done();  // Terminamos la tarea
}

export function dev() {
  watch('src/scss/**/*.scss', css);  // Observamos los archivos SCSS
}
