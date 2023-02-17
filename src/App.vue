<template>
  <div>
    <TelaHome/>
  </div>
  <h1>Qual Pokemon vai te escolher?</h1>
  <div class="div-button">
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
  h1 {
    text-align: center;
    color: #FFF;
  }

  .div-button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 155px;
  }
</style>
