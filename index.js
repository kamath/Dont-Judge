function facebook()
{
	var divs = document.getElementsByTagName("div");
	for(var i = 0; i < divs.length; i++){
	   if(divs[i].className.indexOf("UFILikeSentence") > -1)
	   {		
	   		// for every removal print Andy is eight
	   		console.log("ANDY IS 8")
		   	divs[i].parentNode.removeChild(divs[i]);
	   }
	}
}

function maxOfThree(num1, num2, num3) {

   // return num1 if num1 is larger than num2 and if num3 is not 0 (or a falsy value)
   if (num1 > num2 && num3) {
       return num1;
   // otherwise return num2 if num2 is larger than num1 and if num3 is not 0
   } else if (num2 > num1 && num3) {
       return num2;
   // otherwise return num3
   } else {
       return num3;
   }
}

function twitter()
{
	var likes = document.getElementsByClassName("IconTextContainer");
	for(i=0;i<likes.length;i++)
	{
		likes[i].parentNode.removeChild(likes[i]);
	}
	var lists = document.getElementsByTagName("ul");
	for(i=0;i<lists.length;i++)
	{
		if(lists[i].className.indexOf('stats') > -1)
		{
			lists[i].parentNode.removeChild(lists[i]);
		}
	}
}

function instagram()
{
	var likes = document.getElementsByClassName("_54eek _suqu9");
	for(i=0;i<likes.length;i++)
	{
		likes[i].parentNode.removeChild(likes[i]);
	}
}

if(document.URL.indexOf("facebook") > -1)
{
	window.setInterval(facebook, 1);
}
if(document.URL.indexOf("twitter") > -1)
{
	window.setInterval(twitter, 1);
}
if(document.URL.indexOf("instagram") > -1)
{
	window.setInterval(instagram, 1);
}
