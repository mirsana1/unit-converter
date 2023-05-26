// Input Text
let input = document.getElementById("input");
let result = document.getElementById("result");

//Selected Values
let inputType = document.getElementById("inputType"); 
let resultType = document.getElementById("resultType");

let inputTypeValue, resultTypeValue;

//Now add Event Listener
input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change",myResult);

//Initial values
inputTypeValue = inputType.value;
resultTypeValue = resultType.value;

function myResult() {
    // result.value = input.value
    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;

//Compare the input & resultTypeValue and add formula

//METER
if (inputTypeValue === "meter" && resultTypeValue === "kilometer"){
    //Meter -> kilometer formula
    result.value = Number(input.value) * 0.001;
}else if (inputTypeValue === "meter" && resultTypeValue === "centimeter"){
    //Meter -> centimeter
    result.value = Number(input.value)  * 100;

}else if (inputTypeValue === "meter" && resultTypeValue === "foot"){
    //Meter -> foot
    result.value = Number(input.value) * 3.28084;
}else if (inputTypeValue === "meter" && resultTypeValue === "inch"){
   // Meter -> inch
    result.value = Number(input.value) * 39.3700787402;
}else if (inputTypeValue === "meter" && resultTypeValue === "meter"){
    result.value = input.value;
}


//Kilometer
if (inputTypeValue === "kilometer" && resultTypeValue === "kilometer"){
    //Kilomter -> kilomter formula
    result.value = input.value;
}else if (inputTypeValue === "kilometer" && resultTypeValue === "centimeter"){
    //Kilometer -> centimeter
    result.value =Number(input.value) *100000;
}else if (inputTypeValue === "kilometer" && resultTypeValue === "foot"){
    //Kilometer -> foot
    result.value = Number(input.value)* 3280.839895;
}else if (inputTypeValue === "kilometer" && resultTypeValue === "inch"){
    //kilomter -> inch
    result.value = Number(input.value) *39370.07874;
}else if (inputTypeValue === "kilomter" && resultTypeValue == "meter"){
    //kilometer -> meter
    result.value = Number(input.value) * 1000
}

//Centimter
if (inputTypeValue === "centimter" && resultTypeValue === "centimeter"){
    //centimter -> centimeter
    result.value = input.value;
}else if (inputTypeValue === "centimeter" && resultTypeValue === "kilometer"){
    //Centimter -> kilomter
    result.value = Number(input.value) *0.00001;
}else if (inputTypeValue === "centimter" && resultTypeValue === "foot"){
    //Centimeter -> foot
    result.value = Number(input.value) * 0.032808399;
}else if (inputTypeValue === "centimter" && resultTypeValue === "inch"){
    //centimeter -> inch
    result.value = Number(input.value) * 0.3937007874;
}else if (inputTypeValue === "centimeter" && resultTypeValue === "meter"){
    //centimter -> meter
    result.value = Number(input.value) * 0.01
}

//Foot
if (inputTypeValue === "foot" && resultTypeValue === "foot"){
    //Foot -> foot formula
    result.value = input.value;
}else if (inputTypeValue === "foot" && resultTypeValue === "kilometer"){
    //Foot -> kilometer
    result.value = Number(input.value) *0.0003048;
}else if (inputTypeValue === "foot" && resultTypeValue === "centimeter"){
    //foot -> centimter
    result.value = Number(input.value) * 30.48;
}else if (inputTypeValue === "foot" && resultTypeValue === "inch"){
    //foot -> inch
    result.value = Number(input.value) * 12;
}else if (inputTypeValue === "foot" && resultTypeValue === "meter"){
    //foot -> meter
    result.value = Number(input.value) * 0.3048
}

//Inch
if (inputTypeValue === "inch" && resultTypeValue === "inch"){
    //Inch -> inch
    result.value = input.value;
}else if (inputTypeValue === "inch" && resultTypeValue === "kilometer"){
    //inch -> kilomter
    result.value = Number(input.value) *0.0000254;
}else if (inputTypeValue === "inch" && resultTypeValue === "centimeter"){
    //inch -> centimeter
    result.value = Number(input.value) * 2.54;
}else if (inputTypeValue === "inch" && resultTypeValue === "foot"){
    //inch -> foot
    result.value = Number(input.value) * 0.0833333333;
}else if (inputTypeValue === "inch" && resultTypeValue === "meter"){
    //inch -> meter
    result.value = Number(input.value) * 0.0254;
}
};