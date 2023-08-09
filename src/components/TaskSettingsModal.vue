<template>
  <div class="modal-overlay" @click="$emit('close-modal')">
    <div class="modal" @click.stop>
      <!-- <img class="check" src="~/assets/check-icon.png" alt="" /> -->
      <button class="closeModal" @click="$emit('close-modal')">X</button>
      <div class="header">
        <h1>Settings:</h1>
      </div>

      <button class="saveSettings" @click="saveOnLocalStorage()">Save!</button>
    </div>
    <div class="close"></div>
  </div>
</template>

<script setup>
// eslint-disable-next-line no-undef
const props = defineProps({
  taskId: String,
  taskDescription: String,
})

function saveOnLocalStorage(){
alert(props);
}

</script>

<style>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}

.modal {
  text-align: center;
  background-color: white;
  height: 500px;
  width: 500px;
  margin-top: 10%;
  padding: 30px 0;
  border-radius: 20px;
}

.closeModal {
  border: 0px;
  background-color: rgba(0, 0, 0, 0);
}
</style>
