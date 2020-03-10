module.exports = function toReadable(number) {
    let arr = [];
    let str = number.toString();
    if (number == 0 ) return "zero";
    if (number >= 100) {
        switch (str[0]) {
            case "1":
                arr.push("one hundred")
                break;
            case "2":
                arr.push("two hundred")
                break;
            case "3":
                arr.push("three hundred")
                break;
            case "4":
                arr.push("four hundred")
                break;
            case "5":
                arr.push("five hundred")
                break;
            case "6":
                arr.push("six hundred")
                break;
            case "7":
                arr.push("seven hundred")
                break;
            case "8":
                arr.push("eight hundred")
                break;
            case "9":
                arr.push("nine hundred")
                break;
        }
        switch (str[1]) {
            case "2":
                arr.push("twenty")
                break;
            case "3":
                arr.push("thirty")
                break;
            case "4":
                arr.push("forty")
                break;
            case "5":
                arr.push("fifty")
                break;
            case "6":
                arr.push("sixty")
                break;
            case "7":
                arr.push("seventy")
                break;
            case "8":
                arr.push("eighty")
                break;
            case "9":
                arr.push("ninety")
                break;
        } 
        if (str[1] === "1") {
            switch (str.substr(1, 2)) {
                case "10":
                    arr.push("ten")
                    break;
                case "11":
                    arr.push("eleven")
                    break;
                case "12":
                    arr.push("twelve")
                    break;
                case "13":
                    arr.push("thirteen")
                    break;
                case "14":
                    arr.push("fourteen")
                    break;
                case "15":
                    arr.push("fifteen")
                    break;
                case "16":
                    arr.push("sixteen")
                    break;
                case "17":
                    arr.push("seventeen")
                    break;
                case "18":
                    arr.push("eighteen")
                    break;
                case "19":
                    arr.push("nineteen")
                    break;
            }
        } else {
            switch (str[2]) {
                case "0":
                    break;
                case "1":
                    arr.push("one")
                    break;
                case "2":
                    arr.push("two")
                    break;
                case "3":
                    arr.push("three")
                    break;
                case "4":
                    arr.push("four")
                    break;
                case "5":
                    arr.push("five")
                    break;
                case "6":
                    arr.push("six")
                    break;
                case "7":
                    arr.push("seven")
                    break;
                case "8":
                    arr.push("eight")
                    break;
                case "9":
                    arr.push("nine")
                    break;
                }
            }
        

    } else if (number < 100 && number >=10) {
        switch (str[0]) {
            case "2":
                arr.push("twenty")
                break;
            case "3":
                arr.push("thirty")
                break;
            case "4":
                arr.push("forty")
                break;
            case "5":
                arr.push("fifty")
                break;
            case "6":
                arr.push("sixty")
                break;
            case "7":
                arr.push("seventy")
                break;
            case "8":
                arr.push("eighty")
                break;
            case "9":
                arr.push("ninety")
                break;
        }
        if (str[0] === "1") {
            switch (str.substr(0, 2)) {
                case "10":
                    arr.push("ten")
                    break;
                case "11":
                    arr.push("eleven")
                    break;
                case "12":
                    arr.push("twelve")
                    break;
                case "13":
                    arr.push("thirteen")
                    break;
                case "14":
                    arr.push("fourteen")
                    break;
                case "15":
                    arr.push("fifteen")
                    break;
                case "16":
                    arr.push("sixteen")
                    break;
                case "17":
                    arr.push("seventeen")
                    break;
                case "18":
                    arr.push("eighteen")
                    break;
                case "19":
                    arr.push("nineteen")
                    break;
            }
        } else {
            switch (str[1]) {
                case "0":
                    break;
                case "1":
                    arr.push("one")
                    break;
                case "2":
                    arr.push("two")
                    break;
                case "3":
                    arr.push("three")
                    break;
                case "4":
                    arr.push("four")
                    break;
                case "5":
                    arr.push("five")
                    break;
                case "6":
                    arr.push("six")
                    break;
                case "7":
                    arr.push("seven")
                    break;
                case "8":
                    arr.push("eight")
                    break;
                case "9":
                    arr.push("nine")
                    break;
            }
        }
    } else {
        switch (str[0]) {
            case "0":
                break;
            case "1":
                arr.push("one")
                break;
            case "2":
                arr.push("two")
                break;
            case "3":
                arr.push("three")
                break;
            case "4":
                arr.push("four")
                break;
            case "5":
                arr.push("five")
                break;
            case "6":
                arr.push("six")
                break;
            case "7":
                arr.push("seven")
                break;
            case "8":
                arr.push("eight")
                break;
            case "9":
                arr.push("nine")
                break;
        }
    }

    str = arr.join(" ")
    return str;
}
