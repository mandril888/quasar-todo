import { reactive } from "vue";
import { defineStore } from "pinia";

export const useTasksStore = defineStore("tasks", () => {
  const tasks = reactive({
    tasks: [
      {
        title: "Task A",
        done: false,
      },
      {
        title: "Task B",
        done: false,
      },
      {
        title: "Task C",
        done: false,
      },
    ],
  });

  return { tasks };
});
