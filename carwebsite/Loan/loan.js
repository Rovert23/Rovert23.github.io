// Price =  Car price - Down payment

// Percent of Price

// (Percent of Price + Price) / Months

// Number i need


function calc() {
    let carPrice = parseInt(document.getElementById("carPrice").value)
    let downPayment = parseInt(document.getElementById("downPayment").value)
    let interest = parseInt(document.getElementById("interest").value)
    let months = parseInt(document.getElementById("months").value)
    interest = interest / 100
    let price = carPrice - downPayment
    let interesting = price * interest
    let thing = (interesting + price) / months
    document.getElementById("PPM").innerText = "$" + thing.toFixed(3) + "/month"
    console.log(thing)
}