# Funnel Coding Challenge

### Kevin Pitzer

&nbsp;

# How to Run

- clone this repository
- cd into repository
- `npm install`
- `npm start`
- navigate your browser to:
  - `localhost:8080/api/satellite/stats`
  - `localhost:8080/api/satellite/health`
- run tests with:
  - `npm test`

&nbsp;

# Background

Funnel has launched a satellite in order to tackle the lucrative lunar real estate market. To make sure the satellite doesn’t come crashing back down, we’re creating a web application to monitor its status. Your job is to write a health API for it.

Realtime information about the satellite is available from the nestio.space/api/satellite/data endpoint. The data is updated every ten seconds. The data is returned in this format:

```
{
  “last_updated”: “2017-04-07T02:53:10.000Z”,
  “altitude”:  “213.001”
}
```

last_updated is an ISO 8601 representation of the last time the data was updated and altitude is the altitude of the satellite in kilometers.

&nbsp;

# Objectives

Your application should read the real-time altitude data from nestio.space/api/satellite/data, and tracks the health and stats of the satellite over the last 5 minutes:

## /stats end-point:

- Returns the minimum, maximum and average altitude for the last 5 minutes.
- Don’t worry about persisting data beyond the life of the process -- if you don’t have 5 minutes of data when the end-point is requested, return the stats for what you do have.

## /health end-point:

- Whenever the 5 minute average altitude of the satellite goes below 160km for more than 1 minute, returns the message “WARNING: RAPID ORBITAL DECAY IMMINENT”
- Once the average altitude of the satellite returns to 160km or above, return the message “Sustained Low Earth Orbit Resumed” for 1 minute.
- Otherwise return the message “Altitude is A-OK”

&nbsp;

# Technologies

- Node.js
- Express.js
- Mocha testing framework
- Node-fetch library
