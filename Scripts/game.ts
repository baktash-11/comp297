let Game =(function(){
    //Game scope variables 
    let canvas:HTMLCanvasElement = document.getElementsByTagName('canvas')[0]; 
    let stage: createjs.Stage;


    //functions
    function Start():void
    {
        console.log(`%c Game Started!`, "color: blue; font-size: 20px; font-weight: bold;");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60; // 60 FPS
        createjs.Ticker.on('tick', Update);
        stage.enableMouseOver(20);

    }
    function Update():void
    {}

    function Main():void
    {}

    window.addEventListener('load', Start);
})();