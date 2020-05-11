var Backbone = require('backbone');

var animal = Backbone.Model.extend({
    walk: ()=>{
        console.log("animal walked")
    }
})

var dog = animal.extend({
    walk: ()=>{
        animal.prototype.walk.apply(this);
        console.log("Dog walked");
    }
})

var dumpy = new dog();

dumpy.walk();