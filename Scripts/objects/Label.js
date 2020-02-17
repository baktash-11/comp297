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
    var Label = /** @class */ (function (_super) {
        __extends(Label, _super);
        //constructor 
        function Label(lableString, fontSize, fontFamily, fontColor, x, y, isCentered) {
            if (lableString === void 0) { lableString = "Game's Lable"; }
            if (fontSize === void 0) { fontSize = "25px"; }
            if (fontFamily === void 0) { fontFamily = "Consoles"; }
            if (fontColor === void 0) { fontColor = "#fff000"; }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (isCentered === void 0) { isCentered = false; }
            var _this = 
            //in constructor we just saparate the font family and font size 
            //in super i just concatenate with the help of +" "+  them back 
            _super.call(this, lableString, fontSize + " " + fontFamily, fontColor) || this;
            _this.lableString = lableString;
            _this.fontSize = fontSize;
            _this.fontFamily = fontFamily;
            _this.fontColor = fontColor;
            _this.isCentered = isCentered;
            //will center the regX and regY
            if (isCentered) {
                _this.regX = _this.getBounds().width * 0.5;
                _this.regY = _this.getMeasuredHeight() * 0.5;
            }
            _this.x = x;
            _this.y = y;
            return _this;
        }
        //method to keep maintain the pivate point in our labels 
        Label.prototype.setText = function (newText) {
            this.text = newText;
            this.regX = this.getMeasuredWidth() * 0.5;
            this.regY = this.getMeasuredHeight() * 0.5;
        };
        return Label;
    }(createjs.Text));
    objects.Label = Label;
})(objects || (objects = {}));
//# sourceMappingURL=Label.js.map