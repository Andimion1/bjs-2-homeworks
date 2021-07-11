class AlarmClock {

    constructor(name) {
        this.name = name;    
        this.alarmCollection = [];
        this.timerId = null;      
    }

    addClock(time, callback, id) {
        if (!id) {throw new Error('не передан параметр id')}
        const isExist = this.alarmCollection.find(item => item.timeId === id);
        if (isExist) {
            console.error('уже есть будильник с таким id');
            return;
        } else {
            let clock = {
                timer: time, 
                callbacker: callback,
                timeId: id,
            }
            this.alarmCollection.push(clock);
            }
    }

    removeClock(id) {
        const isExist = this.alarmCollection.find(item => item.timeId === id);
        if (isExist) {
            console.log (!!isExist);
            console.log('будильник будет удален');
            this.alarmCollection = this.alarmCollection.filter((item) => item.timeId !== id);
        }
        else {
            console.log (!!isExist);
            console.log('такого будильника нет');
        }
    }

    getCurrentFormattedTime() {
        const currentDate = new Date();
        const hours = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : `${currentDate.getHours()}`;
        const minutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : `${currentDate.getMinutes()}`;
        let a = String(hours + ':' + minutes);
        return a;
    }

    checkClock(clock) {
        let curent = this.getCurrentFormattedTime();
        if (clock.timer == curent) { clock.callbacker() }
    }

    start() {
        if(this.timerId == null) {
          this.timerId = setInterval(() => {
            this.alarmCollection.forEach(element => this.checkClock(element))}, 1000
            );
        }
    }

    stop() {
        if (this.timerId !== null) {
            clearInterval(this.timerId);
            this.timerId = null;     
        }
    }

    printAlarms() {
        this.alarmCollection.forEach(element => console.log(element.timeId + "," + element.time));
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}