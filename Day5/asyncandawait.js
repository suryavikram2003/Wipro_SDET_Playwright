// CAT FACTS API 
async function getCatFacts() {

    const res = await fetch("https://catfact.ninja/facts?limit=10");
    const result = await res.json();
    const facts = result.data
        .filter(f => f.length < 60)
        .map(f => f.fact);
    return facts;
}
getCatFacts().then(console.log);


// ANIME QUOTES API
async function getAnimeQuote() {

    const res = await fetch("https://api.animechan.io/v1/quotes/random");
    const obj = await res.json();
    const data = obj.data;
    return `${data.content} — (${data.anime.name})`;
}
getAnimeQuote().then(console.log);


// DOG API 
async function getDogFacts() {

    const res = await fetch("https://dogapi.dog/api/v2/facts");
    const obj = await res.json();
    return obj.data.map(d => d.attributes.body);
}
getDogFacts().then(console.log);


//RANDOM USER API 
async function getMaleUsers() {

    const res = await fetch("https://randomuser.me/api/?results=10");
    const obj = await res.json();

    return obj.results
        .filter(u => u.gender === "male")
        .map(u => u.name);
}

getMaleUsers().then(console.log);


// COUNTRIES API
async function getCountries() {

    const res = await fetch("https://restcountries.com/v3.1/all?fields=name,population");

    const data = await res.json();

    return (Array.isArray(data) ? data : [])
        .filter(c => c.population > 10000000)
        .map(c => c.name);
}

getCountries().then(console.log);


//URLHAUS API
async function getUrls() {

    const res = await fetch("https://urlhaus-api.abuse.ch/v1/urls/recent/");
    const data = await res.json();

    return (Array.isArray(data.urls) ? data.urls : [])
        .map(urls => ({
            id: urls.id,
            status: urls.url_status
        }));
}

getUrls().then(console.log);


//MET MUSEUM API
async function getMuseumObjects() {

    const res = await fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects");
    const data = await res.json();

    return {
        total: data.total,
        objectIDs: data.objectIDs
    };
}

getMuseumObjects().then(console.log);


// BIBLE API
async function getBibleVerse() {

    const res = await fetch("https://bible-api.com/john+3:16");
    const data = await res.json();

    return {
        bookName: data.verses[0].book_name,
        translation: data.translation_name,
        text: data.text
    };
}

getBibleVerse().then(console.log);


// CROSSREF API
async function getCrossrefData() {

    const res = await fetch("https://api.crossref.org/works/10.1037/0003-066X.59.1.29/agency");
    const data = await res.json();

    return {
        doi: data.message.DOI,
        agencyId: data.message.agency.id,
        agencyLabel: data.message.agency.label
    };
}
getCrossrefData().then(console.log);



// //set timeout and interval
// async function getCatFacts() {

//     const res = await fetch("https://catfact.ninja/facts?limit=5");
//     const result = await res.json();
//     return result.data.map(f => f.fact);
// }

// // Runs after 3 seconds
// setTimeout(() => {
//     getCatFacts().then(data => {
//         console.log("Cat Facts after 3 seconds:");
//         console.log(data);
//     });
// }, 3000);




// //  USING setInterval

// async function getAnimeQuote() {

//     const res = await fetch("https://api.animechan.io/v1/quotes/random");
//     const obj = await res.json();
//     const data = obj.data;

//     return `${data.content} — (${data.anime.name})`;
// }

// // Runs every 5 seconds
// const intervalId = setInterval(() => {

//     getAnimeQuote().then(data => {
//         console.log("Random Anime Quote:");
//         console.log(data);
//     });

// }, 5000);


// // Stop interval after 20 seconds
// setTimeout(() => {

//     clearInterval(intervalId);

//     console.log("Interval Stopped");

// }, 20000);