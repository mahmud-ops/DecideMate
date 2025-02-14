let bfOptions = [
    "Food-1",
    "Food-2",
    "Food-3",
    "Food-4",
    "Food-5",
    "Food-6",
    "Food-7"
]
let lunOptions = [
    "Food-1",
    "Food-2",
    "Food-3",
    "Food-4",
    "Food-5",
    "Food-6",
    "Food-7"
]
let dinOptions = [
    "Food-1",
    "Food-2",
    "Food-3",
    "Food-4",
    "Food-5",
    "Food-6",
    "Food-7"
]



function breakfast(){
    let random_1 = Math.floor(Math.random() * bfOptions.length);
    console.log(bfOptions[random_1]);
}

function lunch(){
    let random_2 = Math.floor(Math.random() * lunOptions.length);
    console.log(lunOptions[random_2]);
}

function dinner(){
    let random_3 = Math.floor(Math.random() * dinOptions.length);
    console.log(dinOptions[random_3]);    
}