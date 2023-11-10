// Garden Gnome Software - Skin
// Pano2VR 6.1.2/17873
// Filename: interfaz.ggsk
// Generated 2023-11-10T09:18:35

function pano2vrSkin(player,base) {
	var me=this;
	var skin=this;
	var flag=false;
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('configloaded', function() { me.callNodeChange(me.divSkin); });
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs=basePath + 'images/image_1.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : -16px;';
		hs+='height : 121px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.79999;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 640px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._image_1);
		el=me._button_2=document.createElement('div');
		els=me._button_2__img=document.createElement('img');
		els.className='ggskin ggskin_button_2';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGUAAABqCAYAAAClKp8aAAADTElEQVR4nO2c3VkTQRSGX3y8TzowHYQOjB3ECowVYAnpQKyAWIFYgXRgqMBYgVABXhwiCAHCzs9+s3zvJWF25tl3z9kzk5kcXF1dYbR41fcAzH0sRRBLEcRSBLEUQSxFEEsRxFIEsRRBLEUQSxHEUgSxFEEsRRBLEcRSBLEUQSxFkKFImQAzYNzvMPLQupRD4Az4BfwA/gArGpdz0PDGiRlwCox2fHZ+/flFxfFko9VIWRCRsUsIwBTYEJHUHC1KWQIne/zfiEhts4JjKUJr6WsFfOjQ7uN12yZoRcqYeOqnCdf4AnzKMprCtJC+JqQLATiikWhRj5RtyfvQC70LT1Vmc3YXCBeE1OIVnbKUBXBMXiFbzombv7nz9zWPR+QlIexuu6yopq8FUWGVEA'+
			'Jx49f8HxEznk6RI2JsRVGUsmK/kjeVbcm8qNDXs3jd9wBuMSbSVZeStysjbh6ATcV+H0VFSo6SN4UT4j0jgUL6OuTpF2wN+u7/H31HSomSt3n6jJQF8BMLuUdfUpbUqbCapI/0taJuhdUcNaWMiS+l3lbss0lqpa8J8UK3kD2oESmusJ5J6UiZMzwhcyLyi1FylXjBcCusS2IBc13i4qUi5ZjhCoGbxcx5iYvnljImSt6jzNdVZAR8o8Aqc8701feiYp98JaOcXJGyrbBeohCIyfCKTDszc0SKS94bsuzMTI2UGV5UvM2UeECTIiZVyiqx/RCZEguunUmRMgHepHQ+YGYpjVOlmN30lr7OiJmtuU/STD/1nXKc2H6oJN2XVClLYuO0CS6B90QW6UyuGf2Yhw/oHAKfc3QiwrtHPjvL0UGNvcQz4tTVUDgo3YHCvi9z'+
			'B0sRpO/NeF0453lrSxMam+S2JOWhMyX7MCeWhJpYo2slfW1XXzcd25/S0CnhVqQsST/WtqaROVUrUk7FrlOUVqS8KCxFEEsRxFIEsRRBLEUQSxHEUgSxFEEsRRBLEcRSBLEUQSxFEEsRxFIEqSGlyAnanvheo5MaUi6IH2tufTP4bxLPneyL8q+tvlj8ThHEUgSxFEEsRRBLEcRSBLEUQSxFEEsRxFIEsRRBLEUQSxHEUgSxFEEsRRBLEcRSBLEUQSxFEEsRxFIEsRRB/gKykIWz82qpGgAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 2";
		el.ggDx=-156;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 1px;';
		hs+='cursor : pointer;';
		hs+='height : 65px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 63px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._button_2);
		el=me._button_3=document.createElement('div');
		els=me._button_3__img=document.createElement('img');
		els.className='ggskin ggskin_button_3';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGUAAABqCAYAAAClKp8aAAADG0lEQVR4nO3c3W3aUByG8SdV72GDMkAlkDpA2aDpBGGDskEZIRvgDZq73tINMkJyValXidTLSu6FjYBgPgzm/F+b9ydVqEDwUZ/02D52cpPnOablXfQAbJujCHIUQY4iyFEEOYogRxHkKIIcRZCjCHIUQY4iyFEEOYogRxH0vuHPGwCThj+zDRbln0ZcIsr3hj+zLRZNfZCnL0GOIshRBDmKIEcR5CiCmj4kPuQP8DPxNpvwEfiUamOpo/ymnSeXMxJG8fQlyFEEOYogRxHkKIKio/QpjmyegLx8nJXPX63Uh8Tr+hTL3cO15z5QLP3fAmPgJfmoBET+T7lnM8i6Yfn6VYqMcnfm650VFWXc8Ps6JSrK05Hve7zkIFRFRnk+8J5nvKNPbnrg9UmKQS'+
			'iKjPIAfAVe3zz/Wj6/SD0gFZHnKVCE6bO5Q1+EjERIdJSlRfQAlEQvs6QyiR5AHdcQZQrMgSx4HEfrepQBxQInFCsErVi66XqUDOit/f0bLZjKuhxlCnyueH6OeJiuRhmwmraqzCkuD0jqapQHNqetKhkwuvxQ6utilBm7r9Os61GcH8mF6VqUEfV+aGkZZnCJwZxKMcqIYnX4lO/g7ISv6bFa7pGgFqXPan+woF6YGcdNW1WG5fYkwqhFuae4eQLqhak7bVWRCaMU5Zbt6/LHhOnT3BKKxA0bKlEG7P6HXYbZdV4x4/Rpq8rdnrEkoRIlY/95RQ/4wfaZ+Jhi6aRpoWEUosyoXg6psr5E0uS0VSXsFqfoi1xj6u+g5+XjiNVBQadE37aanfi188Nvaa/I6Sujo9/p54qKMgK+BG1bXuoo/8rH8BM0Zamj/E28vVZS'+
			'OCS2NxxFkKMIchRBjiLIUQRFLbO8AL+Cti0vKsojV/rzjMdIHWXA/pvkVI1Tbix1lOUvL7A9vKMX5CiCHEWQowhyFEGOIshRBDmKIEcR5CiCHEWQowhyFEGOIshRBDV9PaXrl3lHHP6lCWe7yfP80tuwmjx9CXIUQY4iyFEEOYogRxHkKIIcRZCjCHIUQY4iyFEEOYogRxHkKIL+AwA2VJf34WKwAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 3";
		el.ggDx=-20;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 1px;';
		hs+='cursor : pointer;';
		hs+='height : 65px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 63px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_3.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._button_3);
		el=me._button_4=document.createElement('div');
		els=me._button_4__img=document.createElement('img');
		els.className='ggskin ggskin_button_4';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGUAAABqCAYAAAClKp8aAAACx0lEQVR4nO3c4VETQRyG8QfH76QD7CBYgVgBWkFiB3YgdkAHpgPpQDpQO8AOpAL8cGFkEPDO3O4+G9/fTIZhCMkxz9zt8k8mBzc3N4TLs9YHEH9KFKFEEUoUoUQRShShRBFKFKFEEUoUoUQRShShRBFKFKF9i7LY3rp2sGevp3zbfj0BfjY8jp3s05myAZbb23nbQ9nNvkR5D6zufL8Cztocyu724fK1Bj498rN3DGdQV3qPcgxcAodP3Oclv9eaLvQcZQFc8XQQgGuGeFeFj2c2va4pC/5+htw6BC7oaKvca5QNwy5rrCVDmC70GOUcOP2H33tFJ4t+b2vKmsd3WmPpd2Q9RTkGvs70WK8Z1iSlXi5ft1vfuVxsH1OphzPldqc1ZWEf4wdDGN2MrI'+
			'cz5YL5gwAcIb2E2aNsGHZNpSwRLvrmKPeHjKXohpfWNeUN8Lnyc2q2ysYoY4aMJVwzvDjWfHhpizJ2yFiKYnhpWlOmDBlLUQwvTVHOKbP1nar5jswS5Yw6O62xTmn4Or9hTVmz+5CxlCY7stZR5hwyllJ9eNny8vUC6ZjjnurDy1ZRFgx/bMud1liHDJewajuyVpevS8rOtEr4TqUzpsWZsqG/IFBxq1w7yhrX1neqFcOgtKial68T4EutJyvsLQXfHVMrSqshYylFh5c1oiwYDv6o9BNVds2wrZ/95eTncz/gA46ZtkB+KHQcY32ccN+539ABtP+P/iGtD+ig8fNrBpJxR6IIJYpQogglilCiCCWKUKIIJYpQogglilCiCCWKUKIIJYpQogglilCiCCWKUKIIJYpQogglilCiCCWKUKIIJYpQogglilCiCCWKUKII'+
			'JYpQogglilCiCCWKUKIIJYpQogjV+MSJqaZ84sNeMn7ixH8vly+hRBFKFKFEEUoUoUQRShShRBFKFKFEEUoUoUQRShShRBH6BaOVfrJcl/e3AAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 4";
		el.ggDx=123;
		el.ggParameter={ rx:0,ry:0,a:90,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 2px;';
		hs+='cursor : pointer;';
		hs+='height : 65px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 63px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._button_4.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_4.onclick=function (e) {
			player.openNext("{"+player.getNextNode()+"}","");
		}
		me._button_4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._button_4);
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;}'));
	document.head.appendChild(style);
	me.skinTimerEvent();
};