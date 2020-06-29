module.exports = function msToTime(duration, format) {
    var seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24),
        days = Math.floor((duration / (1000 * 60 * 60 * 24)) % 24);

    days = (days < 10) ? "0" + days : days;
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    if (format === "hh:mm:ss") {
        return `${hours}:${minutes}:${seconds}`;
    } else if (format === "dd:hh:mm:ss") {
        return `${days}:${hours}:${minutes}:${seconds}`;
    }
}
