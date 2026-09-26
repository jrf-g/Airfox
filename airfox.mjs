import { ulid } from 'ulid';
import { fetch, SaveFormat, OutputLayout, CrawlerType, WaitUntil } from "@markdownee/markdownee";
import fs from "node:fs";
import readline from "node:readline";
import process from "node:process";
const path_delimiter = process.platform === "win32" ? "\\" : "/";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let url = await new Promise(resolve => {
    rl.question("Enter URL: ", answer => {
        rl.close();
        resolve(answer);
    });
});
console.log("Fetching...")
console.time("request completion time");
const result = await fetch(url, {
  formats: [SaveFormat.Html, SaveFormat.MinifiedHtml, SaveFormat.Original],
  outputLayout: OutputLayout.Standard,
  crawlerType: CrawlerType.PlaywrightFirefox,
  waitUntil: WaitUntil.DomContentLoaded,
  userAgent: "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:15.0) Gecko/20100101 Firefox/15.0.1",
  waitForDynamicContentSecs: 15,
});
console.timeEnd("request completion time");
console.time("save time");
try {
    console.log("Saving...")
  fs.writeFileSync(process.cwd() + path_delimiter + "airfox_out" + path_delimiter + ulid() + ".html", result.html); // Assume airfox_out was created by the installation script
} catch (err) {
  console.error(err);
}
console.timeEnd("save time");