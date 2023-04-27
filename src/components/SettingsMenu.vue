<template>
  <div class="popup">
    <div class="popup-inner">
      <div class="header">
        <h1>Settings</h1>
        <span></span>
      </div>
        <div class="innerOption">
          <h2>Focus Time:</h2>
          <input type="number" min="0" max="1440" class="innerOptionChanger" id="focusTime" :value="returnFocusTime()" />
        </div>
        <div class="innerOption">
          <h2>Litle Break:</h2>
          <input type="number" min="0" max="1440" class="innerOptionChanger" id="lilBreak" :value="localStorage.focusTime" />
        </div>
        <div class="innerOption">
          <h2>Big Break:</h2>
          <input type="number" min="0" max="1440" class="innerOptionChanger" id="bigBreak" :value="localStorage.focusTime" />
        </div>
        <button class="closeSettings" @click="closeSettingsMenu()">Save!</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import Popup from './Popup';

export default {
  setup () {
		const popupTriggers = ref({
			buttonTrigger: false
		});
		const TogglePopup = (trigger) => {
			popupTriggers.value[trigger] = !popupTriggers.value[trigger]
		}

		return {
			Popup,
			popupTriggers,
			TogglePopup
		}
	},
  beforeCreate(){
    document.getElementsByClassName("bigBreak").value = "16"
  },
  methods:{
    returnFocusTime(){
      return localStorage.focusTime;
    },
    returnLilBreak(){
      return localStorage.lilBreak;
    },
    returnBigBreak(){
      return localStorage.bigBreak;
    },
    saveOnLocalStorage(){
      /* console.log(document.getElementById("focusTime").value)
      console.log(document.getElementById("lilBreak").value)
      console.log(document.getElementById("bigBreak").value) */
      localStorage.focusTime = document.getElementById("focusTime").value;
      localStorage.lilBreak = document.getElementById("lilBreak").value;
      localStorage.bigBreak = document.getElementById("bigBreak").value;
      console.log("Settings were saved!");
    },
    appearPopUp(){

    },
    closeSettingsMenu(trigger){
      popupTriggers.value[trigger] = !popupTriggers.value[trigger];
    }
    /* togglePopup (trigger) {   @click="togglePopup('buttonTrigger')"
            console.log("popUp:" +popupTriggers.value[trigger]);
            popupTriggers.value[trigger] = !popupTriggers.value[trigger];
            } */
  }
}
</script>

<style>
.header{
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100% ;
}

.header span{
  display: flex;
  align-items: center;
  justify-content: end;
  font-size: 20px;
}
.header span:hover{
  color: black;
}

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

.closeSettings{
  width: 6em;
  height: 4em;
  background-color: #fff;
  border-style: solid;
  border-width: 1px;
  border-color: #eaeaea;
  border-radius: 20px;
}

.closeSettings:hover{
    background-color: rgba(239, 239, 239, 0.279);
}
</style>