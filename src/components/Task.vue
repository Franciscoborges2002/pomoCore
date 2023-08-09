<template>
  <div class="taskContainer">
    <div class="taskContent">
      <div
        class="taskBody"
        v-if="task.checked"
        style="text-decoration: line-through"
      >
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
        <span v-if="task.working" @click="makeTask(task)">✏️</span>
        <span v-else @click="makeTask(task)">📚</span
        ><!-- $emit('changeWorking', task) -->
      </button>
      <TaskSettingsModal
        v-show="showSettingsModal"
        @close-modal="showSettingsModal = false"
        :task="this.task"
      />
      <button @click="showSettingsModal = true">
        <span>⚙️</span>
      </button>
      <button @click="$emit('remove', task)">❌</button>
    </div>
  </div>
</template>

<script>
import TaskSettingsModal from "@/components/TaskSettingsModal.vue";

export default {
  name: "TaskComponent",
  components: {
    TaskSettingsModal,
  },
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
    makeTask(task) {
      console.log(this);
      this.$emit("changeWorking", task);
    },
  },
};
</script>

<style scoped>
button {
  border: 0px;
  cursor: pointer;
  background-color: rgba(195, 195, 195, 0.5);
  transition: background-color 0.2s;
}

button:hover {
  background-color: rgba(195, 195, 195, 0.7);
}

button:active {
  background-color: rgb(134, 134, 134);
}

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
  gap: 5px;
  justify-content: center;
  align-items: center;
}
</style>
