<template>
  <div class="popup">
    <div class="popup-inner">
        <h1>Settings</h1>
        <div class="innerOption">
          <h2>Focus Time:</h2>
          <input type="number" min="0" max="1440" class="innerOptionChanger focusTime"/>
        </div>
        <div class="innerOption">
          <h2>Litle Break:</h2>
          <input type="number" min="0" max="1440" class="innerOptionChanger lilBreak"/>
        </div>
        <div class="innerOption">
          <h2>Big Break:</h2>
          <input type="number" min="0" max="1440" class="innerOptionChanger bigBreak"/>
        </div>
        <button class="popup-close" @click="togglePopup('buttonTrigger')"> Close Popup</button>
    </div>
  </div>
</template>

<script>
export default {
  setup(){
    const popupTriggers = ref({
            buttonTrigger: false
          });
    const togglePopup = (trigger) => {
            console.log("popUp:" +popupTriggers.value[trigger]);
            popupTriggers.value[trigger] = !popupTriggers.value[trigger];
            }

    return{
      popupTriggers,
      togglePopup
    }
  },
  beforeCreate(){
    document.getElementsByClassName("bigBreak").value = "16"
  }
}
</script>

<style>
.popup{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background-color: rgba(30, 30, 30, 0.4);

    display: flex;
    align-items: center;
    justify-content: center;
}

.popup-inner{
    background: #fff;
    padding: 32px;
    width: 30%;
}

.innerOption{
  display: flex;
  justify-content: space-between;
  padding-bottom: 5px;
}

.innerOptionChanger{
  width: 20%;
  left: 0px;
}
</style>