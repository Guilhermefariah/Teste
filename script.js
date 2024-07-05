function startCount(duration, display) {

    let timer = duration, minutes, seconds;

    const interval = setInterval(() => {

        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);


    }, 1000)

}