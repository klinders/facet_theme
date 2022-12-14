const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss')

mix.sass('./sass/style.scss', './')
    .options({
        processCssUrls: false,
        postCss: [tailwindcss('tailwind.config.js')],
    })