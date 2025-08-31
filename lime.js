// minimal lime.js stub for HTML5 FNF/PsychEngine
var lime = {
    application: {
        start: function() {
            console.log("Lime stub: application started");
        }
    },
    utils: {},
    sys: {},
    embed: function(name, elementId, width, height, options) {
        console.log("Lime stub: embedding " + name + " into #" + elementId);
    }
};

// if the game tries to run FixedThreadPool
lime.sys.thread = {
    FixedThreadPool: function(count) {
        this.threadsCount = 0;
        this.isShutdown = true;
        this.run = function(task) { if(task) task(); };
        this.shutdown = function() {};
    }
};
