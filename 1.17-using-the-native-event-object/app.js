const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
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

/** In this example with methods when pushing buttons since vue does not know  what the method outputFullName() does it also refreshes this part.
 *  That is why in next lessons we will do this diffrently.
 * 
*/

app.mount('#events');
