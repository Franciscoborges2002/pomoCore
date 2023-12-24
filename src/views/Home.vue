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
      <a
        class="linkGitHub"
        target="_blank"
        href="https://github.com/Franciscoborges2002/pomoCore"
      >
        <img class="gitHubIcon" src="@/assets/gitHub.svg" />
      </a>
    </div>
    <div class="main">
      <div class="buttons corePart left">
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
        <button @click="showSettingsModal = true">
          <!-- @click="togglePopup('buttonTrigger')" -->
          <p class="stateSettings">normal</p>
          <img src="@/assets/settingsButton.svg" />
          <!-- <SettingsMenu v-if="popupTriggers.buttonTrigger" /> -->
        </button>
      </div>
      <div class="timerContainer corePart center">
        <div class="timer">
          {{ timeDisplay }}
        </div>
        <div class="currentTask">
          working on:<span v-if="currentTask">
            {{ currentTask.description }}
          </span>
          <span v-else>something</span>
        </div>
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
              @remove="removeTask"
              @changeWorking="changeWorking"
              :task="task"
            />
          </div>
          <form class="tasksForm" @submit.prevent="addTask(task)">
            <input
              class="taskName"
              type="text"
              placeholder="Task name"
              v-model="task.description"
            />
            <span>Breaks:</span>
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
    </div>
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

import Task from "@/components/Task.vue";
import SettingsModal from "@/components/SettingsModal.vue";

import TimeStates from "@/enums/TimeStates";
const config = require("@/mainConfig.js");

