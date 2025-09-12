
let students = ["Rinju", "Gita", "Sidhibinayak", "Gopal", "Ram", "Bina", "GPT"];
let houses = [];

for (const name of students) {
    if (name.length < 4) {
        houses.push("Sagarmatha");
    } else if (name.length < 6) {
        houses.push("Annapurna");
    } else {
        houses.push("Dhaulagiri");
    }
}

console.log(houses);
