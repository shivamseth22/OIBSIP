let celcius = document.getElementById('celcius')
let fahrenhiet = document.getElementById('fahrenhiet');

celcius.oninput =()=>{
    let output =(parseFloat(celcius.value)*9)/5 +32;
    fahrenhiet.value = parseFloat(output.toFixed(2));
};
fahrenhiet.oninput =()=>{
    let output =((parseFloat(fahrenhiet.value)-32)*5)/9  ;
    celcius.value = parseFloat(output.toFixed(2));
}; 