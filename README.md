# blender-sphinx-theme

The goal of this project is to make a sphinx theme using the Blender Web Assets: https://developer.blender.org/diffusion/BWA/repository/master/

## Install and usage
### Software you need
* **[GIT](http://git-scm.com)** To clone and contribute to this repository you need Git. Install from here: http://git-scm.com/downloads.
* **[SASS](http://sass-lang.com)** Our CSS preprocessor is SASS. If you don't have it installed, follow the step by step guide on their website: http://sass-lang.com/install.
* **[NODE.JS](http://nodejs.org)** We use Node.js to power Grunt wich will run repetitive tasks like prefixing CSS. Make sure, that you have Node.js installed on your system. Download from here: http://nodejs.org/download or install via a package manager: http://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager.

### Setup
1. Open up your terminal.
2. Clone this repository with `git clone git://git.blender.org/blender-web-assets.git`.
3. Navigate to this project using `cd /path/to/blender-web-assets`.
4. Do `npm install -g grunt-cli` to install the command line interface for Grunt (you maybe have to run this command as root).
5. Type `npm install` so all dependencies will be installed.
6. `grunt` will compile and prefix the SASS.
