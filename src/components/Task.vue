<template>
    <div class="taskContainer">
        <div class="taskContent">
            <div class="taskTitle">
                {{ task.description}}
            </div>

            <div class="taskBody">
                {{ task.intervalsMade }} / {{ task.totalIntervals }}
                {{ task.checked }}
            </div>
        </div>

        <div class="taskActions">
            <button @click="$emit('toggle', task)">
                <span v-if="task.checked">Not done!</span>
                <span v-else>Done!</span>
            </button>
            <button>Remove</button>
        </div>
    </div>
</template>

<script>

    export default {
        name: "Task",

        props:{
            task:{
                type: Object,
                required: true
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