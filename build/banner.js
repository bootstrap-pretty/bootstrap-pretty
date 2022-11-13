'use strict';

const pkg = require('../package.json');
const year = new Date().getFullYear();

const getBanner = pluginFilename => {
    return `/*!
    * Bootstrap Pretty${pluginFilename ? ` ${pluginFilename}` : ''} ${pkg.version} (${pkg.homepage})
    * Based on Bootstrap 5.3.0-alpha1 (https://getbootstrap.com/docs/5.3/getting-started/introduction/)
    * Copyright 2011-2023 Bootstrap (https://getbootstrap.com)
    * Copyright ${year} ${pkg.author}
    * Original code licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    * Licensed under MIT (https://github.com/bootstrap-pretty/bootstrap-pretty/blob/master/LICENSE)
    */`;
};

module.exports = getBanner;
