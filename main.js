function initialize() {
    time = {
        unit: 0,
        unibit: 0,
        unibyte: 0,
        uniday: 0
    }
    peep = {
        hunger: 100,
        actionQueue: []
    }
}

initialize()

var mainLoop = setInterval(function() {
    time.unit += 1
    peep.hunger -= .001
    peepBrain()
    time = convertTime(time)
    renderElements(time)
}, 4)

function convertTime(time){
    if (time.unit==100) {
        time.unit = 0;
        time.unibit += 1;
    }
    if (time.unibit==100) {
        time.unibit = 0;
        time.unibyte += 1;
    }
    if (time.unibyte==10) {
        time.unibit = 0;
        time.uniday += 1;
    }
    return time
}

function renderElements() {
    document.getElementById("units").innerHTML = time.unit;
    document.getElementById("unibits").innerHTML = time.unibit;
    document.getElementById("unibytes").innerHTML = time.unibyte;
    document.getElementById("unidays").innerHTML = time.uniday;
    document.getElementById("peepHunger").innerHTML = Math.round(peep.hunger * 100)/100
    document.getElementById("peepActions").innerHTML = peep.actionQueue
}

function peepBrain() {
    addToQueue()
}

function addToQueue() {
    if (peep.hunger < 40) {
        if (!peep.actionQueue.includes("eat")) {
            peep.actionQueue.push("eat")
            return
        }
    }
    if (peep.hunger < 50) {
        if (!peep.actionQueue.includes("eat")) {
            if (Math.random() < 0.0005) {
                peep.actionQueue.push("eat")
                return
            }
        }
    }
    if (peep.hunger < 60) {
        if (!peep.actionQueue.includes("eat")) {
            if (Math.random() < 0.0003) {
                peep.actionQueue.push("eat")
                return
            }
        }
    }
    if (peep.hunger < 70) {
        if (!peep.actionQueue.includes("eat")) {
            if (Math.random() < 0.0001) {
                peep.actionQueue.push("eat")
                return
            }
        }
    }
}