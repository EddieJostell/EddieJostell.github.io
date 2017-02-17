var hamburger = document.getElementById("nav-icon");
var box = document.getElementsByClassName("box");
var datmenu = document.getElementsByClassName("menuscroll");
var menuText = document.getElementsByClassName("menuDropdown");

hamburger.addEventListener("click", hamFunction);

function hamFunction(){
	document.getElementById("nav-icon").classList.toggle("open");
}


function buttonpress(){
	box[0].classList.toggle("active");	

	if (box[0].classList=="box active"){
		menuFix();
	}
	else{
		menuFix2();
	}
}

var buttontrue=false;
function notTrue(){
	buttontrue=false;
}
function buttonScroll(){
	var button = document.getElementsByClassName("btn-1");
	buttontrue=true;
}

// Smooth scroll meny till target
window.smoothScroll = function(target) {
	var scrollContainer = target;
    do { //find scroll container
    	scrollContainer = scrollContainer.parentNode;
    	if (!scrollContainer) return;
    	scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop === 0);

    var targetY = 0;
    do { //find the top of target relatively to the container
    	if (target == scrollContainer) break;
    	targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
    	i++; if (i > 30) return;
    	c.scrollTop = a + (b - a) / 30 * i;
    	setTimeout(function(){ scroll(c, a, b, i); }, 20);

    };
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
    if (buttontrue === false){

    	box[0].classList.toggle("active");
    	document.getElementById("nav-icon").classList.toggle("open");}
    	if (box[0].classList=="box active"){
    		menuFix();
    	}
    	else{
    		menuFix2();
    	}
    };

// IM SORRY BUT I HAD TO
function menuFix(){
	{
		setTimeout(function(){menuText[0].style.opacity="0";},130);
		setTimeout(function(){menuText[1].style.opacity="0";},130);
		setTimeout(function(){menuText[2].style.opacity="0";},130);
		setTimeout(function(){menuText[3].style.opacity="0";},130);
		setTimeout(function(){menuText[4].style.opacity="0";},130);
		setTimeout(function(){menuText[0].style.opacity="1";},400);
		setTimeout(function(){menuText[1].style.opacity="1";},400);
		setTimeout(function(){menuText[2].style.opacity="1";},400);
		setTimeout(function(){menuText[3].style.opacity="1";},400);
		setTimeout(function(){menuText[4].style.opacity="1";},400);
	}
	
}
// IM SORRY BUT I HAD TO
function menuFix2(){
	{
		setTimeout(function(){menuText[0].style.opacity="0";},0);
		setTimeout(function(){menuText[1].style.opacity="0";},0);
		setTimeout(function(){menuText[2].style.opacity="0";},0);
		setTimeout(function(){menuText[3].style.opacity="0";},0);
		setTimeout(function(){menuText[4].style.opacity="0";},0);
		setTimeout(function(){menuText[0].style.opacity="1";},500);
		setTimeout(function(){menuText[1].style.opacity="1";},500);
		setTimeout(function(){menuText[2].style.opacity="1";},500);
		setTimeout(function(){menuText[3].style.opacity="1";},500);
		setTimeout(function(){menuText[4].style.opacity="1";},500);
	}
	
}











