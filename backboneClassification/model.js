var Backbone = require('backbone');

var Game = Backbone.Model.extend({
    initialize: function(){
        console.log("A new game has been released");
    }
});

var game = new Game();

game.set("name", "call of duty")
game.set("platforms", ['PC', 'xbox', 'ps4'])
game.set("steam_required", false)
game.set("details", {
    name: "call of duty: Black OPS IV",
    company: "Ubisoft",
    system_requirement: {
        cpu: "Intel i5-3.2 GHz",
        memory: "16 GB",
        GPU: "NVIDIA/AMD 4GB or greater",
        HDD: "60 GB or greater",
        Direct_X : 11
    }
})

console.log(game.get("name"));
game.unset("details")
console.log(game)
game.clear();
console.log(game)