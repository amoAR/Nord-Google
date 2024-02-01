// -- redirect true query
var input = document.URL;

// - exceptions
let exceptions = 0;
if (input === "https://www.google.com/"
    || input === "https://images.google.com/"
    || input.match(/https:\/\/www.google.com\/sorry\/.*/) !== null
    || input.match(/https:\/\/www.google.com\/finance\/.*/) !== null
    || input.match(/https:\/\/www.google.com\/maps\/.*/) !== null){
        exceptions = 1;
        document.getElementsByTagName("body")[0].classList.add("trueQuery");
    }

if(exceptions === 0 || !document.getElementsByTagName("body")[0].classList.includes("trueQuery")) {
    // split url parts
    input = input.split("/", 4)[3];
    input = input.split("?", 2)[1];
    
    // get query
    var queryOption = input.split("&"); //client=safari | rls=x64 | q=lol...

    // split query options
    const queryOptionQ = queryOption.findIndex(x => x.match(/q=(.*)/) !== null);
    const queryOptionType = queryOption.findIndex(x => x.match(/tbm=(.*)/) !== null);
    const queryOptionTabs = queryOption.findIndex(x => x.match(/tbs=(.*)/) !== null);
    const queryOptionScrape = queryOption.findIndex(x => x.match(/si=(.*)/) !== null);
    const queryOptionStart = queryOption.findIndex(x => x.match(/start=([0-9]{2,5}$)/) !== null);
    
    // options concatenation
    const specialQuery = [queryOptionTabs, queryOptionStart, queryOptionScrape];
    specialQuery.forEach((x) => {
        if(queryOption[x] !== null && queryOption[x] !== ""){
            if(queryOption[x] === undefined){
                queryOption[x] = "";
            } else {
                queryOption[x] = "&".concat(queryOption[x]);
            }
        }
    });
    
    var resultQuery = "gl=US&";
    
    // check is change needed?
    if(queryOptionQ !== -1
        && queryOption[queryOptionQ] !== null
        && queryOption[queryOptionQ+1] !== undefined
        && !queryOption[queryOptionQ+1].includes("tbs=")
        && !queryOption[queryOptionQ+1].includes("start=")
        && !queryOption[queryOptionQ+1].includes("si=")){
            // - All results
            if(queryOptionType === -1){
                resultQuery += queryOption[queryOptionQ];
            }
            
            // - Not all results
            if(queryOption[queryOptionType+1] !== undefined && queryOptionType !== -1) {
                resultQuery += queryOption[queryOptionType] + "&" + queryOption[queryOptionQ];
            }

            // - Scrape result
            if(queryOptionScrape !== -1) {
                resultQuery += queryOption[queryOptionQ] + queryOption[queryOptionScrape];
            }
            
            // - Start from
            if(queryOptionStart !== -1){
                resultQuery += queryOption[queryOptionStart];
            }
            location.replace(("https://www.google.com/search?" + resultQuery + queryOption[queryOptionTabs] + queryOption[queryOptionStart]).trim());
    } 
    // show results (TrueQuery)
    else {
        document.getElementsByTagName("body")[0].classList.add("trueQuery");
    }
// show results (Exception)
} else {
    document.getElementsByTagName("body")[0].classList.add("trueQuery");
}

// -- trustedScript assignment
window.trustedTypes.createPolicy('default', {createHTML: (string, sink) => string})

// -- not much found icon height
if(document.getElementsByClassName("E8dXEb")[0]){
    var icon = document.getElementsByClassName("YIxP4d")[0];
    var table = document.getElementsByClassName("E8dXEb");
    var tableHeight = getComputedStyle(table[0]).getPropertyValue("height");
    var resultFloat = parseFloat(icon.style.height) + parseFloat(tableHeight) * table.length + 69;
    icon.style.height = resultFloat.toString().concat("px");
}

// -- fix search box finance height
if(document.querySelectorAll(".PxxJne.lSOaoc")[0]){
    document.querySelectorAll(".PxxJne.lSOaoc")[0].addEventListener("click", function (e){
        var section = document.getElementsByClassName("ml2Uge")[0];
        var sectionHeight = getComputedStyle(section).getPropertyValue("height");
        if(parseFloat(sectionHeight) < 300){
            section.style.height = "320px";   
        } else {
            section.style.height = "161px"; 
        }
    })
}

