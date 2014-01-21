(function() {
  loadResolve = {
    '/assets/javascript': ['main.js', 'util.js'],
    '/assets/stylesheet': ['index.css', 'custom.css']
  };

  for (location in loadResolve) {
    console.log(loadResolve[location]);
  }

  console.log(location);
}());