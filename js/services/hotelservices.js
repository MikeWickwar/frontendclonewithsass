app.factory('hotelService', function ($http) {
  var hotels = $http.get('http://localhost:3030/hotels')

  var jsondata = {
    get: function () {
      console.log('getting hotels');
      return hotels
    },
    post: function (postinghotel) {
      console.log(postinghotel, "here is the data about to be posted");
      //this will obvs have to change when deployed to the deployed url
      var request = $.ajax({
        url: "http://localhost:3030/hotels",
        method: "POST",
        data: postinghotel,
        dataType: "html"
          });

      // hotels.forEach(function (hotel) {
      //   if (hotel.name === postinghotel.item) {
      //     console.log('Iam already in here');
      //
      //   }
      // })
      return request.done(function(response){
        console.log("post request done...", response);
      })
    },
    editPost: function(hotel){
      console.log(hotel, "look for has ke")
      delete hotel.$$hashKey
      console.log(hotel, "look for has keyshot ihit")

      var request = $.ajax({
        url: "http://localhost:3030/hotels/" + hotel.id,
        method: "POST",
        data: hotel,
        dataType: "html"
          });

      return request.done(function(response){
        console.log("edit hotel post request done...", response);
      })

    }
  }
  return jsondata
})
