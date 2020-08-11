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
      on: function(){
        var numLevel = ("00" + simonGame.level).slice(-3);
        inputCount.value = numLevel;
        inputCount.style.opacity = "1";
      }
    };

  btnPower.addEventListener('click', function(){
    if (this.checked){
      displayLevel.on();
    }else{
      document.getElementById('count').value = "888";
      document.getElementById('count').style.opacity = "0.6";
    }
  })
})