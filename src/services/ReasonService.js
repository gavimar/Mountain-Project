const ENDPOINT = 'https://...';

const fetchReasons = () => fetch(ENDPOINT).then(response => response.json());

export { fetchReasons };