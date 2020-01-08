function processForm()
{
	var parameters = location.search.substring(1).split("&");
	var temp = parameters[0].split("=");
	x = unescape(temp[1]);
	return x;
}
    	if (processForm() == "google.com") {
		window.location = x;
	}
