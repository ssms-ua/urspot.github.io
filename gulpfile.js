/* https://goede.site/setting-up-gulp-4-for-automatic-sass-compilation-and-css-injection */
// I don't feel like writing var everytime
var gulp = require("gulp"),
    sass = require("gulp-sass"),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    cssnano = require("cssnano"),
    sourcemaps = require("gulp-sourcemaps"),
    browserSync = require("browser-sync").create();

// Put this after including our dependencies
var paths = {
    styles: {
        // By using styles/**/*.sass we're telling gulp to check all folders for any sass file
        // src: "src/sass/*.scss",
        src: "src/sass/style.scss",
        
        // Compiled files will end up in whichever folder it's found in (partials are not compiled)
        dest: "css"
    }
 
    // Easily add additional paths
    // ,html: {
    //  src: '...',
    //  dest: '...'
    // }
};

// Define tasks after requiring dependencies
function style() {
    // Where should gulp look for the sass files?
    // My .sass files are stored in the styles folder
    // (If you want to use scss files, simply look for *.scss files instead)
    return (
        gulp
            .src(paths.styles.src)

            // Initialize sourcemaps before compilation starts
            .pipe(sourcemaps.init())
            // Use sass with the files found, and log any errors
            .pipe(sass())

            .on("error", sass.logError)

            // Use postcss with autoprefixer and compress the compiled file using cssnano
			.pipe(postcss([autoprefixer(), cssnano()]))

			// Now add/write the sourcemaps
			.pipe(sourcemaps.write())
 
            // What is the destination for the compiled file?
            .pipe(gulp.dest(paths.styles.dest))

            // Add browsersync stream pipe after compilation
			.pipe(browserSync.stream())
    );
}

function watch(){

	browserSync.init({
		// You can tell browserSync to use this directory and serve it as a mini-server
		server: {
			baseDir: "./"
		}
		// If you are already serving your website locally using something like apache
		// You can use the proxy setting to proxy that instead
		// proxy: "yourlocal.dev"
	});

    // gulp.watch takes in the location of the files to watch for changes
    // and the name of the function we want to run on change
    gulp.watch(paths.styles.src, style)
}
    
// Expose the task by exporting it
// This allows you to run it from the commandline using
// $ gulp watch
exports.watch = watch