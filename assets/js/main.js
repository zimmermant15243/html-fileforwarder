function myFunction()
{
	var parameters = location.search.substring(1).split("#");
	var temp = parameters[0].split("=");
	x = unescape(temp[1]);
	x = "https://www.google.com";
	return x;
}
