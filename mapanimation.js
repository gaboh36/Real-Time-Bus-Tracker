// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
  [-86.35233029587522, 12.148942041651878],
  [-86.35228585469065, 12.148952202505896],
  [-86.35217601180477, 12.148014256860378],
  [-86.35173421508716, 12.148116865896569],
  [-86.3515341477057, 12.147940360284878],
  [-86.35108521603576, 12.148059620819765],
  [-86.34871202789952, 12.147904581869028],
  [-86.34655960346612, 12.147780550395339],
  [-86.34285486678539, 12.147534501708137],
  [-86.33769062273791, 12.146527195811018],
  [-86.33574850510882, 12.146694161208785],
  [-86.33516893945705, 12.144534154734899],
  [-86.33515918007305, 12.144195450097882],
  [-86.33502742837965, 12.144429204053893],
  [-86.33638237915943, 12.149643662550702],
  [-86.337576329167, 12.154545827293603],
  [-86.33722499132409, 12.15466508489449],
  [-86.32663096729073, 12.151831401384243],
  [-86.31668733710887, 12.14976604349475],
  [-86.30892990822008, 12.151681322782835],
  [-86.3045601726867, 12.15273583794091],
  [-86.29795740068823, 12.15425545932618],
  [-86.2866693105421, 12.15558060225662],
  [-86.2820916012389, 12.15476609877021],
  [-86.2796337835398, 12.154611625489437],
  [-86.27583829391102, 12.154303542127977],
  [-86.27390616068601, 12.154092829153441],
  [-86.26962034358229, 12.154062228206868],
  [-86.26199825540573, 12.153933765807821],
  [-86.25580310731993, 12.153390265551224],
  [-86.24972623362669, 12.152845670608855],
  [-86.24608407286223, 12.152528267501935],
  [-86.24482145912935, 12.152326422310267],
  [-86.23855209936141, 12.151720361512929],
  [-86.23604814370321, 12.151503310011122],
  [-86.23263935842203, 12.151119295436416],
  ];
  
  // TODO: add your own access token
  mapboxgl.accessToken = 'pk.eyJ1IjoiZ2Fiby1oMzYiLCJhIjoiY2t0cjJ6eDdxMTJkOTJ4cG05aG9qM2twZyJ9.zAWo3HubZfG2BaTnD8VSJw';
  
  // This is the map instance
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-86.35233029587522, 12.148942041651878],
    zoom: 14,
  });
  
  // TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
  const marker = new mapboxgl.Marker().setLngLat(busStops[0]).addTo(map);
  // counter here represents the index of the current bus stop
  let counter = 0;
  
  function move() {
    // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
    // Use counter to access bus stops in the array busStops
    // Make sure you call move() after you increment the counter.
    if (counter >= busStops.length ){
      return true;
    }
    counter++;
    marker.setLngLat(busStops[counter]);
  
    setTimeout(()=>{
      move();
    }, 1000)
  
  }
  
  // Do not edit code past this point
  if (typeof module !== 'undefined') {
    module.exports = { move };
  }
  