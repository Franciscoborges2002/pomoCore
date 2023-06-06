<template>
  <div class="taskContainer">
    <div class="taskContent">
      <div class="taskTitle">
        <!--                 <span v-if="task.checked">✔️</span>
                <span v-else-if="makingTask(task)">⭕</span>
                <span v-else>❌</span> -->
        <span>{{ task.description }}</span> ({{ task.intervalsMade }} /
        {{ task.totalIntervals }})
      </div>
      current Task : {{ currentTask }}

      <!--             <div class="taskBody">
                {{ task.intervalsMade }} / {{ task.totalIntervals }}
                {{ task.checked }}
            </div> -->
    </div>

    <div class="taskActions">
      <button @click="makingTask(task)">
        <span v-if="this.currentTask === task.description">✏️</span>
        <span v-else>📚</span>
      </button>
      <button>
        <span>⚙️</span>
      </button>
      <button @click="$emit('remove', task)">❌</button>
    </div>
  </div>
</template>

<script>

export default {
    name: "TaskComponent",

    props:{
        task:{
            type: Object,
            required: true
        }
    },

    data: () =>{

        var useCurrentTask = "";

            if (localStorage.currentTask) {
            useCurrentTask = localStorage.currentTask;
            }

        return{
            currentTask: useCurrentTask
        }
    },
    methods:{
        makingTask(task){
            console.log(this.currentTask)
            this.currentTask = task.description;
            this.$emit('submitCurrentTask', task);
            return true;
        }
    }
};
</script>

<style scoped>
.taskContainer {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
}

.checked {
  font-size: large;
  color: black;
}

.taskActions {
  display: flex;
  flex-direction: row;
  gap: 2%;
  justify-content: center;
  align-items: center;
}
</style>
