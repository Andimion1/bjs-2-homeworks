class AlarmClock {

    constructor(name) {
        this.name = name;    
        this.alarmCollection = [];
        this.timerId = null;      
        // Создайте свойство timerId для хранения id таймера без начального значения.
        // Это таймер чего? всего будильника или конкретного звонка?
        // Почему null а не undefined?
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
        const date = new Date();
        let a = String(date.getHours() + ':' + date.getMinutes());
        // Здесь проверка Jasmine не идентифицирует 13:01 с 13:1
        return a;
    }

    checkClock(clock) {
        let curent = this.getCurrentFormattedTime();
        if (clock.timer = curent) { clock.callbacker() }
    }

    start() {
        if(this.timerId == null) {
          this.timerId = setInterval(
            this.alarmCollection.forEach(element => this.checkClock(element)), 1000
            );
            // что вообще делает эта функция перебирая звонки? Зачем она их перебирает?
            // Если значение идентификатора текущего таймера отсутствует, то создайте новый интервал.
            // Какой интервал - не указано. Любой? 1000 мс например? 
            // В этом интервале реализуйте функцию... Почему "в этом интервале" 
            // Это же не В интервале, а ЧЕРЕЗ интервал. В этом же суть setInterval?
            // Результат функции setInterval сохраните в свойстве идентификатора текущего таймера - не понимаю суть вот этого
        }
    }

    stop() {
        if (this.timerId !== null) {
            // Почему null а не undefined?
            clearInterval(this.timerId);
            this.timerId = null;     
            // а вот тут что значит удалить удалите значение из свойства "идентификатор текущего таймера"
            // мы же на предыдущем шаге уже очистили интервал
        }
    }

    printAlarms() {
        this.alarmCollection.forEach(element => console.log(element.timeId + "," + element.time));
    }

    clearAlarms() {
        clearInterval(this.timerId);
        // Вызывает метод остановки интервала. Как можно остановить интервал???
        this.alarmCollection = [];
    }
}