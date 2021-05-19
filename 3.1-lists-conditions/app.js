const app = Vue.createApp({
  data() {
    return { 
      goals: [],
      enteredGoalvalue: ''
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalvalue)
    },
    removeGoal (index) {
      this.goals.splice(index, 1)
    }
  }
});

app.mount('#user-goals');
