<template>
  <div id="app">
    <Home></Home>
  </div>
</template>

<script>
  import Home from './components/Home.vue';

  export default{
    name: "App",
    components: {
      Home,
    },
    watch: {
      items: {
        handler(val, oldVal) {
          console.log(oldVal + ' --> ' + val)
        },
        deep: true
      }
    },
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,600;0,700;1,100;1,200;1,300;1,400;1,600;1,700&display=swap');

*{
  margin: 0px;
  padding: 0px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-style: italic;
  color: #858585;
}

body{
  width: 100%;
  height: 100%;
  background: #CDCDCD;
}
</style>
