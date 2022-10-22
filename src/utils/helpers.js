// Add helpers here. This is usually code that is just JS and not React code. Example: write a function that
// calculates number of minutes when passed in seconds. Things of this nature that you don't want to copy/paste
// everywhere.

// 1000 ms = 1 second

export function getTime(time) {
    const minutes =  Math.floor((time / 60000) % 60)
    const seconds = Math.floor((time / 1000) % 60)
    const miliseconds = ((time / 10) % 100)
    return { minutes, seconds, miliseconds }
}