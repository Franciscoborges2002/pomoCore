/*
* This file contains the main configuration for the start of the application
*/
module.exports = {
    focusTime: 1500,
    lilBreak: 300,
    bigBreak: 900,
    lilBreaksCounter: 0,
    maxLilBreaks: 3,
    startState: 'focusTime',
    currentState: 'focusTime',
    tasks: '[]',
    currentTask: "{}",
    audio:{
        audio: "sound2",
        volume: 0.1
    }
}