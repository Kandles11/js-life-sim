function initialize() {
    time = {
        unit: 0,
        unibit: 0,
        unibyte: 0,
        uniday: 0
    }
    peep = {
        hunger: 97,
        energy: 80,
        actionQueue: [],
        queueProgress: []

    }
}

initialize()

var mainLoop = setInterval(function() {
    time.unit += 1
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
        time.unibyte = 0;
        time.uniday += 1;
    }
    return time
}

function renderElements() {
    document.getElementById("unitBar").setAttribute("value", time.unit);
    document.getElementById("unibitBar").setAttribute("value", time.unibit);
    document.getElementById("unibyteBar").setAttribute("value", time.unibyte);
    document.getElementById("unidayBar").setAttribute("value", time.uniday);
    document.getElementById("peepHunger").innerHTML = Math.round(peep.hunger * 100)/100
    document.getElementById("hungerBar").setAttribute("value", peep.hunger);
    document.getElementById("peepEnergy").innerHTML = Math.round(peep.energy * 100)/100
    document.getElementById("energyBar").setAttribute("value", peep.energy);
    document.getElementById("peepActions").innerHTML = peep.actionQueue
    document.getElementById("queueProgress").innerHTML = peep.queueProgress

}

function peepBrain() {
    deductNeeds();
    addToQueue();
    performAction();
}

function deductNeeds() {
    if (peep.actionQueue[0] == "sleep") {
        peep.hunger -= .0005
        return
    }
    peep.hunger -= .001
    peep.energy -= .001
}

function addToQueue() {
    if (peep.hunger < 40) {
        if (!peep.actionQueue.includes("eat")) {
            peep.actionQueue.push("eat")
            peep.queueProgress.push(10)
            return
        }
    }
    if (peep.hunger < 50) {
        if (!peep.actionQueue.includes("eat")) {
            if (Math.random() < 0.0005) {
                peep.actionQueue.push("eat")
                peep.queueProgress.push(10)
                return
            }
        }
    }
    if (peep.hunger < 60) {
        if (!peep.actionQueue.includes("eat")) {
            if (Math.random() < 0.0003) {
                peep.actionQueue.push("eat")
                peep.queueProgress.push(10)
                return
            }
        }
    }
    if (peep.hunger < 70) {
        if (!peep.actionQueue.includes("eat")) {
            if (Math.random() < 0.0001) {
                peep.actionQueue.push("eat")
                peep.queueProgress.push(10)
                return
            }
        }
    }
    if (peep.energy < 30) {
        if (!peep.actionQueue.includes("sleep")) {
                peep.actionQueue.push("sleep")
                peep.queueProgress.push(300)
                console.log('add sleep')
                return
        }
    }
}

function performAction() {
    action = peep.actionQueue[0]
    console.log(action)
    if (action == "eat") {
        if (peep.queueProgress[0] <= 0) {
            peep.actionQueue.shift();
            peep.queueProgress.shift();
            return;
        }
        peep.hunger += .02;
        peep.queueProgress[0]  -= .01;
    }    
    if (action == "sleep") {
        console.log('got to sleep')
        if (peep.queueProgress[0] <= 0) {
            peep.actionQueue.shift();
            peep.queueProgress.shift();
            return;
        }
        console.log('got to sleep')
        peep.energy += .0023333;
        peep.queueProgress[0]  -= .01;
    
}}