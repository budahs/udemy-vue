const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      //fullname:''
    };
  },
  watch: {
    counter (value) {
      if(value > 50){
        this.counter = 0
      }
    }
    // name (value) {
    //   if(value === ''){
    //     this.fullname = ''
    //   } else {
    //     this.fullname = value + ' ' + this.lastName
    //   }      
    // },
    // lastName (value) {
    //   if(value === ''){
    //     this.fullname = ''
    //   } else {
    //     this.fullname = this.name + ' ' + value 
    //   }  
    // }
  },
  computed: {
    fullname () {
      console.log('running again')
      if(this.name === '' || this.lastName === '') {
        return ''
      }
      return this.name + ' ' + this.lastName
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

/**
 * Here commented is a watcher that does the samee as the computed method but needs more coding.
 * So better using method. Still there is a case in which we would use a watcher and it's power.
 */

app.mount('#events');
