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
var objects;
(function (objects) {
    var Button = /** @class */ (function (_super) {
        __extends(Button, _super);
        //constructor 
        function Button(btnPath, x, y, isCentered) {
            if (btnPath === void 0) { btnPath = "./Assets/images/btn.png"; }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (isCentered === void 0) { isCentered = false; }
            var _this = _super.call(this, btnPath) || this;
            _this.image.addEventListener("load", function () {
                if (isCentered) {
                    _this.regX = _this.getBounds().width * 0.5;
                    _this.regY = _this.getBounds().height * 0.5;
                    _this.x = x;
                    _this.y = y;
                }
            });
            _this.on("mouseover", _this.MouseOver);
            _this.on("mouseout", _this.MouseOut);
            return _this;
        }
        //methods for mouse oever and mouse out
        Button.prototype.MouseOver = function () {
            this.alpha = 0.7;
        };
        Button.prototype.MouseOut = function () {
            this.alpha = 1.0;
        };
        return Button;
    }(createjs.Bitmap));
    objects.Button = Button;
})(objects || (objects = {}));
//# sourceMappingURL=Button.js.map