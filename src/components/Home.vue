<template>
  <div class="container">
    <div id="tittle">
      <h1><a href="https://en.wikipedia.org/wiki/Pomodoro_Technique" target="_blank">Pomo</a> Vue</h1>
    </div>
    <div class="main">
      <div class="buttons">
        <button @click="handleSettingsButton">
          <p class="stateSettings">normal</p>
          <img src="@/assets/settingsButton.svg">
        </button>
        <button @click="handleStartButton">
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
    export default {
        name: 'Home',
        data: () =>{
          const pomodoroDuration = 25;
          const restDuration = 5;
          return {
            currentTimeInSeconds: pomodoroDuration * 60,
            timeRunning: false,
        };
      },
      methods:{
        handleSettingsButton () {
        },
        handleStartButton () {
          if(!this.timeRunning){
            this.playClock("run");
            this.timeRunning = true;
          }else{
            this.playClock("stop");
          }
          
        },
        handleSkipButton () {

        },
        playClock (state) {
          if(state === "run"){
            this.interval = setInterval(() => {
              if(!(this.currentTimeInSeconds == 0)){
                  this.currentTimeInSeconds -= 1;
              }
            }, 1000);
          }else if(state === "stop"){

          }
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
      }
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