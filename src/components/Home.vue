<template>
  <div class="container">
    <div id="header">
      <h1>
        <a
          href="https://en.wikipedia.org/wiki/Pomodoro_Technique"
          target="_blank"
          >pomo</a
        >Core
      </h1>
    </div>
    <div class="main">
      <div class="buttons corePart left">
        <button @click="showSettingsModal = true">
          <!-- @click="togglePopup('buttonTrigger')" -->
          <p class="stateSettings">normal</p>
          <img src="@/assets/settingsButton.svg" />
          <!-- <SettingsMenu v-if="popupTriggers.buttonTrigger" /> -->
        </button>
        <SettingsModal
          v-show="showSettingsModal"
          @close-modal="showSettingsModal = false"
        />
        <button @click="handleTimeButton">
          <p class="stateMain">normal</p>
          <img v-if="playButtonShow" src="@/assets/playButton.svg" />
          <img v-else src="@/assets/pauseButton.svg" />
        </button>
        <button @click="handleSkipButton">
          <img src="@/assets/skipButton.svg" />
        </button>
      </div>
      <div class="timerContainer corePart center">
        <div class="timer">
          {{ timeDisplay }}
        </div>
        <div class="currentTask">currentTask: {{ currentTask }}</div>
      </div>
      <div class="tasks corePart right">
        <div class="tasksHeader">
          <h2>Tasks</h2>
        </div>
        <div class="tasksBody">
          <div class="taskList">
            <task
              class="individualTask"
              v-for="task in tasks"
              :key="task.id"
              @submitCurrentTask="showCurrentTask"
              @remove="removeTask"
              :task="task"
            />
          </div>
        </div>
        <form class="tasksAddTask" @submit.prevent="addTask(task)">
          <input
            type="text"
            placeholder="Add task"
            v-model="task.description"
          />
          <span>Intervals:</span>
          <input
            class="totalIntervals"
            type="number"
            min="1"
            v-model="task.totalIntervals"
          /><!-- Give error if the user puts 0 here -->
          <button>+</button>
        </form>
      </div>
    </div>
    <audio
      type="audio/mp3"
      src="https://www.youtube.com/watch?v=ZhstyJSNKME"
      autoplay
      loop
    ></audio>
    <footer>
      Made with &#x1F49C; by
      <a href="https://github.com/Franciscoborges2002" target="_blank"
        >Francisco Borges</a
      >.
    </footer>
    <!-- <ModalPopUp :title="teste" :description="testetee" /> -->
  </div>
</template>

<script>
import { ref } from "vue";

import Task from "./Task.vue";
import SettingsMenu from "./SettingsMenu.vue";
import SettingsModal from "./SettingsModal.vue";
import ModalPopUp from "./ModalPopUp.vue";

const config = require("../mainConfig.js");