// -- fix songs
if(document.querySelectorAll(".Wkr6U.z4P7Tc")[0]){
    var element = document.querySelectorAll(".Wkr6U.z4P7Tc")[0].textContent;
    if(element === "Songs"){
        document.querySelectorAll(".Wkr6U.z4P7Tc")[0].textContent = "موسیقی‌ها";
    }
}

// -- fix twitter
if(document.querySelectorAll(".IFnjPb.RES9jf.ljj2Jc")[0]){
    document.querySelectorAll(".IFnjPb.RES9jf.ljj2Jc")[0].textContent = "پرطرفدار در توییتر";
}

// -- fix list lables
if(document.getElementsByClassName("rllt__tile-label")[0]){
    var items = document.getElementsByClassName("rllt__tile-label");
    items[0].textContent = "(الف";
    items[1].textContent = "(ب";
    items[2].textContent = "(پ";
}

// -- fix days name
if(document.getElementsByClassName("ZkkK1e")[0]){
    var element = document.querySelectorAll(".ZkkK1e .vtX8Wd");
    for(let i = 0; i < element.length; i++){
        if(element[i].textContent === "ساعت کاری"){
            document.getElementsByClassName("ZkkK1e")[i].addEventListener("click", function (e){
                var menu = document.getElementsByClassName("czHJJ")[i];
                var items = menu.querySelectorAll(".czHJJ .w3RMhb");
                for(let i = 0; i < items.length; i++){
                    if(items[i].textContent === "ﺷﻨﺑﮫ"){
                        items[i].textContent = "شنبه\xa0";
                        continue;
                    }
                    if(items[i].textContent === "ﺪﻮﺷﻨﺑﮫ"){
                        items[i].textContent = "دوشنبه\xa0";
                        continue;
                    }
                    if(items[i].textContent === "ﭽﮭﺎﺮﺷﻨﺑﮫ"){
                        items[i].textContent = "چهارشنبه\xa0";
                    }
                }
            })
        }
    }
}

if(document.getElementsByClassName("kHtcsd")[0]){
    var element = document.querySelectorAll(".sjVJQd");
    for(let i = 0; i < element.length; i++){
        if(element[i].textContent === "ساعت کاری"){
            document.querySelectorAll(".kHtcsd")[i].addEventListener("click", function (e){
                var menu = document.getElementsByClassName("czHJJ")[i];
                var items = menu.querySelectorAll(".w3RMhb");
                for(let i = 0; i < items.length; i++){
                    if(items[i].textContent === "ﺷﻨﺑﮫ"){
                        items[i].textContent = "شنبه\xa0";
                        continue;
                    }
                    if(items[i].textContent === "ﺪﻮﺷﻨﺑﮫ"){
                        items[i].textContent = "دوشنبه\xa0";
                        continue;
                    }
                    if(items[i].textContent === "ﭽﮭﺎﺮﺷﻨﺑﮫ"){
                        items[i].textContent = "چهارشنبه\xa0";
                    }
                }
            })
        }
    }
}

// -- link to gmail
if(document.getElementsByClassName("gb_e")[0]){
    var element = document.getElementsByClassName("gb_e")[0];
    if(element.textContent === "Gmail"){
        element.addEventListener("click", function (e) {
            window.location.href = "https://mail.google.com/mail/&ogbl";
        })
    }
}

// -- search box input padding [HomePage - ResultPage]
if(document.querySelectorAll(".gLFyf")[0]){
    if(document.querySelectorAll(".gLFyf")[0].value !== ""){
        document.getElementsByClassName("A8SBwf")[0].style.setProperty("padding-right", "27px", "important");
    }else{
        document.getElementsByClassName("UUbT9")[0].style.setProperty("width", "586px", "important");
    }
}


// -- search box input tooltip
if(document.getElementsByTagName("input")[0]){
    document.getElementsByTagName("input")[0].removeAttribute("title");
}