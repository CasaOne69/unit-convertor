/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const conBut = document.getElementById("conbut")
const userI = document.getElementById("useri")
const return1 = document.getElementById("leng")
const return2 = document.getElementById("vols")
const return3 = document.getElementById("massr")

conBut.addEventListener("click", function() {
    if (userI.value < 1)
    {

        
  return alert("Please Enter Valid Number")
    }
    else {
        lengReturn ()
        volReturn ()
        massReturn ()
        userI.value = "" 
    }
})

function lengReturn () {
    if (userI.value < 2) {
        let lengthReturn = `${(userI.value)} meter = ${Number(userI.value * 3.281).toFixed(3) } feet | 
        ${userI.value} foot = ${Number(userI.value / 3.281).toFixed(3) } meters
        `
        return1.textContent = lengthReturn  
    } else {
        let lengthReturn = `${(userI.value)} meters = ${Number(userI.value * 3.281).toFixed(3) } feet | 
    ${userI.value} feet = ${Number(userI.value / 3.281).toFixed(3) } meters
    `
    return1.textContent = lengthReturn
    }
    

}

function volReturn () {
    if (userI.value < 2) {
        let volReturn = `${(userI.value)} liter = ${Number(userI.value * 0.264).toFixed(3) } gallons | 
        ${userI.value} gallon = ${Number(userI.value / 0.264).toFixed(3) } liters
        `
        return2.textContent = volReturn  
    } else {
        let volReturn = `${(userI.value)} liters = ${Number(userI.value * 0.264).toFixed(3) } gallons | 
    ${userI.value} gallons = ${Number(userI.value / 0.264).toFixed(3) } liters
    `
    return2.textContent = volReturn
    }
    

}

function massReturn () {
    if (userI.value < 2) {
        let masReturn = `${(userI.value)} kilo = ${Number(userI.value * 2.204).toFixed(3) } pounds | 
        ${userI.value} pound = ${Number(userI.value / 2.204).toFixed(3) } kilos
        `
        return3.textContent = masReturn  
    } else {
        let masReturn = `${(userI.value)} kilos = ${Number(userI.value * 2.204).toFixed(3) } pounds | 
    ${userI.value} pounds = ${Number(userI.value / 2.204).toFixed(3) } kilos
    `
    return3.textContent = masReturn
    }
    

}