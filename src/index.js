console.log('Started index.js');

var Python = require('python-shell');

function run() {
  var options = {
    mode: 'text',
    args: ['src/sound.mp3']
  };

  var script = Python.run('src/play_sound.py', options, function(err, data) {
    if (err) {
      console.log('error >>>', err);
      throw err;
    }
    console.log('Python says: \"' + data + '\"');
  });
};

run();
