export function priceCheck(percentage_alert, currentPrice, newPrice) 
{
    var priceChange = false;

    var percentageChange = 0;
    var percentageAbsolute = 0;    

    if (currentPrice == 0) priceChange = true;
    else if (currentPrice != newPrice)
    {
        percentageChange = ( (currentPrice - newPrice) / currentPrice ) * 100;

        percentageAbsolute = Math.abs(Number(percentageChange.toFixed(2)));
        console.log();
        console.log(`Price change`);
        console.log(`::: Old: ${currentPrice} - New: ${newPrice} :::`);

        if (percentageAbsolute < percentage_alert) console.log(`Percentage change does not meet requirement: ${percentage_alert}% - Change was ${Math.abs(percentageChange)}%`)
        else 
        {
            priceChange = true;
            console.log(`Percentage change by ${percentageAbsolute}%`)
        }

    }
    
    return priceChange;
}
