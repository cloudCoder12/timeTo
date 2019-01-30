let upcomingEvent = new Date('February 4, 2019 20:00:00');

let timeToDateInMS = upcomingEvent.valueOf() - Date.now();

let daysUntil = Math.floor(timeToDateInMS / 86400000);

let hoursUntil = Math.floor((timeToDateInMS % 86400000) / 3600000);

let minutesUntil = Math.floor(((timeToDateInMS % 86400000) % 3600000) / 60000);

if((((timeToDateInMS % 86400000) % 3600000) % 60000) !== 0) {
    minutesUntil = minutesUntil + 1;
}

exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            
            daysUntil : daysUntil,
            
            hoursUntil : hoursUntil, 
            
            minutesUntil : minutesUntil,
            
        }),
        // TO DO : restrict the origin
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    };
    return response;
};
