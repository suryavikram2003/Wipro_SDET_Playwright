// // const url ="http://api.open-notify.org/astros.json";

// // fetch(url).then(response => response.json())
// // .then(data => {console.log(data);})
// // .catch(error => console.error("Error fetching data:", error));

// const axios = require('axios');

// // const url = "http://api.open-notify.org/astros.json";
// // axios.get(url).then(res => console.log(res.data)).catch(error => console.error("Error fetching data:", error));

// const url  ="http://api.open-notify.org/astros.json";
// async function getAstroData()
// {
//     try
//     {
//         const response = await axios.get(url);
//         const astroData = response.data;

//         const peopleInSpace = astroData.people.map(person => person.name);
//         const numberOfPeople = astroData.number;
//         const craftNames = astroData.people.map(person => person.craft);

//         // console.log(peopleInSpace, numberOfPeople, craftNames);
    
//     const astroList = document.getElementById('astroData');
//     astroList.innerHTML = peopleInSpace.map((name, index) => `<li>${name} (${craftNames[index]})</li>`).join('');
//     document.getElementById('numberOfPeople').textContent = numberOfPeople;
// }
//     catch (error)
//     {
//         console.error('Error fetching astro data:', error);
//     }
// }
// // Invoke the function
// getAstroData();
// // getAstroData().then(data => console.log(data)).catch(err => console.error(err));
// //     .then(data => console.log(data))
// //     .catch(err => console.error(err))

// // fetch(URL, {method: "POST", body: JSON.stringify({key: "value"})}).then(res => res.json())
// //     .then(data => console.log(data))
// //     .catch(err => console.error(err))


// const axios = require('axios'); // import

async function getAstroData() {
    const URL = "http://api.open-notify.org/astros.json";
    const response = await axios.get(URL);
    const astroData = response.data;

    const peopleInSpace = astroData.people.map(person => person.name);
    const numberOfPeople = astroData.number;
    const craftNames = astroData.people.map(person => person.craft);

    // console.log(peopleInSpace, numberOfPeople, craftNames);
    
    const astroList = document.getElementById('astroData');
    astroList.innerHTML = peopleInSpace.map((name, index) => `<li>${name} (${craftNames[index]})</li>`).join('');
    document.getElementById('numberOfPeople').textContent = numberOfPeople;
}

// getAstroData().then(data => console.log(data)).catch(err => console.error(err));
//     .then(data => console.log(data))
//     .catch(err => console.error(err))

// fetch(URL, {method: "POST", body: JSON.stringify({key: "value"})}).then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.error(err))