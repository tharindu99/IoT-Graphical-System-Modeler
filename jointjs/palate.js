function palate_devices(category,i) {
	var device_cat  = document.getElementById("device_cat"+category);
	var nw_elmnt = document.createElement('div');
		nw_elmnt.setAttribute("class", "col-lg-3 col-md-4 col-xs-6");
	var device_img = document.createElement('img');	
		device_img.setAttribute("id","device_img");
		device_img.setAttribute("src","./resources/"+device_catlog[i].image);
		device_img.setAttribute("title",device_catlog[i].device);
		nw_elmnt.appendChild(device_img);
		device_cat.appendChild(nw_elmnt);
}