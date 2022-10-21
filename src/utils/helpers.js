// Add helpers here. This is usually code that is just JS and not React code. Example: write a function that
// calculates number of minutes when passed in seconds. Things of this nature that you don't want to copy/paste
// everywhere.

export function getStopwatchTime(time) {
    const minutes =  Math.floor((time / 60000) % 60)
    const seconds = Math.floor((time / 1000) % 60)
    const miliseconds = ((time / 10) % 100)
    return { minutes, seconds, miliseconds }
}

export function getTime(time) {
    const stringTime = `${time}`
    let minutes = 0;
    let seconds = 0;
    let miliseconds = 0;
    if (stringTime.length <= 2) {
        miliseconds = time
    } else if (stringTime.length <=4 ) {
        miliseconds = stringTime.slice(-2)
        seconds = stringTime.slice(-4, -2)
    } else {
        miliseconds = stringTime.slice(-2)
        seconds = stringTime.slice(-4, -2)
        minutes = stringTime.slice(-6, -4)
    }

    return { minutes, seconds, miliseconds }
}
