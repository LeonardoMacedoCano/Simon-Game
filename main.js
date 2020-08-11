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
    btnStrict = document.getElementById('btnStrict');

  btnPower.addEventListener('click', function(){
    if (this.checked){
      document.getElementById('count').value = "000";
      document.getElementById('count').style.opacity = "1";

      simonGame.init();
    }else{
      document.getElementById('count').value = "888";
      document.getElementById('count').style.opacity = "0.6";
    }
  })
})