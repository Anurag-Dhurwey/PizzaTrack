let mix = require('laravel-mix');
mix.disableSuccessNotifications();
mix.js('resources/js/app.js', './public/script/script.js').sass('resources/sass/app.scss', './public/css/style.css');