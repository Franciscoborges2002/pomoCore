<template>
  <div class="container">
    <div id="tittle">
      <h1>Pomo Vue</h1>
    </div>
    <div class="main">
      <div class="buttons">
        <button>
          <p class="state">normal</p>
          <img src="@/assets/settingsButton.svg">
        </button>
        <button @click="handlestartButton">
          <p class="state">normal</p>
          <img src="@/assets/playButton.svg">
        </button>
        <button>
          <p class="state">normal</p>
          <img src="@/assets/skipButton.svg">
        </button>
      </div>
      <div class="timer">
        {{timeDisplay}}
      </div>
    </div>
    
  </div>
</template>

<script>
    export default {
        name: 'Home',
        data: () =>{
          const pomodoroDuration = 2.5;
          return {
            currentTimeInSeconds: pomodoroDuration * 60,
            buttonsStart:[
              {icon: require('@/assets/settingsButton.svg'),state: "normal",function: "handleSettingsButton"},
              {icon: require('@/assets/playButton.svg'),state: "normal",function: "handleStartButton"},
              {icon: require('@/assets/skipButton.svg'),state: "normal",function: "handleSkipButton"}
            ],
            otherButtons:[
              {icon: require('@/assets/pauseButton.svg'),state: "pause",function: "handlePauseButton"},
              {icon: require('@/assets/skipButton.svg'),state: "setHover",function: "handleSkipButton"}
            ]
        };
      },
      methods:{
        handleSettingsButton () {
          console.log("asdasdasdasd")
        },
        handleStartButton () {
          console.log("asdasd")
        },
        handleSkipButton () {
          console.log("ads")
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

.buttons div p{
  font-size: 0%;
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