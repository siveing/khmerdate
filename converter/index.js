const { Config } = require("../config");

class DateConverter {
    constructor(date) {
        this.dateTime = date ? date : new Date();
        this.config = new Config();
    }

    formatL() {
        return `${this.day()}/${this.month()}/${this.year()}`;
    }

    formatLL() {
        return `${this.day()} ${this.fullMonth()} ${this.year()}`;
    }

    formatT() {
        return `${this.hour()}:${this.minute()} ${this.shift()}`;
    }

    formatLLL() {
        return `${this.fullDay()} ${this.day()} ${this.fullMonth()} ${this.year()}`;
    }

    formatLLLL() {
        return `ថ្ងៃ${this.fullDay()} ទី${this.day()} ខែ${this.fullMonth()} ឆ្នាំ${this.year()}`;
    }

    dateTimeFormat(format) {
        const formats = {
            'L': this.formatL(),
            'LL': this.formatLL(),
            'LLT': `${this.formatLL()} ${this.formatT()}`,
            'LLL': this.formatLLL(),
            'LLLT': `${this.formatLLL()} ${this.formatT()}`,
            'LLLL': this.formatLLLL(),
            'LLLLT': `${this.formatLLLL()} ${this.formatT()}`
        };

        return formats[format];
    }

    day() {
        return this.config.getNumbers(new Date(this.dateTime).getDate());
    }

    fullDay() {
        return this.config.getDay(new Date(this.dateTime).getDay());
    }

    month() {
        return this.config.getMonth(new Date(this.dateTime).getMonth());
    }

    year() {
        return this.config.getNumbers(new Date(this.dateTime).getFullYear());
    }

    hour() {
        let hour = new Date(this.dateTime).getHours();
        return this.config.getNumbers(hour);
    }

    minute() {
        return this.config.getNumbers(new Date(this.dateTime).getMinutes());
    }

    quarter() {
        let month = new Date(this.dateTime).getMonth() + 1;
        return this.config.getNumbers(Math.ceil(month / 3));
    }

    fullQuarter() {
        return "ត្រីមាសទី" + this.quarter();
    }

    shift() {
        let shiftVal = new Date(this.dateTime).getHours() >= 12 ? "PM" : "AM";
        return this.config.getShift(shiftVal);
    }

    week() {
        let firstOfMonth = new Date(new Date(this.dateTime).getFullYear(), new Date(this.dateTime).getMonth(), 1);
        let weekOfMonth = Math.ceil((new Date(this.dateTime).getDate() + firstOfMonth.getDay()) / 7);

        return this.config.getNumbers(weekOfMonth);
    }

    fullWeek() {
        return "សប្តាហ៍ទី" + this.week();
    }

    weekOfYear() {
        return this.config.numbers(new Date(this.dateTime).getWeek());
    }

    fullWeekOfYear() {
        return "សប្តាហ៍ទី" + this.weekOfYear();
    }

    fullMonth(){
        return this.config.getMonth(new Date().getMonth() + 1);
    }

    format(format) {
        try {
            return this.dateTimeFormat(format);
        } catch (Exception) {
            throw new Exception("Invalid format");
        }
    }

    fromNow(space = true) {
        return this.durationFrom(new Date(), space);
    }

    durationFrom(now, space) {
        let interval = this.toDateTimeFormat().diff(now);
        let suffix = now > this.toDateTimeFormat() ? 'មុន' : 'ទៀត';
        let durationSpace = space ? ' ' : '';

        if (interval.y >= 1) {
            return this.config.getNumbers(interval.y) + durationSpace + 'ឆ្នាំ' + suffix;
        }
        if (interval.m >= 1) {
            return this.config.getNumbers(interval.m) + durationSpace + 'ខែ' + suffix;
        }
        if (interval.d >= 1) {
            return this.config.getNumbers(interval.d) + durationSpace + 'ថ្ងៃ' + suffix;
        }
        if (interval.h >= 1) {
            return this.config.getNumbers(interval.h) + durationSpace + 'ម៉ោង' + suffix;
        }
        if (interval.i >= 1) {
            return this.config.getNumbers(interval.i) + durationSpace + 'នាទី' + suffix;
        }

        return this.config.getNumbers(interval.s) + durationSpace + 'វិនាទី' + suffix;
    }

    toDateTimeFormat() {
        return new Date(this.dateTime);
    }
}

module.exports = {
    DateConverter
}