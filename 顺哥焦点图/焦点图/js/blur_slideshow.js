/*
 * 焦点图、幻灯片组件 V1.0
 * http://blurui.com/
 * Copyright 2014, Blur
 * licensed under the GPL Version 2 licenses. 
 */

function BCSlideshow(obj)
{
	var oDiv=document.getElementById(obj);	
	var oUl=oDiv.children[0];
	var aLi=oUl.children;
	var pic_num = aLi.length;
	var pic_wid = aLi[0].offsetWidth;
	var pic_hei = aLi[0].offsetHeight;		
	var width=pic_num*pic_wid;

	if(pic_num>1)
	{
		var oOl = document.createElement('ol');
		oOl.className = 'blur_hots';
		oOl.style.left = parseInt(pic_wid/2)-parseInt((pic_num*21)/2)+'px';
		oOl.style.top = pic_hei-30+'px';

		for(var i=0;i<pic_num;i++)
		{
			var li = document.createElement('li');
			if(i==0)
			{
				li.className = 'blur_active';
			}
			oOl.appendChild(li);
		}

		var oBtnPrev=document.createElement('span');
		oBtnPrev.className = 'blur_move_left';
		oBtnPrev.style.left = 0 + 'px';
		oBtnPrev.style.top = parseInt(pic_hei/2-25) + 'px';


		var oBtnNext=document.createElement('span');
		oBtnNext.className = 'blur_move_right';
		oBtnNext.style.left = (pic_wid-30) + 'px';
		oBtnNext.style.top = parseInt(pic_hei/2-25) + 'px';

		oDiv.appendChild(oOl);
		oDiv.appendChild(oBtnPrev);
		oDiv.appendChild(oBtnNext);

		var aBtn = oOl.children;

		oUl.innerHTML+=oUl.innerHTML;
		oUl.style.width=aLi.length*pic_wid+'px';
		
	
		var now=0;
		for(var j=0;j<aBtn.length;j++)
		{
			(function (index){
				aBtn[j].onclick=function ()
				{
					now = now+(index-now%pic_num);				
					tab();
				};
			})(j);
		}
	
		function tab()
		{
			for(var i=0;i<aBtn.length;i++)
			{
				aBtn[i].className='';
			}
			
			if(now>0)
			{
				aBtn[now%aBtn.length].className='blur_active';
			}
			else
			{
				aBtn[(now%aBtn.length+aBtn.length)%aBtn.length].className='blur_active';
			}
			startMove(oUl, -now*aLi[0].offsetWidth);
		}	
	
		oBtnPrev.onclick=function ()
		{
			now--;
			tab();
		};	
		oBtnNext.onclick=function ()
		{
			now++;		
			tab();
		};	
		function autoplay()
		{
			now++;		
			tab();
		}

		oDiv.timer = setInterval(autoplay,4000);
	
		oDiv.onmouseover=function()
		{
		    clearInterval(oDiv.timer);  
		};

		oDiv.onmouseout = function()
		{
			oDiv.timer = setInterval(autoplay,4000);
		};

	}

	var left=0;
	function startMove(obj, iTarget)
	{
		clearInterval(obj.timer);
		obj.timer=setInterval(function (){
			var speed=(iTarget-left)/8;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			
			if(left==iTarget)
			{
				clearInterval(obj.timer);
			}
			else
			{
				left+=speed;
								
				if(iTarget<0)
				{
					obj.style.left=left%width+'px';
				}
				else
				{
					obj.style.left=(left%width-width)%width+'px';
				}
			}
		}, 30);
	}
}


function Blur_reset(fn){
	if(document.addEventListener){  
		document.addEventListener('DOMContentLoaded',function(){
			fn && fn();	
		},false);	
	}else{
		document.onreadystatechange=function(){
			if(document.readyState=='complete'){
				fn && fn();	
			}	
		}	
	}	
}



var oLink=document.createElement('link');
oLink.href='css/blur_css.css';
oLink.rel='stylesheet';
oLink.type="text/css";
var oHead=document.getElementsByTagName('head')[0];
oHead.appendChild(oLink);
