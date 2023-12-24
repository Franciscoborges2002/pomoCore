<template>
  <div class="modal-overlay" @click="$emit('close-modal')">
    <div class="modalOutline" @click.stop>
      <div class="modalInitialPart">
        <button class="closeModal" @click="$emit('close-modal')">X</button>
      </div>
      <div class="modalMainPart">
        <div class="header">
          <h1>Settings:</h1>
        </div>
        <div class="innerOption">
          <h2>Name:</h2>
          <div>
            <input
              type="text"
              class="innerOptionChanger"
              v-bind:id="this.task.id + 'taskName'"
              :value="this.task.description"
            />
          </div>
        </div>
        <div class="innerOption">
          <h2>Intervals:</h2>
          <div>
            <input
              type="number"
              min="0"
              max="1440"
              class="innerOptionChanger"
              v-bind:id="this.task.id + 'intervalsMade'"
              :value="this.task.intervalsMade"
            />
            /
            <input
              type="number"
              min="0"
              max="1440"
              class="innerOptionChanger"
              v-bind:id="this.task.id + 'totalIntervals'"
              :value="this.task.totalIntervals"
            />
          </div>
        </div>
        <div class="innerOption">
          <h2>Done:</h2>
          <div>
            <input
              type="checkbox"
              v-bind:id="this.task.id + 'checkboxDone'"
              v-model="this.task.checked"
            />
          </div>
        </div>
        <div class="innerOption">
          <h2>Working:</h2>
          <div>
            <input
              type="checkbox"
              v-bind:id="this.task.id + 'checkboxWorking'"
              v-model="this.task.working"
            />
          </div>
        </div>
        <div class="innerOption">id: {{ this.task.id }}</div>
      </div>
      <div class="modalBottomPart">
        <div class="dangerStuff">
          <p class="dangerText" @click="deleteTask()">Delete Task</p>
        </div>
        <button class="saveSettings" @click="saveOnLocalStorage()">
          Save!
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskSettingsModal",
  data: () => {
    return {
      showSettingsModal: false,
    };
  },

  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  methods: {
    saveOnLocalStorage() {
      //console.log(this.task)
      let localStorageTasks = JSON.parse(localStorage.getItem("tasks"));//get all the tasks from localstorage
      let localStorageCurrentTask = JSON.parse(//Get current working task from localStorage
        localStorage.getItem("currentTask")
      );
      let itemTask;

      const name = document.getElementById(this.task.id + "taskName").value;
      const intervalsMade = parseInt(
        document.getElementById(this.task.id + "intervalsMade").value
      );
      const totalIntervals = parseInt(
        document.getElementById(this.task.id + "totalIntervals").value
      );
      const done = document.getElementById(
        this.task.id + "checkboxDone"
      ).checked;

      const working = document.getElementById(
        this.task.id + "checkboxWorking"
      ).checked;

      //get the index of the object
      const localStorageIndexTasks = localStorageTasks.findIndex(
        (item) => item.id === this.task.id
      );

      //chenage task
      if (localStorageIndexTasks > -1) {
        itemTask = localStorageTasks[localStorageIndexTasks];

        //change description
        itemTask.description = name;
        itemTask.intervalsMade = intervalsMade;
        itemTask.totalIntervals = totalIntervals;
        itemTask.checked = done;
        itemTask.working = working;
        //console.log("Working task: " + itemTask.working + ". Working from page: " + working)
      }

      //change working part
      //if this task is the one working, but the user changed
      if (localStorageCurrentTask.id === itemTask.id && !working) {
        localStorage.setItem("currentTask", "{}");
      }

      //if there is a working task and he wants to change
      if (Object.keys(localStorageCurrentTask).length > 0 && working) {
        //console.log('Change current task, there already is an working task')
        localStorage.setItem("currentTask", JSON.stringify(itemTask));

        //get the index of the working task in the task of the localStorage
        const localStorageIndexTasksWorking = localStorageTasks.findIndex(
          (item) => item.id === localStorageCurrentTask.id
        );

        if (localStorageIndexTasksWorking > -1) {
          //change the currently working task
          localStorageTasks[localStorageIndexTasksWorking].working = false;
        }
      }

      //if there is no working task and user puts to work
      if (Object.keys(localStorageCurrentTask).length === 0 && working) {
        //console.log('Change current task, but there is no previous task')
        localStorage.setItem("currentTask", JSON.stringify(itemTask));
      }

      //console.log(localStorageTasks);

      //save in localStorage
      localStorage.setItem("tasks", JSON.stringify(localStorageTasks));

      //reload page
      //location.reload();
    },
    deleteTask() {
      if (window.confirm("Do you want to really delete the Task?")) {
        let localStorageTasks = JSON.parse(localStorage.getItem("tasks"));
        let localStorageCurrentTask = JSON.parse(
          localStorage.getItem("currentTask")
        );

        const localStorageIndexTasks = localStorageTasks.findIndex(
          (item) => item.id === this.task.id
        );

        if (localStorageIndexTasks > -1) {
          let itemTask = localStorageTasks[localStorageIndexTasks];

          //get the index of the working task in the task of the localStorage
          const localStorageIndexTasksWorking = localStorageTasks.findIndex(
            (item) => item.id === localStorageCurrentTask.id
          );

          if (localStorageIndexTasksWorking > -1) {
            if (itemTask.id === localStorageCurrentTask.id) {
              //if the currentTas kis the one to be removed remove from the working task
              localStorage.setItem("currentTask", "{}");
            }
          }

          //remove the task from the array
          localStorageTasks.splice(localStorageIndexTasks, 1);

          //save in localStorage
          localStorage.setItem("tasks", JSON.stringify(localStorageTasks));

          //reload page
          location.reload();
        }
      }
    },
  },
};
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

.modalOutline {
  text-align: center;
  background-color: white;
  height: 420px;
  width: 500px;
  margin-top: 10%;
  padding: 30px 0;
  border-radius: 20px;
}

.modalInitialPart {
  display: flex;
  justify-content: end;
  padding-bottom: 2%;
}

.closeModal {
  cursor: pointer;
  font-size: x-large;
  font-weight: 600;
  margin-right: 3%;
  background: none;
  border: none;
  outline: none;
  box-shadow: none;
}

.modalBottomPart {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1%;
}

.header {
  padding-bottom: 30px;
  display: flex;
  justify-content: center;
}

.saveSettings {
  background-color: #727272;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 16px;
  margin-top: 24px;
  transition: all 0.5s;
}

.saveSettings:hover {
  cursor: pointer;
  background-color: #ac003e;
}

.saveSettings:active {
  cursor: pointer;
  background-color: #ac000e;
}

.innerOption {
  display: flex;
  justify-content: space-between;
  padding-bottom: 8px;
  margin-right: 24px;
  margin-left: 24px;
}

.dangerText {
  color: #ac003e;
  text-decoration: underline;
  margin: 0px;
}

.dangerText {
  color: #ac003e;
  text-decoration: underline;
  margin: 0px;
  cursor: pointer;
}
</style>
