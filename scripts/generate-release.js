import fs from "fs";

const release = {
    published_at: new Date().toISOString(),
    name: "Dernière release",
};

fs.writeFileSync("release-latest.json", JSON.stringify(release, null, 2));
console.log("release-latest.json généré !");
