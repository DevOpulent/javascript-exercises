const sumAll = function(a, b) {

if (a < 0 || b < 0) return "ERROR"
if (typeof a !== 'number' || typeof b !== 'number') return "ERROR";
if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
if (a < 0 || b < 0) return "ERROR";

  // 1. Find the smaller and larger number
  const min = Math.min(a, b);
  const max = Math.max(a, b);

  // 2. Make a variable to store the sum
  let total = 0;

  // 3. Loop from min to max
  for (let i = min; i <= max; i++) {
    total += i;  // like collecting coins 🪙
  }

  // 4. Return the total
  return total;
};

// Do not edit below this line
module.exports = sumAll;
