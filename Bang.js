var pokemon = [2, 2, 2, 3, 2, 2, 2, 2, 3];
var randomSelct;
var startTimer;
var shuffleTimer;
var AppearTimer;
var passTimer;
var pt = 0;
var judge;
var sec = 0;
var datet = 0;
var start;
var now;
var timedisplay;

$('#start').click(function(){
  $(this).css('display', 'none');
  $('#change').css('display', 'block');
  startTimer = setTimeout(function(){
    start = new Date();
    timeMeasure();
    shuffle(pokemon);
    Appear();
  }, 1000);
});


function shuffle(pokemon) {
  pokemon.sort(function() {
    return Math.random() - .5;
  });
  shuffleTimer = setTimeout(function(){
    shuffle(pokemon);
  }, 700);
}
//shuffle(pokemon);
console.log(pokemon);

function timeMeasure(){
  now = new Date();
  datet = parseInt((now.getTime() - start.getTime()) / 1000);
  sec = datet % 60;

  if(sec < 10) { sec = "0" + sec; }

  timedisplay = sec;
  $('#time').html(timedisplay);

  passTimer = setTimeout(function(){
    timeMeasure();
  }, 1000);

  if(timedisplay == 59){
    Finish();
  }

}

function Appear(){
for(var i = 0; i <= pokemon.length; i++){
  $('#chara' + i).css('background-image', 'url(' +pokemon[i] + '.jpg)')
                 .css('background-size', 'contain');
}

randomSelct = Math.floor(Math.random()*8);
console.log(randomSelct);
$('#hole' + randomSelct).css('display', 'none');
$('#chara' + randomSelct).css('display', 'block');

AppearTimer = setTimeout(function(){
  $('#hole' + randomSelct).css('display', 'block');
  $('#chara' + randomSelct).css('display', 'none');
  Appear();
}, 700);

}
//Appear();


$('.chara').click(function(){
  if($(this).css('background-image') == 'url(file:///Users/thanapandiramprasad/Dropbox/workspace/js/practice/BangGame/2.jpg)'){
    pt++;
    $('#point').html(pt + 'pt');
  }
  else if($(this).css('background-image') == 'url(file:///Users/thanapandiramprasad/Dropbox/workspace/js/practice/BangGame/3.jpg)'){
    pt += 3;
    $('#point').html(pt + 'pt');
  }

});

function Finish(){
  clearTimeout(shuffleTimer);
  clearTimeout(AppearTimer);
  clearTimeout(passTimer);
  setTimeout(function(){
    Value();
  }, 300);
}

function Value(){
  $('#main').css('background-color', '#000');
  $('body').css('background-color', '#000');
  $('#topbox').css('display', 'none');
  $('#holebox').css('display', 'none');
  $('#main').append('<h1 id="massage">お疲れ様です！！<br>今回のあなたのポイントは' +pt+ 'です(*^_^*)<br>再チャレンジする場合はページをロードしてください!</h1>')
  $('#massage').css('color', '#c0392b')
  $('#massage').css('margin-top', '100px');

}
