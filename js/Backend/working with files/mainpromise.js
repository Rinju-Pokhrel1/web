import fs from "fs/promises";

let a = await fs.readFile("rinju.txt");
await fs.appendFile("rinju.txt", "\n\n\n\nthis is amazing promise");

console.log(a.toString(), " Data appended successfully!");
