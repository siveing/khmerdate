class Constant {
    constructor() {
        this.numbers = {
            0: '០',
            1: '១',
            2: '២',
            3: '៣',
            4: '៤',
            5: '៥',
            6: '៦',
            7: '៧',
            8: '៨',
            9: '៩'
        };

        this.days = ['អាទិត្យ', 'ច័ន្ទ', 'អង្គារ', 'ពុធ', 'ព្រហស្បតិ៍', 'សុក្រ', 'សៅរ៍'];
        this.months = ['មករា', 'កុម្ភៈ', 'មីនា', 'មេសា', 'ឧសភា', 'មិថុនា', 'កក្កដា', 'សីហា', 'កញ្ញា', 'តុលា', 'វិច្ឆិកា', 'ធ្នូ'];
        this.shifts = {
            'AM': 'ព្រឹក',
            'PM': 'ល្ងាច'
        }
    }
    getDay(day) {
        if (day == undefined) return this.days;
        return this.days[day];
    }
    getMonth(month) {
        if (month == undefined) return this.months;
        return this.months[--month];
    }
    getNumbers(number) {
        if (number == undefined) return this.numbers;
        var num = Array.from(number.toString()).map(function (str) {
            return this.numbers[str];
        }, this);

        return num.join('');
    }
    getShift(shift) {
        if (shift == undefined) return this.shifts;
        return this.shifts[shift];
    }
}

module.exports = {
    Constant
};