const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName:'',
      lastName: ''
    }
  },
  methods:{
    confirmInput () {
      this.confirmedName = this.name
    },
    submitForm (event) {
      //event.preventDefault() // used event modifier instead
      alert('submitted!')
    },
    add (num) {
      this.counter = this.counter + num
    },
    substract (num) {
      this.counter = this.counter - num
    },
    setName (event, lastName) {
      this.name = event.target.value + ' ' + lastName
    }
  }
})

app.mount('#events');
