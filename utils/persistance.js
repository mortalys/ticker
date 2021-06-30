import fs from "fs";

export async function updateLogfile(price) 
{
    try {
        await fs.appendFile('priceAlerts.txt', `${price}\n`, function (err) {
            if (err) {
                console.log(`Error updating log file:`);
                console.log(err);
                return false;
            }

            return true;
          });
      } catch (error) {
          console.log(`Error in IO operations`);
          console.log(error);
          return false;
    }
}
