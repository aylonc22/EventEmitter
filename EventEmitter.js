class EventEmitter{
    constructor(){
        this.events = {};
    }

    //Subscribe to an event
    on(event,listener){
        if(!this.events[event]){
            this.events[event] = [];
        }
        this.events[event].push(listener);
    }

    //Emit an event
    emit(event,...args){
        if(this.events[event]){
            this.events[event].forEach(listener => {               
                listener(...args)
            });
        }
    }

    //Unsubscripe from an event
    off(event,listener){
        if(!this.events[event])return;
        this.events[event] = this.events[event].filter(l=>l!==listener);
    }

    //Subscrive to an event only once
    once(event,listener){
        const onceWrapper = (...args)=>{
            listener(...args);
            this.off(event,onceWrapper);
        };
        this.on(event,onceWrapper);
    }
}

module.exports = EventEmitter;