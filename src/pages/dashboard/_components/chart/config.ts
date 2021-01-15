

export let colorMap = {
    'bids_max_1': '#006633',
    'asks_max_1': '#990000',
    'buy_1': '#03C087',
    'sell_1': '#EF5555',
    price: 'blue',
    asks1_max_price: '#990000',
    asks2_max_price: '#EF5555',
    bids1_max_price: '#006633',
    bids2_max_price: '#03C087',
};
export let tradeColor = [colorMap.buy_1, colorMap.sell_1];

// export const usdtFormatter = function formatter(val) {
//     return `${(val / 10000)}万usdt (${parseInt(val / appConfig.prices.btc)}฿)`;
// }
// export const mUsdtFormatter = function formatter(val) {
//     return `${(val / 10000)}万(${parseInt(val / appConfig.prices.btc)}฿)`;
// }
// export const mAxisLabel = function label(text, index, total) {
//     var cfg = {
//         textAlign: 'start',
//         text: mUsdtFormatter(text),
//         fill: '#818991'
//     };
//     if (index === 0) {
//         cfg.textBaseline = 'bottom';
//     } else if (index === total - 1) {
//         cfg.textBaseline = 'top';
//     }
//     return cfg;
// }