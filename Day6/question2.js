// ### Question 2: The E-Commerce Discount Applicator

// **Problem Statement:**
// You are building a promo-code system for a shopping cart. You need to write a function applyPromo(cart, promoCallback) that calculates which items qualify for a specific discount.
// **Requirements:**

// 1. **The Pipeline:** The applyPromo function should accept an array of product objects and a callback function.
// 2. **The Callback (isEligible):** You must define a separate callback function to be passed in. This callback should return true only if a product belongs to the **"Electronics"** category **AND** has a price greater than **$200**.
// 3. **Transformation:**

// - Use the callback to identify eligible items.
// - For those items, reduce their price by **10%**.
// - Add a new property to **all** items in the array called isDiscounted (set to true for eligible items and false for others).

// 4. **Final Summary:** Once the processing is complete, use a **Template Literal** to log to the console: "Promotion applied! [X] items were discounted for a total saving of $[Y]."
// 5. **Delayed Return:** Wrap the final return statement in a setTimeout of **1000ms** to simulate a server calculation, returning the updated cart array.
//    **Input Data Example:**

// ```javascript
// const cart = [
//   { name: "Smartphone", price: 800, category: "Electronics" },
//   { name: "Toaster", price: 50, category: "Home" },
//   { name: "Headphones", price: 250, category: "Electronics" },
//   { name: "Monitor", price: 150, category: "Electronics" },
// ];
// ```

const cart = [
  {name:"Smartphone",price:800,category:"Electronics"},
  {name:"Toaster",price:50,category:"Home"},
  {name:"Headphones",price:250,category:"Electronics"},
  {name:"Monitor",price:150,category:"Electronics"} 
]


function applypromo(cart,promoCallback)
{
    let discountedCount =0;
    let totalSaving =0;

    const updatedCart = cart.map(item =>{
        if(promoCallback(item)){
            discountedCount++;
            const discountAmount = item.price*0.1;
            totalSaving += discountAmount;
            return{
                ...item,
                price: item.price - discountAmount,
                isDiscounted: true
            };
        }
        else{
            return{
                ...item,
                isDiscounted: false 
            };
    }  });

    console.log(`Promotion applied! ${discountedCount} items were discounted for a total saving of $${totalSaving.toFixed(2)}.`);
    return new Promise(resolve =>{
        setTimeout(() =>{
            resolve(updatedCart);
        },1000);
    });


}
function isEligible(product){
    return product.category === "Electronics" && product.price > 200;
}
applypromo(cart,isEligible).then(updatedCart =>{
    console.log("Updated Cart:", updatedCart);
});

