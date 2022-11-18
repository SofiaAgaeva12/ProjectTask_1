const API_PATH = "https://beauty-saloon-server.herokuapp.com/api";

const response = await fetch('API_PATH/api/orders', {
    method: 'POST',
    body: JSON.stringify(State),
})
