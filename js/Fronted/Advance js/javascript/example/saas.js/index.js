let adj = "crazy,amazing,fire";
let shop_name = "engine,foods,garments";
let another_word = "bros,limited,hub";

function randomWord(str) {
    let parts = str.split(",");
    return parts[Math.floor(Math.random() * parts.length)];
}

let random1 = randomWord(adj);
let random2 = randomWord(shop_name);
let random3 = randomWord(another_word);

alert("The name of your shop is " + random1 + " " + random2 + " " + random3);
