<template>
    <div id="footer">
      <p>Emanoel Silva &copy; {{ getYear }} </p>
    </div>
</template>
<script>
  export default {
    name: "Footer",
    data() {
        return {
            year: new Date
        }
    },
    computed:{
        getYear() {
            return this.year.getFullYear()
        }
    }
  }
</script>

<style scoped>
    #footer {
        background-color: #ffde00;
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        bottom: 0;
        margin-top: 200px;
    
    }
</style>