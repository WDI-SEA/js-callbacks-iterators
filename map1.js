let forecast = [
    {
        day: 'Monday',
        high: 55,
        low: 53,
    },
    {
        day: 'Tuesday',
        high: 65,
        low: 60,
    },
    {
        day: 'Wednesday',
        high: 63,
        low: 58,
    },
    {
        day: 'Thursday',
        high: 61,
        low: 57,
    },
    {
        day: 'Friday',
        high: 60,
        low: 53,
    },
    {
        day: 'Saturday',
        high: 61,
        low: 58,
    },
    {
        day: 'Sunday',
        high: 57,
        low: 54,
    },
]

// Build an array of strings using the forecast objects above with the following pattern:
// "Monday will have a high of 55F and a low of 53F."

//Your code here
forecast.map(date => `${date.day} will have a high of ${date.high} and a low of ${date.low}.`)