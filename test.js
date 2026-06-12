let users ={
    firstName :"Raghavendra",
    lastName : "Yallamanda"
}

let printName = function (n,d,k){
    console.log(this.firstName + " " + this.lastName +" " + n +" " + d +" " + k);
}

// let bindMethod = printName.bind(users,'testing.');
// bindMethod('something')

Function.prototype.myBind = function(thisArg,...boundArgs){
    let test = this;
    return function(...callArgs){
         return test.apply(thisArg,[...boundArgs,...callArgs])
    }
}

let testingBind = printName.myBind(users,'great',['testing..','great'])
testingBind([20,303]);