export default {
  name: "HomeComponent",
  components: {
    Task,
    SettingsModal,
  },
  setup() {
    const popupTriggers = ref({
      buttonTrigger: false,
    });

    const togglePopup = (trigger) => {
      //console.log(popupTriggers.value[trigger]);
      popupTriggers.value[trigger] = !popupTriggers.value[trigger];
    };

    return {
      popupTriggers,
      togglePopup,
    };
  },
  data: () => {
    const focusTime = localStorage.focusTime; //getting time in seconds
    const lilBreakTime = localStorage.lilBreak; //getting time in seconds
    const bigBreakTime = localStorage.bigBreak; //getting time in seconds
    const currentState = localStorage.currentState;
    const currentTimeInSeconds = localStorage.currentTimeInSeconds;
    var time2Use;
    var useCurrentTask = "";
    const audio = JSON.parse(localStorage.getItem("audio"));

    if (currentState === TimeStates.focus) {
      time2Use = focusTime;
    }

    if (currentState === TimeStates.littleBreak) {
      time2Use = lilBreakTime;
    }

    if (currentState === TimeStates.bigBreak) {
      time2Use = bigBreakTime;
    }

    if (time2Use > currentTimeInSeconds) {
      time2Use = currentTimeInSeconds;
    }

    //get the current task if exists
    if (localStorage.currentTask) {
      useCurrentTask = JSON.parse(localStorage.currentTask);
    }

    return {
      currentTimeInSeconds: time2Use,
      currentState: currentState,
      focusTime: focusTime,
      lilBreakTime: lilBreakTime,
      bigBreakTime: bigBreakTime,
      timeRunning: false,
      playButtonShow: true,
      tasks: JSON.parse(localStorage.tasks),
      task: {
        checked: false,
        intervalsMade: 0,
        totalIntervals: 1,
      },
      audio: {
        audio: audio.audio,
        volume: audio.volume,
      },
      currentTask: useCurrentTask /*Mudar a current task*/,
      showSettingsModal: false,
    };
  },
  methods: {
    handleSettingsButton() {},
    handleTimeButton() {
      this.playButtonShow = !this.playButtonShow;

      if (!this.timeRunning) {
        this.playClock();
        this.timeRunning = true;
      } else {
        this.stopClock();
        this.timeRunning = false;
        //save the current time in localStorage
        localStorage.setItem("currentTimeInSeconds", this.currentTimeInSeconds);
      }
    },
    handleSkipButton() {
      this.passCurrentState();
    },
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
          alert("Task name already exists!");
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

      //
      localStorageTasks < 1
        ? (taskAdd.working = true)
        : (taskAdd.working = false);

      localStorageTasks.push(taskAdd); //Add the tasks to the the array
      localStorage.setItem("tasks", JSON.stringify(localStorageTasks)); //Add the task to the localStorage

      //If is the first task to add, add to the current task display
      if (this.currentTask === "") {
        localStorage.currentTask = JSON.stringify(taskAdd);
        this.currentTask = taskAdd;
      }

      //Push to the tasks object in vue to display
      this.tasks.push(taskAdd);
      this.task = { checked: false, intervalsMade: 0 };
    },
    removeTask(task) {
      if (window.confirm("Do you really want to delete the task?")) {
        let localStorageTasks = JSON.parse(localStorage.getItem("tasks"));
        //verify the current Task
        if (this.currentTask.id === task.id) {
          localStorage.setItem("currentTask", "{}");
          this.currentTask = "";
        }

        //Remove from localStorage
        const localStorageIndexTasks = localStorageTasks.findIndex(
          (item) => item.id === task.id
        ); //get the index of the object

        if (localStorageIndexTasks > -1) {
          localStorageTasks.splice(localStorageIndexTasks, 1); //Remove from array
        }

        localStorage.setItem("tasks", JSON.stringify(localStorageTasks)); //save aagain in localStorage

        //Remove from tasks object
        const indexTasks = this.tasks.findIndex((item) => item.id === task.id);
        if (indexTasks > -1) {
          this.tasks.splice(indexTasks, 1);
        }
      }
    },
    changeWorking(task) {
      const localStorageTasks = JSON.parse(localStorage.getItem("tasks"));
      let indexWorkingTask;
      //this.currentTask = task;

      if (this.currentTask) {// verify if the task is the current that user wants to change
        indexWorkingTask = localStorageTasks.findIndex(
          (item) => item.id === this.currentTask.id
        ); //get the index of the object

        //Check if there is something in the index
        if (indexWorkingTask > -1) {
          localStorageTasks[indexWorkingTask].working = false;

          let item = this.tasks[indexWorkingTask];

          item.working = false;
        }
      }

      //change the working value of the task
      const indexTaskChange = localStorageTasks.findIndex(
        (item) => item.id === task.id
      ); //get the index of the object

      if (indexTaskChange > -1) {
        //change the one that we are working in
        const working = !localStorageTasks[indexTaskChange].working;
        localStorageTasks[indexTaskChange].working = working;

        task.working = true;
      }

      localStorage.setItem("tasks", JSON.stringify(localStorageTasks)); //save tasks again in localStorage

      //save new current task
      localStorage.setItem("currentTask", JSON.stringify(task));
      this.currentTask = task;
    },
    addInterval(task) {
      //change value in the localStorage
      let localStorageTasks = JSON.parse(localStorage.getItem("tasks"));
      const localStorageIndexTasks = localStorageTasks.findIndex(
        (item) => item.id === task.id
      ); //get the index of the object

      //if there is an index in the localStorage tasks, make the change
      if (localStorageIndexTasks > -1) {
        const item = localStorageTasks[localStorageIndexTasks];

        //If we pass the total intervals, make the item checked/done
        if (!item.checked && item.intervalsMade + 1 >= item.totalIntervals) {
          item.checked = true;
        }

        item.intervalsMade = item.intervalsMade + 1;//Add 1 to the intervals made

        localStorage.setItem("tasks", JSON.stringify(localStorageTasks));//Save it into the locaoStorage
      }

      //check if the item id exists in task
      const index = this.tasks.findIndex((item) => item.id === task.id);

      //If there is an index, make the change
      if (index > -1) {
        const item = this.tasks[index];
        item.intervalsMade = item.intervalsMade + 1;
      }

      //Stop the clock when we make a skip
      this.stopClock();
    },
    passCurrentState() {
      const currentState = localStorage.getItem("currentState");
      const lilBreaksCounter = parseInt(
        localStorage.getItem("lilBreaksCounter")
      );
      const maxLilBreaks = parseInt(localStorage.getItem("maxLilBreaks"));
      //const localStorageTasks = JSON.parse(localStorage.getItem("tasks"));
      //const tasks = this.tasks;

      //If we are currently in focus State
      if (currentState === TimeStates.focus) {
        if (lilBreaksCounter < maxLilBreaks) {
          //If lilBreak is less than the max lil breaks we need to have another liltle break
          localStorage.setItem("currentState", TimeStates.littleBreak);
          this.currentState = TimeStates.littleBreak;

          //get the time to use
          let time2Use = localStorage.lilBreak;

          //set it to the current time in seconds both in app and localStorage
          this.currentTimeInSeconds = time2Use;
          localStorage.setItem("currentTimeInSeconds", time2Use);

          //add 1 to the lilBreaks counter
          localStorage.setItem("lilBreaksCounter", lilBreaksCounter + 1);
        } else {
          //If little break is equal go to bit break
          localStorage.setItem("currentState", TimeStates.bigBreak);
          this.currentState = TimeStates.bigBreak;

          //get the time to use
          let time2Use = localStorage.bigBreak;

          //set it to the current time in seconds both in app and localStorage
          this.currentTimeInSeconds = time2Use;
          localStorage.setItem("currentTimeInSeconds", time2Use);

          //add 1 to the lilBreaks counter
          localStorage.setItem("lilBreaksCounter", 0);
        }

        this.addIntervalTask(this.currentTask);
      } else {
        //If we are on one of the breaks
        localStorage.setItem("currentState", TimeStates.focus);
        this.currentState = TimeStates.focus;

        //get the time to use
        let time2Use = localStorage.focusTime;

        //set it to the current time in seconds both in app and localStorage
        this.currentTimeInSeconds = time2Use;
        localStorage.setItem("currentTimeInSeconds", time2Use);
      }
    },
    addIntervalTask(task) {
      //const currentTask = this.currentTask;
      //get task
      const taskIndex = this.tasks.findIndex((item) => item.id === task.id);

      //add an interval
      if (taskIndex > -1) {
        this.addInterval(this.tasks[taskIndex]);
      }
    },
  },
  computed: {
    timeDisplay() {
      let paddedMinutes, paddedSeconds, minutes, seconds;
      if (this.currentTimeInSeconds < 60) {
        minutes = 0;
        seconds = this.currentTimeInSeconds;
        paddedMinutes = "00";
        paddedSeconds = ("0" + this.currentTimeInSeconds).slice(-2);
      } else {
        minutes = parseInt(this.currentTimeInSeconds / 60);
        seconds = this.currentTimeInSeconds % 60;
        paddedMinutes = ("0" + minutes).slice(-2);
        paddedSeconds = ("0" + seconds).slice(-2);
      }

      //verify if the timer is 0
      if (minutes === 0 && seconds === 0) {
        this.passCurrentState();
        /*         this.handleTimeButton(); */
        var audioRing = new Audio(
          require(`@/assets/sounds/${this.audio.audio}.mp3`)
        );
        audioRing.volume = this.audio.volume;
        audioRing.play();
      }

      return `${paddedMinutes}:${paddedSeconds}`;
    },
  },
  beforeCreate() {
    if (typeof Storage !== "undefined") {
      //verify if has suport to web storage
      if (!localStorage.focusTime) {
        //There is nothing in the local storage
        localStorage.focusTime = config.focusTime;
        localStorage.lilBreak = config.lilBreak;
        localStorage.bigBreak = config.bigBreak;
        localStorage.currentState = config.startState;
        localStorage.lilBreaksCounter = config.lilBreaksCounter;
        localStorage.tasks = config.tasks;
        localStorage.currentTask = config.currentTask;
        localStorage.maxLilBreaks = config.maxLilBreaks;
        localStorage.audio = JSON.stringify(config.audio);
      } else {
        //Already has the things in localStorage
        //console.log("Items registered in localStorage");
      }
    } else {
      //There is no support to web storage
      //console.log("There is no suport to localStorage!");
      alert("There is no suport to localStorage!");
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

#header,
footer {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.tasks {
  width: 330px;
  height: 400px;
  background-color: #d9d9d9;
  border-radius: 20px;
  box-shadow: -2px 6px 21px 2px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -2px 6px 21px 2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -2px 6px 21px 2px rgba(0, 0, 0, 0.75);
}

.tasksHeader {
  width: 100%;
  height: 62px;
  box-shadow: 0 4px 4px 0px #383838;
  border-radius: 20px 20px 0px 0px;
}

.tasksHeader h2 {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tasks .tasksBody {
  width: 100%;
  height: 338px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.taskList {
  overflow-y: auto;
}

.tasksForm {
  /*padding-left: 10px;
  padding-right: 10px;*/
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: flex-end;
}

.tasksForm input {
  width: 80%;
  height: 100%;
  border-radius: 20px;
  padding-left: 10px;
  border: 0px;
}

.tasksForm .taskName {
  border-radius: 0px 20px 20px 20px;
}

.tasksForm .totalIntervals {
  border-radius: 20px 0px 0px 20px;
}

.tasksForm button {
  /*margin: 0.8vw;*/
  background-color: #d9d9d9;
  border-style: solid;
  border-width: 3px;
  border-color: #a1a1a1;
  border-radius: 0px 0px 20px 0px;
  width: 50px;
  height: 30px;
  margin: 0px;
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
  background-color: #d1d1d1;
}

button:active {
  background-color: #c7c7c7;
}

img {
  width: 40px;
  height: 40px;
}

.individualTask {
  width: 98%;
  padding-top: 5px;
  padding-left: 5px;
}

/*SCROLL*/
/* width */
::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px #858585;
  border-radius: 0px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #858585;
  border-radius: 0px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #676767;
}

.gitHubIcon {
  width: 25px;
  height: 25px;
  padding-left: 5px;
}

.linkGitHub {
  width: 25px;
  height: 25px;
  position: absolute;
  right: 10px;
  transition: right 1s;
}

.linkGitHub:hover {
  right: 12px;
}
</style>
