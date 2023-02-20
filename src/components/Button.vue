<template>
    <div class="btn-start">
        <div v-if="pokemon" class="pokemon-info">
            <img :src="pokemonImageUrl" :alt="pokemon.nome">
            <h2>{{ pokemon.nome }}</h2>
            <p>Tipo: {{ pokemon.tipo }}</p>
        </div>
        <button type="submit" class="button" @click="getRandomPokemon()">Descobri</button>
    </div>
</template>
<script>
import api, { getRandomPokemon } from '../services/api.mjs';

  export default {
    name: "Button",
    data() {
        return {
            pokemon: null,
            pokemonImageUrl: null
        }
    },
    methods: {
        async getRandomPokemon() {
            try {
                const response = await api.get('/api/pokemon');
                this.pokemon = response.data;
                this.pokemonImageUrl = response.data.imageUrl
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>

<style scoped>
    .pokemon-info {
        margin-top: 20px;
        margin-bottom: 60px;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        background-color: #f5f5f5;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
        text-align: center;
    }
    .pokemon-info h2 {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 10px;
    }

    .pokemon-info p {
        font-size: 18px;
        margin-bottom: 5px;
    }
    .btn-start{
        height: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .button {
        min-width: 300px;
        min-height: 60px;
        font-family: 'Nunito', sans-serif;
        font-size: 22px;
        text-transform: uppercase;
        letter-spacing: 1.3px;
        font-weight: 700;
        color: #FFF;
        background: #3B4CCA;
        background: linear-gradient(90deg, #f00 0%, #263238 100%);
        border: none;
        border-radius: 1000px;
        box-shadow: 12px 12px 24px #B3A125;
        transition: all 0.3s ease-in-out 0s;
        cursor: pointer;
        outline: none;
        position: relative;
        padding: 10px;
    }

    button::before {
        content: '';
        border-radius: 1000px;
        min-width: calc(300px + 12px);
        min-height: calc(60px + 12px);
        border: 6px solid #B3A125;
        box-shadow: 0 0 60px #B3A125;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
        transition: all .3s ease-in-out 0s;
    }

    .button:hover, .button:focus {
        color: #313133;
        transform: translateY(-6px);
    }

    button:hover::before, button:focus::before {
        opacity: 1;
    }

    button::after {
        content: '';
        width: 30px; height: 30px;
        border-radius: 100%;
        border: 6px solid #c00;
        position: absolute;
        z-index: -1;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        animation: ring 1.5s infinite;
    }

    button:hover::after, button:focus::after {
        animation: none;
        display: none;
    }

    @keyframes ring {
    0% {
        width: 30px;
        height: 30px;
        opacity: 1;
    }
    100% {
        width: 300px;
        height: 300px;
        opacity: 0;
    }
    
}
</style>