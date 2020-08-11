var simon = function(){
  this.level = 0;

  this.init = function(){
    this.level = 1;
    this.randomNumColors = [];
  }
}

document.addEventListener('DOMContentLoaded', function(){
  var
    simonGame = new simon(),
    btnPower = document.getElementById('btnPower'),
    btnStart = document.getElementById('btnStart'),
    btnStrict = document.getElementById('btnStrict'),
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
      }
    };

  btnPower.addEventListener('click', function(){
    if (this.checked){
      displayLevel.show();
    }else{
      displayLevel.hide();
    }
  })
})