module objects
{
    export abstract class Scene extends createjs.Container
    {
        //construcot 
        constructor()
        {
            super();
        }

        //abstract methods
        /**
         *this is the start point 
         *
         * @abstract
         * @memberof Csene
         */
        public abstract Start():void;
        /**
         *this method updates 60 times ps
         *
         * @abstract
         * @memberof Csene
         */
        public abstract Update():void;
        /**
         * I would call this method labour 
         * all the work and calculation wil take palce in this method
         *
         * @abstract
         * @memberof Csene
         */
        public abstract Main():void;


    }
        
    
}