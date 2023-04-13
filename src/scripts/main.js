AOS.init();

const eventDay = new Date("Apr 15, 2023 20:00:00");
const timeStampEvent = eventDay.getTime();



const timeCount = setInterval(function(){
    const day = 1000 * 60 * 60 * 24;
    const hour = 1000 * 60 * 60;
    const minute = 1000 * 60;
    
    const now = new Date();
    const timeStampActual = now.getTime();

    const deltaDistanceEvent = timeStampEvent - timeStampActual;

    const deltaDayEvent = Math.floor(deltaDistanceEvent / day);

    const deltaTimeEvent = Math.floor((deltaDistanceEvent % day) / hour);

    const deltaMinuteEvent = Math.floor((deltaDistanceEvent % hour) / minute);

    const deltaSecondEvent = Math.floor((deltaDistanceEvent % minute) / 1000);
   
    document.getElementById('count').innerHTML = `${deltaDayEvent}d ${deltaTimeEvent}h ${deltaMinuteEvent}m ${deltaSecondEvent}s`;

    if (deltaDistanceEvent < 0){
        clearInterval(timeCount);

        document.getElementById('count').innerHTML = `Evento expirado!`;
    }
}, 1000);