Pmwiki Bootstrap Skin
=====================

A [Bootstrap](http://twitter.github.com/bootstrap/) and [Flat-UI](http://flat-ui.com/) skin for [PmWiki](http://www.pmwiki.org/) based on my custom [Pmwiki Bootstrap Skin](https://github.com/MichaelPaulukonis/pmwiki-bootstrap-skin).

This is a customization used for a specific purpose that has some major layout-differences (e.g., missing left-content, centered body, etc.) from my [original skin](https://github.com/MichaelPaulukonis/pmwiki-bootstrap-skin). This probably should have been a branch. I hope to merge the features eventually.

# Installation
Copy just about everything (excluding `jakefile.js` and `readme.md`) to `/path/to/pwmiki/pub/skins/flatui`

Add the following to config.php:

    $Skin = 'flatui';
