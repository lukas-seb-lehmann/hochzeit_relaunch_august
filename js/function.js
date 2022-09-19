// JavaScript Document



function showvideo(){
	const videos = document.querySelectorAll('.videoiframe');
	
	
	for (const videoiframe of videos){
		videoiframe.classList.remove('disable-img');
	}
	


	
}
function removeplaceholder(){
	const videoplaceholder = document.querySelectorAll('.placeholderimg');
	for (const placeholderimg of videoplaceholder){
		placeholderimg.classList.add('disable-img');
	}
	
	
}











function removevideo(){
	const videos = document.querySelectorAll('.videoiframe');
	
	
	for (const videoiframe of videos){
		videoiframe.classList.add('disable-img');
	}
	


	
}
function addplaceholder(){
	const videoplaceholder = document.querySelectorAll('.placeholderimg');
	for (const placeholderimg of videoplaceholder){
		placeholderimg.classList.remove('disable-img');
	}
	
	
}

function span1rot() {
	var span1 = document.getElementById("span1");
	span1.classList.toggle("active1");
}

function span2dis() {
	var span2 = document.getElementById("span2");
	span2.classList.toggle("active2");
}

function span3rot() {
	var span3 = document.getElementById("span3");
	span3.classList.toggle("active3");
}

function menu() {
	var menu = document.getElementById("menu");
	menu.style.transitionDuration = '.5s';
	menu.classList.toggle("activemenu");
}

function closemenu(){
	var menu = document.getElementById("menu");
	menu.style.transitionDuration = '.5s';
	menu.classList.toggle("activemenu");
}




window.onload=checkcookie();


function starttracking(){
	 window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-SRC8XTZ052');

	
	


	
}





 function checkcookie() {
	 if (document.cookie.indexOf("nocookie") <= 0) {
    //new visit
	
	
  }else{
	  
	//returning
	var containerelement = document.getElementById("container");
	containerelement.classList.remove("active");
	starttracking();
	startpixel();
	showvideo();
	removeplaceholder();
  }
 }

function funzustimmen(){
	var now = new Date();
  var time = now.getTime();
  var expireTime = time + 3600*4392000;
  now.setTime(expireTime);
  document.cookie = 'name=nocookie;expires='+now.toUTCString()+';path=/';
	
	var containerelement = document.getElementById("container");
	containerelement.classList.remove("active");
	
	starttracking();
showvideo();
	  removeplaceholder();
	
}

function funanpassen(){
	var containerelement = document.getElementById("container");
	containerelement.classList.remove("active");
	
}

function deletecookie(){
	document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
	
	  var cookies = document.cookie.split("; ");
    for (var c = 0; c < cookies.length; c++) {
        var d = window.location.hostname.split(".");
        while (d.length > 0) {
            var cookieBase = encodeURIComponent(cookies[c].split(";")[0].split("=")[0]) + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=' + d.join('.') + ' ;path=';
            var p = location.pathname.split('/');
            document.cookie = cookieBase + '/';
            while (p.length > 0) {
                document.cookie = cookieBase + p.join('/');
                p.pop();
            };
            d.shift();
        }
    }
	removevideo();
	  addplaceholder();
}
 




  
