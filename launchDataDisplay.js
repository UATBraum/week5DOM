//a class to set up the data
class InputData{
    constructor(
        //name components
        time_seconds,
        latitude,
        longitude,
        gpsAltitude,
        bmpAltitude,
        bmpPressure,
        bmpTemperature,
        digiTemperature,
        cssTemperature,
        cssECO2,
        cssTVOC,
        UV,
        accelX,
        accelY,
        accelZ,
        magneticX,
        magneticY,
        magneticZ,
        gyroX,
        gyroY,
        gyroZ
    ){
        //make compenets "real"
        this.time_seconds = time_seconds;
        this.latitude = latitude;
        this.longitude = longitude;
        this.gpsAltitude = gpsAltitude;
        this.bmpAltitude = bmpAltitude;
        this.bmpPressure = bmpPressure;
        this.bmpTemperature = bmpTemperature;
        this.digiTemperature = digiTemperature;
        this.cssTemperature = cssTemperature;
        this.cssECO2 = cssECO2;
        this.cssTVOC = cssTVOC;
        this.UV = UV;
        this.accelX = accelX;
        this.accelY = accelY;
        this.accelZ = accelZ;
        this.magneticX = magneticX;
        this.magneticY = magneticY;
        this.magneticZ = magneticZ;
        this.gyroX = gyroX;
        this.gyroY = gyroY;
        this.gyroZ = gyroZ;
    }
}

//a getData Function to load the data from the data file
function getData(){
    //variable to hold datafile
    var loadedData = loadData();
    //send var with data to whatever called it
    return loadedData;
}
//a dataRow function to setup the data
function dataRow(legend, value, units){
    //generates each legend value and units for each row of the table then passes it back
    msg = "<td>";
    msg += legend;
    msg += ": </td><td>";
    msg += value;
    msg += " " + units;
    msg += "</td>";
    return msg;
}


//updateDisplay to tie it all together
function updateDisplay(){
    //variable to measure time
    var timeRead = data[index].time_seconds;
    //update the table
    if(timeRead >= 10){
        //create data for every row of the table
        document.getElementById("data").rows["seconds"].innerHTML = 
        dataRow("Time Elapsed", data[index].time_seconds, "seconds");

        document.getElementById("data").rows["latitude"].innerHTML = 
        dataRow("Latitude", data[index].latitude, "");

        document.getElementById("data").rows["longitude"].innerHTML = 
        dataRow("Longitude", data[index].longitude, "");

        document.getElementById("data").rows["gpsAltitude"].innerHTML = 
        dataRow("GPS Altitude", data[index].gpsAltitude, "");

        document.getElementById("data").rows["bmpAltitude"].innerHTML = 
        dataRow("BMP Altitude", data[index].bmpAltitude, "");

        document.getElementById("data").rows["bmpPressure"].innerHTML = 
        dataRow("BMP Pressure", data[index].bmpPressure, "");

        document.getElementById("data").rows["bmpTemperature"].innerHTML = 
        dataRow("BMP Temperature", data[index].bmpTemperature, "");

        document.getElementById("data").rows["digiTemperature"].innerHTML = 
        dataRow("Digital Altitude", data[index].digiTemperature, "");

        document.getElementById("data").rows["cssTemperature"].innerHTML = 
        dataRow("CSS Temperature", data[index].cssTemperature, "");

        document.getElementById("data").rows["cssECO2"].innerHTML = 
        dataRow("CSS eCO2", data[index].cssECO2, "");

        document.getElementById("data").rows["cssTVOC"].innerHTML = 
        dataRow("CSS TVOC", data[index].cssTVOC, "");

        document.getElementById("data").rows["UV"].innerHTML = 
        dataRow("UV", data[index].UV, "");

        document.getElementById("data").rows["accelX"].innerHTML = 
        dataRow("Accel X", data[index].accelX, "");

        document.getElementById("data").rows["accelY"].innerHTML = 
        dataRow("Accel Y", data[index].accelY, "");

        document.getElementById("data").rows["accelZ"].innerHTML = 
        dataRow("Accel Y", data[index].accelZ, "");

        document.getElementById("data").rows["magneticX"].innerHTML = 
        dataRow("Magnetic X", data[index].magneticX, "");

        document.getElementById("data").rows["magneticY"].innerHTML = 
        dataRow("Magnetic Y", data[index].magneticY, "");

        document.getElementById("data").rows["magneticZ"].innerHTML = 
        dataRow("Magnetic Z", data[index].magneticZ, "");

        document.getElementById("data").rows["gyroX"].innerHTML = 
        dataRow("Gyro X", data[index].gyroX, "");

        document.getElementById("data").rows["gyroY"].innerHTML = 
        dataRow("Gyro Y", data[index].gyroY, "");

        document.getElementById("data").rows["gyroZ"].innerHTML = 
        dataRow("Gyro Z", data[index].gyroZ, "");
    }
    //loop to run through index
    if(index < 500){
        index++;
    } else{
        index = 0;
    }
}
