// ### Question 1: The Flight Booking Data Cleaner

// **Problem Statement:**
// You are given a list of raw flight strings from a travel agency's database. The data is unformatted and needs to be standardized into objects for a front-end display.
// **Requirements:**

// 1. **Parsing:** Iterate through an array of strings formatted as: "CITY_A-CITY_B:PRICE".
// 2. **Object Creation:** Convert each string into an object with three properties: from, to, and price.
// 3. **Validation & Coercion:**

// - The price must be explicitly converted to a **Number**.
// - If the price is not a valid number or is missing, set the price to 0.

// 4. **Filtering:** Create a new array containing only flights where the price is between **$100 and $500** (inclusive).
// 5. **Sorting:** Sort the final array of objects by price in **ascending order** (cheapest first).
// 6. **Return:** Return the final array as a **JSON string**.
//    **Input Data Example:**

// ```javascript
// const rawFlights = [
//   "London-Paris:150",
//   "New York-Tokyo:invalid",
//   "Dubai-Mumbai:450",
//   "Berlin-Rome:95",
// ];
// ```

const rawFlight = [
    "London-Paris:150",
    "New York-Tokyo:invalid",
    "Dubai-Mumbai:450",
    "Berlin-Rome:95"
];

function cleanFlightData(flights){

    const parsedFlight = flights.map(flight =>{

        const [route,price] = flight.split(':');
        const [from,to] = route.split('-');
        let flightprice = Number(price);

        if(isNaN(flightprice)){
            flightprice = 0;
        }
        return {
            from,
            to,
            flightprice
        };
    });

    const filteredFlights = parsedFlight.filter(flight =>
        flight.flightprice >=100 && flight.flightprice<=500
    );
    filteredFlights.sort((a,b) => a.flightprice -b.flightprice);

    return JSON.stringify(filteredFlights, null, 2);
}
const result = cleanFlightData(rawFlight);
console.log(result);