var simon = function(){
  this.level = 0;
  this.indexUser = 0;
  this.interval;

  this.numColors ={
    1: "green",
    2: "red",
    3: "yellow",
    4: "blue",
    green: 1,
    red: 2,
    yellow: 3,
    blue: 4
  }

  this.init = function(){
    this.level = 1;
    this.randomNumColors = [];
  };

  this.randomColorGenerator = function(){
    var randomNumber = Math.floor(Math.random()*4)+1;
    this.randomNumColors.push(randomNumber);
  };

  this.lightUp = function(e){
    var color = typeof e == "string" ? e : e.target.id;

    setTimeout(function(){
      document.getElementById(color).style.opacity = 1;
    }, 0);

    setTimeout(function(){
      document.getElementById(color).style.opacity = 0.6;
    }, 350);
  };

  this.correctSequence = function(e){
    var diff = true;

    if (this.numColors[e.target.id] === this.randomNumColors[this.indexUser]){
      diff = false;
      return !diff;
    }
    return !diff;
  };

  this.playSequence = function(){
    var
      i    = 0,
      self = this,
      colorSequence;

    this.indexUser = 0;
    clearInterval(this.interval);
    this.randomColorGenerator();

    this.interval = setInterval(function(){
      colorSequence = self.numColors[self.randomNumColors[i]];
      self.lightUp(colorSequence);
      i++;

      if(i === self.randomNumColors.length){
        clearInterval(self.interval);
      }
    }, 1000);
  };
}

document.addEventListener('DOMContentLoaded', function(){
  var
    simonGame  = new simon(),
    btnPower   = document.getElementById('btnPower'),
    btnStart   = document.getElementById('btnStart'),
    btnStrict  = document.getElementById('btnStrict'),
    btnSeq     = document.getElementsByClassName('btnSeq'),
    inputCount = document.getElementById('count'),

    displayLevel ={
      show: function(){
        var numLevel = ("00" + simonGame.level).slice(-3);
        inputCount.value = numLevel;
        inputCount.style.opacity = "1";
      },
      hide: function(){
        inputCount.value = "888";
        inputCount.style.opacity = "0.6";
      },
      update: function(){
        var numLevel = ("00" + simonGame.level).slice(-3);
        inputCount.value = numLevel;
      }
    },

    colorBtn ={
      click: function(e){

      },
      addClick: function(){
        for(var i = 0; i < btnSeq.length; i++){
          btnSeq[i].addEventListener('click', this.click);
        }
      },
      removeClick: function(){
        for(var i = 0; i < btnSeq.length; i++){
          btnSeq[i].removeEventListener('click', this.click);
        }
      }
    }

  btnPower.addEventListener('click', function(){
    function startGame(){
      simonGame.init();
      displayLevel.update();
      colorBtn.addClick();

      setTimeout(function(){simonGame.playSequence();},200);
    }

    if (this.checked){
      displayLevel.show();
      btnStart.addEventListener('click', startGame);
    }else{
      displayLevel.hide();
      btnStart.removeEventListener('click', startGame);
    }
  })
})