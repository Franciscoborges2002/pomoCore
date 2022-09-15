<template>
  <div class="container">
    <div id="tittle">
      <h1><a href="https://en.wikipedia.org/wiki/Pomodoro_Technique" target="_blank">Pomo</a> Vue</h1>
    </div>
    <div class="main">
      <div class="buttons">
        <button @click=" togglePopup('buttonTrigger')">
          <p class="stateSettings">normal</p>
          <img src="@/assets/settingsButton.svg">
          <Popup>
            <p>oi222</p>
            <h2> Settings22 </h2>
            
          </Popup>
        </button>
        <button @click="handleTimeButton">
          <p class="stateMain">normal</p>
          <img src="@/assets/playButton.svg">
        </button>
        <button @click="handleSkipButton">
          <img src="@/assets/skipButton.svg">
        </button>
      </div>
      <div class="timer">
        {{timeDisplay}}
      </div>
    </div>
    <footer>
      Made with &#x1F49C; by <a href="https://github.com/Franciscoborges2002" target="_blank">Francisco Borges</a>.
    </footer>
  </div>
</template>

<script>
  import {ref } from 'vue';

  import Popup from './Popup.vue';

  const config = require('../mainConfig.js');

    export default {
        name: 'Home',
        components:{
          Popup
        },
        setup(){
          const popupTriggers = ref({
            buttonTrigger: false
          });

          const togglePopup = (trigger) => {
            console.log(popupTriggers.value[trigger]);
            popupTriggers.value[trigger] = !popupTriggers.value[trigger];
          }

          return {
            Popup,
            popupTriggers,
            togglePopup
          }
        },
        data: () =>{
          const focusTime = localStorage.focusTime;
          const lilBreak = localStorage.lilBreak;
          const bigBreak = localStorage.bigBreak;
          const currentState = localStorage.currentState;

          return {
            currentTimeInSeconds: focusTime * 60,
            timeRunning: false
        };
      },
      methods:{
        handleSettingsButton () {
          
        },
        handleTimeButton () {
          if(!this.timeRunning){
            this.playClock();
            this.timeRunning = true;
          }else{
            this.stopClock();
            this.timeRunning = false;
          }
          
        },
        handleSkipButton () {

        },
        playClock () {
          this.interval = setInterval(() => {
            if(!(this.currentTimeInSeconds == 0)){
                this.currentTimeInSeconds -= 1;
            }
          }, 1000);
        },
        stopClock(){
          clearInterval(this.interval);
        }
      },
      computed: {
        timeDisplay(){
          const minutes = parseInt(this.currentTimeInSeconds / 60);
          const seconds = this.currentTimeInSeconds % 60;
          const paddedMinutes = ("0" + minutes).slice(-2);
          const paddedSeconds = ("0" + seconds).slice(-2);

          return `${paddedMinutes}:${paddedSeconds}`;
        }
      },
      beforeCreate() {
        if(typeof(Storage) !== "undefined"){//Verificar se a tem suporte à web storage
          if(!localStorage.pomoDuration){//Não tem os tempo na localstorage
            localStorage.focusTime = config.focusTime;
            localStorage.lilBreak = config.lilBreak;
            localStorage.bigBreak = config.bigBreak;
            localStorage.currentState = config.startState;
            localStorage.lilBreaksCounter = config.lilBreaksCounter;
            
          } else{//Tem os tempos na localstorage
            console.log("Já tem registado")
            /* localStorage.removeItem("focusTime")
            localStorage.removeItem("lilBreak")
            localStorage.removeItem("bigBreak") */
          } 
          //console.log(localStorage)
        }else{//Se não houver suporte á web storage
          console.log("oi")
        }
      },
      
    }
</script>

<style>
.container{
  height: 100vh;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: space-between;
}

.main{
  display: flex;
  flex-direction:row;
  align-items: center; 
  justify-content: space-between;
}

.buttons{
  display: flex;
  flex-direction:column;
  align-items: center;
  align-content: space-between;
}

.buttons button p{
  font-size: 0%;
}

.timer{/* Meter animação a ficar mais finoe depois bold outra vez quando começar */
  font-size: 100px;
  font-weight: 700;
  font-style:normal;
  transition: font-weight 1s ease;
}

.timer:hover{
  font-style: italic;
}

button{
  margin: 0.8vw;
  background-color: #D9D9D9;
  border-style: solid;
  border-width: 3px;
  border-color: #A1A1A1;
  border-radius: 20px;
  width: 80px;
  height: 80px;
}

button:hover{
  background-color: #c7c7c7;
}

button:focus{
  background-color: #000;
}

img{
  width: 40px;
  height: 40px;
}
</style>