const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name:''
    };
  },
  methods:{
    setName(event){ //we can accept this argument and you will always get this by  the browser.
      //gives the information about event and  read the current value stored on that event
      this.name = event.target.value;
    },
    add(num){ //we got it here also but we overwrote this with our own custom argument.
    this.counter = this.counter + num; //this method doesnt return anything,because we are using it to run it when a click occurs.
    //clickListener doesnt want a return value.
    },
    substract(num){
      this.counter = this.counter - num;
    }

  }
});

app.mount('#events');
