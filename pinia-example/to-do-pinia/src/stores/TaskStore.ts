import { defineStore } from 'pinia';
import { type task } from "../modules/task";

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [],
    loading: false,
  }),
  getters: {
    favs: (): task[] => {
      // @ts-ignore
      return this.tasks.filter((t) => t.isFav);
    },
    favCount: () => {
      // @ts-ignore
      return this.tasks.reduce((p, c) => {
        return c.isFav ? p + 1 : p;
      }, 0);
    },
    totalCount: (state) => {
      return state.tasks.length;
    },
  },
  actions: {
    async getTasks() {
      this.loading = true;

      try {
        const res = await fetch('http://localhost:3000/tasks');
        if (!res.ok) {
          throw new Error(`Error fetching data: ${res.status}`);
        }

        const data = await res.json();

        this.tasks = data;
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
    async addTask(task: { title: string; isFav: boolean; id: number; }) {
      try {
      // @ts-ignore
        this.tasks.push(task);

        const res = await fetch('http://localhost:3000/tasks', {
          method: 'POST',
          body: JSON.stringify(task),
          headers: { 'Content-Type': 'application/json' },
        });

        if (!res.ok) {
          throw new Error(`Error adding task: ${res.status}`);
        }
      } catch (error) {
        console.error(error);
      }
    },
      // @ts-ignore
    async deleteTask(id) {
      try {
        this.tasks = this.tasks.filter((t) => {
      // @ts-ignore
          return t.id !== id;
        });

        const res = await fetch('http://localhost:3000/tasks/' + id, {
          method: 'DELETE',
        });

        if (!res.ok) {
          throw new Error(`Error deleting task: ${res.status}`);
        }
      } catch (error) {
        console.error(error);
      }
    },
      // @ts-ignore

    async toggleFav(id) {
      try {
      // @ts-ignore
        const task = this.tasks.find((t) => t.id === id);
      // @ts-ignore
        task.isFav = !task.isFav;

        const res = await fetch('http://localhost:3000/tasks/' + id, {
          method: 'PATCH',
      // @ts-ignore
          body: JSON.stringify({ isFav: task.isFav }),
          headers: { 'Content-Type': 'application/json' },
        });

        if (!res.ok) {
          throw new Error(`Error toggling task fav status: ${res.status}`);
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
});
