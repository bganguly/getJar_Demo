var NS={};

NS.catgImgArray=[];
NS.catgImgArray["Education.jpg"]=0;
NS.catgImgArray["Entertainment.jpg"]=1;
NS.catgImgArray["Finance.jpg"]=2;
NS.catgImgArray["Food.jpg"]=3;
NS.catgImgArray["Games.jpg"]=4;
NS.catgImgArray["Lifestyle.jpg"]=5;
NS.catgImgArray["Productivity.jpg"]=6;
NS.catgImgArray["Social.jpg"]=7;

NS.catgNextImgArray=["Education.jpg","Entertainment.jpg","Finance.jpg","Food.jpg","Games.jpg","Lifestyle.jpg","Productivity.jpg","Social.jpg"];

//basically , if the nav arrows are clicked, get a reference to some baseline img src attr, then get the next/prev idx from the assciative array,
//then lookup the corresponding image src from the NextImgArray
//could have been improved by using a single json object ?

$(document).ready(function() {
   $('.galleryRhtNav ')
   		.click(function() {
   			var currentImgSrc=$('.marginOneSevenPct.floatLeft img')[1].src;
   			var nextIdx=NS.catgImgArray[currentImgSrc.substring(currentImgSrc.lastIndexOf('/')+1)]+1;
   			var nextImg,prefix;;
   			if (nextIdx < NS.catgNextImgArray.length) {
   	   			prefix=currentImgSrc.substr(0,currentImgSrc.lastIndexOf('/'));
	   			nextImg=NS.catgNextImgArray[nextIdx];
	   			$('.marginOneSevenPct > img')[0].src=currentImgSrc;
	   			$('.marginOneSevenPct > img')[1].src=prefix+'/'+nextImg;
   			}	
   		});
   $('.galleryLftNav ')
		.click(function() {
			var currentImgSrc=$('.marginOneSevenPct.floatLeft img')[0].src;
			var nextIdx=NS.catgImgArray[currentImgSrc.substring(currentImgSrc.lastIndexOf('/')+1)]-1;
   			var nextImg,prefix;
			if (nextIdx >= 0) {
	   			prefix=currentImgSrc.substr(0,currentImgSrc.lastIndexOf('/'));
	  			nextImg=NS.catgNextImgArray[nextIdx];
	  			$('.marginOneSevenPct > img')[0].src=prefix+'/'+nextImg;
	   			$('.marginOneSevenPct > img')[1].src=currentImgSrc;
			}	
		});
 });
