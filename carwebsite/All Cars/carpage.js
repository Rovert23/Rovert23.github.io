(async () => {
    let arrayOfCars = await (await fetch('../cars.json')).json()
    for (let x of arrayOfCars) {
        let element = document.getElementsByClassName("carList")[0]
        element.innerHTML += `
    <li>
        <a href="../cars/?car=${x.name}">
            <div class="car">
                <img src="../img/Car/${x.name}/${x.photos[0]}" class="carPic" height="300px">
                <div class="info1">Used</div>
                <div class="info2">${x.name}</div>
                <div class="info3">${x.miles} Miles</div>
                <div class="info4">$${x.price}</div>
            </div>
        </a>
    </li>
    `
    }
})()
