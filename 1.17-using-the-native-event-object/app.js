const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  computed: {
    fullname () {
      console.log('running again')
      if(this.name === '') {
        return ''
      }
      return this.name + ' ' + 'Garcia'
    }
  },
  methods: {
    outputFullName () {
      console.log('running again')
      if(this.name === '') {
        return ''
      }
      return this.name + ' ' + 'Garcia'
    },
    resetInput () {
      this.name = ''
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    }
  }
});

app.mount('#events');
