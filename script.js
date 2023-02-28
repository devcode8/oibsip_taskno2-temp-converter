
const tempCalc = () =>{
    let temp = Number(document.querySelector('#temp').value);

    const temp_type= document.querySelector('#temp_type').selectedIndex;
    const temp_to= document.querySelector('#toTemp_type').selectedIndex;
    if(temp_type === 0){
        if(temp_to === 1){
            document.querySelector('#result').innerHTML=`${celToFah(temp)} °Fahrenheit`;
        }else if(temp_to ===2){
            document.querySelector('#result').innerHTML=`${celToKel(temp)} Kelvin`;
        }else{
            document.querySelector('#result').innerHTML=`${temp} °Celsius`;
        }
    }else if(temp_type === 1){
        if(temp_to === 0){
            document.querySelector('#result').innerHTML=`${FahToCel(temp)} °Celsius`;
        }else if(temp_to === 2){
            document.querySelector('#result').innerHTML=`${FahToKel(temp)} Kelvin`;
        }else{
            document.querySelector('#result').innerHTML=`${temp} °Fahrenheit`;
        }
    }else if(temp_type === 2){
        if(temp_to === 0){
            document.querySelector('#result').innerHTML=`${kelToCel(temp)} °Celsius`;
        }else if(temp_to === 1){
            document.querySelector('#result').innerHTML=`${kelToFah(temp)} °Fahrenheit`;
        }else{
            document.querySelector('#result').innerHTML=`${temp} Kelvin`;
        }
    }
}
const celToFah=(deg) =>{
    return Math.round((deg*9/5)+32);
}
const celToKel=(deg) =>{
    return Math.round(deg+ 273.15);
}
const FahToCel=(deg) =>{
    return Math.round(((deg-32)*5)/9);
}
const FahToKel=(deg) =>{
    return Math.round((((deg-32)*5)/9)+273.15);
}
const kelToCel=(deg) =>{
    return Math.round(deg-273.15);
}
const kelToFah=(deg) =>{
    return Math.round((((deg-273.15)* 9)/5)+32);    
}