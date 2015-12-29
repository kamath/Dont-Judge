function facebook()
{
	var likes = document.querySelectorAll(".UFILikeSentence, .UFICommentLikeButton");
	for(var i = 0; i < likes.length; i++)
		likes[i].parentNode.removeChild(likes[i]);
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
