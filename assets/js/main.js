function myFunction()
{
	var parameters = location.search.substring(1).split("#");
	var temp = parameters[0].split("=");
	x = decode(temp[1]);
	window.location.replace(x);
	return false;
}
