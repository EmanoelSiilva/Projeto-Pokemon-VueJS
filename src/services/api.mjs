import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:3000"
})

export function getRandomPokemon() {
  axios.get('/api/pokemon')
    .then((response) => {
      console.log(response.data); // exibe os dados da resposta no console
    })
    .catch((error) => {
      console.error(error); // exibe o erro no console
    });
}

export default api;