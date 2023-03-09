<template>
  <div class="container">
    <div id="title">
      <h1><a href="https://en.wikipedia.org/wiki/Pomodoro_Technique" target="_blank">pomo</a>Core</h1>
    </div>
    <div class="main">
      <div class="buttons">
        <button @click="togglePopup('buttonTrigger')">
          <p class="stateSettings">normal</p>
          <img src="@/assets/settingsButton.svg">
          <SettingsMenu v-if="popupTriggers.buttonTrigger" />
          
        </button>
        <button @click="handleTimeButton">
          
          <p class="stateMain">normal</p>
          <img v-if="playButtonShow" src="@/assets/playButton.svg">
          <img v-else src="@/assets/pauseButton.svg">
        </button>
        <button @click="handleSkipButton">
          <img src="@/assets/skipButton.svg">
        </button>
      </div>
      <div class="timerContainer">
        <div class="timer">
          {{timeDisplay}}
        </div>
        <div class="currentTask">
          currentTask: {{ currentTask }}
        </div>
      </div>
      <div class="tasks">
        <div class="tasksHeader">
          <h2>Tasks</h2>
        </div>
        <div class="tasksBody">
          <div class="taskList">
            <task v-for="task in tasks" :key="task.id" @toggle="toggleTask" :task="task" />
          </div>
        </div>
        <form class="tasksAddTask" @submit.prevent="addTask(task)">
          <input type="text" placeholder="Add task" v-model="task.description"/>
          <span>Intervals:</span>
          <input type="number" value="1" placeholder="1" min="1" v-model="task.totalIntervals"/><!-- Give error if the user puts 0 here -->
          <button>+</button>
        </form>
      </div>
    </div>
    <footer>
      Made with &#x1F49C; by <a href="https://github.com/Franciscoborges2002" target="_blank">Francisco Borges</a>.
    </footer>
  </div>
</template>

<script>
  import {ref} from 'vue';

  import Task from './Task.vue';
  import SettingsMenu from './SettingsMenu.vue';
import { runInThisContext } from 'vm';

  const config = require('../mainConfig.js');

    export default {
        name: 'Home',
        components:{
          SettingsMenu,
          Task
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
            SettingsMenu,
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
            timeRunning: false,
            playButtonShow: true,
            tasks: [],
            task:{
              checked: false,
              intervalsMade: 0,
              totalIntervals: 1
            },
            currentTask: 'asd'/*Mudar a current task*/
        };
      },
      methods:{
        handleSettingsButton () {
          
        },
        handleTimeButton () {
          console.log(this.playButtonShow)
          this.playButtonShow = !this.playButtonShow;

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
        },
        addTask(task){
          task.id = Date.now();
          this.tasks.push(task);
          /* this.task = { checked: false }; */
        },
        toggleTask(task){
          //const index = this.tasks.findIndex(item => item.id === task.id);

          if(index > -1){
             // const checked = !this.tasks[index].checked;
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

<style scoped>
.container{
  height: 100vh;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: space-between;
}

.main{
  width: 100%;
  display: flex;
  flex-direction:row;
  align-items: center;
  justify-content: center;
  gap: 30em;
}

.tasks{
  width: 330px;
  height: 400px;
  background-color: #D9D9D9;
  border-radius: 20px;
}

.tasksHeader{
  width: 100%;
  height: 62px;
  box-shadow: 0 4px 4px 0px #383838;
  border-radius: 20px 20px 0px 0px;
}

.tasksHeader h2{
  display: flex;
  align-content: center;
  justify-content: center;
}


.tasks .tasksBody{
  padding-top: 10px;
  width: 100%;
  height: 65%;
}

.tasks .tasksAddTask{
  padding-left: 10px;
  padding-right: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  align-content: flex-end;
}

.tasks .tasksAddTask input{
  width: 80%;
}

.tasks .tasksAddTask button{
  margin: 0.8vw;
  background-color: #D9D9D9;
  border-style: solid;
  border-width: 3px;
  border-color: #A1A1A1;
  border-radius: 20px;
  width: 50px;
  height: 50px;
}

.tasks .tasksAddTask button:hover{
  background-color: #c7c7c7;
}

.tasks .tasksAddTask button:active{
  background-color:olive;
}

.timerContainer{
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.timerContainer .currentTask{
  display: flex;
  justify-content: center;
}

.buttons{
  display: flex;
  flex-direction: column;
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

/* Style for all buttons*/
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

button:active{
  background-color:olive;
}

img{
  width: 40px;
  height: 40px;
}
</style>