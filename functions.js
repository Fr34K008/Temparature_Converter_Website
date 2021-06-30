
function convert()
{
    let temp = document.getElementById("input").value;
    let type = document.getElementById("type").value;
    if (type == "fahrenheit")
    {
        let celcius = (temp - 32) / 1.8;
        let result = celcius.toFixed(4);
        document.getElementById("result").innerText = result + " ℃";
    }
    else if (type == "celcius")
    {
        let fahrenheit = (temp * 1.8) + 32;
        let result = fahrenheit.toFixed(4);
        document.getElementById("result").innerText = result + " ℉";
    }
}