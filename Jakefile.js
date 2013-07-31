/*
  jakefile.js for pmwiki-skin-flatui
  

  TODO: project-path should come from an external config file
  only default path-values should be committed to repo
  TODO: alternate paths should be available, so changes can be pushed to test installs
  
  */


var path = require('path');

// it would be nicer if this were in (an) external config(s)
var target = "C:/dev/xampp/htdocs/projects/pmwikitest/pub/skins/flatui/";
jake.mkdirP(target);

desc('This is a simple complete-project copy.');
task('default', [], function () {
    jake.cpR("flatui.tmpl", target);
    jake.cpR("skin.php", target);
    jake.cpR("css", path.join(target, "css"));
    jake.cpR("images", path.join(target, "images"));
    jake.cpR("javascripts", path.join(target, "javascripts"));
    });