var inputCity = document.querySelector('#city')
var btn = document.querySelector('#add');

var city = document.querySelector('#cityoutput')
var date = document.querySelector('#date')
var weatherIcon = document.querySelector('#weatherIcon')
var tempratuerValue = document.querySelector('#tempratuerValue')
var hige = document.querySelector('#hige')
var wind = document.querySelector('#wind')
var sunrise = document.querySelector('#sunrise')
var low = document.querySelector('#low')
var rain = document.querySelector('#rain')
var sunset = document.querySelector('#sunset')
var description = document.querySelector('#description')



// Use a loop to create variables for hour elements:
for (let i = 1; i <= 24; i++) {
    window['hour' + i] = document.querySelector('#hour' + i);
}

// Use a loop to create variables for weatherIcon elements:
for (let i = 1; i <= 24; i++) {
    window['weatherIcon' + i] = document.querySelector('#weatherIcon' + i);
}

// Use a loop to create variables for tempratuerHour elements:
for (let i = 1; i <= 24; i++) {
    window['tempratuerHour' + i] = document.querySelector('#tempratuerHour' + i);
}

// Use a loop to create variables for rain elements:
for (let i = 1; i <= 4; i++) {
    window['rain' + i] = document.querySelector('#rain' + i);
}

// Use a loop to create variables for wind elements:
for (let i = 1; i <= 4; i++) {
    window['wind' + i] = document.querySelector('#wind' + i);
}

// Use a loop to create variables for DayDate and day elements:
for (let i = 1; i <= 4; i++) {
    window['DayDate' + i] = document.querySelector('#DayDate' + i);
    window['day' + i] = document.querySelector('#day' + i);
}

// Use a loop to create variables for tempHaig, tempLow, and iconDay elements:
for (let i = 1; i <= 4; i++) {
    window['tempHaig' + i] = document.querySelector('#tempHaig' + i);
    window['tempLow' + i] = document.querySelector('#tempLow' + i);
    window['iconDay' + i] = document.querySelector('#iconDay' + i);
}


apik = "3045dd712ffe6e702e3245525ac7fa38"

function convertion(val) {
    return (val - 273).toFixed(2)
}

function timeConver(UNIX_timeStamp) {
    var convToday = new Date(UNIX_timeStamp * 1000);
    var days = ['sun', 'mon', 'tue', 'wed', 'thur', 'fri', 'sat']
    var day = days[convToday.getDay()];
    return day;
}

function convertFromStringToDate(UNIX_time) {
    var convToDayMonth = new Date(UNIX_time * 1000);
    var month = convToDayMonth.getMonth() + 1;
    var days = convToDayMonth.getDate();
    var dayMonth = days + "/" + month;
    return dayMonth;
}



