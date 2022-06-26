const WeatherLink = require('weatherlink');

const apiKey = process.env.WEATHERLINK_API_KEY;
const apiSecret = process.env.WEATHERLINK_API_SECRET;

const weatherLink = WeatherLink({apiKey, apiSecret});

export default async function handler(req, res) {
  try {
    const stationsResponse = await weatherLink.getAllStations();
    const mainStation = stationsResponse.stations[0].station_id;
    const currentData = await weatherLink.getCurrent({ stationId: mainStation });
    res.status(200).json( currentData );
  } catch (err) {
    res.status(500).send({ error: 'failed to fetch data' })
  }
}