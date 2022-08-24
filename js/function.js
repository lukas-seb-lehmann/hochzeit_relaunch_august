// JavaScript Document






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

	
	document.getElementById("google-maps-div").innerHTML ='<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d84853.84459905875!2d7.754466!3d48.347405!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x90620af1a9d4fe36!2sLukas%20Lehmann%20-%20Hochzeitsfotograf%20Lahr%2FSchwarzwald!5e0!3m2!1sde!2sde!4v1645819832012!5m2!1sde!2sde" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>';
	

fbq('init', '589544735010993');
fbq('track', 'PageView');
	
	
}





 function checkcookie() {
	 if (document.cookie.indexOf("nocookie") <= 0) {
    //new visit
	
	
  }else{
	  
	//returning
	var containerelement = document.getElementById("container");
	containerelement.classList.remove("active");
	starttracking();
	fbq('consent', 'grant');
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
/*fbq('consent', 'grant');*/
	
}

function funanpassen(){
	var containerelement = document.getElementById("container");
	containerelement.classList.remove("active");
	
}

function deletecookie(){
	document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
}
 





  
