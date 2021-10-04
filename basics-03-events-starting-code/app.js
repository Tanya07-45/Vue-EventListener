const app = Vue.createApp({
  data() {
    return {
      counter: 3, //if counter exceeds 50 and we wanna reset it then watcher shines.
      name:'',
      lastName: '',
     //fullname:'',
    };
  },
  watch:{
counter(value){ //computed property is not best for this type of task.
  if(value>50){
    this.counter =0;
  }
}
  },
//   watch:{ //we didnt call it like data and methods.
// name(value){ //it automatic gets a last value
//   if( value === ''){
//     this.fullname='';
//   }else{
//     this.fullname= value + ' ' + this.lastName;
//   }
  
// },
// lastName(value){
//   if( value === ''){
//     this.fullname='';
//   }else{
//     this.fullname= this.name + ' ' + value;
//   }
// }
//   },
  computed:{
    fullname(){
      console.log("hey you!!");//i have to ask something on this
      if( this.name === '' || this.lastName === ''){//name is a dependency here
        return '';
          }
        return this.name+' '+this.lastName;
        
    },
  
  },
  methods:{
    confirmInput(){
this.confirmName =this.name;
    },
    submitForm(event){
      event.preventDefault();//this would tell browser that form should not be submitted that we dont want that browser default.
      alert('submitted!!');
    },
    setName( event ,lastName){ //we can accept this argument and you will always get this by  the browser.
      this.name = event.target.value ;
    },
    add(num){ //we got it here also but we overwrote this with our own custom argument.
    this.counter = this.counter + num; //this method doesnt return anything,because we are using it to run it when a click occurs.
    //clickListener doesnt want a return value.
    },
    substract(num){
      this.counter = this.counter - num;
    },
    resetInput(){
      this.name='';
    }

  }
});

app.mount('#events');
