function very() {
    console.log("wow")
    let rand1 = Math.floor(Math.random() * 17)
    let rand2 = Math.floor(Math.random() * 17)
    let rand3 = Math.floor(Math.random() * 17)
    let rand4 = Math.floor(Math.random() * 17)
    let rand5 = Math.floor(Math.random() * 17)
    let rand6 = Math.floor(Math.random() * 17)
    let rand7 = Math.floor(Math.random() * 17)
    let rand8 = Math.floor(Math.random() * 17)
    let rand9 = Math.floor(Math.random() * 17)
    let rand10 = Math.floor(Math.random() * 17)
    let rand11 = Math.floor(Math.random() * 17)
    let rand12 = Math.floor(Math.random() * 17)
    let rand13 = Math.floor(Math.random() * 17)
    let rand14 = Math.floor(Math.random() * 17)
    let rand15 = Math.floor(Math.random() * 17)
    let rand16 = Math.floor(Math.random() * 17)
    let rand17 = Math.floor(Math.random() * 17)
    let rand18 = Math.floor(Math.random() * 17)
    let rand19 = Math.floor(Math.random() * 17)
    let rand20 = Math.floor(Math.random() * 17)
    document.getElementById("scramble").innerHTML = rand1 + " " + rand2 + " " + rand3 + " " + rand4 + " " + rand5 + " " + rand6 + " " + rand7 + " " + rand8 + " " + rand9 + " " + rand10 + " " + rand11 + " " + rand12 + " " + rand13 + " " + rand14 + " " + rand15 + " " + rand16 + " " + rand17 + " " + rand18 + " " + rand19 + " " + rand20
}
var sw = {
    // (A) PROPERTIES
    etime: null, // html time display
    erst: null, // html reset button
    ego: null, // html start/stop button
    timer: null, // timer object
    now: 0, // current elapsed time

    // (B) INITIALIZE
    init: () => {
        // (B1) GET HTML ELEMENTS
        sw.etime = document.getElementById("sw-time");
        sw.erst = document.getElementById("sw-rst");
        sw.ego = document.getElementById("sw-go");

        // (B2) ENABLE BUTTON CONTROLS
        sw.erst.onclick = sw.reset;
        sw.ego.onclick = sw.start;
        sw.erst.disabled = false;
        sw.ego.disabled = false;
    },

    // (C) START!
    start: () => {
        sw.timer = setInterval(sw.tick, 10);
        sw.ego.value = "Stop";
        sw.ego.onclick = sw.stop;
    },

    // (D) STOP
    stop: () => {
        clearInterval(sw.timer);
        sw.timer = null;
        sw.ego.value = "Start";
        sw.ego.onclick = sw.start;
    },

    // (E) TIMER ACTION
    tick: () => {
        console.log('hhhyffgnghfghgh')
        // (E1) CALCULATE mins, secs, SECONDS
        sw.now++;
        let mins = 0, secs = 0, mil = 0,
            remain = sw.now;
        mins = Math.floor(remain / 6000);
        remain -= mins * 6000;
        secs = Math.floor(remain / 100);
        remain -= secs * 100;
        mil = remain;

        // (E2) UPDATE THE DISPLAY TIMER
        if (mins < 10) { mins = "0" + mins; }
        if (secs < 10) { secs = "0" + secs; }
        if (mil < 10) { mil = "0" + mil; }
        sw.etime.innerHTML = mins + ":" + secs + ":" + mil;
    },

    // (F) RESET
    reset: () => {
        if (sw.timer != null) { sw.stop(); }
        sw.now = -1;
        sw.tick();
    }
};
window.addEventListener("load", sw.init);