export default {
  name: "HomeComponent",
  components: {
    Task,
    SettingsModal,
    ModalPopUp,
  },
  setup() {
    const popupTriggers = ref({
      buttonTrigger: false,
    });

    const togglePopup = (trigger) => {
      console.log(popupTriggers.value[trigger]);
      popupTriggers.value[trigger] = !popupTriggers.value[trigger];
    };

    return {
      SettingsMenu,
      popupTriggers,
      togglePopup,
    };
  },
  data: () => {
    const focusTime = localStorage.focusTime;
    /* const lilBreak = localStorage.lilBreak;
          const bigBreak = localStorage.bigBreak;
          const currentState = localStorage.currentState; */
    var useCurrentTask = "";

    if (localStorage.currentTask) {
      useCurrentTask = localStorage.currentTask;
    }

    return {
      currentTimeInSeconds: focusTime * 60,
      timeRunning: false,
      playButtonShow: true,
      tasks: JSON.parse(localStorage.tasks),
      task: {
        checked: false,
        intervalsMade: 0,
        totalIntervals: 1,
      },
      currentTask: useCurrentTask /*Mudar a current task*/,
      showSettingsModal: false,
    };
  },
  methods: {
    handleSettingsButton() {},
    handleTimeButton() {
      console.log(this.playButtonShow);
      this.playButtonShow = !this.playButtonShow;

      if (!this.timeRunning) {
        this.playClock();
        this.timeRunning = true;
      } else {
        this.stopClock();
        this.timeRunning = false;
      }
    },
    handleSkipButton() {},
    playClock() {
      this.interval = setInterval(() => {
        if (!(this.currentTimeInSeconds == 0)) {
          this.currentTimeInSeconds -= 1;
        }
      }, 1000);
    },
    stopClock() {
      clearInterval(this.interval);
    },
    addTask(task) {
      /* Function to add the task to the localStorage*/
      let localStorageTasks = JSON.parse(localStorage.getItem("tasks"));
      task.id = Date.now();

      if (task.description === "" || task.description === undefined) {
        //The description of the task, doesnt have nothing
        alert("You need to add a name for the task!");
        return;
      }

      for (let i = 0; i < localStorageTasks.length; i++) {
        //Verify if the name already exists
        if (localStorageTasks[i].description === task.description) {
          alert("Task name Already exists!");
          return;
        }
      }

      if (!task.totalIntervals) {
        alert("Make sure you insert the number os intervals!");
        return;
      }

      //Create the task object to add
      let taskAdd = {
        id: task.id,
        description: task.description,
        checked: task.checked,
        totalIntervals: task.totalIntervals,
        intervalsMade: 0,
      };

      localStorageTasks.push(taskAdd); //Add the tasks to the the array
      localStorage.setItem("tasks", JSON.stringify(localStorageTasks)); //Add the task to the localStorage

      //If is the first task to add, add to the current task display
      if (this.currentTask === "") {
        localStorage.currentTask = task.description;
        this.currentTask = task.description;
      }

      //Push to the tasks object in vue to display
      this.tasks.push(task);
      this.task = { checked: false, intervalsMade: 0 };

      console.log(this.tasks);
    },
    /* toggleTask(task) { -> See if use in the future
      //change the check value of the task
      let localStorageTasks = JSON.parse(localStorage.getItem("tasks"));
      const localStorageIndexTasks = localStorageTasks.findIndex(item => item.id === task.id);//get the index of the object

      if(localStorageIndexTasks > -1){
        const checked = !localStorageTasks[localStorageIndexTasks].checked;
        localStorageTasks[localStorageIndexTasks].checked = checked;
      }

      localStorage.setItem("tasks", JSON.stringify(localStorageTasks));//save aagain in localStorage

      //Change in the tasks object
      const index = this.tasks.findIndex((item) => item.id === task.id);

      if (index > -1) {
        const checked = !this.tasks[index].checked;
        this.tasks[index].checked = checked;
      }
    }, */
    showCurrentTask(task) {
      this.currentTask = task.description;
      localStorage.setItem("currentTask", task.description);
    },
    removeTask(task) {
      //Remove from localStorage
      let localStorageTasks = JSON.parse(localStorage.getItem("tasks"));
      const localStorageIndexTasks = localStorageTasks.findIndex(item => item.id === task.id);//get the index of the object

      if(localStorageIndexTasks > -1){
        localStorageTasks.splice(localStorageIndexTasks, 1);//Remove from array
      }

      localStorage.setItem("tasks", JSON.stringify(localStorageTasks));//save aagain in localStorage

      //Remove from tasks object
      const indexTasks = this.tasks.findIndex(item => item.id === task.id);
      if(indexTasks > -1){
        this.tasks.splice(indexTasks, 1);
      }
    },
  },
  computed: {
    timeDisplay() {
      const minutes = parseInt(this.currentTimeInSeconds / 60);
      const seconds = this.currentTimeInSeconds % 60;
      const paddedMinutes = ("0" + minutes).slice(-2);
      const paddedSeconds = ("0" + seconds).slice(-2);

      return `${paddedMinutes}:${paddedSeconds}`;
    },
  },
  beforeCreate() {
    if (typeof Storage !== "undefined") {
      //Verificar se a tem suporte à web storage
      if (!localStorage.focusTime) {
        //Não tem os tempo na localstorage
        localStorage.focusTime = config.focusTime;
        localStorage.lilBreak = config.lilBreak;
        localStorage.bigBreak = config.bigBreak;
        localStorage.currentState = config.startState;
        localStorage.lilBreaksCounter = config.lilBreaksCounter;
        localStorage.wantsMusic = config.wantsMusic;
        localStorage.tasks = config.tasks;
        localStorage.currentTask = config.currentTask;
      } else {
        //Tem os tempos na localstorage
        console.log("Já tem registado");
        /* localStorage.removeItem("focusTime")
            localStorage.removeItem("lilBreak")
            localStorage.removeItem("bigBreak") */
      }
      //console.log(localStorage)
    } else {
      //Se não houver suporte á web storage
      console.log("Não existe suporte ao localStorage");
    }
  },
};
</script>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.main {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: nowrap;
}

/*.left.corePart, .right.corePart{
  flex: 1; 
  display: flex;
  min-width: -webkit-min-content; /* Workaround to Chrome bug 
}

.right.corePart {
  justify-content: flex-end;
}*/

#header,
footer {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

iframe {
  display: none;
}

.tasks {
  width: 330px;
  height: 400px;
  background-color: #d9d9d9;
  border-radius: 20px;
}

.tasksHeader {
  width: 100%;
  height: 62px;
  box-shadow: 0 4px 4px 0px #383838;
  border-radius: 20px 20px 0px 0px;
}

.tasksHeader h2 {
  display: flex;
  align-content: center;
  justify-content: center;
}

.tasks .tasksBody {
  padding-top: 10px;
  width: 100%;
  height: 65%;
}

.tasks .tasksAddTask {
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

.tasks .tasksAddTask input {
  width: 80%;
}

.tasks .tasksAddTask button {
  margin: 0.8vw;
  background-color: #d9d9d9;
  border-style: solid;
  border-width: 3px;
  border-color: #a1a1a1;
  border-radius: 20px;
  width: 50px;
  height: 50px;
}

.tasks .tasksAddTask button:hover {
  background-color: #c7c7c7;
}

.tasks .tasksAddTask button:active {
  background-color: olive;
}

.timerContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.timerContainer .currentTask {
  display: flex;
  justify-content: center;
}

.buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: space-between;
}

.buttons button p {
  font-size: 0%;
}

.timer {
  /* Meter animação a ficar mais finoe depois bold outra vez quando começar */
  font-size: 100px;
  font-weight: 700;
  font-style: normal;
  transition: font-weight 1s ease;
}

.timer:hover {
  font-style: italic;
}

/* Style for all buttons*/
button {
  margin: 0.8vw;
  background-color: #d9d9d9;
  border-style: solid;
  border-width: 3px;
  border-color: #a1a1a1;
  border-radius: 20px;
  width: 80px;
  height: 80px;
}

button:hover {
  background-color: #c7c7c7;
}

button:active {
  background-color: olive;
}

img {
  width: 40px;
  height: 40px;
}

.individualTask {
  padding: 5px;
}
</style>
