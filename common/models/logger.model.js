class Logger {
    static log(identify, value) {
        console.log(`%c ${identify}: ${value}`, 'color: green');
    }

    static error(value) {
        console.error(value)
    }
}

module.exports = Logger;