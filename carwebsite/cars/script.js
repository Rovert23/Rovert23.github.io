(async () => {
    const car = new URLSearchParams(window.location.search).get("car")
    let arrayOfCars = await (await fetch('../cars.json')).json()
    let selectedCar = arrayOfCars.filter((cars) => cars.name == car)[0]
    document.getElementById("name").innerText = selectedCar["name"]
    document.getElementById("price").innerText = `$${selectedCar["price"]}`
    document.getElementById("miles").innerText = `${selectedCar["miles"]} Miles`
    let blals = document.getElementById("images")
    for (let x of selectedCar["photos"]) {
        blals.innerHTML += `<li class="wow"><img src="../img/Car/${selectedCar["name"]}/${x}"></li>`
    }
})()
