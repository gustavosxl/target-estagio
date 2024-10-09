const revenueByState = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Others: 19849.53
};


const totalRevenue = Object.values(revenueByState).reduce((acc, val) => acc + val, 0);

const participationByState = {};
for (const state in revenueByState) {
    participationByState[state] = ((revenueByState[state] / totalRevenue) * 100).toFixed(2);
}


const highestRevenueState = Object.entries(revenueByState).reduce((acc, [state, value]) => {
    return value > acc[1] ? [state, value] : acc;
}, ['', 0]);

console.log(`Total de Faturamento: R$${totalRevenue.toFixed(2)}`);
console.log('Participação Percentual por Estado:');
for (const state in participationByState) {
    console.log(`${state}: ${participationByState[state]}%`);
}
console.log(`Estado com Maior Faturamento: ${highestRevenueState[0]} (R$${highestRevenueState[1].toFixed(2)})`);