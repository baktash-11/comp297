module objects
{
    export class Button extends createjs.Bitmap
    {
        //constructor 
        constructor(btnPath: String ="./Assets/images/btn.png",
                    x:number =0, y:number =0, isCentered: boolean=false )
        {
            super(btnPath)
            this.image.addEventListener("load", ()=>{
                if(isCentered){
                    this.regX = this.getBounds().width * 0.5;
                    this.regY = this.getBounds().height *0.5;
    
                    this.x=x;
                    this.y=y;
                }
            });

            this.on("mouseover",this.MouseOver);
            this.on("mouseout", this.MouseOut);

        }

        //methods for mouse oever and mouse out
        MouseOver():void{
            this.alpha = 0.7;
        }

        MouseOut():void{
            this.alpha = 1.0;
        }
        
    }   
}