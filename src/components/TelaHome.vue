<template>
    <div class="div-home">
        <ImgPoke/>
    </div>
</template>
<script>
import ImgPoke from './ImgPoke.vue';
import Button from './Button.vue';

  export default {
    name: "TelaHome",
    components: { ImgPoke, Button }
}
</script>

<style scoped>
    body {
        line-height: 1.35;
        background-color: #fbfbfb;
        color: #263238;
        margin: 0;
    }
    .div-home {
        color: #fff;
        background-color: #3B4CCA;
        width: 100%;
        height: 250px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>