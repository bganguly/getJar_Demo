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

$(document).ready(function() {
   $('.galleryRhtNav ')
   		.click(function() {
   			var currentImgSrc=$('.marginOneSevenPct.floatLeft img')[1].src;
   			var nextIdx=NS.catgImgArray[currentImgSrc.substring(currentImgSrc.lastIndexOf('/')+1)]+1;
   			if (nextIdx < NS.catgNextImgArray.length) {
	   			var nextImg=NS.catgNextImgArray[nextIdx];
	   			var prefix=currentImgSrc.substr(0,currentImgSrc.lastIndexOf('/'));
	   			$('.marginOneSevenPct > img')[1].src=prefix+'/'+nextImg;
	   			$('.marginOneSevenPct > img')[0].src=currentImgSrc;

   			}	
   		});
   $('.galleryLftNav ')
		.click(function() {
				var currentImgSrc=$('.marginOneSevenPct.floatLeft img')[0].src;
				var nextIdx=NS.catgImgArray[currentImgSrc.substring(currentImgSrc.lastIndexOf('/')+1)]-1;
				if (nextIdx >= 0) {
	  			var nextImg=NS.catgNextImgArray[nextIdx];
	  			var prefix=currentImgSrc.substr(0,currentImgSrc.lastIndexOf('/'));
	  			$('.marginOneSevenPct > img')[0].src=prefix+'/'+nextImg;
	   			$('.marginOneSevenPct > img')[1].src=currentImgSrc;
			}	
		});
 });
