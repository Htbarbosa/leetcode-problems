// var maxProfit = function (prices) {
//     let minPrice = prices[0];
//     let maxPrice = prices[0];
//     prices.forEach(price => {
//         if (minPrice > price) {
//             minPrice = price;
//         }
//         if (maxPrice < price) {
//             maxPrice = price;
//         }
//     });
//     const indexMinPrice = prices.indexOf(minPrice);
//     const splicedPrices = prices.splice(indexMinPrice);
//     console.log("🚀 ~ maxProfit ~ splicedPrices:", splicedPrices);
//     let maxSplicedPrice = splicedPrices[0];
//     splicedPrices.forEach(price => {
//         if (maxSplicedPrice < price) {
//             maxSplicedPrice = price;
//         }
//     });
//     let maxProfit = 0;
//     maxProfit = maxSplicedPrice - minPrice;
//     return maxProfit;
// };

// var maxProfit = function (prices) {
//     let profit = 0;
//     let buy = prices[0];
//     let splicedPrices = prices.splice(1);
//     for (let index = 0; index < splicedPrices.length; index++) {
//         const sell = splicedPrices[index];
//         if (sell > buy) {
//             profit = Math.max(profit, sell - buy);
//         } else {
//             buy = sell;
//         }

//     }
//     return profit;
// };

var maxProfit = function (prices = []) {
    let lowest = prices[0];
    let profit = 0;
    for (i = 0; i < prices.length; i++) {
        lowest = Math.min(lowest, prices[i]);
        profit = Math.max(profit, prices[i] - lowest);
    }
    return profit;
};

console.log("🚀 ~ maxProfit([2,4,1]):", maxProfit([2, 4, 1]));
console.log("🚀 ~ maxProfit([7,6,4,3,1]):", maxProfit([7, 6, 4, 3, 1]));
console.log("🚀 ~ maxProfit([7,1,5,3,6,4]):", maxProfit([7, 1, 5, 3, 6, 4]));
