const player = require('play-sound')({});

const play = () => {
  player.play(__dirname + '/respect.mp3', function(err){
    if (err) console.log('Error', err);
  });
}

module.exports = play;
