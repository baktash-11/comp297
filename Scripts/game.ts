let Game =(function(){
    //Game scope variables 
    let canvas:HTMLCanvasElement = document.getElementsByTagName('canvas')[0];
    let stage:createjs.Stage;
    let currentSceneState:scenes.State;
    let currentScene: objects.Scene;


    //functions
    function Start():void
    {
        console.log(`%c Game Started!`, "color: organge; font-size: 20px; font-weight: bold;");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60; // 60 FPS
        createjs.Ticker.on('tick', Update);
        stage.enableMouseOver(20);
        currentSceneState = scenes.State.NO_SCENE;
        config.Game.SCENE = scenes.State.START;

    }

    function Update():void
    {
        if(currentSceneState != config.Game.SCENE)
        {
            Main();
        }

        currentScene.Update();
        stage.update();
    }

    function Main():void
    {
        console.log(`%c Scene Switched...`, "color: blue; font-size: 16px;");

        // if scene is not curent will remove stage(container)
        if(currentSceneState != scenes.State.NO_SCENE)
        {
            currentScene.removeAllChildren();
            stage.removeAllChildren();
        }

        // switch to the next scene

        switch(config.Game.SCENE)
        {
            case scenes.State.START:
                console.log("switch to Start Scene");
                currentScene = new scenes.Start(); 
                break;
            case scenes.State.PLAY:
                console.log("switch to Play Scene");
               // currentScene = new scenes.Play(); 
                break;
            case scenes.State.END:
                console.log("switch to End Scene");
               // currentScene = new scenes.End(); 
                break;
        }
    }

    window.addEventListener('load', Start);
})();