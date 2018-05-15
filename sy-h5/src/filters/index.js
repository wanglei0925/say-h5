export function currency(num, flg) {
    if (num == undefined) {
        return 0;
    }
    var num = num.toString().replace(/\$|\,/g, '');
    if (isNaN(num)) {
        num = "0";
    }
    var sign = (num == (num = Math.abs(num)));
    var cents = num % 100;
    var num = Math.floor(num / 100).toString();
    if (cents < 10) {
        cents = "0" + cents;
    }
    for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++) {
        num = num.substring(0, num.length - (4 * i + 3)) + ',' +
            num.substring(num.length - (4 * i + 3));
    }
    if (flg == 1) {
        return (((sign) ? '' : '-') + num);
    }
    return (((sign) ? '' : '-') + num + '.' + cents);
}

export function interestTypeName(val) {
    if (val == '1') {
        return '满标后开始计息';
    } else if (val == '2') {
        return '投资后开始计息';
    } else {
        return '';
    }
}
export function repayTypeName(val) {
    if (val == '1') {
        return '一次性连本带息';
    } else if (val == '2') {
        return '按月付息';
    } else if (val == '3') {
        return '按日付息';
    } else {
        return '';
    }
}
export function keepdecimal(num, flg) {
    var num = num.toFixed(flg);
    return num;
}
export function rounding(num, flg) {
    var ten = Math.pow(10, flg)
    var value = parseInt(num * ten) / ten
    return value
}
export function retainNum(num, flg) {
    var num = num.toString().replace(/\$|\,/g, '');
    num = num.substr(0, num.indexOf(".") + flg + 1);
    return num;
}
export function whenzero(num, flg) {
    if (num == undefined || num == 0) {
        return flg;
    }
    return num;
}

export function format(now, mask) {
    if (null == now) {
        return '';
    }
    if (!(now instanceof Date)) {
        now = new Date(now);
    }
    var d = now;
    var zeroize = function (value, length) {
        if (!length) length = 2;
        value = String(value);
        for (var i = 0, zeros = ''; i < (length - value.length); i++) {
            zeros += '0';
        }
        return zeros + value;
    };

    return mask.replace(/"[^"]*"|'[^']*'|\b(?:d{1,4}|m{1,4}|yy(?:yy)?|([hHMstT])\1?|[lLZ])\b/g, function ($0) {
        switch ($0) {
            case 'd':
                return d.getDate();
            case 'dd':
                return zeroize(d.getDate());
            case 'ddd':
                return ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'][d.getDay()];
            case 'dddd':
                return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][d.getDay()];
            case 'M':
                return d.getMonth() + 1;
            case 'MM':
                return zeroize(d.getMonth() + 1);
            case 'MMM':
                return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][d.getMonth()];
            case 'MMMM':
                return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][d.getMonth()];
            case 'yy':
                return String(d.getFullYear()).substr(2);
            case 'yyyy':
                return d.getFullYear();
            case 'h':
                return d.getHours() % 12 || 12;
            case 'hh':
                return zeroize(d.getHours() % 12 || 12);
            case 'H':
                return d.getHours();
            case 'HH':
                return zeroize(d.getHours());
            case 'm':
                return d.getMinutes();
            case 'mm':
                return zeroize(d.getMinutes());
            case 's':
                return d.getSeconds();
            case 'ss':
                return zeroize(d.getSeconds());
            case 'l':
                return zeroize(d.getMilliseconds(), 3);
            case 'L':
                var m = d.getMilliseconds();
                if (m > 99) m = Math.round(m / 10);
                return zeroize(m);
            case 'tt':
                return d.getHours() < 12 ? 'am' : 'pm';
            case 'TT':
                return d.getHours() < 12 ? 'AM' : 'PM';
            case 'Z':
                return d.toUTCString().match(/[A-Z]+$/);
            // Return quoted strings with the surrounding quotes removed
            default:
                return $0.substr(1, $0.length - 2);
        }
    });
};

