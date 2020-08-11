var simon = function(){
  this.level = 0;

  this.init = function(){
    this.level = 1;
    this.randomNumColors = [];
  }
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
        console.log('e = ' + e.target.id);
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