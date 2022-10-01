<template>
  <q-page class="q-pa-xl bg-grey-2 column">
    <h4 class="q-mt-none">ToDo</h4>
    <q-list>
      <q-item
        class="bg-white q-my-sm"
        :class="{ 'done bg-green-2': task.done }"
        v-for="(task, index) in $tasksStore.tasks.tasks"
        :key="task.title"
        @click="task.done = !task.done"
        clickable
        v-ripple
      >
        <q-item-section avatar>
          <q-checkbox
            v-model="task.done"
            color="$primary"
            class="no-pointer-events"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ task.title }}</q-item-label>
        </q-item-section>
        <q-item-section v-if="task.done" side>
          <q-btn
            @click.stop="deleteTask(index)"
            flat
            round
            dense
            color="primary"
            icon="delete"
          />
        </q-item-section>
      </q-item>
    </q-list>
    <div
      v-if="!$tasksStore.tasks.tasks.length"
      class="no-tasks absolute-center"
    >
      <q-icon name="check" size="100px" color="primary" />
      <div class="text-h5 text-primary text-center">No tasks</div>
    </div>
  </q-page>
</template>

<script setup>
import { reactive } from "vue";
import { useQuasar } from "quasar";
import { useTasksStore } from "../stores/tasks";

const $q = useQuasar();

const $tasksStore = useTasksStore();

function deleteTask(element) {
  $q.dialog({
    title: "Confirm",
    message: "Really delete?",
    cancel: true,
    persistent: true,
  }).onOk(() => {
    $tasksStore.tasks.tasks.splice(element, 1);
    $q.notify({
      message: "Task deleted",
      color: "primary",
    });
  });
}
</script>

<style lang="scss">
.done {
  .q-item__label {
    text-decoration: line-through;
    color: #bbb;
  }
}
.no-tasks {
  opacity: 0.6;
}
</style>
