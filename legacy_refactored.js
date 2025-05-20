console.log("Starting calculation…");

const productName = "Espresso Machine";
const prices = [120, 30, 15]; // base price, shipping, handling
const discountValue = 0.1;

const calculateSubtotal = () => prices[0] + prices[1] + prices[2];
const getDefaultDiscount = () => discountValue;
const applyDiscount = amount => amount - amount * discountValue;
const addTax = (() => {
  const rate = 0.08;
  return amount => amount + amount * rate;
})();

console.log("Product:", productName);
console.log("Subtotal:", calculateSubtotal());
console.log("Subtotal after assignment:", calculateSubtotal());
console.log("Discount rate:", getDefaultDiscount());
console.log("Discount rate after assignment:", getDefaultDiscount());
console.log("Total after discount:", applyDiscount(calculateSubtotal()));
console.log("Taxed total (incl. 8%):", addTax(applyDiscount(calculateSubtotal())));

const finalProduct = "Deluxe Espresso Machine";
console.log("Final product name:", finalProduct);