let sportUrl = `http://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=688d62b669cf434d95383c02c4fbb261`;

let entertainmentUrl = `http://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=688d62b669cf434d95383c02c4fbb261`;

let businessUrl = `http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=688d62b669cf434d95383c02c4fbb261`;

let scienceUrl = `http://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=688d62b669cf434d95383c02c4fbb261`;

let healthUrl = `http://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=688d62b669cf434d95383c02c4fbb261`;

let techUrl = `http://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=688d62b669cf434d95383c02c4fbb261`;

/*===========================SPORT SECTION start here=========================== */
let sportNews = async () => {
    let sportData = await window.fetch(sportUrl);
    let sportResponseData = await sportData.json();
    let sportInfo = sportResponseData.articles;
    let sportOutput = [];
    for (let sport of sportInfo) {
        sportOutput += `
        <div id="sectionName">
           <div>${sport.title}</div>
            <img src="${sport.urlToImage}" alt="">
        </div>`;
        document.getElementById("sportApi").innerHTML = sportOutput;
    }
};
sportNews();

/*===========================SPORT SECTION Ends here=========================== */

/*===========================ENTERTAINMENT SECTION start here=========================== */
let EntertainmentNews = async () => {
    let entertainData = await window.fetch(entertainmentUrl);
    let entertainResponseData = await entertainData.json();
    let entertainInfo = entertainResponseData.articles;
    let entertainOutput = [];
    for (let entertain of entertainInfo) {
        entertainOutput += `
        <div id="sectionName">
           <div>${entertain.title}</div>
            <img src="${entertain.urlToImage}" alt="">
        </div>`;
        document.getElementById("entertainApi").innerHTML = entertainOutput;
    }
};
EntertainmentNews();

/*===========================ENTERTAINMENT SECTION Ends here=========================== */

/*===========================BUSINESS SECTION start here=========================== */
let BusinessNews = async () => {
    let businessData = await window.fetch(businessUrl);
    let businessResponseData = await businessData.json();
    let businessInfo = businessResponseData.articles;
    let businessOutput = [];
    for (let business of businessInfo) {
        businessOutput += `
        <div id="sectionName">
           <div>${business.title}</div>
            <img src="${business.urlToImage}" alt="">
        </div>`;
        document.getElementById("businessApi").innerHTML = businessOutput;
    }
};
BusinessNews();

/*===========================BUSINESS SECTION Ends here=========================== */

/*===========================SCIENCE SECTION start here=========================== */
let ScienceNews = async () => {
    let scienceData = await window.fetch(scienceUrl);
    let scienceResponseData = await scienceData.json();
    let scienceInfo = scienceResponseData.articles;
    let scienceOutput = [];
    for (let science of scienceInfo) {
        scienceOutput += `
        <div id="sectionName">
           <div>${science.title}</div>
            <img src="${science.urlToImage}" alt="">
        </div>`;
        document.getElementById("scienceApi").innerHTML = scienceOutput;
    }
};
ScienceNews();

/*===========================SCIENCE SECTION Ends here=========================== */

/*===========================HEALTH SECTION start here=========================== */
let HealthNews = async () => {
    let healthData = await window.fetch(healthUrl);
    let healthResponseData = await healthData.json();
    let healthInfo = healthResponseData.articles;
    let healthOutput = [];
    for (let health of healthInfo) {
        healthOutput += `
        <div id="sectionName">
           <div>${health.title}</div>
            <img src="${health.urlToImage}" alt="">
        </div>`;
        document.getElementById("healthApi").innerHTML = healthOutput;
    }
};
HealthNews();

/*===========================HEALTH SECTION Ends here=========================== */

/*===========================TECHNOLOGY SECTION start here=========================== */
let TechNews = async () => {
    let techData = await window.fetch(techUrl);
    let techResponseData = await techData.json();
    let techInfo = techResponseData.articles;
    let techOutput = [];
    for (let tech of techInfo) {
        techOutput += `
        <div id="sectionName">
           <div>${tech.title}</div>
            <img src="${tech.urlToImage}" alt="">
        </div>`;
        document.getElementById("techApi").innerHTML = techOutput;
    }
};
TechNews();

/*===========================HEALTH SECTION Ends here=========================== */