const exec = require('child_process').exec

exports.doLs = function () {
  var output = exec("du -sh")
  return output

  // some function that turn du out put into json
  //res.write(JSON.stringify(json))
}

