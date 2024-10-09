
const fs = require('fs');

fs.readFile('faturamento.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler o arquivo:', err);
        return;
    }

    const { faturamentoDiario } = JSON.parse(data);
    const dailybilling = faturamentoDiario.map(dia => dia.valor);

    const validBilling = dailybilling.filter(value => value > 0);
    const lowerRevenue = Math.min(...validBilling);
    const higherRevenue = Math.max(...validBilling);

    const monthlyAve = validBilling.reduce((acc, val) => acc + val, 0) / validBilling.length;
    const daysAbove = validBilling.filter(value => value > monthlyAve).length;

    console.log(`Menor Faturamento: ${lowerRevenue}`);
    console.log(`Maior Faturamento: ${higherRevenue}`);
    console.log(`Dias acima da média mensal: ${daysAbove}`);
});