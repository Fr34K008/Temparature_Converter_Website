
function convert()
{
    let temp = document.getElementById("input").value;
    let type = document.getElementById("type").value;
    let convertTo = document.getElementById("convertTo").value;

    // celcius code


    if (type == "celcius" && convertTo == "fahrenheit")
    {
        let fahrenheit = (temp * 1.8) + 32;
        let result = fahrenheit.toFixed(4);
        document.getElementById("result").innerText = result + " F";
    }
    if (type == "celcius" && convertTo == "kelvin")
    {      
        let kelvin = (temp-32)+273.15+32;
        let result = kelvin.toFixed(4);
        document.getElementById("result").innerText = result + " K";
    }
    if (type == "celcius" && convertTo == "celcius")
    {
        document.getElementById("result").innerText = "Degree's are Same no need to convert";
    }
  

    // fahrenheit code

    if (type == "fahrenheit" && convertTo == "celcius")
    {
        let celcius = (temp - 32) / 1.8;
        let result = celcius.toFixed(4);
        document.getElementById("result").innerText = result + " C";
    }
    if (type == "fahrenheit" && convertTo == "kelvin")
    {
        let kelvin = (temp-32)*5/9 + 273.15;
        let result = kelvin.toFixed(4);
        document.getElementById("result").innerText = result + " K";
    }
    if (type == "fahrenheit" && convertTo == "fahrenheit")
    {
        document.getElementById("result").innerText = "Degree's are Same no need to convert";
    }
    

    // Kelvin code

    if (type == "kelvin" && convertTo == "celcius" ) 
    {
        let celcius = (temp - 273.15);
        let result = celcius.toFixed(4);
        document.getElementById("result").innerText = result + " ℃";
    }
    if (type == "kelvin" && convertTo == "fahrenheit" ) 
    {
      let fahrenheit = (temp - 273.15) * 9/5 + 32;
      let result = fahrenheit.toFixed(4);
      document.getElementById("result").innerText = result + " ℉";
    }
    if (type == "kelvin" && convertTo == "kelvin")
    {
        document.getElementById("result").innerText = "Degree's are Same no need to convert";
    }
  }
