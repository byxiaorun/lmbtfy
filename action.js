function step1(){var a=document.getElementById("bds").offsetTop,b=document.getElementById("bds").offsetLeft;document.getElementById("mouse").style.top=parseFloat(document.getElementById("mouse").style.top)+a/250+"px",document.getElementById("mouse").style.left=parseFloat(document.getElementById("mouse").style.left)+b/250+"px",parseFloat(document.getElementById("mouse").style.top)>a+2&&(clearInterval(interval),setTimeout('document.getElementById("bds").focus();',300),interval=setInterval("step2()",60))}function step2(){document.getElementById("instructions").innerHTML="\u7136\u540e\uff0c\u8f93\u5165\u4f60\u60f3\u8981\u77e5\u9053\u7684\u5185\u5bb9",document.getElementById("bds").value+=sstr[document.getElementById("bds").value.length],(document.getElementById("bds").value.length==sstr.length||"\n"==sstr)&&(clearInterval(interval),setTimeout("interval=setInterval('step3()',10);",500))}function step3(){document.getElementById("instructions").innerHTML="\u70b9\u51fb\u201c\u767e\u5ea6\u4e00\u4e0b\u201d";var a=document.getElementById("bds").offsetTop,b=document.getElementById("bds").offsetLeft+489;document.getElementById("mouse").style.top=parseFloat(document.getElementById("mouse").style.top)+a/2500+"px",document.getElementById("mouse").style.left=parseFloat(document.getElementById("mouse").style.left)+b/250+"px",parseFloat(document.getElementById("mouse").style.left)>b+100&&(clearInterval(interval),document.getElementById("instructions").innerHTML="\u8fd9\u5bf9\u4f60\u6765\u8bf4\u6709\u90a3\u4e48\u96be\u5417\uff1f",setTimeout("document.getElementsByClassName('btn')[0].style.backgroundPosition='-136px -43px';",1700),setTimeout("location.href='http://www.baidu.com/s?wd='+str;",1800))}str=function(a){var b=location.search.replace(/^\?/,""),c={};if(!b)return void 0===a?c:void 0;b=b.split("&");for(var d,e=0,f=b.length;f>e;e++)d=b[e].indexOf("="),d>0?c[b[e].substring(0,d)]=b[e].substring(d+1):c[b[e]]="";return void 0===a?c:c[a]}("q");var sstr=decodeURIComponent(str),interval=setInterval("step1()",5);