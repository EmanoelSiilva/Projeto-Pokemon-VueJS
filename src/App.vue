<template>
  <div>
    <TelaHome/>
  </div>
  <div class="div-button">
    <h1>Qual Pokemon irá te escolher?</h1>
    <Button/>
  </div>
  <div>
    <Footer/>
  </div>
</template>

<script>
import Button from './components/Button.vue';
import Footer from './components/Footer.vue';
import TelaHome from './components/TelaHome.vue';



export default {
  components: {
    Footer,
    TelaHome,
    Button
}
}
</script>

<style>
  body {
    background-color: #2f2f2f;
    width: 100%;
    height: 100%;
  }
  h2 {
    text-align: center;
  }
  .div-button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* margin-bottom: 55px; */
  }
</style>
