window.__require=function t(o,i,e){function n(s,c){if(!i[s]){if(!o[s]){var u=s.split("/");if(u=u[u.length-1],!o[u]){var a="function"==typeof __require&&__require;if(!c&&a)return a(u,!0);if(r)return r(u,!0);throw new Error("Cannot find module '"+s+"'")}s=u}var p=i[s]={exports:{}};o[s][0].call(p.exports,function(t){return n(o[s][1][t]||t)},p,p.exports,t,o,i,e)}return i[s].exports}for(var r="function"==typeof __require&&__require,s=0;s<e.length;s++)n(e[s]);return n}({Helloworld:[function(t,o,i){"use strict";cc._RF.push(o,"e1b90/rohdEk4SdmmEZANaD","Helloworld");var e,n=this&&this.__extends||(e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i])})(t,o)},function(t,o){function i(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(i.prototype=o.prototype,new i)}),r=this&&this.__decorate||function(t,o,i,e){var n,r=arguments.length,s=r<3?o:null===e?e=Object.getOwnPropertyDescriptor(o,i):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,o,i,e);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(s=(r<3?n(s):r>3?n(o,i,s):n(o,i))||s);return r>3&&s&&Object.defineProperty(o,i,s),s};Object.defineProperty(i,"__esModule",{value:!0});var s=cc._decorator,c=s.ccclass,u=s.property,a=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.label=null,o.text="hello",o}return n(o,t),o.prototype.start=function(){this.label.string=this.text},r([u(cc.Label)],o.prototype,"label",void 0),r([u],o.prototype,"text",void 0),r([c],o)}(cc.Component);i.default=a,cc._RF.pop()},{}],Loading:[function(t,o,i){"use strict";cc._RF.push(o,"548f1lX04pNurylr7sQsXjN","Loading");var e,n=this&&this.__extends||(e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i])})(t,o)},function(t,o){function i(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(i.prototype=o.prototype,new i)}),r=this&&this.__decorate||function(t,o,i,e){var n,r=arguments.length,s=r<3?o:null===e?e=Object.getOwnPropertyDescriptor(o,i):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,o,i,e);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(s=(r<3?n(s):r>3?n(o,i,s):n(o,i))||s);return r>3&&s&&Object.defineProperty(o,i,s),s};Object.defineProperty(i,"__esModule",{value:!0});var s=cc._decorator,c=s.ccclass,u=(s.property,function(t){function o(){return null!==t&&t.apply(this,arguments)||this}return n(o,t),o.prototype.start=function(){setTimeout(function(){cc.director.loadScene("TaiXiuGame")},2e3)},r([c],o)}(cc.Component));i.default=u,cc._RF.pop()},{}],Sounds:[function(t,o,i){"use strict";cc._RF.push(o,"ba99e5Ap+1EX6A3pDqJAGWe","Sounds");var e=this&&this.__decorate||function(t,o,i,e){var n,r=arguments.length,s=r<3?o:null===e?e=Object.getOwnPropertyDescriptor(o,i):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,o,i,e);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(s=(r<3?n(s):r>3?n(o,i,s):n(o,i))||s);return r>3&&s&&Object.defineProperty(o,i,s),s};Object.defineProperty(i,"__esModule",{value:!0});var n=cc._decorator,r=n.ccclass,s=n.property,c=function(){function t(){this.name=""}return e([s(String)],t.prototype,"name",void 0),e([s(cc.AudioClip)],t.prototype,"clip",void 0),e([r],t)}();i.default=c,cc._RF.pop()},{}],TaiXiuGame:[function(t,o,i){"use strict";cc._RF.push(o,"ef41aApHJFI86NIyloDWGP3","TaiXiuGame");var e,n=this&&this.__extends||(e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i])})(t,o)},function(t,o){function i(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(i.prototype=o.prototype,new i)}),r=this&&this.__decorate||function(t,o,i,e){var n,r=arguments.length,s=r<3?o:null===e?e=Object.getOwnPropertyDescriptor(o,i):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,o,i,e);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(s=(r<3?n(s):r>3?n(o,i,s):n(o,i))||s);return r>3&&s&&Object.defineProperty(o,i,s),s};Object.defineProperty(i,"__esModule",{value:!0});var s,c=t("./Sounds"),u=cc._decorator,a=u.ccclass,p=u.property;(function(t){t[t.none=0]="none",t[t.tai=1]="tai",t[t.xiu=2]="xiu"})(s||(s={}));var l=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.timeCount=10,o.isTimeCount=!1,o.isRandom=!0,o.isBet=!1,o.isOpen=!1,o.nutSprite=[],o.nutSpriteFrame=[],o.totalCoin=1e6,o.taiCoin=0,o.xiuCoin=0,o.totalBetCoin=0,o.winCoin=0,o.guessCoin=1e3,o.musicSound=[],o.sfxSound=[],o.state1=!0,o.state2=!0,o.timeState=!0,o.isStartGame=!1,o}return n(o,t),o.prototype.start=function(){this.PlayMusic("Bg"),this.AllButtonDisableColor(),this.RandomNumber(),this.taiChose=s.none,this.xiuChose=s.none,this.winCoinText.string=this.winCoin.toString()+"$",this.totalCoinText.string=this.totalCoin.toString()+"$",this.taiCoinText.string=this.taiCoin.toString()+"$",this.xiuCoinText.string=this.xiuCoin.toString()+"$",this.totalBetCoinText.string=this.totalBetCoin.toString()+"$",this.guessCoinText.string=this.guessCoin.toString()+"$",this.timeText.string=this.timeCount.toString()},o.prototype.update=function(t){var o=this;this.isStartGame&&(this.isTimeCount&&(setTimeout(function(){o.timeCount-=t,o.timeText.string=Math.round(o.timeCount).toString()},1e3),this.timeState&&(this.TimeCountSoundEfect(),this.timeState=!1)),this.timeCount<=1&&this.isTimeCount&&(this.isTimeCount=!1,this.isOpen=!1,this.isBet=!1,this.AllButtonDisableColor(),this.DetermineGame(),this.EndGame()),this.timeCount<=10&&this.isRandom&&(this.isRandom=!1,this.StartGame()))},o.prototype.RandomNumber=function(){for(var t=[],o=0,i=0;i<3;i++){var e=Math.floor(6*Math.random())+1;o+=e,t.push(e)}for(console.log("Sum = "+o),o>=10?(this.gameResult=s.tai,console.log("Tai")):(this.gameResult=s.xiu,console.log("Xiu")),console.log(t),i=1;i<=6;i++)for(var n=0;n<3;n++)t[n]==i&&(this.nutSprite[n].spriteFrame=this.nutSpriteFrame[i-1])},o.prototype.TaiButton=function(){this.isBet&&this.totalCoin>=this.guessCoin&&(this.PlaySFX("coin"),this.taiChose=s.tai,this.totalCoin-=this.guessCoin,this.totalCoinText.string=this.totalCoin.toString()+"$",this.totalBetCoin+=this.guessCoin,this.totalBetCoinText.string=this.totalBetCoin.toString()+"$",this.taiCoin+=this.guessCoin,this.taiCoinText.string=this.taiCoin.toString()+"$")},o.prototype.XiuButton=function(){this.isBet&&this.totalCoin>=this.guessCoin&&(this.PlaySFX("coin"),this.xiuChose=s.xiu,this.totalCoin-=this.guessCoin,this.totalCoinText.string=this.totalCoin.toString()+"$",this.totalBetCoin+=this.guessCoin,this.totalBetCoinText.string=this.totalBetCoin.toString()+"$",this.xiuCoin+=this.guessCoin,this.xiuCoinText.string=this.xiuCoin.toString()+"$")},o.prototype.ResultAnimation=function(){this.gameResult==s.tai?this.taiLogoAnimator.play("tLoad"):this.gameResult==s.xiu&&this.xiuLogoAnimation.play("xLoad")},o.prototype.DetermineGame=function(){this.taiChose==this.gameResult?(this.totalCoin+=2*this.taiCoin,this.totalCoinText.string=this.totalCoin.toString()+"$",this.winCoin+=this.taiCoin,this.winCoinText.string=this.winCoin.toString()+"$"):this.xiuChose==this.gameResult?(this.totalCoin+=2*this.xiuCoin,this.totalCoinText.string=this.totalCoin.toString()+"$",this.winCoin+=this.xiuCoin,this.winCoinText.string=this.winCoin.toString()+"$"):(this.totalCoinText.string=this.totalCoin.toString()+"$",this.winCoin=0,this.winCoinText.string="Lose")},o.prototype.ResetToDefault=function(){this.winCoin=this.taiCoin=this.xiuCoin=this.totalBetCoin=0,this.winCoinText.string=this.taiCoinText.string=this.xiuCoinText.string=this.totalBetCoinText.string="0 $",this.gameResult=this.taiChose=this.xiuChose=s.none,this.plateAnimator.play("idle")},o.prototype.StartGame=function(){var t=this;this.plateAnimator.play("shake"),this.PlaySFX("shake"),setTimeout(function(){t.isBet=!0,t.isTimeCount=!0,t.isOpen=!0,t.RandomNumber(),t.AllButtonNormalColor()},2e3)},o.prototype.EndGame=function(){var t=this;this.plateAnimator.play("closeCover"),this.ResultAnimation(),this.PlaySFX("showWin"),setTimeout(function(){t.plateAnimator.play("idle"),t.isTimeCount=!0,t.isRandom=!0,t.timeCount=10,t.ResetToDefault(),t.taiLogoAnimator.play("t"),t.xiuLogoAnimation.play("x")},5e3)},o.prototype.IncreasGuessCoin=function(){this.PlaySFX("click"),this.guessCoin+=1e3,this.guessCoinText.string=this.guessCoin.toString()+"$"},o.prototype.DecreasGuessCoin=function(){this.guessCoin>1e3&&(this.PlaySFX("click"),this.guessCoin-=1e3,this.guessCoinText.string=this.guessCoin.toString()+"$")},o.prototype.OpenButton=function(){this.isOpen&&(this.PlaySFX("click"),this.isTimeCount=!1,this.isOpen=!1,this.isBet=!1,this.AllButtonDisableColor(),this.DetermineGame(),this.EndGame())},o.prototype.AllButtonDisableColor=function(){this.taiBetButton.normalColor=this.taiBetButton.hoverColor=this.disableColor,this.xiuBetButton.normalColor=this.xiuBetButton.hoverColor=this.disableColor,this.openButton.normalColor=this.openButton.hoverColor=this.disableColor},o.prototype.AllButtonNormalColor=function(){this.taiBetButton.normalColor=this.taiBetButton.hoverColor=this.normalColor,this.xiuBetButton.normalColor=this.xiuBetButton.hoverColor=this.normalColor,this.openButton.normalColor=this.openButton.hoverColor=this.normalColor},o.prototype.PlayMusic=function(t){var o=this.musicSound.find(function(o){return o.name==t});null==o?console.log("Music Sound Not Found"):(this.musicSource.clip=o.clip,this.musicSource.play())},o.prototype.StopMusic=function(t){var o=this.musicSound.find(function(o){return o.name==t});null==o?console.log("Music Sound Not Found"):(this.musicSource.clip=o.clip,this.musicSource.stop())},o.prototype.PlaySFX=function(t){var o=this.sfxSound.find(function(o){return o.name==t});null==o?console.log("SFX Sound Not Found"):(this.sfxSource.clip=o.clip,this.sfxSource.play())},o.prototype.MusicButton=function(){this.PlaySFX("click"),this.state1=!this.state1,this.state1?(this.musicSource.volume=.2,this.musicButtonSprite.spriteFrame=this.musicSpriteframe):this.state1||(this.musicSource.volume=0,this.musicButtonSprite.spriteFrame=this.muteMusicSpriteFrame)},o.prototype.SFXButton=function(){this.PlaySFX("click"),this.state2=!this.state2,this.state2?(this.sfxSource.volume=1,this.sfxButtonSprite.spriteFrame=this.sfxSpritetFrame):this.state2||(this.sfxSource.volume=0,this.sfxButtonSprite.spriteFrame=this.muteSfxSpriteFrame)},o.prototype.TimeCountSoundEfect=function(){var t=this;this.PlaySFX("time"),setTimeout(function(){t.timeState=!0},950)},o.prototype.PlayButton=function(){this.StopMusic("Bg"),this.isStartGame=!0,this.PlaySFX("click"),this.gameScreen.active=!0,this.menuSceen.active=!1,this.setting.active=!1},o.prototype.QuitButton=function(){this.PlaySFX("click"),cc.game.end()},o.prototype.HomeButton=function(){this.taiXuiGame.active=!1,this.PlaySFX("click"),cc.director.loadScene("Loading")},o.prototype.showSetting=function(){this.PlaySFX("click"),this.setting.setPosition(0,0),this.setting.active=!0},o.prototype.hideSetting=function(){this.PlaySFX("click"),this.setting.setPosition(3e4,0)},r([p(cc.Sprite)],o.prototype,"nutSprite",void 0),r([p(cc.SpriteFrame)],o.prototype,"nutSpriteFrame",void 0),r([p(cc.Label)],o.prototype,"timeText",void 0),r([p(cc.Animation)],o.prototype,"plateAnimator",void 0),r([p(cc.Animation)],o.prototype,"taiLogoAnimator",void 0),r([p(cc.Animation)],o.prototype,"xiuLogoAnimation",void 0),r([p(cc.Label)],o.prototype,"totalCoinText",void 0),r([p(cc.Label)],o.prototype,"taiCoinText",void 0),r([p(cc.Label)],o.prototype,"xiuCoinText",void 0),r([p(cc.Label)],o.prototype,"totalBetCoinText",void 0),r([p(cc.Label)],o.prototype,"winCoinText",void 0),r([p(cc.Label)],o.prototype,"guessCoinText",void 0),r([p(cc.Button)],o.prototype,"taiBetButton",void 0),r([p(cc.Button)],o.prototype,"xiuBetButton",void 0),r([p(cc.Button)],o.prototype,"openButton",void 0),r([p(cc.Color)],o.prototype,"disableColor",void 0),r([p(cc.Color)],o.prototype,"normalColor",void 0),r([p(c.default)],o.prototype,"musicSound",void 0),r([p(cc.AudioSource)],o.prototype,"musicSource",void 0),r([p(c.default)],o.prototype,"sfxSound",void 0),r([p(cc.AudioSource)],o.prototype,"sfxSource",void 0),r([p(cc.Sprite)],o.prototype,"musicButtonSprite",void 0),r([p(cc.SpriteFrame)],o.prototype,"muteMusicSpriteFrame",void 0),r([p(cc.SpriteFrame)],o.prototype,"musicSpriteframe",void 0),r([p(cc.Sprite)],o.prototype,"sfxButtonSprite",void 0),r([p(cc.SpriteFrame)],o.prototype,"muteSfxSpriteFrame",void 0),r([p(cc.SpriteFrame)],o.prototype,"sfxSpritetFrame",void 0),r([p(cc.Node)],o.prototype,"gameScreen",void 0),r([p(cc.Node)],o.prototype,"menuSceen",void 0),r([p(cc.Node)],o.prototype,"taiXuiGame",void 0),r([p(cc.Node)],o.prototype,"setting",void 0),r([a],o)}(cc.Component);i.default=l,cc._RF.pop()},{"./Sounds":"Sounds"}],setting:[function(t,o,i){"use strict";cc._RF.push(o,"bcd333cgHBLnJ+Ez5NkvXUu","setting");var e,n=this&&this.__extends||(e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i])})(t,o)},function(t,o){function i(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(i.prototype=o.prototype,new i)}),r=this&&this.__decorate||function(t,o,i,e){var n,r=arguments.length,s=r<3?o:null===e?e=Object.getOwnPropertyDescriptor(o,i):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,o,i,e);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(s=(r<3?n(s):r>3?n(o,i,s):n(o,i))||s);return r>3&&s&&Object.defineProperty(o,i,s),s};Object.defineProperty(i,"__esModule",{value:!0});var s=cc._decorator,c=s.ccclass,u=s.property,a=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.musicSlider=null,o.soundSlider=null,o.musicSource=null,o.soundSource=null,o}return n(o,t),o.prototype.start=function(){this.musicSlider.progress=this.musicSource.volume,this.soundSlider.progress=this.soundSource.volume,this.musicSlider.node.on(cc.Slider.EventType.SLIDER,this.onMusicSliderChange,this),this.soundSlider.node.on(cc.Slider.EventType.SLIDER,this.onSoundSliderChange,this)},o.prototype.onMusicSliderChange=function(){this.musicSource.volume=this.musicSlider.progress},o.prototype.onSoundSliderChange=function(){this.soundSource.volume=this.soundSlider.progress},r([u(cc.Slider)],o.prototype,"musicSlider",void 0),r([u(cc.Slider)],o.prototype,"soundSlider",void 0),r([u(cc.AudioSource)],o.prototype,"musicSource",void 0),r([u(cc.AudioSource)],o.prototype,"soundSource",void 0),r([c("Setting")],o)}(cc.Component);i.default=a,cc._RF.pop()},{}]},{},["Helloworld","Loading","Sounds","TaiXiuGame","setting"]);