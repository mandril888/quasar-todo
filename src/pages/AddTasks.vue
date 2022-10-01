<template>
  <q-page class="q-pa-xl">
    <h4 class="q-mt-none">Add tasks</h4>
    <q-input
      v-model="newTask"
      @keyup.enter="addTask"
      bottom-slots
      label="Task name"
      counter
      maxlength="20"
      dense
      ref="inputFocus"
    >
      <template v-slot:before>
        <q-icon name="style" />
      </template>

      <template v-slot:hint> Add your new ToDo task </template>

      <template v-slot:append>
        <q-btn @click="addTask" round dense flat icon="add" />
      </template>
    </q-input>
    {{ newTask }}
  </q-page>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useQuasar } from "quasar";
import { useTasksStore } from "../stores/tasks";

const $q = useQuasar();
const newTask = ref("");
const $tasksStore = useTasksStore();
const inputFocus = ref("");

function addTask() {
  $tasksStore.tasks.tasks[$tasksStore.tasks.tasks.length] = {
    title: newTask.value,
    done: false,
  };

  newTask.value = "";

  $q.notify({
    message: "Task added",
    color: "primary",
  });
}

onMounted(() => {
  inputFocus.value.focus();
});
</script>
