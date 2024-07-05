function startCount(duration, display) {

    let timer = duration, minutes, seconds;

    const interval = setInterval(() => {

        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        

    }, 1000)

}