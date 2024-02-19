let myChannel="hardik        "
console.log(myChannel.length)
console.log(myChannel.truelength)  //we want this to use    //we want property not method.
console.log(myChannel.trim().length)


//we want property not method.  what is property vs method????






let myHeros=["thor","spiderman"];

let heroPower={
    thor: "hammer",
    spiderman: "sling"

    // getSpiderPower:function(){
        
    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);         //is function ko kese pta ki me issi ke bare me baat kr rha hu toh is function btane ke liye ki me isi ke baare me baat kr rha hu isliye hme "THIS" lgana pdega.

    }
}

Object.prototype.hitesh = function(){             //kya me prototype me apni trf se inject kr skta hu??  yes, we will add prototype in object and array,function,string sub OBJECT se hoke hi gujr te hai isliye agar hm OBJECT me protype add krdenge toh wo automatically function,array and string me aa jayega.
    console.log(`hitesh is present in all objects`);
}



heroPower.hitesh()
// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)   //teachingsupport sari property access krlega teacher ki.

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()