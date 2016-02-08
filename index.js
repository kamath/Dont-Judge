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

function reddit()
{
	var unvoted = document.getElementsByClassName("score unvoted");
	var down = document.getElementsByClassName("score dislikes");
	var up = document.getElementsByClassName("score likes");
	for(var i = 0; i < unvoted.length; i++)
	{
		unvoted[i].parentNode.removeChild(unvoted[i]);
		down[i].parentNode.removeChild(down[i]);
		up[i].parentNode.removeChild(up[i]);
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
if(document.URL.indexOf("reddit") > -1)
{
	window.setInterval(reddit, 1);
}