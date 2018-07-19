(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Coins.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '7c663xCLHdMdIWj6+ewSHV9', 'Coins', __filename);
// Script/Coins.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Coins = /** @class */ (function (_super) {
    __extends(Coins, _super);
    function Coins() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.anim = null;
        return _this;
    }
    Coins.prototype.init = function (ctr) {
        this.coinsControls = ctr;
        this.anim.play("goldDown");
    };
    Coins.prototype.goDown = function (pos, toPos) {
        this.node.parent = cc.director.getScene();
        this.node.position = pos;
        var spawn = cc.spawn(cc.moveTo(0.8, toPos), cc.scaleTo(0.8, 0.5));
        var cb = cc.callFunc(this.despawnCoin, this);
        var acf = cc.sequence(spawn, cb);
        this.node.runAction(acf);
    };
    Coins.prototype.despawnCoin = function () {
        this.coinsControls.despawnCoins(this.node);
    };
    __decorate([
        property(cc.Animation)
    ], Coins.prototype, "anim", void 0);
    Coins = __decorate([
        ccclass
    ], Coins);
    return Coins;
}(cc.Component));
exports.default = Coins;

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=Coins.js.map
        