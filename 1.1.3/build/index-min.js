/*!build time : 2014-09-16 4:03:21 PM*/
KISSY.add("kg/xslide/1.1.3/index",function(a,b,c,d){var e=a.all,f=".ks-xslide-",g=f+"layer",h=f+"item",i=f+"nav",j="ks-xslide-nav-item",k=0,l=.2,m=5,n=c.extend({transform:function(a,b){var c=["-webkit-","-moz-","-o-",""];for(var d in b)for(var e in c)a.style[c[e]+"transform"]=d+b[d]},initializer:function(){var b=this;b.userConfig=a.mix({autoRender:!0,autoSlide:!1,timeOut:5e3},b.userConfig,void 0,void 0,!0),b.userConfig.autoRender&&b.render()},render:function(){var a=this,b=a.userConfig,c=a.$renderTo=e(b.renderTo);if(b.renderTo&&c[0]){var d,f=a.$layer=e(g,c),l=a.$items=e(h,f),m=a.$nav=e(i,c),n=a.itemNum=l.length,o=b.width||c.width()||300,p=b.height||c.height()||50,q=a.itemWidth=b.itemWidth||o,r=b.itemHeight||p;if(a.curIndex=0,k=0,n){if(2>=n&&(b.crousel=!1),a.layWidth=a.itemNum*q,c.css({height:p+"px",width:o+"px",overflow:"hidden",position:"relative"}),f.css({position:"absolute",height:r+"px",width:a.layWidth}),a.transform(f[0],{translateX:"(0px) translateZ(2px)"}),l.css({display:"block",width:q+"px",height:r+"px",position:"absolute"}),e("li",m).length&&n==e("li",m).length)d=a.$navItems=e("li",m);else{for(var s="",t=1;t<=a.itemNum;t++)s+="<li class='"+j+"'>"+t+"</li>";m.html(""),d=a.$navItems=e(s).appendTo(m)}a.evtBind(),d.removeClass("current").item(0).addClass("current");for(var t=0;n>t;t++)a.put(t,t);a.userConfig.crousel&&a.put(n-1,-1),a.userConfig.autoSlide&&a.autoSlide()}}},pop:function(a){var b=a.length;return a[b-1]},getPosX:function(){var a=this;return Number(a.$layer[0].style.webkitTransform.match(/translateX\(-*\d*px\)/)[0].match(/-*\d*px/)[0].replace(/px/,""))},setPosX:function(a){var b=this;b.$layer[0].style.webkitTransition="",b.transform(b.$layer[0],{translateX:"("+a+"px) translateZ(2px)"})},getPrev:function(){var a=this,b=a.curIndex;return a.$items.item((b-1+a.itemNum)%a.itemNum)},getNext:function(){var a=this,b=a.curIndex;return a.$items.item((b+1)%a.itemNum)},getCurrent:function(){var a=this,b=a.curIndex;return a.$items.item(b)},getItem:function(a){return this.$items.item(0>a?a%self.itemNum+self.itemNum:a%self.itemNum)},evtBind:function(){var a=this;if(!a._isEvtBind){{var b,c=0,e=[c],f=a.$renderTo,g=a.$layer;a.$items,a.$nav,a.$navItems}f.on(d.PAN_START,function(){c=a.getPosX(),a.fire("beforeSlide",{curIndex:a.curIndex}),a.set("enable",!0),a.__autoSlideOn=!1}).on(d.PAN,function(d){0!=a.get("enable")&&(Math.abs(d.deltaX)>m||Math.abs(d.deltaX)>Math.abs(d.deltaY)?(d.preventDefault(),d.stopPropagation(),a.judgePos(),b=a.pop(e),e.push(c+d.deltaX),a.setPosX(c+d.deltaX),a.direction=b>c+d.deltaX?"left":"right",a.computePos(),a.fire("slide",{direction:a.direction})):a.set("enable",!1))}).on(d.PAN_END,function(b){if(Math.abs(b.velocityX)<l)a.animTo(a.judgePos());else{var c=b.velocityX>0?"right":"left",d="right"==c?k-1:k+1;a.direction=c,a.animTo(d)}setTimeout(function(){a.__autoSlideOn=!0},2e3)}),a.on("beforeAnim",function(){a.computePos()}),g[0].addEventListener("webkitTransitionEnd",function(){a.fire("afterSlide",{curIndex:a.curIndex})},!1),a._isEvtBind=!0}},animTo:function(a){var b=this,c=(b.$renderTo,b.$layer),d=b.$items,e=(b.$nav,b.itemWidth),f=b.itemNum;b.userConfig.crousel&&(k=a),0>a?a=0:a>b.itemNum-1&&(a=b.itemNum-1);var g=b.userConfig.crousel?e*k:e*a,h=.4,i="ease-out";b.transform(c[0],{translateX:"("+-g+"px) translateZ(2px)"}),c[0].style.webkitTransition="-webkit-transform "+h+"s "+i+" 0s",b.curIndex=b.userConfig.crousel?0>k%f?f+k%f:k%f:a,b.$navItems.removeClass("current").item(b.curIndex).addClass("current"),d.removeClass("current").item(b.curIndex).addClass("current"),b.fire("beforeAnim",{direction:b.direction})},judgePos:function(){var a=this,b=a.itemNum,c=a.itemWidth,d=a.getPosX();return a.direction=-d/c-Math.floor(-d/c)>=.5?"left":"right",k=Math.round(-d/c),a.curIndex=0>k%b?b+k%b:k%b,k},computePos:function(){{var a=this,b=a.curIndex;a.itemNum-1}a.userConfig.crousel&&("right"==a.direction?a.put(b-1,k-1):"left"==a.direction&&a.put(b+1,k+1))},put:function(a,b){var c=this,d=c.itemNum,e=c.itemWidth;0>a?a=d-1:a>d-1&&(a=0),c.transform(c.$items.item(a)[0],{translateX:"("+b*e+"px) translateZ(2px)"})},autoSlide:function(){var a=this,b=a.curIndex;a.__autoSlideOn=!0,a.direction="left",clearInterval(a.__autoSlideItv),a.__autoSlideItv=setInterval(function(){a.__autoSlideOn&&(b=a.userConfig.crousel?k:a.curIndex,b++,!a.userConfig.crousel&&b>=a.itemNum&&(b=0),a.animTo(b))},a.userConfig.timeOut)},destroy:function(){var a=this;clearInteval(a.__autoSlideItv),a.$renderTo.detach(d.PAN_START),a.$renderTo.detach(d.PAN),a.$renderTo.detach(d.PAN_END),a.detach("beforeAnim",function(){a.computePos()}),a.$layer[0].removeEventListener("webkitTransitionEnd"),a.$renderTo.html(""),delete a}});return n},{requires:["node","base","kg/xscroll/1.1.8/pan"]});