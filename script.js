async function checkweather(city){
			const apiurl = "http://api.weatherstack.com/current?";
		const apikey = "145359ada627dfaaa8c71a3dd63698ae";
			const response = await fetch(apiurl + `access_key=${apikey}` + `&query=${city}`);
			var data = await response.json();
			const error = document.querySelector("#error");
			if(data.success === false){
				error.textContent= "Invalid City Name"
				return;
			}
			let cityinput = document.querySelector(".city h2");
			cityinput.textContent = data.location.name;
			document.querySelector(".temp h3").textContent= data.current.temperature + " 'C";
			document.querySelector(".humidity h3").textContent=  data.current.humidity + " %";
			document.querySelector(".wind h3").textContent= data.current.wind_speed + " Km/s";

		}
		const btn = document.querySelector("#btn");
        const input = document.querySelector("#cityname");
		btn.addEventListener("click", ()=>{
			const input = document.querySelector("#cityname")
		const value = input.value.trim();
		if(value){
			checkweather(value);
			error.textContent = "";
            input.value = "";
		}else{
			error.textContent = "Enter City Name"
		}
		})
        input.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {  
                btn.click();   
            }
});