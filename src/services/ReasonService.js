const ENDPOINT = 'https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=40.03&lon=-105.25&maxDistance=10&minD';

const fetchReasons = () => fetch(ENDPOINT).then(response => response.json());

export { fetchReasons };