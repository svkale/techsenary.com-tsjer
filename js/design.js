if(document.getElementsByClassName('background_img')[0])
{
	var bgimages=document.getElementsByClassName('background_img');
	console.log(bgimages);
	for(var i=0;i<bgimages.length;i++)
	{
		bgimages[i].parentElement.style.position="relative";
	}
}


var nav_elements=document.getElementsByTagName('main')[0].getElementsByTagName('nav')[0].getElementsByTagName('ul')[0].getElementsByTagName('li');
for(var i=0;i<nav_elements.length;i++)
{
	if(nav_elements[i].getAttribute("data-iframe-url"))
	{
		nav_elements[i].addEventListener("click",function()
		{
			window.location.href="https://"+this.getAttribute("data-iframe-url");
		});
	}
}

function put_hitcount(request_obj,params)
{
	params[0].innerHTML=request_gsheet(request_obj)[0].content.$t;
}
for(var i=0;i<document.querySelectorAll("[data-ssheet-url]").length;i++)
{
	request(document.querySelectorAll("[data-ssheet-url]")[i].getAttribute("data-ssheet-url"),"put_hitcount",document.querySelectorAll("[data-ssheet-url]")[i]);
}
for(var i=0;i<document.querySelectorAll("[data-doc-url]").length;i++)
{
	request(document.querySelectorAll("[data-doc-url]")[i].getAttribute("data-doc-url"),"request_gdoc_show",document.querySelectorAll("[data-doc-url]")[i]);
}
