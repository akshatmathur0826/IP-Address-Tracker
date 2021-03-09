/*const enterip=document.getElementsByClassName('enter_ip').value;

fetch('https://geo.ipify.org/api/v1?apiKey=at_o312oJeW46510bwQoK6T17dPbXJv7&ipAddress=enterip')
.then(res=>res.json())
.then(data=>console.log(data))
*/
const current_ip=document.getElementById("current_ip");
const current_town=document.getElementById("current_town");
const current_zone=document.getElementById("current_zone");
const current_isp=document.getElementById("current_isp");
const enterip=document.getElementById("enter_ip")


 		const mymap = L.map('mapid').setView([0,0], 13);
 		const attribution ='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
      	const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
      	const tiles = L.tileLayer(tileUrl, { attribution });
      	tiles.addTo(mymap);
      	const myIcon = L.icon({
    	iconUrl: "images/icon-location.svg",
    	iconSize: [23, 50],
    	iconAnchor: [22, 94]
    });
      	const marker=L.marker([0,0],{icon:myIcon}).addTo(mymap);

      	


getip = (api)=>{//arrow function

	//var enterip=document.getElementById("enter_ip").value;
	//document.getElementById("demo").innerHTML = enterip;
	if(api==undefined)
	{
		var ip_url=`https://geo.ipify.org/api/v1?apiKey=at_o312oJeW46510bwQoK6T17dPbXJv7`
	}
	else
	{
		var ip_url=`https://geo.ipify.org/api/v1?apiKey=at_o312oJeW46510bwQoK6T17dPbXJv7&ipAddress=${api}`
	}

		

	fetch(ip_url)
	.then(res=>res.json())
	.then(data=>
	{
		
		current_ip.innerHTML=data.ip;
		current_town.innerHTML=`${data.location.city} ${data.location.region} ${data.location.country} ${data.location.postalCode}`;
		current_zone.innerHTML=`UTC${data.location.timezone}`;
		current_isp.innerHTML=data.isp;
		marker.setLatLng([data.location.lat,data.location.lng])
		mymap.setView([data.location.lat,data.location.lng])
		
	})


	.catch(error => 
	{
	        alert("Unable to get IP details")
	        current_ip.innerHTML='';
			current_town.innerHTML='';
			current_zone.innerHTML='';
			current_isp.innerHTML='';
			marker.setLatLng([0,0])
			mymap.setView([0,0])
	
	})
}
imgs.addEventListener('click', e => {
    e.preventDefault()
    if (enterip.value != '' && enterip.value != null) 
    {
        getip(enterip.value)
        return
    }
    alert("Please enter a valid IP address");
})
 