btn.addEventListener('click', function () {

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputCity.value + '&appid=' + apik)
        .then(res => {
            return res.json()
        })
        .then(data => {
            console.log(data);
            var Lon = data['coord']['lon']
            var Lat = data['coord']['lat']


            fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + Lat + '&lon=' + Lon + '&exclude=minutely&appid=' + apik)
                .then(res => {
                    // console.log(res);
                    return res.json()
                })
                .then(data => {
                    console.log(data);
                    var cityNew = data['timezone']

                    var dateConvert = data['current']['dt']
                    var dateNew = moment(dateConvert).format("dddd DD MMM");

                    var weatherIconNew = data['current']['weather']['0']['icon']

                    var tempratuerConvert = data['current']['temp']
                    var tempratuerValueNew = convertion(tempratuerConvert) + ' C'

                    var higheConvert = data['daily']['0']['temp']['max']
                    var higeNew = convertion(higheConvert) + ' C'

                    var windNew = data['daily']['0']['wind_speed']  + ' Km/h'
                    var sunriseConvert = data['daily']['0']['sunrise']

                    let sunriseDate = new Date(sunriseConvert * 1000)
                    var sunriseHouer = sunriseDate.getHours()
                    var sunriseMin = '0' + sunriseDate.getMinutes()
                    var sunriseNew = sunriseHouer + ':' + sunriseMin.substr(-2)

                    var lowconvert = data['daily']['0']['temp']['min']
                    var lowNew = convertion(lowconvert) + ' C'
                    var rainNew = data['daily']['0']['pop'] + '%'
                    var descriptionNew = data['current']['weather']['0']['description']

                    var sunsetConvert = data['daily']['0']['sunset']
                    let sunsetDate = new Date(sunsetConvert * 1000)
                    var sunsetHouer = sunsetDate.getHours()
                    var sunsetMin = '0' + sunsetDate.getMinutes()
                    var sunsetNew = sunsetHouer + ':' + sunsetMin.substr(-2)



                    for (let i = 1; i <= 24; i++) {
                        // Construct variable names dynamically
                        const hourDataProperty = `data['hourly'][${i - 1}]['dt']`;
                        const hourNewVariable = `Hour${i}New`;
                        const hourExtractedVariable = `hour${i}New`;

                        // Get the value and create a Date object (using safer property access)
                        const hourData = data['hourly'][i - 1]?.dt;
                        const hourDate = new Date(hourData * 1000);

                        // Extract hours
                        const hour = hourDate.getHours();

                        // Declare variables using dynamic names (local or global as needed)
                        window[hourNewVariable] = hourDate;  // Optional: Declare Date object globally
                        window[hourExtractedVariable] = hour; // Optional: Declare extracted hour globally

                        // Access and use variables as needed (e.g., for further processing)
                        console.log(`Hour ${i}:`, hourDate, hour); // Example usage
                    }



                    for (let i = 24; i >= 1; i--) {
                        const weatherIconProperty = `data['hourly'][${i - 1}]['weather']['0']['icon']`;
                        const weatherIconVariable = `weatherIcon${i}New`;

                        // Evaluate and assign the value dynamically
                        window[weatherIconVariable] = eval(weatherIconProperty);
                    }



                    for (let i = 24; i >= 1; i--) {
                        const tempProperty = `data['hourly'][${i - 1}]['temp']`;
                        const tempConverVariable = `tempratuerHour${i}Conver`;
                        const tempNewVariable = `tempratuerHour${i}New`;

                        // Fetch temperature and apply conversion
                        window[tempConverVariable] = eval(tempProperty);
                        window[tempNewVariable] = convertion(window[tempConverVariable]) + ' C';
                    }



                    for (let i = 1; i <= 4; i++) {
                        // Temperatures (combined for conciseness)
                        const tempProperty = `data['daily'][${i - 1}]['temp']`;
                        const tempMaxVariable = `tempratuerLow${i}Convert`;
                        const tempMaxNewVariable = `tempLow${i}New`;
                        const tempMinVariable = `tempratuerHaig${i}Convert`;
                        const tempMinNewVariable = `tempHaig${i}New`;

                        window[tempMaxVariable] = eval(`${tempProperty}['max']`);
                        window[tempMaxNewVariable] = convertion(window[tempMaxVariable]) + ' C';
                        window[tempMinVariable] = eval(`${tempProperty}['min']`);
                        window[tempMinNewVariable] = convertion(window[tempMinVariable]) + ' C';

                        // Other variables
                        const iconVariable = `iconDay${i}New`;
                        window[iconVariable] = data['daily'][i - 1]['weather'][0]['icon'];

                        const rainVariable = `rain${i}New`;
                        window[rainVariable] = data['daily'][i - 1]['pop'] + '%';

                        const  windVariable = `wind${i}New`;
                        window[windVariable] = data['daily'][i - 1]['wind_speed']  + ' Km/h';

                        // Dates and times
                        const dateVariable = `date${i}`;
                        const dayDateVariable = `DayDate${i}New`;
                        const dayVariable = `DAY${i}`;
                        const dayNewVariable = `day${i}New`;

                        window[dateVariable] = data['daily'][i - 1]['dt'];
                        window[dayDateVariable] = convertFromStringToDate(window[dateVariable]);
                        window[dayVariable] = window[dateVariable];
                        window[dayNewVariable] = timeConver(window[dayVariable]);
                    }


                    city.innerHTML = `<p>${cityNew}</p>`
                    date.innerHTML = `<p>${dateNew}</p>`
                    weatherIcon.innerHTML = `<img src="icons/${weatherIconNew}.png" style="width:25vh;">`
                    tempratuerValue.innerHTML = `<p>${tempratuerValueNew}</p>`
                    hige.innerHTML = `<p>${higeNew}</p>`
                    wind.innerHTML = `<p>${windNew}</p>`
                    sunrise.innerHTML = `<p>${sunriseNew}</p>`
                    low.innerHTML = `<p>${lowNew}</p>`
                    rain.innerHTML = `<p>${rainNew}</p>`
                    description.innerHTML = `<p>${descriptionNew}</p>`
                    sunset.innerHTML = `<p>${sunsetNew}</p>`


                    // Loop to update hourly elements
                    for (let i = 1; i <= 24; i++) {
                        const element = document.getElementById(`hour` + i);  // Assuming IDs are hour1, hour2, etc.
                        if (element) {
                            element.innerHTML = `<p>${window['hour' + i + 'New']}</p>`;
                        } else {
                            console.warn(`Element with ID hour${i} not found.`);  // Handle missing elements
                        }
                    }


                    // Loop to update weather icon elements
                    for (let i = 24; i >= 1; i--) {  // Reverse order for consistency with previous examples
                        const element = document.getElementById(`weatherIcon` + i);  // Assuming IDs are weatherIcon1, weatherIcon2, etc.
                        if (element) {
                            element.innerHTML = `<img src="icons/${window['weatherIcon' + i + 'New']}.png">`;
                        } else {
                            console.warn(`Element with ID weatherIcon${i} not found.`);  // Handle missing elements
                        }
                    }


                    // Loop to update hourly temperature elements
                    for (let i = 1; i <= 24; i++) {
                        const element = document.getElementById(`tempratuerHour` + i);  // Assuming IDs are temperatuerHour1, temperatuerHour2, etc.
                        if (element) {
                            element.innerHTML = `<p>${window['tempratuerHour' + i + 'New']}</p>`;
                        } else {
                            console.warn(`Element with ID temperatuerHour${i} not found.`);  // Handle missing elements
                        }
                    }


                    // Loop for updating 4-day forecasts
                    for (let day = 1; day <= 4; day++) {
                        // Update temperature low, icon, high, rain, and wind elements
                        const tempLowElement = document.getElementById(`tempLow${day}`);
                        const iconDayElement = document.getElementById(`iconDay${day}`);
                        const tempHaigElement = document.getElementById(`tempHaig${day}`);
                        const rainElement = document.getElementById(`rain${day}`);
                        const windElement = document.getElementById(`wind${day}`);

                        if (tempLowElement) {
                            tempLowElement.innerHTML = `<p>${window['tempLow' + day + 'New']}</p>`;
                        }
                        if (iconDayElement) {
                            iconDayElement.innerHTML = `<img src="icons/${window['iconDay' + day + 'New']}.png" style="width:10vh;">`;
                        }
                        if (tempHaigElement) {
                            tempHaigElement.innerHTML = `<p>${window['tempHaig' + day + 'New']}</p>`;
                        }
                        if (rainElement) {
                            rainElement.innerHTML = `<p>${window['rain' + day + 'New']}</p>`;
                        }
                        if (windElement) {
                            windElement.innerHTML = `<p>${window['wind' + day + 'New']}</p>`;
                        }

                        // Update day and date elements
                        const dayElement = document.getElementById(`day${day}`);
                        const DayDateElement = document.getElementById(`DayDate${day}`);

                        if (dayElement) {
                            dayElement.innerHTML = `<p>${window['day' + day + 'New']}</p>`;
                        }
                        if (DayDateElement) {
                            DayDateElement.innerHTML = `<p>${window['DayDate' + day + 'New']}</p>`;
                        }
                    }


                })

        })
        .catch(err => alert('information for this city cannot be reache'))
    console.log();
})