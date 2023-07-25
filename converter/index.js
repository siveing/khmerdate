const { Constant } = require("../constant");

class DateConverter {
    constructor(date) {
        this.dateTime = date ? date : new Date();
        this.constant = new Constant();
    }

    formatL() {
        return `${this.day()}/${this.month()}/${this.year()}`;
    }

    formatT() {
        return `${this.hour()}:${this.minute()} ${this.shift()}`;
    }

    formatLL() {
        return `${this.day()} ${this.fullMonth()} ${this.year()}`;
    }
   
    formatLLL() {
        return `${this.fullDay()} ${this.day()} ${this.fullMonth()} ${this.year()}`;
    }

    formatLLLL() {
        return `ថ្ងៃ${this.fullDay()} ទី${this.day()} ខែ${this.fullMonth()} ឆ្នាំ${this.year()}`;
    }

    day() {
        return this.constant.getNumbers(new Date(this.dateTime).getDate());
    }

    fullDay() {
        return this.constant.getDay(new Date(this.dateTime).getDay());
    }

    month() {
        return this.constant.getMonth(new Date(this.dateTime).getMonth());
    }

    year() {
        return this.constant.getNumbers(new Date(this.dateTime).getFullYear());
    }

    hour() {
        let hour = new Date(this.dateTime).getHours();
        return this.constant.getNumbers(hour);
    }

    minute() {
        return this.constant.getNumbers(new Date(this.dateTime).getMinutes());
    }

    shift() {
        let shiftVal = new Date(this.dateTime).getHours() >= 12 ? "PM" : "AM";
        return this.constant.getShift(shiftVal);
    }

    week() {
        let firstOfMonth = new Date(new Date(this.dateTime).getFullYear(), new Date(this.dateTime).getMonth(), 1);
        let weekOfMonth = Math.ceil((new Date(this.dateTime).getDate() + firstOfMonth.getDay()) / 7);

        return this.constant.getNumbers(weekOfMonth);
    }

    weekOfYear() {
        return this.constant.numbers(new Date(this.dateTime).getWeek());
    }

    fullMonth(){
        return this.constant.getMonth(new Date().getMonth() + 1);
    }

    format(format) {
        try {
            return this.dateTimeFormat(format);
        } catch (Exception) {
            throw new Exception("Invalid format");
        }
    }

    dateTimeFormat(format) {
        const formats = {
            'L': this.formatL(),
            'LT':`${this.formatL()} ${this.formatT()}`,
            'LL': this.formatLL(),
            'LLT': `${this.formatLL()} ${this.formatT()}`,
            'LLL': this.formatLLL(),
            'LLLT': `${this.formatLLL()} ${this.formatT()}`,
            'LLLL': this.formatLLLL(),
            'LLLLT': `${this.formatLLLL()} ${this.formatT()}`
        };

        return formats[format];
    }

    fullWeek() {
        return "សប្តាហ៍ទី" + this.week();
    }

    fullWeekOfYear() {
        return "សប្តាហ៍ទី" + this.weekOfYear();
    }
}

module.exports = {
    DateConverter
}