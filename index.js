const {fetchMyIP, fetchCoordsByIp,fetchISSFlyOverTimes  } = require('./iss');



fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  
  console.log('It worked! Returned IP:' , ip);
});

// const exampleCoords = { latitude: '43.4327', longitude: '-79.871' };

// fetchISSFlyOverTimes(exampleCoords, (error, passTimes) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned flyover times:' , passTimes);
// });

// fetchCoordsByIp("24.141.165.152", (error, data) => {
//   if (error) {
//     console.log("Coordiinate Error:", error);
//   }
//   console.log("Coordinate data:", data)
// });
