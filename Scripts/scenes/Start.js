var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var Start = /** @class */ (function (_super) {
        __extends(Start, _super);
        // constructor
        function Start() {
            var _this = _super.call(this) || this;
            // initialization
            _this.welcomeLabel = new objects.Label();
            _this.startButton = new objects.Button();
            _this.Start();
            return _this;
        }
        // methods
        Start.prototype.Start = function () {
            //instantiate a new Text object
            this.welcomeLabel = new objects.Label("Welcome", "80px", "Consolas", "#000000", 320, 180, true);
            // buttons
            this.startButton = new objects.Button('./Assets/images/btnstart.png', 320, 430, true);
            this.Main();
        };
        Start.prototype.Update = function () {
        };
        Start.prototype.Main = function () {
            this.addChild(this.welcomeLabel);
            this.addChild(this.startButton);
            this.startButton.on("click", function () {
                config.Game.SCENE = scenes.State.PLAY;
            });
        };
        return Start;
    }(objects.Scene));
    scenes.Start = Start;
})(scenes || (scenes = {}));
//# sourceMappingURL=Start.js.map