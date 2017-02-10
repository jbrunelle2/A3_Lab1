// JavaScript Document// Java Script Document
(function() {
"use strict";
	
	var modelImage = document.querySelectorAll('.thumbInfo img');
	var siteHeader = document.querySelector('.modelName');
	var sitePrice = document.querySelector('.priceInfo');
	var siteDesc = document.querySelector('.modelDetails');
  	var httpRequest;
	var showModelInfo;
	
	function makeRequest(){
		httpRequest = new XMLHttpRequest();
			console.log("Fired");
		if(!httpRequest){
			console.log("whoops");
		return false;
		}
		httpRequest.onreadystatechange = showModelInfo;
		httpRequest.open('GET', 'includes/ajaxQuery.php' + '?model=' + this.id);
		httpRequest.send();
	}
	function showModelInfo(){
			if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200) {
				var modelData = JSON.parse(httpRequest.responseText);
				siteHeader.firstChild.nodeValue = modelData.modelName;
				
				[].forEach.call(document.querySelectorAll('.hidden'), function(item) {
				item.classList.remove('hidden');
					});
					
				siteDesc.firstChild.nodeValue = modelData.modelDetails;
				siteHeader.firstChild.nodeValue = modelData.modelName;
				sitePrice.firstChild.nodeValue = modelData.pricing;	
				}
			}
	
	[].forEach.call(modelImage, function(img) {img.addEventListener('click', makeRequest, false);
	});
	
	
	//For Fun
	
		var mc1 = document.querySelector('#F55');
			mc1.style.opacity = 0.1;
			mc1.style.transition = "opacity 1s";
		var mc2 = document.querySelector('#F56');
			mc2.style.opacity = 0.1;
			mc2.style.transition = "opacity 1s";
		var mc3 = document.querySelector('#R58');
			mc3.style.opacity = 0.1;
			mc3.style.transition = "opacity 1s";
		
	function highlight(){
		mc1.style.opacity = 1;
	}
	function fade(){
		mc1.style.opacity = 0.1;
		}
		
	function highlight2(){
		mc2.style.opacity = 1;
	}
	function fade2(){
		mc2.style.opacity = 0.1;
		}
		
	function highlight3(){
	mc3.style.opacity = 1;
	}
	function fade3(){
		mc3.style.opacity = 0.1;
		}
	
	mc1.addEventListener("mouseover", highlight, false);
	mc1.addEventListener("mouseout", fade, false);
	mc2.addEventListener("mouseover", highlight2, false);
	mc2.addEventListener("mouseout", fade2, false);
	mc3.addEventListener("mouseover", highlight3, false);
	mc3.addEventListener("mouseout", fade3, false);
})();