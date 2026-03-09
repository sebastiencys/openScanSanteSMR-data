import fs from "fs";
import path from "path";

const ROOT = "data/restitutions/etablissements";

function walk() {
    const index = {};

    const establishments = fs.readdirSync(ROOT);

    for (const finess of establishments) {
        const dir = path.join(ROOT, finess);
        const files = fs.readdirSync(dir);

        const jsonFiles = files
            .filter(f => f.endsWith(".json") && f !== "latest.json")
            .sort();

        index[finess] = jsonFiles.map(f => `${ROOT}/${finess}/${f}`);
    }

    return index;
}

const index = walk();
fs.writeFileSync("data-index.json", JSON.stringify(index, null, 2));

console.log("Index généré !");
