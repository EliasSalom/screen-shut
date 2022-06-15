const puppeteer = require("puppeteer");
const path=require("path");
const fs=require("fs");

function getScreen(req,res){
    (async()=>{
        // console.log(getFulldate());
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(req.body);
        page.setViewport({width:1300, height:2000})
        await page.screenshot({path: `screenshut/ScreenShut-${Date.now()}.png`});
        await browser.close();
    })();
}


function getFullDate()
{
    let format = new Array(6);
    let fermula = "";
    const date = new Date();
    format.push(date.getFullYear());
    format.push(date.getMonth() + 1);
    format.push(date.getDate());
    fermula += format.join("-");
    format = [];
    format.push(date.getHours());
    format.push(date.getMinutes());
    format.push(date.getSeconds());
    fermula += format.join("|");
    console.log(fermula);
    return format
}