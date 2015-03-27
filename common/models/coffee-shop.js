module.exports = function(CoffeeShop) {
    CoffeeShop.status = function(cb){
        var currentDate = new Date();
        var currentHour = currentDate.getHours()
        var OPEN_HOUR = 6;
        var CLOSED_HOUR = 20;
        console.log('Current hour is ' + currentHour)
        var response
        if (currentHour > OPEN_HOUR && currentHour < CLOSED_HOUR) {
            response = 'We are still open for business.'
        } else {
          response = 'Sorry we are closed.  Open daily from 6 am to 8 pm.'
        }
        cb(null, response)
    }
    CoffeeShop.remoteMethod(
        'status',
        {
        http: {path: '/status', verb: 'get'},
        returns: {arg: 'status', type: 'string'}
        }
    )
};
