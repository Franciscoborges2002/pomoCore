<template>
    <div class="taskContainer">
        <div class="taskContent">
            <div class="taskTitle">
                <span v-if="task.checked">✔️</span>
                <span v-else>❌</span>
                {{ task.description }}
            </div>

            <div class="taskBody">
                {{ task.intervalsMade }} / {{ task.totalIntervals }}
                {{ task.checked }}
            </div>
        </div>

        <div class="taskActions">
            <button @click="markCurrentTask(task)">aa</button>
            <button @click="$emit('toggle', task)">
                <span v-if="task.checked">❌</span>
                <span v-else>✔️</span>
            </button>
            <button>Remove</button>
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

        methods:{
            markCurrentTask(task){
                localStorage.currenTask = task.description;
            }
        }
    };

</script>

<style scoped>
.taskContainer{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;

}

.checked{
    font-size: small;
    color:black;
}
</style>