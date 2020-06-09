(function () {
	const loading = function(){
		//Atrapando la hora por objetos de la clase Date.
		const timer = new Date(),
		hour = timer.getHours(),
		minute = timer.getMinutes(),
		second = timer.getSeconds(),
		
		day = timer.getDay(),
		numDay = timer.getDate(),
		month = timer.getMonth(),
		year = timer.getYear();

		//Atrapando a los elementos por su ID
		const eDay = document.getElementById("day"),
		eNumDay = document.getElementById("numberDay"),
		eMonth = document.getElementById("month"),
		eYear = document.getElementById("year"),
		
		eHour = document.getElementById("hour"),
		eMinute = document.getElementById("minute"),
		eSecond = document.getElementById("second"),
		edefTime = document.getElementById("ampm");

		let week = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
		eDay.textContent = week[day];

		let months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Setiembre','Octubre','Noviembre','Diciembre'];
		eMonth.textContent = months[month];

		eNumDay.textContent = numDay;

		eYear.textContent = year + 1900;


		if (hour<10) {
			eHour.textContent = '0'+hour;
		} else if (hour == 11 || hour == 12) {
			eHour.textContent = hour;
		}
		else{
			eHour.textContent = (hour-12);
		}


		if (minute<10) {
			eMinute.textContent = '0'+minute;
		}else{
			eMinute.textContent = minute;
		}
		

		if (second<10) {
			eSecond.textContent = '0'+second;
		}else{
			eSecond.textContent = second;
		}

		if (hour <=12) {
			edefTime.textContent = 'am'
		} else{
			edefTime.textContent = 'pm'
		}
	}

	loading();
    var intervalo = setInterval(loading, 1000);
}());