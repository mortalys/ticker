// system dependencies
import AXIOS from "axios";
import dotenv from "dotenv";
import path from 'path';

// app modules
import { priceCheck } from './utils/business.js';
import { updateLogfile } from './utils/persistance.js';

// system setup
dotenv.config({ path: path.resolve() + "/.env" });

// app constants
const API = process.env.API; 
const TRACKING_PAIR = process.env.TICKER_TRACKING_PAIRS;
const INTERVAL = process.env.TICKER_INTERVAL;
const PERCENTAGE_ALERT = process.env.TICKER_ALERT;

// app vars
var pairPrice = 0;

// app init log
console.log(`Getting data from ${API}`);

console.log(`Tracking ${TRACKING_PAIR} every ${INTERVAL / 1000} seconds`);

console.log(`Price alert percentage set to ${PERCENTAGE_ALERT}`);

// ticker start
setInterval(async () =>

    AXIOS.get(`${API}${TRACKING_PAIR}`)
    .then(response => {

      if (priceCheck(PERCENTAGE_ALERT, pairPrice, response.data.ask))
      {
        pairPrice = response.data.ask;
        console.log(`PRICE ALERT =====[ ${pairPrice} ]===== PRICE ALERT`);

        updateLogfile(pairPrice);
      }

    })
    .catch(error => {console.log(error)})

,INTERVAL);
