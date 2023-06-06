<template>
  <div class="modalOustide">
    <div class="modalContainer">
      <div class="modalHead">
        <h1>asd</h1>
      </div>
      <div class="separator"></div>
      <div class="modalBody">
        <p> {{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default{
    props:['title', 'description']
}
</script>

<style>
.modalOustide{
    padding: 10px;
    z-index: 1;
}
.modalContainer {
  width: 500px;
  height: 100px;
}

.separator{
    width: 99.5%;
    border: 1px solid black;
}
</style>
