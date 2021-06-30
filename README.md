# Ticker Alert

The application written in javascript is intended to warns the user of a asset price update on a time interval.

## Summary

- Fetch a trading pair from an source on regular time basis
- Compare prices and log if price meets certain criteria

## Requirements

- Node.js v12.18.0 or later

## Setup

- Run `npm install` (or `yarn install`)
- Create a `.env` file based on the `.env.example` file (current data is valid and is ready to use)

## Run

Run `node app.js`

A file `priceAlerts.txt` will be created to meet application goals
