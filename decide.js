let bfOptions = [
    "Rice with eggs",
    "Rice and beans", 
    "Fried rice", 
    "Rice and yogurt", 
    "Rice pudding", 
    "Rice with vegetables", 
    "Rice and chicken", 
    "Rice and fruit", 
    "Rice and curry",
    "Rice with milk"
]
let lunOptions = [
    "Rice with chicken and eggplant",
    "Rice with fish and potato",
    "Fried rice with egg and eggplant",
    "Rice with chicken and potato",
    "Rice with fish and eggplant",
    "Egg fried rice with chicken and eggplant",
    "Rice with chicken and eggplant",
    "Rice with fish and potato",
    "Rice with egg and eggplant",
    "Rice with chicken and potato"
]
let dinOptions = [
    "Rice with lentils and grilled fish",
    "Lentil soup with steamed vegetables (carrot, potatoes)",
    "Grilled fish with lentils and sautéed spinach",
    "Lentil stew with fish and mixed vegetables (peas, carrots, beans)",
    "Fish curry with lentils and okra",
    "Lentil dal with fried fish and cauliflower",
    "Grilled fish with lentils and roasted pumpkin",
    "Lentil soup with fish and eggplant",
    "Spicy lentil salad with grilled fish and bell peppers",
    "Lentils with baked fish and green beans"
]

let bfDecision = document.getElementById("decBF");
let lnDecision = document.getElementById("decLN");
let dnDecision = document.getElementById("decDN"); 

function breakfast() {
    let i = 0;
    let random_1;

    const interval = setInterval(function() {
        random_1 = Math.floor(Math.random() * bfOptions.length);
        bfDecision.textContent = bfOptions[random_1];

        i++;

        if (i === 100) {
            clearInterval(interval);
        }
    }, 50);
}

function lunch() {
    let i = 0;
    const interval = setInterval(function() {
        let random_2 = Math.floor(Math.random() * lunOptions.length);
        lnDecision.textContent = lunOptions[random_2];

        i++;

        if (i === 100) {
            clearInterval(interval);
        }
    }, 50);
}

function dinner() {
    let i = 0;
    const interval = setInterval(function() {
        let random_3 = Math.floor(Math.random() * dinOptions.length);
        dnDecision.textContent = dinOptions[random_3];

        i++;

        if (i === 100) {
            clearInterval(interval);
        }
    }, 50);
}
