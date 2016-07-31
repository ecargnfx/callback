function outer(string,greeting){
  greeting(string);
}

function hello(sentence){
  console.log("hello " + sentence);
}

function bonjour(sentence){
  console.log("bonjour " + sentence);
}

function hola(sentence){
  console.log("hola " + sentence);
}



outer("sup ", bonjour);

outer("Pedro ", hola);
outer("Grace", function(param){
  console.log("hi there" + param);
})
outer("Stefano ", hello)

function funcWithinFunc(){
  return function(word){
    console.log(word);
  }
}

outer("hello world ", funcWithinFunc('jumping jacks'))

outer("hello world ", function(word){
  console.log(word);
})

// THIS is...
(function(word){
  console.log(word)
})("hello world ");


// basically the same as THIS
var thing = function(word){
  console.log(word)
}
// and THIS
thing("hello world ");

socket = {
  data: {},
  on: function(str, fn){
    var that = this;
    that.createData();
    if (str === "special socket") {
      setTimeout(function(){
        fn(that.data)
      },1000);
    }
  },
  createData: function(){
    var rand = Math.random
    this.data.values = [rand(), rand(), rand(), rand()];
  }
}

socket.on('special socket', function(data){
  data.values.forEach(function(value){
    console.log(value);
  });
});

object= {
  inner: {
    meth: function(){
      // this is object.inner
    }
  },
  meth: function() {
    // this is the object
  }
}
object.meth()
object.inner.meth()
