var Game = (function () {
    //Game scope variables 
    var canvas = document.getElementsByTagName('canvas')[0];
    var stage;
    //functions
    function Start() {
        console.log("%c Game Started!", "color: blue; font-size: 20px; font-weight: bold;");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60; // 60 FPS
        createjs.Ticker.on('tick', Update);
        stage.enableMouseOver(20);
    }
    function Update() { }
    function Main() { }
    window.addEventListener('load', Start);
})();
//# sourceMappingURL=game.js.map