//CAT Facts api
fetch("https://catfact.ninja/facts?limit=10")
  .then(res => res.json())
  .then(result => result.data)                       
  .then(facts => facts.filter(f => f.length < 60))   
  .then(facts => facts.map(f => f.fact))            
  .then(data => console.log(data))                   
  .catch(err => console.error("Error:", err));



//   fetch(')
//     .then(response => response.json())
//     .then(quote => console.log(quote))

// fetch("https://api.animechan.io/v1/quotes/random")
//   .then(res => res.json())
//   .then(res => console.log(res.data.character.name))
//   .catch(err => console.error(err));

//Anime Quotes — Animechan API
fetch('https://api.animechan.io/v1/quotes/random')
  .then(res => res.json())
  .then(obj => obj.data)                 
  .then(data => `${data.content} — (${data.anime.name})`) 
  .then(console.log)
  .catch(console.error);
 
//     //DOG API
fetch("https://dogapi.dog/api/v2/facts")
  .then(res => res.json())
  .then(obj => obj.data)
  .then(arr => arr.map(d => d.attributes.body))
  .then(console.log);


//  // Random User API
fetch("https://randomuser.me/api/?results=10")
  .then(res => res.json())
  .then(obj => obj.results)
  .then(arr => arr.filter(u => u.gender === "male"))
  .then(arr => arr.map(u => u.name))
  .then(console.log);

//   //Countries 
fetch("https://restcountries.com/v3.1/all?fields=name,population")
  .then(res => res.json())
  .then(data => Array.isArray(data) ? data : [])
  .then(countries => countries.filter(c => c.population > 10000000))
  .then(countries => countries.map(c => c.name))
  .then(console.log)
  .catch(console.error);

// url api
fetch("https://urlhaus-api.abuse.ch/v1/urls/recent/")
  .then(res => res.json())
  .then(data => Array.isArray(data.urls) ? data.urls : [])
  .then(url => url.map(urls => ({
    id: urls.id,
    status: urls.url_status
  })))
  .then(console.log)
  .catch(console.error);

// The Metropolitan Museum of Art Collection API total  objectIDs
fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects")
  .then(res => res.json())
  .then(data => {
    console.log("Total objectIDs:", data.total);
    return data; 
  })
  .then(data => console.log("Object IDs:", data.objectIDs))
  .catch(error => console.error("Error fetching data:", error));

  //bible api

fetch("https://bible-api.com/john+3:16")
  .then(res => res.json())
  .then(data => {
    console.log("Book Name:", data.verses[0].book_name);
    console.log("Translation:", data.translation_name);
    console.log("Text:", data.text);
  })
  .catch(error => console.error("Error fetching data:", error));


fetch("https://api.crossref.org/works/10.1037/0003-066X.59.1.29/agency")
  .then(res => res.json())
  .then(data => {
    console.log("DOI:", data.message.DOI);
    return data;
  })
  .then(data => {
    console.log("Agency ID:", data.message.agency.id);
    console.log("Agency Label:", data.message.agency.label);
  })
  .catch(error => console.error("Error fetching data:", error));