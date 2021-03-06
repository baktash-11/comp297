module scenes
{
    export class Start extends objects.Scene
    {
        // instance memebers
        welcomeLabel: objects.Label;
        startButton: objects.Button;
        // constructor
        constructor()
        {
            super();

            // initialization
            this.welcomeLabel = new objects.Label();
            this.startButton = new objects.Button();

            this.Start();
        }

        

        // methods
        public Start(): void 
        {
            //instantiate a new Text object
            this.welcomeLabel = new objects.Label("Welcome", "80px", "Consolas", "#000000", 320, 180, true);
            // buttons
            this.startButton = new objects.Button('./Assets/images/btnstart.png', 320, 430, true);
            this.Main();
        }        
        
        public Update(): void 
        {
           
        }

        public Main(): void 
        {
            this.addChild(this.welcomeLabel);
            this.addChild(this.startButton);
            
            this.startButton.on("click", ()=>{
                config.Game.SCENE = scenes.State.PLAY;
            });

        }

        
    }
}