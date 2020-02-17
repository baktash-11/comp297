module objects{
    export class Label extends createjs.Text{
        //constructor 
        
        constructor(public lableString: string= "Game's Lable", 
                    public fontSize: string ="25px", 
                    public fontFamily: string="Consoles",
                    public fontColor:string="#fff000",
                    x:number=0,  y:number=0, public isCentered:boolean=false)
        {
            //in constructor we just saparate the font family and font size 
            //in super i just concatenate with the help of +" "+  them back 
            super(lableString, fontSize +" "+ fontFamily, fontColor);

            //will center the regX and regY
            if(isCentered){
                this.regX = this.getBounds().width * 0.5;
                this.regY = this.getMeasuredHeight()*0.5;
            }

            this.x=x;
            this.y=y;
        }

        //method to keep maintain the pivate point in our labels 
        public setText(newText:string){
            this.text =newText;
                this.regX = this.getMeasuredWidth() * 0.5;
                this.regY = this.getMeasuredHeight()*0.5;
        }

    }
}