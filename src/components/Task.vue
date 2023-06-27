<template>
  <div class="taskContainer">
    <div class="taskContent">
      <div class="taskBody" v-if="task.checked" style="text-decoration: line-through">
        <span v-if="task.working" style="font-weight: bold">{{
          task.description
        }}</span>
        <span v-else style="font-weight: normal">{{ task.description }}</span>
        ({{ task.intervalsMade }} / {{ task.totalIntervals }})
      </div>

      <div class="taskBody" v-else style="text-decoration: normal">
        <span v-if="task.working" style="font-weight: bold">{{
          task.description
        }}</span>
        <span v-else style="font-weight: normal">{{ task.description }}</span>
        ({{ task.intervalsMade }} / {{ task.totalIntervals }})
      </div>
    </div>

    <div class="taskActions">
      <button>
        <span v-if="task.working" @click="$emit('changeWorking', task)"
          >✏️</span
        >
        <span v-else @click="$emit('changeWorking', task)">📚</span>
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

  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  methods: {
    makeTask(task) {
      this.$emit("submitCurrentTask", task);
    },
  },
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
