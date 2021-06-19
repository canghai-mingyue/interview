for (var i = 0; i < 5; i++) {
    (function(j){
        setTimeout(() => {
            console.log(j)
          })
    })(i)   
  }  


// const var let

  let obj = {
      a(){
          console.log(this, 'adethis')
      },
      b: () => {
        console.log(this, 'bdethis')
      }
  }

  obj.a()
  obj.b()

  let c = obj.a;
  let d = obj.b;
  c();
  d();
  