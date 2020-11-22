//hours
const firstofHR = document.getElementById('hr1st');
const secondofHR = document.getElementById('hr2t');

const s1sthr1 = document.getElementById('1sthr1');
const s1sthr0 = document.getElementById('1sthr0');
const s1sthr2 = document.getElementById('1sthr2');
const s1sthr3 = document.getElementById('1sthr3');
const s1sthr4 = document.getElementById('1sthr4');
const s1sthr5 = document.getElementById('1sthr5');
const s1sthr6 = document.getElementById('1sthr6');

const s2ndhr0 = document.getElementById('2ndhr0');
const s2ndhr1 = document.getElementById('2ndhr1');
const s2ndhr2 = document.getElementById('2ndhr2');
const s2ndhr3 = document.getElementById('2ndhr3');
const s2ndhr4 = document.getElementById('2ndhr4');
const s2ndhr5 = document.getElementById('2ndhr5');
const s2ndhr6 = document.getElementById('2ndhr6');
const s2ndhr7 = document.getElementById('2ndhr7');
const s2ndhr8 = document.getElementById('2ndhr8');
const s2ndhr9 = document.getElementById('2ndhr9');
const s2ndhr10 = document.getElementById('2ndhr10');
const s2ndhr11 = document.getElementById('2ndhr11');

const pm = document.getElementById('pm');
const am = document.getElementById('am');
const maridizer = document.getElementById('maridizer');

//minutes
const firstofmin = document.getElementById('min1st');
const secondofmin = document.getElementById('min2st');
const s1min0 = document.getElementById('1min0');
const s1min1 = document.getElementById('1min1');
const s1min2 = document.getElementById('1min2');
const s1min3 = document.getElementById('1min3');
const s1min4 = document.getElementById('1min4');
const s1min5 = document.getElementById('1min5');
const s1min7 = document.getElementById('1min7');
const s1min6 = document.getElementById('1min6');
const s2min0 = document.getElementById('2min0');
const s2min1 = document.getElementById('2min1');
const s2min2 = document.getElementById('2min2');
const s2min3 = document.getElementById('2min3');
const s2min4 = document.getElementById('2min4');
const s2min5 = document.getElementById('2min5');
const s2min6 = document.getElementById('2min6');
const s2min7 = document.getElementById('2min7');
const s2min8 = document.getElementById('2min8');
const s2min9 = document.getElementById('2min9');
const s2min10 = document.getElementById('2min10')
const s2min11 = document.getElementById('2min11')

//seconds
const firstofsec = document.getElementById('sec1st');
const secondofsec = document.getElementById('sec2st');
const s1sec0 = document.getElementById('1sec0');
const s1sec1 = document.getElementById('1sec1');
const s1sec2 = document.getElementById('1sec2');
const s1sec3 = document.getElementById('1sec3');
const s1sec4 = document.getElementById('1sec4');
const s1sec5 = document.getElementById('1sec5');
const s1sec6 = document.getElementById('1sec6');
const s1sec7 = document.getElementById('1sec7');
const s2sec0 = document.getElementById('2sec0');
const s2sec1 = document.getElementById('2sec1');
const s2sec2 = document.getElementById('2sec2');
const s2sec3 = document.getElementById('2sec3');
const s2sec4 = document.getElementById('2sec4');
const s2sec5 = document.getElementById('2sec5');
const s2sec6 = document.getElementById('2sec6');
const s2sec7 = document.getElementById('2sec7');
const s2sec8 = document.getElementById('2sec8');
const s2sec9 = document.getElementById('2sec9');
const s2sec10 = document.getElementById('2sec10');
const s2sec11 = document.getElementById('2sec11');

//let test = -1;

clocktick()
setInterval(() => { clocktick() }, 1000)

function clocktick() {
    var date = new Date;

    console.log(date.getHours(), date.getMinutes(), date.getSeconds())

    //test++;
    //Hours
    switch (date.getHours()) {
        case 0:// 12am
            secondofHR.style.transform = "translatey(-12vw)"
            maridizer.style.transform = "translatey(-0vw)"

            firstofHR.style.transform = "translatey(-18vw)"//1
            s1sthr0.style.opacity = "0.1"
            s1sthr1.style.opacity = "0.4"
            s1sthr2.style.opacity = "0.7"
            s1sthr3.style.opacity = "1"
            s1sthr4.style.opacity = "0.7"
            s1sthr5.style.opacity = "0.4"
            s1sthr6.style.opacity = "0.4"

            s2ndhr0.style.opacity = "0.4"
            s2ndhr1.style.opacity = "0.7"
            s2ndhr2.style.opacity = "1"
            s2ndhr3.style.opacity = "0.7"
            s2ndhr4.style.opacity = "0.4"
            s2ndhr5.style.opacity = "0.4"
            s2ndhr6.style.opacity = "0.4"
            s2ndhr7.style.opacity = "0.4"
            s2ndhr8.style.opacity = "0.4"
            s2ndhr9.style.opacity = "0.4"
            s2ndhr10.style.opacity = "0.4"
            s2ndhr11.style.opacity = "0.4"
            am.style.opacity = "1"
            pm.style.opacity = "0.7"
            break;
        case 1:// 1am
            secondofHR.style.transform = "translatey(-6vw)";
            maridizer.style.transform = "translatey(-0vw)";

            firstofHR.style.transform = "translatey(-24vw)"//0
            s1sthr0.style.opacity = "0"
            s1sthr1.style.opacity = "0.1"
            s1sthr2.style.opacity = "0.4"
            s1sthr3.style.opacity = "0.7"
            s1sthr4.style.opacity = "1"
            s1sthr5.style.opacity = "0.7"
            s1sthr6.style.opacity = "0.4"

            s2ndhr0.style.opacity = "0.7"
            s2ndhr1.style.opacity = "1"
            s2ndhr2.style.opacity = "0.7"
            s2ndhr3.style.opacity = "0.4"
            s2ndhr4.style.opacity = "0.4"
            s2ndhr5.style.opacity = "0.4"
            s2ndhr6.style.opacity = "0.4"
            s2ndhr7.style.opacity = "0.4"
            s2ndhr8.style.opacity = "0.4"
            s2ndhr9.style.opacity = "0.4"
            s2ndhr10.style.opacity = "0.4"
            s2ndhr11.style.opacity = "0.4"
            am.style.opacity = "1"
            pm.style.opacity = "0.7"
            break;
        case 2:// 2am
            secondofHR.style.transform = "translatey(-12vw)";
            maridizer.style.transform = "translatey(-0vw)";

            firstofHR.style.transform = "translatey(-24vw)"//0
            s1sthr0.style.opacity = "0"
            s1sthr1.style.opacity = "0.1"
            s1sthr2.style.opacity = "0.4"
            s1sthr3.style.opacity = "0.7"
            s1sthr4.style.opacity = "1"
            s1sthr5.style.opacity = "0.7"
            s1sthr6.style.opacity = "0.4"

            s2ndhr0.style.opacity = "0.4"
            s2ndhr1.style.opacity = "0.7"
            s2ndhr2.style.opacity = "1"
            s2ndhr3.style.opacity = "0.7"
            s2ndhr4.style.opacity = "0.4"
            s2ndhr5.style.opacity = "0.4"
            s2ndhr6.style.opacity = "0.4"
            s2ndhr7.style.opacity = "0.4"
            s2ndhr8.style.opacity = "0.4"
            s2ndhr9.style.opacity = "0.4"
            s2ndhr10.style.opacity = "0.4"
            s2ndhr11.style.opacity = "0.4"
            am.style.opacity = "1"
            pm.style.opacity = "0.7"
            break;
        case 3:// 3am
            secondofHR.style.transform = "translatey(-18vw)";
            maridizer.style.transform = "translatey(-0vw)";

            firstofHR.style.transform = "translatey(-24vw)"//0
            s1sthr0.style.opacity = "0"
            s1sthr1.style.opacity = "0.1"
            s1sthr2.style.opacity = "0.4"
            s1sthr3.style.opacity = "0.7"
            s1sthr4.style.opacity = "1"
            s1sthr5.style.opacity = "0.7"
            s1sthr6.style.opacity = "0.4"

            s2ndhr0.style.opacity = "0.1"
            s2ndhr1.style.opacity = "0.4"
            s2ndhr2.style.opacity = "0.7"
            s2ndhr3.style.opacity = "1"
            s2ndhr4.style.opacity = "0.7"
            s2ndhr5.style.opacity = "0.4"
            s2ndhr6.style.opacity = "0.4"
            s2ndhr7.style.opacity = "0.4"
            s2ndhr8.style.opacity = "0.4"
            s2ndhr9.style.opacity = "0.4"
            s2ndhr10.style.opacity = "0.4"
            s2ndhr11.style.opacity = "0.4"
            am.style.opacity = "1"
            pm.style.opacity = "0.7"
            break;
        case 4:// 4am
            secondofHR.style.transform = "translatey(-24vw)";
            maridizer.style.transform = "translatey(-0vw)";

            firstofHR.style.transform = "translatey(-24vw)"//0
            s1sthr0.style.opacity = "0"
            s1sthr1.style.opacity = "0.1"
            s1sthr2.style.opacity = "0.4"
            s1sthr3.style.opacity = "0.7"
            s1sthr4.style.opacity = "1"
            s1sthr5.style.opacity = "0.7"
            s1sthr6.style.opacity = "0.4"

            s2ndhr0.style.opacity = "0"
            s2ndhr1.style.opacity = "0.1"
            s2ndhr2.style.opacity = "0.4"
            s2ndhr3.style.opacity = "0.7"
            s2ndhr4.style.opacity = "1"
            s2ndhr5.style.opacity = "0.7"
            s2ndhr6.style.opacity = "0.4"
            s2ndhr7.style.opacity = "0.4"
            s2ndhr8.style.opacity = "0.4"
            s2ndhr9.style.opacity = "0.4"
            s2ndhr10.style.opacity = "0.4"
            s2ndhr11.style.opacity = "0.4"
            am.style.opacity = "1"
            pm.style.opacity = "0.7"
            break;
        case 5:// 5am
            secondofHR.style.transform = "translatey(-30vw)";
            maridizer.style.transform = "translatey(-0vw)";

            firstofHR.style.transform = "translatey(-24vw)"//0
            s1sthr0.style.opacity = "0"
            s1sthr1.style.opacity = "0.1"
            s1sthr2.style.opacity = "0.4"
            s1sthr3.style.opacity = "0.7"
            s1sthr4.style.opacity = "1"
            s1sthr5.style.opacity = "0.7"
            s1sthr6.style.opacity = "0.4"

            s2ndhr0.style.opacity = "0"
            s2ndhr1.style.opacity = "0"
            s2ndhr2.style.opacity = "0.1"
            s2ndhr3.style.opacity = "0.4"
            s2ndhr4.style.opacity = "0.7"
            s2ndhr5.style.opacity = "1"
            s2ndhr6.style.opacity = "0.7"
            s2ndhr7.style.opacity = "0.4"
            s2ndhr8.style.opacity = "0.4"
            s2ndhr9.style.opacity = "0.4"
            s2ndhr10.style.opacity = "0.4"
            s2ndhr11.style.opacity = "0.4"
            am.style.opacity = "1"
            pm.style.opacity = "0.7"
            break;
        case 6:// 6am
            secondofHR.style.transform = "translatey(-36vw)";
            maridizer.style.transform = "translatey(-0vw)";

            firstofHR.style.transform = "translatey(-24vw)"//0
            s1sthr0.style.opacity = "0"
            s1sthr1.style.opacity = "0.1"
            s1sthr2.style.opacity = "0.4"
            s1sthr3.style.opacity = "0.7"
            s1sthr4.style.opacity = "1"
            s1sthr5.style.opacity = "0.7"
            s1sthr6.style.opacity = "0.4"

            s2ndhr0.style.opacity = "0"
            s2ndhr1.style.opacity = "0"
            s2ndhr2.style.opacity = "0"
            s2ndhr3.style.opacity = "0.1"
            s2ndhr4.style.opacity = "0.4"
            s2ndhr5.style.opacity = "0.7"
            s2ndhr6.style.opacity = "1"
            s2ndhr7.style.opacity = "0.7"
            s2ndhr8.style.opacity = "0.4"
            s2ndhr9.style.opacity = "0.4"
            s2ndhr10.style.opacity = "0.4"
            s2ndhr11.style.opacity = "0.4"
            am.style.opacity = "1"
            pm.style.opacity = "0.7"
            break;
        case 7:// 7am
            secondofHR.style.transform = "translatey(-42vw)";
            maridizer.style.transform = "translatey(-0vw)";

            firstofHR.style.transform = "translatey(-24vw)"//0
            s1sthr0.style.opacity = "0"
            s1sthr1.style.opacity = "0.1"
            s1sthr2.style.opacity = "0.4"
            s1sthr3.style.opacity = "0.7"
            s1sthr4.style.opacity = "1"
            s1sthr5.style.opacity = "0.7"
            s1sthr6.style.opacity = "0.4"

            s2ndhr0.style.opacity = "0"
            s2ndhr1.style.opacity = "0"
            s2ndhr2.style.opacity = "0"
            s2ndhr3.style.opacity = "0"
            s2ndhr4.style.opacity = "0.1"
            s2ndhr5.style.opacity = "0.4"
            s2ndhr6.style.opacity = "0.7"
            s2ndhr7.style.opacity = "1"
            s2ndhr8.style.opacity = "0.7"
            s2ndhr9.style.opacity = "0.4"
            s2ndhr10.style.opacity = "0.4"
            s2ndhr11.style.opacity = "0.4"
            am.style.opacity = "1"
            pm.style.opacity = "0.7"
            break;
        case 8:// 8am
            secondofHR.style.transform = "translatey(-48vw)";
            maridizer.style.transform = "translatey(-0vw)";

            firstofHR.style.transform = "translatey(-24vw)"//0
            s1sthr0.style.opacity = "0"
            s1sthr1.style.opacity = "0.1"
            s1sthr2.style.opacity = "0.4"
            s1sthr3.style.opacity = "0.7"
            s1sthr4.style.opacity = "1"
            s1sthr5.style.opacity = "0.7"
            s1sthr6.style.opacity = "0.4"

            s2ndhr0.style.opacity = "0"
            s2ndhr1.style.opacity = "0"
            s2ndhr2.style.opacity = "0"
            s2ndhr3.style.opacity = "0"
            s2ndhr4.style.opacity = "0"
            s2ndhr5.style.opacity = "0.1"
            s2ndhr6.style.opacity = "0.4"
            s2ndhr7.style.opacity = "0.7"
            s2ndhr8.style.opacity = "1"
            s2ndhr9.style.opacity = "0.7"
            s2ndhr10.style.opacity = "0.4"
            s2ndhr11.style.opacity = "0.1"
            am.style.opacity = "1"
            pm.style.opacity = "0.7"
            break;
        case 9:// 9am
            secondofHR.style.transform = "translatey(-54vw)";
            maridizer.style.transform = "translatey(-0vw)";

            firstofHR.style.transform = "translatey(-24vw)"//0
            s1sthr0.style.opacity = "0"
            s1sthr1.style.opacity = "0.1"
            s1sthr2.style.opacity = "0.4"
            s1sthr3.style.opacity = "0.7"
            s1sthr4.style.opacity = "1"
            s1sthr5.style.opacity = "0.7"
            s1sthr6.style.opacity = "0.4"

            s2ndhr0.style.opacity = "0"
            s2ndhr1.style.opacity = "0"
            s2ndhr2.style.opacity = "0"
            s2ndhr3.style.opacity = "0"
            s2ndhr4.style.opacity = "0"
            s2ndhr5.style.opacity = "0"
            s2ndhr6.style.opacity = "0.1"
            s2ndhr7.style.opacity = "0.4"
            s2ndhr8.style.opacity = "0.7"
            s2ndhr9.style.opacity = "1"
            s2ndhr10.style.opacity = "0.7"
            s2ndhr11.style.opacity = "0.4"
            am.style.opacity = "1"
            pm.style.opacity = "0.7"
            break;
        case 10:// 10am
            secondofHR.style.transform = "translatey(-0vw)";
            maridizer.style.transform = "translatey(-0vw)";

            firstofHR.style.transform = "translatey(-18vw)"//1
            s1sthr0.style.opacity = "0.1"
            s1sthr1.style.opacity = "0.4"
            s1sthr2.style.opacity = "0.7"
            s1sthr3.style.opacity = "1"
            s1sthr4.style.opacity = "0.7"
            s1sthr5.style.opacity = "0.4"
            s1sthr6.style.opacity = "0.4"

            s2ndhr0.style.opacity = "1"
            s2ndhr1.style.opacity = "0.7"
            s2ndhr2.style.opacity = "0.4"
            s2ndhr3.style.opacity = "0.4"
            s2ndhr4.style.opacity = "0.4"
            s2ndhr5.style.opacity = "0.4"
            s2ndhr6.style.opacity = "0.4"
            s2ndhr7.style.opacity = "0.4"
            s2ndhr8.style.opacity = "0.4"
            s2ndhr9.style.opacity = "0.4"
            s2ndhr10.style.opacity = "0.4"
            s2ndhr11.style.opacity = "0.4"
            am.style.opacity = "1"
            pm.style.opacity = "0.7"
            break;
        case 11:// 11am
            secondofHR.style.transform = "translatey(-6vw)";
            maridizer.style.transform = "translatey(-0vw)";

            firstofHR.style.transform = "translatey(-18vw)"//1
            s1sthr0.style.opacity = "0.1"
            s1sthr1.style.opacity = "0.4"
            s1sthr2.style.opacity = "0.7"
            s1sthr3.style.opacity = "1"
            s1sthr4.style.opacity = "0.7"
            s1sthr5.style.opacity = "0.4"
            s1sthr6.style.opacity = "0.4"

            s2ndhr0.style.opacity = "0.7"
            s2ndhr1.style.opacity = "1"
            s2ndhr2.style.opacity = "0.7"
            s2ndhr3.style.opacity = "0.4"
            s2ndhr4.style.opacity = "0.4"
            s2ndhr5.style.opacity = "0.4"
            s2ndhr6.style.opacity = "0.4"
            s2ndhr7.style.opacity = "0.4"
            s2ndhr8.style.opacity = "0.4"
            s2ndhr9.style.opacity = "0.4"
            s2ndhr10.style.opacity = "0.4"
            s2ndhr11.style.opacity = "0.4"
            am.style.opacity = "1"
            pm.style.opacity = "0.7"
            break;
        case 12:// 12pm
            secondofHR.style.transform = "translatey(-12vw)";
            maridizer.style.transform = "translatey(-6vw)";

            firstofHR.style.transform = "translatey(-18vw)"//1
            s1sthr0.style.opacity = "0.1"
            s1sthr1.style.opacity = "0.4"
            s1sthr2.style.opacity = "0.7"
            s1sthr3.style.opacity = "1"
            s1sthr4.style.opacity = "0.7"
            s1sthr5.style.opacity = "0.4"
            s1sthr6.style.opacity = "0.4"

            s2ndhr0.style.opacity = "0.4"
            s2ndhr1.style.opacity = "0.7"
            s2ndhr2.style.opacity = "1"
            s2ndhr3.style.opacity = "0.7"
            s2ndhr4.style.opacity = "0.4"
            s2ndhr5.style.opacity = "0.4"
            s2ndhr6.style.opacity = "0.4"
            s2ndhr7.style.opacity = "0.4"
            s2ndhr8.style.opacity = "0.4"
            s2ndhr9.style.opacity = "0.4"
            s2ndhr10.style.opacity = "0.4"
            s2ndhr11.style.opacity = "0.4"
            am.style.opacity = "0.7"
            pm.style.opacity = "1"
            break;
        case 13:// 1pm
            secondofHR.style.transform = "translatey(-6vw)";
            maridizer.style.transform = "translatey(-6vw)";

            firstofHR.style.transform = "translatey(-24vw)"//0
            s1sthr0.style.opacity = "0"
            s1sthr1.style.opacity = "0.1"
            s1sthr2.style.opacity = "0.4"
            s1sthr3.style.opacity = "0.7"
            s1sthr4.style.opacity = "1"
            s1sthr5.style.opacity = "0.7"
            s1sthr6.style.opacity = "0.4"

            s2ndhr0.style.opacity = "0.7"
            s2ndhr1.style.opacity = "1"
            s2ndhr2.style.opacity = "0.7"
            s2ndhr3.style.opacity = "0.4"
            s2ndhr4.style.opacity = "0.4"
            s2ndhr5.style.opacity = "0.4"
            s2ndhr6.style.opacity = "0.4"
            s2ndhr7.style.opacity = "0.4"
            s2ndhr8.style.opacity = "0.4"
            s2ndhr9.style.opacity = "0.4"
            s2ndhr10.style.opacity = "0.4"
            s2ndhr11.style.opacity = "0.4"
            am.style.opacity = "0.7"
            pm.style.opacity = "1"
            break;
        case 14:// 2pm
            secondofHR.style.transform = "translatey(-12vw)";
            maridizer.style.transform = "translatey(-6vw)";

            firstofHR.style.transform = "translatey(-24vw)"//0
            s1sthr0.style.opacity = "0"
            s1sthr1.style.opacity = "0.1"
            s1sthr2.style.opacity = "0.4"
            s1sthr3.style.opacity = "0.7"
            s1sthr4.style.opacity = "1"
            s1sthr5.style.opacity = "0.7"
            s1sthr6.style.opacity = "0.4"

            s2ndhr0.style.opacity = "0.4"
            s2ndhr1.style.opacity = "0.7"
            s2ndhr2.style.opacity = "1"
            s2ndhr3.style.opacity = "0.7"
            s2ndhr4.style.opacity = "0.4"
            s2ndhr5.style.opacity = "0.4"
            s2ndhr6.style.opacity = "0.4"
            s2ndhr7.style.opacity = "0.4"
            s2ndhr8.style.opacity = "0.4"
            s2ndhr9.style.opacity = "0.4"
            s2ndhr10.style.opacity = "0.4"
            s2ndhr11.style.opacity = "0.4"
            am.style.opacity = "0.7"
            pm.style.opacity = "1"
            break;
        case 15:// 3pm
            secondofHR.style.transform = "translatey(-18vw)";
            maridizer.style.transform = "translatey(-6vw)";

            firstofHR.style.transform = "translatey(-24vw)"//0
            s1sthr0.style.opacity = "0"
            s1sthr1.style.opacity = "0.1"
            s1sthr2.style.opacity = "0.4"
            s1sthr3.style.opacity = "0.7"
            s1sthr4.style.opacity = "1"
            s1sthr5.style.opacity = "0.7"
            s1sthr6.style.opacity = "0.4"

            s2ndhr0.style.opacity = "0.1"
            s2ndhr1.style.opacity = "0.4"
            s2ndhr2.style.opacity = "0.7"
            s2ndhr3.style.opacity = "1"
            s2ndhr4.style.opacity = "0.7"
            s2ndhr5.style.opacity = "0.4"
            s2ndhr6.style.opacity = "0.4"
            s2ndhr7.style.opacity = "0.4"
            s2ndhr8.style.opacity = "0.4"
            s2ndhr9.style.opacity = "0.4"
            s2ndhr10.style.opacity = "0.4"
            s2ndhr11.style.opacity = "0.4"
            am.style.opacity = "0.7"
            pm.style.opacity = "1"
            break;
        case 16:// 4pm
            secondofHR.style.transform = "translatey(-24vw)";
            maridizer.style.transform = "translatey(-6vw)";

            firstofHR.style.transform = "translatey(-24vw)"//0
            s1sthr0.style.opacity = "0"
            s1sthr1.style.opacity = "0.1"
            s1sthr2.style.opacity = "0.4"
            s1sthr3.style.opacity = "0.7"
            s1sthr4.style.opacity = "1"
            s1sthr5.style.opacity = "0.7"
            s1sthr6.style.opacity = "0.4"

            s2ndhr0.style.opacity = "0"
            s2ndhr1.style.opacity = "0.1"
            s2ndhr2.style.opacity = "0.4"
            s2ndhr3.style.opacity = "0.7"
            s2ndhr4.style.opacity = "1"
            s2ndhr5.style.opacity = "0.7"
            s2ndhr6.style.opacity = "0.4"
            s2ndhr7.style.opacity = "0.4"
            s2ndhr8.style.opacity = "0.4"
            s2ndhr9.style.opacity = "0.4"
            s2ndhr10.style.opacity = "0.4"
            s2ndhr11.style.opacity = "0.4"
            am.style.opacity = "0.7"
            pm.style.opacity = "1"
            break;
        case 17:// 5pm
            secondofHR.style.transform = "translatey(-30vw)";
            maridizer.style.transform = "translatey(-6vw)";

            firstofHR.style.transform = "translatey(-24vw)"//0
            s1sthr0.style.opacity = "0"
            s1sthr1.style.opacity = "0.1"
            s1sthr2.style.opacity = "0.4"
            s1sthr3.style.opacity = "0.7"
            s1sthr4.style.opacity = "1"
            s1sthr5.style.opacity = "0.7"
            s1sthr6.style.opacity = "0.4"

            s2ndhr0.style.opacity = "0"
            s2ndhr1.style.opacity = "0"
            s2ndhr2.style.opacity = "0.1"
            s2ndhr3.style.opacity = "0.4"
            s2ndhr4.style.opacity = "0.7"
            s2ndhr5.style.opacity = "1"
            s2ndhr6.style.opacity = "0.7"
            s2ndhr7.style.opacity = "0.4"
            s2ndhr8.style.opacity = "0.4"
            s2ndhr9.style.opacity = "0.4"
            s2ndhr10.style.opacity = "0.4"
            s2ndhr11.style.opacity = "0.4"
            am.style.opacity = "0.7"
            pm.style.opacity = "1"
            break;
        case 18:// 6pm
            secondofHR.style.transform = "translatey(-36vw)";
            maridizer.style.transform = "translatey(-6vw)";

            firstofHR.style.transform = "translatey(-24vw)"//0
            s1sthr0.style.opacity = "0"
            s1sthr1.style.opacity = "0.1"
            s1sthr2.style.opacity = "0.4"
            s1sthr3.style.opacity = "0.7"
            s1sthr4.style.opacity = "1"
            s1sthr5.style.opacity = "0.7"
            s1sthr6.style.opacity = "0.4"

            s2ndhr0.style.opacity = "0"
            s2ndhr1.style.opacity = "0"
            s2ndhr2.style.opacity = "0"
            s2ndhr3.style.opacity = "0.1"
            s2ndhr4.style.opacity = "0.4"
            s2ndhr5.style.opacity = "0.7"
            s2ndhr6.style.opacity = "1"
            s2ndhr7.style.opacity = "0.7"
            s2ndhr8.style.opacity = "0.4"
            s2ndhr9.style.opacity = "0.4"
            s2ndhr10.style.opacity = "0.4"
            s2ndhr11.style.opacity = "0.4"
            am.style.opacity = "0.7"
            pm.style.opacity = "1"
            break;
        case 19:// 7pm
            secondofHR.style.transform = "translatey(-42vw)";
            maridizer.style.transform = "translatey(-6vw)";

            firstofHR.style.transform = "translatey(-24vw)"//0
            s1sthr0.style.opacity = "0"
            s1sthr1.style.opacity = "0.1"
            s1sthr2.style.opacity = "0.4"
            s1sthr3.style.opacity = "0.7"
            s1sthr4.style.opacity = "1"
            s1sthr5.style.opacity = "0.7"
            s1sthr6.style.opacity = "0.4"

            s2ndhr0.style.opacity = "0"
            s2ndhr1.style.opacity = "0"
            s2ndhr2.style.opacity = "0"
            s2ndhr3.style.opacity = "0"
            s2ndhr4.style.opacity = "0.1"
            s2ndhr5.style.opacity = "0.4"
            s2ndhr6.style.opacity = "0.7"
            s2ndhr7.style.opacity = "1"
            s2ndhr8.style.opacity = "0.7"
            s2ndhr9.style.opacity = "0.4"
            s2ndhr10.style.opacity = "0.4"
            s2ndhr11.style.opacity = "0.4"
            am.style.opacity = "0.7"
            pm.style.opacity = "1"
            break;
        case 20:// 8pm
            secondofHR.style.transform = "translatey(-48vw)";
            maridizer.style.transform = "translatey(-6vw)";

            firstofHR.style.transform = "translatey(-24vw)"//0
            s1sthr0.style.opacity = "0"
            s1sthr1.style.opacity = "0.1"
            s1sthr2.style.opacity = "0.4"
            s1sthr3.style.opacity = "0.7"
            s1sthr4.style.opacity = "1"
            s1sthr5.style.opacity = "0.7"
            s1sthr6.style.opacity = "0.4"

            s2ndhr0.style.opacity = "0"
            s2ndhr1.style.opacity = "0"
            s2ndhr2.style.opacity = "0"
            s2ndhr3.style.opacity = "0"
            s2ndhr4.style.opacity = "0"
            s2ndhr5.style.opacity = "0.1"
            s2ndhr6.style.opacity = "0.4"
            s2ndhr7.style.opacity = "0.7"
            s2ndhr8.style.opacity = "1"
            s2ndhr9.style.opacity = "0.7"
            s2ndhr10.style.opacity = "0.4"
            s2ndhr11.style.opacity = "0.1"
            am.style.opacity = "0.7"
            pm.style.opacity = "1"
            break;
        case 21:// 9pm
            secondofHR.style.transform = "translatey(-54vw)";
            maridizer.style.transform = "translatey(-6vw)";

            firstofHR.style.transform = "translatey(-24vw)"//0
            s1sthr0.style.opacity = "0"
            s1sthr1.style.opacity = "0.1"
            s1sthr2.style.opacity = "0.4"
            s1sthr3.style.opacity = "0.7"
            s1sthr4.style.opacity = "1"
            s1sthr5.style.opacity = "0.7"
            s1sthr6.style.opacity = "0.4"

            s2ndhr0.style.opacity = "0"
            s2ndhr1.style.opacity = "0"
            s2ndhr2.style.opacity = "0"
            s2ndhr3.style.opacity = "0"
            s2ndhr4.style.opacity = "0"
            s2ndhr5.style.opacity = "0"
            s2ndhr6.style.opacity = "0.1"
            s2ndhr7.style.opacity = "0.4"
            s2ndhr8.style.opacity = "0.7"
            s2ndhr9.style.opacity = "1"
            s2ndhr10.style.opacity = "0.7"
            s2ndhr11.style.opacity = "0.4"
            am.style.opacity = "0.7"
            pm.style.opacity = "1"
            break;
        case 22:// 10pm
            secondofHR.style.transform = "translatey(-0vw)";
            maridizer.style.transform = "translatey(-6vw)";

            firstofHR.style.transform = "translatey(-18vw)"//1
            s1sthr0.style.opacity = "0.1"
            s1sthr1.style.opacity = "0.4"
            s1sthr2.style.opacity = "0.7"
            s1sthr3.style.opacity = "1"
            s1sthr4.style.opacity = "0.7"
            s1sthr5.style.opacity = "0.4"
            s1sthr6.style.opacity = "0.4"

            s2ndhr0.style.opacity = "1"
            s2ndhr1.style.opacity = "0.7"
            s2ndhr2.style.opacity = "0.4"
            s2ndhr3.style.opacity = "0.4"
            s2ndhr4.style.opacity = "0.4"
            s2ndhr5.style.opacity = "0.4"
            s2ndhr6.style.opacity = "0.4"
            s2ndhr7.style.opacity = "0.4"
            s2ndhr8.style.opacity = "0.4"
            s2ndhr9.style.opacity = "0.4"
            s2ndhr10.style.opacity = "0.4"
            s2ndhr11.style.opacity = "0.4"
            am.style.opacity = "0.7"
            pm.style.opacity = "1"
            break;
        case 23:// 11pm
            secondofHR.style.transform = "translatey(-6vw)"
            maridizer.style.transform = "translatey(-6vw)"

            firstofHR.style.transform = "translatey(-18vw)"//1
            s1sthr0.style.opacity = "0.1"
            s1sthr1.style.opacity = "0.4"
            s1sthr2.style.opacity = "0.7"
            s1sthr3.style.opacity = "1"
            s1sthr4.style.opacity = "0.7"
            s1sthr5.style.opacity = "0.4"
            s1sthr6.style.opacity = "0.4"

            s2ndhr0.style.opacity = "0.7"
            s2ndhr1.style.opacity = "1"
            s2ndhr2.style.opacity = "0.7"
            s2ndhr3.style.opacity = "0.4"
            s2ndhr4.style.opacity = "0.4"
            s2ndhr5.style.opacity = "0.4"
            s2ndhr6.style.opacity = "0.4"
            s2ndhr7.style.opacity = "0.4"
            s2ndhr8.style.opacity = "0.4"
            s2ndhr9.style.opacity = "0.4"
            s2ndhr10.style.opacity = "0.4"
            s2ndhr11.style.opacity = "0.4"
            am.style.opacity = "0.7"
            pm.style.opacity = "1"
            break;
    }

    //Minutes
    switch (date.getMinutes()) {
        case 0:
            firstofmin.style.transform = "translatey(-0vw)";
            secondofmin.style.transform = "translatey(-0vw)";

            s1min0.style.opacity = "1"
            s1min1.style.opacity = "0.7"
            s1min2.style.opacity = "0.4"
            s1min3.style.opacity = "0.4"
            s1min4.style.opacity = "0.4"
            s1min5.style.opacity = "0.4"
            s1min6.style.opacity = "0.4"
            s1min7.style.opacity = "0.4"

            s2min0.style.opacity = "1"
            s2min1.style.opacity = "0.7"
            s2min2.style.opacity = "0.4"
            s2min3.style.opacity = "0.4"
            s2min4.style.opacity = "0.4"
            s2min5.style.opacity = "0.4"
            s2min6.style.opacity = "0.4"
            s2min7.style.opacity = "0.4"
            s2min8.style.opacity = "0.4"
            s2min9.style.opacity = "0.4"
            s2min10.style.opacity = "0.4"
            s2min11.style.opacity = "0.4"
            break;
        case 1:
            firstofmin.style.transform = "translatey(-0vw)";
            secondofmin.style.transform = "translatey(-6vw)";

            s1min0.style.opacity = "1"
            s1min1.style.opacity = "0.7"
            s1min2.style.opacity = "0.4"
            s1min3.style.opacity = "0.4"
            s1min4.style.opacity = "0.4"
            s1min5.style.opacity = "0.4"
            s1min6.style.opacity = "0.4"
            s1min7.style.opacity = "0.4"

            s2min0.style.opacity = "0.7"
            s2min1.style.opacity = "1"
            s2min2.style.opacity = "0.7"
            s2min3.style.opacity = "0.4"
            s2min4.style.opacity = "0.4"
            s2min5.style.opacity = "0.4"
            s2min6.style.opacity = "0.4"
            s2min7.style.opacity = "0.4"
            s2min8.style.opacity = "0.4"
            s2min9.style.opacity = "0.4"
            s2min10.style.opacity = "0.4"
            s2min11.style.opacity = "0.4"
            break;
        case 2:
            firstofmin.style.transform = "translatey(-0vw)";
            secondofmin.style.transform = "translatey(-12vw)";

            s1min0.style.opacity = "1"
            s1min1.style.opacity = "0.7"
            s1min2.style.opacity = "0.4"
            s1min3.style.opacity = "0.4"
            s1min4.style.opacity = "0.4"
            s1min5.style.opacity = "0.4"
            s1min6.style.opacity = "0.4"
            s1min7.style.opacity = "0.4"

            s2min0.style.opacity = "0.4"
            s2min1.style.opacity = "0.7"
            s2min2.style.opacity = "1"
            s2min3.style.opacity = "0.7"
            s2min4.style.opacity = "0.4"
            s2min5.style.opacity = "0.4"
            s2min6.style.opacity = "0.4"
            s2min7.style.opacity = "0.4"
            s2min8.style.opacity = "0.4"
            s2min9.style.opacity = "0.4"
            s2min10.style.opacity = "0.4"
            s2min11.style.opacity = "0.4"
            break;
        case 3:
            firstofmin.style.transform = "translatey(-0vw)";
            secondofmin.style.transform = "translatey(-18vw)";

            s1min0.style.opacity = "1"
            s1min1.style.opacity = "0.7"
            s1min2.style.opacity = "0.4"
            s1min3.style.opacity = "0.4"
            s1min4.style.opacity = "0.4"
            s1min5.style.opacity = "0.4"
            s1min6.style.opacity = "0.4"
            s1min7.style.opacity = "0.4"

            s2min0.style.opacity = "0.1"
            s2min1.style.opacity = "0.4"
            s2min2.style.opacity = "0.7"
            s2min3.style.opacity = "1"
            s2min4.style.opacity = "0.7"
            s2min5.style.opacity = "0.4"
            s2min6.style.opacity = "0.4"
            s2min7.style.opacity = "0.4"
            s2min8.style.opacity = "0.4"
            s2min9.style.opacity = "0.4"
            s2min10.style.opacity = "0.4"
            s2min11.style.opacity = "0.4"
            break;
        case 4:
            firstofmin.style.transform = "translatey(-0vw)";
            secondofmin.style.transform = "translatey(-24vw)";

            s1min0.style.opacity = "1"
            s1min1.style.opacity = "0.7"
            s1min2.style.opacity = "0.4"
            s1min3.style.opacity = "0.4"
            s1min4.style.opacity = "0.4"
            s1min5.style.opacity = "0.4"
            s1min6.style.opacity = "0.4"
            s1min7.style.opacity = "0.4"

            s2min0.style.opacity = "0"
            s2min1.style.opacity = "0.1"
            s2min2.style.opacity = "0.4"
            s2min3.style.opacity = "0.7"
            s2min4.style.opacity = "1"
            s2min5.style.opacity = "0.7"
            s2min6.style.opacity = "0.4"
            s2min7.style.opacity = "0.4"
            s2min8.style.opacity = "0.4"
            s2min9.style.opacity = "0.4"
            s2min10.style.opacity = "0.4"
            s2min11.style.opacity = "0.4"
            break;
        case 5:
            firstofmin.style.transform = "translatey(-0vw)";
            secondofmin.style.transform = "translatey(-30vw)";

            s1min0.style.opacity = "1"
            s1min1.style.opacity = "0.7"
            s1min2.style.opacity = "0.4"
            s1min3.style.opacity = "0.4"
            s1min4.style.opacity = "0.4"
            s1min5.style.opacity = "0.4"
            s1min6.style.opacity = "0.4"
            s1min7.style.opacity = "0.4"

            s2min0.style.opacity = "0"
            s2min1.style.opacity = "0"
            s2min2.style.opacity = "0.1"
            s2min3.style.opacity = "0.4"
            s2min4.style.opacity = "0.7"
            s2min5.style.opacity = "1"
            s2min6.style.opacity = "0.7"
            s2min7.style.opacity = "0.4"
            s2min8.style.opacity = "0.4"
            s2min9.style.opacity = "0.4"
            s2min10.style.opacity = "0.4"
            s2min11.style.opacity = "0.4"
            break;
        case 6:
            firstofmin.style.transform = "translatey(-0vw)";
            secondofmin.style.transform = "translatey(-36vw)";

            s1min0.style.opacity = "1"
            s1min1.style.opacity = "0.7"
            s1min2.style.opacity = "0.4"
            s1min3.style.opacity = "0.4"
            s1min4.style.opacity = "0.4"
            s1min5.style.opacity = "0.4"
            s1min6.style.opacity = "0.4"
            s1min7.style.opacity = "0.4"

            s2min0.style.opacity = "0"
            s2min1.style.opacity = "0"
            s2min2.style.opacity = "0"
            s2min3.style.opacity = "0.1"
            s2min4.style.opacity = "0.4"
            s2min5.style.opacity = "0.7"
            s2min6.style.opacity = "1"
            s2min7.style.opacity = "0.7"
            s2min8.style.opacity = "0.4"
            s2min9.style.opacity = "0.4"
            s2min10.style.opacity = "0.4"
            s2min11.style.opacity = "0.4"
            break;
        case 7:
            firstofmin.style.transform = "translatey(-0vw)";
            secondofmin.style.transform = "translatey(-42vw)";

            s1min0.style.opacity = "1"
            s1min1.style.opacity = "0.7"
            s1min2.style.opacity = "0.4"
            s1min3.style.opacity = "0.4"
            s1min4.style.opacity = "0.4"
            s1min5.style.opacity = "0.4"
            s1min6.style.opacity = "0.4"
            s1min7.style.opacity = "0.4"

            s2min0.style.opacity = "0"
            s2min1.style.opacity = "0"
            s2min2.style.opacity = "0"
            s2min3.style.opacity = "0"
            s2min4.style.opacity = "0.1"
            s2min5.style.opacity = "0.4"
            s2min6.style.opacity = "0.7"
            s2min7.style.opacity = "1"
            s2min8.style.opacity = "0.7"
            s2min9.style.opacity = "0.4"
            s2min10.style.opacity = "0.4"
            s2min11.style.opacity = "0.4"
            break;
        case 8:
            firstofmin.style.transform = "translatey(-0vw)";
            secondofmin.style.transform = "translatey(-48vw)";

            s1min0.style.opacity = "1"
            s1min1.style.opacity = "0.7"
            s1min2.style.opacity = "0.4"
            s1min3.style.opacity = "0.4"
            s1min4.style.opacity = "0.4"
            s1min5.style.opacity = "0.4"
            s1min6.style.opacity = "0.4"
            s1min7.style.opacity = "0.4"

            s2min0.style.opacity = "0"
            s2min1.style.opacity = "0"
            s2min2.style.opacity = "0"
            s2min3.style.opacity = "0"
            s2min4.style.opacity = "0"
            s2min5.style.opacity = "0.1"
            s2min6.style.opacity = "0.4"
            s2min7.style.opacity = "0.7"
            s2min8.style.opacity = "1"
            s2min9.style.opacity = "0.7"
            s2min10.style.opacity = "0.4"
            s2min11.style.opacity = "0.4"
            break;
        case 9:
            firstofmin.style.transform = "translatey(-0vw)";
            secondofmin.style.transform = "translatey(-54vw)";

            s1min0.style.opacity = "1"
            s1min1.style.opacity = "0.7"
            s1min2.style.opacity = "0.4"
            s1min3.style.opacity = "0.4"
            s1min4.style.opacity = "0.4"
            s1min5.style.opacity = "0.4"
            s1min6.style.opacity = "0.4"
            s1min7.style.opacity = "0.4"

            s2min0.style.opacity = "0"
            s2min1.style.opacity = "0"
            s2min2.style.opacity = "0"
            s2min3.style.opacity = "0"
            s2min4.style.opacity = "0"
            s2min5.style.opacity = "0"
            s2min6.style.opacity = "0.1"
            s2min7.style.opacity = "0.4"
            s2min8.style.opacity = "0.7"
            s2min9.style.opacity = "1"
            s2min10.style.opacity = "0.7"
            s2min11.style.opacity = "0.4"
            break;
        case 10:
            firstofmin.style.transform = "translatey(-6vw)";
            secondofmin.style.transform = "translatey(-0vw)";

            s1min0.style.opacity = "0.7"
            s1min1.style.opacity = "1"
            s1min2.style.opacity = "0.7"
            s1min3.style.opacity = "0.4"
            s1min4.style.opacity = "0.4"
            s1min5.style.opacity = "0.4"
            s1min6.style.opacity = "0.4"
            s1min7.style.opacity = "0.4"

            s2min0.style.opacity = "1"
            s2min1.style.opacity = "0.7"
            s2min2.style.opacity = "0.4"
            s2min3.style.opacity = "0.4"
            s2min4.style.opacity = "0.4"
            s2min5.style.opacity = "0.4"
            s2min6.style.opacity = "0.4"
            s2min7.style.opacity = "0.4"
            s2min8.style.opacity = "0.4"
            s2min9.style.opacity = "0.4"
            s2min10.style.opacity = "0.4"
            s2min11.style.opacity = "0.4"
            break;
        case 11:
            firstofmin.style.transform = "translatey(-6vw)";
            secondofmin.style.transform = "translatey(-6vw)";

            s1min0.style.opacity = "0.7"
            s1min1.style.opacity = "1"
            s1min2.style.opacity = "0.7"
            s1min3.style.opacity = "0.4"
            s1min4.style.opacity = "0.4"
            s1min5.style.opacity = "0.4"
            s1min6.style.opacity = "0.4"
            s1min7.style.opacity = "0.4"

            s2min0.style.opacity = "0.7"
            s2min1.style.opacity = "1"
            s2min2.style.opacity = "0.7"
            s2min3.style.opacity = "0.4"
            s2min4.style.opacity = "0.4"
            s2min5.style.opacity = "0.4"
            s2min6.style.opacity = "0.4"
            s2min7.style.opacity = "0.4"
            s2min8.style.opacity = "0.4"
            s2min9.style.opacity = "0.4"
            s2min10.style.opacity = "0.4"
            s2min11.style.opacity = "0.4"
            break;
        case 12:
            firstofmin.style.transform = "translatey(-6vw)";
            secondofmin.style.transform = "translatey(-12vw)";

            s1min0.style.opacity = "0.7"
            s1min1.style.opacity = "1"
            s1min2.style.opacity = "0.7"
            s1min3.style.opacity = "0.4"
            s1min4.style.opacity = "0.4"
            s1min5.style.opacity = "0.4"
            s1min6.style.opacity = "0.4"
            s1min7.style.opacity = "0.4"

            s2min0.style.opacity = "0.4"
            s2min1.style.opacity = ".7"
            s2min2.style.opacity = "1"
            s2min3.style.opacity = "0.7"
            s2min4.style.opacity = "0.4"
            s2min5.style.opacity = "0.4"
            s2min6.style.opacity = "0.4"
            s2min7.style.opacity = "0.4"
            s2min8.style.opacity = "0.4"
            s2min9.style.opacity = "0.4"
            s2min10.style.opacity = "0.4"
            s2min11.style.opacity = "0.4"
            break;
        case 13:
            firstofmin.style.transform = "translatey(-6vw)";
            secondofmin.style.transform = "translatey(-18vw)";

            s1min0.style.opacity = "0.7"
            s1min1.style.opacity = "1"
            s1min2.style.opacity = "0.7"
            s1min3.style.opacity = "0.4"
            s1min4.style.opacity = "0.4"
            s1min5.style.opacity = "0.4"
            s1min6.style.opacity = "0.4"
            s1min7.style.opacity = "0.4"

            s2min0.style.opacity = "0.1"
            s2min1.style.opacity = "0.4"
            s2min2.style.opacity = "0.7"
            s2min3.style.opacity = "1"
            s2min4.style.opacity = "0.7"
            s2min5.style.opacity = "0.4"
            s2min6.style.opacity = "0.4"
            s2min7.style.opacity = "0.4"
            s2min8.style.opacity = "0.4"
            s2min9.style.opacity = "0.4"
            s2min10.style.opacity = "0.4"
            s2min11.style.opacity = "0.4"
            break;
        case 14:
            firstofmin.style.transform = "translatey(-6vw)";
            secondofmin.style.transform = "translatey(-24vw)";

            s1min0.style.opacity = "0.7"
            s1min1.style.opacity = "1"
            s1min2.style.opacity = "0.7"
            s1min3.style.opacity = "0.4"
            s1min4.style.opacity = "0.4"
            s1min5.style.opacity = "0.4"
            s1min6.style.opacity = "0.4"
            s1min7.style.opacity = "0.4"

            s2min0.style.opacity = "0"
            s2min1.style.opacity = "0.1"
            s2min2.style.opacity = "0.4"
            s2min3.style.opacity = "0.7"
            s2min4.style.opacity = "1"
            s2min5.style.opacity = "0.7"
            s2min6.style.opacity = "0.4"
            s2min7.style.opacity = "0.4"
            s2min8.style.opacity = "0.4"
            s2min9.style.opacity = "0.4"
            s2min10.style.opacity = "0.4"
            s2min11.style.opacity = "0.4"
            break;
        case 15:
            firstofmin.style.transform = "translatey(-6vw)";
            secondofmin.style.transform = "translatey(-30vw)";

            s1min0.style.opacity = "0.7"
            s1min1.style.opacity = "1"
            s1min2.style.opacity = "0.7"
            s1min3.style.opacity = "0.4"
            s1min4.style.opacity = "0.4"
            s1min5.style.opacity = "0.4"
            s1min6.style.opacity = "0.4"
            s1min7.style.opacity = "0.4"

            s2min0.style.opacity = "0"
            s2min1.style.opacity = "0"
            s2min2.style.opacity = "0.1"
            s2min3.style.opacity = "0.4"
            s2min4.style.opacity = "0.7"
            s2min5.style.opacity = "1"
            s2min6.style.opacity = "0.7"
            s2min7.style.opacity = "0.4"
            s2min8.style.opacity = "0.4"
            s2min9.style.opacity = "0.4"
            s2min10.style.opacity = "0.4"
            s2min11.style.opacity = "0.4"
            break;
        case 16:
            firstofmin.style.transform = "translatey(-6vw)";
            secondofmin.style.transform = "translatey(-36vw)";
            s1min0.style.opacity = "0.7"
            s1min1.style.opacity = "1"
            s1min2.style.opacity = "0.7"
            s1min3.style.opacity = "0.4"
            s1min4.style.opacity = "0.4"
            s1min5.style.opacity = "0.4"
            s1min6.style.opacity = "0.4"
            s1min7.style.opacity = "0.4"

            s2min0.style.opacity = "0"
            s2min1.style.opacity = "0"
            s2min2.style.opacity = "0"
            s2min3.style.opacity = "0.1"
            s2min4.style.opacity = "0.4"
            s2min5.style.opacity = "0.7"
            s2min6.style.opacity = "1"
            s2min7.style.opacity = "0.7"
            s2min8.style.opacity = "0.4"
            s2min9.style.opacity = "0.4"
            s2min10.style.opacity = "0.4"
            s2min11.style.opacity = "0.4"
            break;
        case 17:
            firstofmin.style.transform = "translatey(-6vw)";
            secondofmin.style.transform = "translatey(-42vw)";
            s1min0.style.opacity = "0.7"
            s1min1.style.opacity = "1"
            s1min2.style.opacity = "0.7"
            s1min3.style.opacity = "0.4"
            s1min4.style.opacity = "0.4"
            s1min5.style.opacity = "0.4"
            s1min6.style.opacity = "0.4"
            s1min7.style.opacity = "0.4"

            s2min0.style.opacity = "0"
            s2min1.style.opacity = "0"
            s2min2.style.opacity = "0"
            s2min3.style.opacity = "0"
            s2min4.style.opacity = "0.1"
            s2min5.style.opacity = "0.4"
            s2min6.style.opacity = "0.7"
            s2min7.style.opacity = "1"
            s2min8.style.opacity = "0.7"
            s2min9.style.opacity = "0.4"
            s2min10.style.opacity = "0.4"
            s2min11.style.opacity = "0.4"
            break;
        case 18:
            firstofmin.style.transform = "translatey(-6vw)";
            secondofmin.style.transform = "translatey(-48vw)";
            s1min0.style.opacity = "0.7"
            s1min1.style.opacity = "1"
            s1min2.style.opacity = "0.7"
            s1min3.style.opacity = "0.4"
            s1min4.style.opacity = "0.4"
            s1min5.style.opacity = "0.4"
            s1min6.style.opacity = "0.4"
            s1min7.style.opacity = "0.4"

            s2min0.style.opacity = "0"
            s2min1.style.opacity = "0"
            s2min2.style.opacity = "0"
            s2min3.style.opacity = "0"
            s2min4.style.opacity = "0"
            s2min5.style.opacity = "0.1"
            s2min6.style.opacity = "0.4"
            s2min7.style.opacity = "0.7"
            s2min8.style.opacity = "1"
            s2min9.style.opacity = "0.7"
            s2min10.style.opacity = "0.4"
            s2min11.style.opacity = "0.4"
            break;
        case 19:
            firstofmin.style.transform = "translatey(-6vw)";
            secondofmin.style.transform = "translatey(-54vw)";
            s1min0.style.opacity = "0.7"
            s1min1.style.opacity = "1"
            s1min2.style.opacity = "0.7"
            s1min3.style.opacity = "0.4"
            s1min4.style.opacity = "0.4"
            s1min5.style.opacity = "0.4"
            s1min6.style.opacity = "0.4"
            s1min7.style.opacity = "0.4"

            s2min0.style.opacity = "0"
            s2min1.style.opacity = "0"
            s2min2.style.opacity = "0"
            s2min3.style.opacity = "0"
            s2min4.style.opacity = "0"
            s2min5.style.opacity = "0"
            s2min6.style.opacity = "0.1"
            s2min7.style.opacity = "0.4"
            s2min8.style.opacity = "0.7"
            s2min9.style.opacity = "1"
            s2min10.style.opacity = "0.7"
            s2min11.style.opacity = "0.4"
            break;
        case 20:
            firstofmin.style.transform = "translatey(-12vw)";
            secondofmin.style.transform = "translatey(-0vw)";

            s1min0.style.opacity = "0.4"
            s1min1.style.opacity = "0.7"
            s1min2.style.opacity = "1"
            s1min3.style.opacity = "0.7"
            s1min4.style.opacity = "0.4"
            s1min5.style.opacity = "0.4"
            s1min6.style.opacity = "0.4"
            s1min7.style.opacity = "0.4"

            s2min0.style.opacity = "1"
            s2min1.style.opacity = "0.7"
            s2min2.style.opacity = "0.4"
            s2min3.style.opacity = "0.4"
            s2min4.style.opacity = "0.4"
            s2min5.style.opacity = "0.4"
            s2min6.style.opacity = "0.4"
            s2min7.style.opacity = "0.4"
            s2min8.style.opacity = "0.4"
            s2min9.style.opacity = "0.4"
            s2min10.style.opacity = "0.4"
            s2min11.style.opacity = "0.4"
            break;
        case 21:
            firstofmin.style.transform = "translatey(-12vw)";
            secondofmin.style.transform = "translatey(-6vw)";

            s1min0.style.opacity = "0.4"
            s1min1.style.opacity = "0.7"
            s1min2.style.opacity = "1"
            s1min3.style.opacity = "0.7"
            s1min4.style.opacity = "0.4"
            s1min5.style.opacity = "0.4"
            s1min6.style.opacity = "0.4"
            s1min7.style.opacity = "0.4"

            s2min0.style.opacity = "0.7"
            s2min1.style.opacity = "1"
            s2min2.style.opacity = "0.7"
            s2min3.style.opacity = "0.4"
            s2min4.style.opacity = "0.4"
            s2min5.style.opacity = "0.4"
            s2min6.style.opacity = "0.4"
            s2min7.style.opacity = "0.4"
            s2min8.style.opacity = "0.4"
            s2min9.style.opacity = "0.4"
            s2min10.style.opacity = "0.4"
            s2min11.style.opacity = "0.4"
            break;
        case 22:
            firstofmin.style.transform = "translatey(-12vw)";
            secondofmin.style.transform = "translatey(-12vw)";

            s1min0.style.opacity = "0.4"
            s1min1.style.opacity = "0.7"
            s1min2.style.opacity = "1"
            s1min3.style.opacity = "0.7"
            s1min4.style.opacity = "0.4"
            s1min5.style.opacity = "0.4"
            s1min6.style.opacity = "0.4"
            s1min7.style.opacity = "0.4"

            s2min0.style.opacity = "0.4"
            s2min1.style.opacity = "0.7"
            s2min2.style.opacity = "1"
            s2min3.style.opacity = "0.7"
            s2min4.style.opacity = "0.4"
            s2min5.style.opacity = "0.4"
            s2min6.style.opacity = "0.4"
            s2min7.style.opacity = "0.4"
            s2min8.style.opacity = "0.4"
            s2min9.style.opacity = "0.4"
            s2min10.style.opacity = "0.4"
            s2min11.style.opacity = "0.4"
            break;
        case 23:
            firstofmin.style.transform = "translatey(-12vw)";
            secondofmin.style.transform = "translatey(-18vw)";

            s1min0.style.opacity = "0.4"
            s1min1.style.opacity = "0.7"
            s1min2.style.opacity = "1"
            s1min3.style.opacity = "0.7"
            s1min4.style.opacity = "0.4"
            s1min5.style.opacity = "0.4"
            s1min6.style.opacity = "0.4"
            s1min7.style.opacity = "0.4"

            s2min0.style.opacity = "0.1"
            s2min1.style.opacity = "0.4"
            s2min2.style.opacity = "0.7"
            s2min3.style.opacity = "1"
            s2min4.style.opacity = "0.7"
            s2min5.style.opacity = "0.4"
            s2min6.style.opacity = "0.1"
            s2min7.style.opacity = "0"
            s2min8.style.opacity = "0"
            s2min9.style.opacity = "0"
            s2min10.style.opacity = "0.4"
            s2min11.style.opacity = "0.4"
            break;
        case 24:
            firstofmin.style.transform = "translatey(-12vw)";
            secondofmin.style.transform = "translatey(-24vw)";
            s1min0.style.opacity = "0.4"
            s1min1.style.opacity = "0.7"
            s1min2.style.opacity = "1"
            s1min3.style.opacity = "0.7"
            s1min4.style.opacity = "0.4"
            s1min5.style.opacity = "0.4"
            s1min6.style.opacity = "0.4"
            s1min7.style.opacity = "0.4"

            s2min0.style.opacity = "0"
            s2min1.style.opacity = "0.1"
            s2min2.style.opacity = "0.4"
            s2min3.style.opacity = "0.7"
            s2min4.style.opacity = "1"
            s2min5.style.opacity = "0.7"
            s2min6.style.opacity = "0.4"
            s2min7.style.opacity = "0.1"
            s2min8.style.opacity = "0"
            s2min9.style.opacity = "0"
            s2min10.style.opacity = "0.4"
            s2min11.style.opacity = "0.4"
            break;
        case 25:
            firstofmin.style.transform = "translatey(-12vw)";
            secondofmin.style.transform = "translatey(-30vw)";
            s1min0.style.opacity = "0.4"
            s1min1.style.opacity = "0.7"
            s1min2.style.opacity = "1"
            s1min3.style.opacity = "0.7"
            s1min4.style.opacity = "0.4"
            s1min5.style.opacity = "0.4"
            s1min6.style.opacity = "0.4"
            s1min7.style.opacity = "0.4"

            s2min0.style.opacity = "0"
            s2min1.style.opacity = "0"
            s2min2.style.opacity = "0.1"
            s2min3.style.opacity = "0.4"
            s2min4.style.opacity = "0.7"
            s2min5.style.opacity = "1"
            s2min6.style.opacity = "0.7"
            s2min7.style.opacity = "0.4"
            s2min8.style.opacity = "0.4"
            s2min9.style.opacity = "0.4"
            s2min10.style.opacity = "0.4"
            s2min11.style.opacity = "0.4"
            break;
        case 26:
            firstofmin.style.transform = "translatey(-12vw)";
            secondofmin.style.transform = "translatey(-36vw)";
            s1min0.style.opacity = "0.4"
            s1min1.style.opacity = "0.7"
            s1min2.style.opacity = "1"
            s1min3.style.opacity = "0.7"
            s1min4.style.opacity = "0.4"
            s1min5.style.opacity = "0.4"
            s1min6.style.opacity = "0.4"
            s1min7.style.opacity = "0.4"

            s2min0.style.opacity = "0"
            s2min1.style.opacity = "0"
            s2min2.style.opacity = "0"
            s2min3.style.opacity = "0.1"
            s2min4.style.opacity = "0.4"
            s2min5.style.opacity = "0.7"
            s2min6.style.opacity = "1"
            s2min7.style.opacity = "0.7"
            s2min8.style.opacity = "0.4"
            s2min9.style.opacity = "0.4"
            s2min10.style.opacity = "0.4"
            s2min11.style.opacity = "0.4"
            break;
        case 27:
            firstofmin.style.transform = "translatey(-12vw)";
            secondofmin.style.transform = "translatey(-42vw)";
            s1min0.style.opacity = "0.4"
            s1min1.style.opacity = "0.7"
            s1min2.style.opacity = "1"
            s1min3.style.opacity = "0.7"
            s1min4.style.opacity = "0.4"
            s1min5.style.opacity = "0.4"
            s1min6.style.opacity = "0.4"
            s1min7.style.opacity = "0.4"

            s2min0.style.opacity = "0"
            s2min1.style.opacity = "0"
            s2min2.style.opacity = "0"
            s2min3.style.opacity = "0"
            s2min4.style.opacity = "0.1"
            s2min5.style.opacity = "0.4"
            s2min6.style.opacity = "0.7"
            s2min7.style.opacity = "1"
            s2min8.style.opacity = "0.7"
            s2min9.style.opacity = "0.4"
            s2min10.style.opacity = "0.4"
            s2min11.style.opacity = "0.4"
            break;
        case 28:
            firstofmin.style.transform = "translatey(-12vw)";
            secondofmin.style.transform = "translatey(-48vw)";
            s1min0.style.opacity = "0.4"
            s1min1.style.opacity = "0.7"
            s1min2.style.opacity = "1"
            s1min3.style.opacity = "0.7"
            s1min4.style.opacity = "0.4"
            s1min5.style.opacity = "0.4"
            s1min6.style.opacity = "0.4"
            s1min7.style.opacity = "0.4"

            s2min0.style.opacity = "0"
            s2min1.style.opacity = "0"
            s2min2.style.opacity = "0"
            s2min3.style.opacity = "0"
            s2min4.style.opacity = "0"
            s2min5.style.opacity = "0.1"
            s2min6.style.opacity = "0.4"
            s2min7.style.opacity = "0.7"
            s2min8.style.opacity = "1"
            s2min9.style.opacity = "0.7"
            s2min10.style.opacity = "0.4"
            s2min11.style.opacity = "0.4"
            break;
        case 29:
            firstofmin.style.transform = "translatey(-12vw)";
            secondofmin.style.transform = "translatey(-54vw)";
            s1min0.style.opacity = "0.4"
            s1min1.style.opacity = "0.7"
            s1min2.style.opacity = "1"
            s1min3.style.opacity = "0.7"
            s1min4.style.opacity = "0.4"
            s1min5.style.opacity = "0.4"
            s1min6.style.opacity = "0.4"
            s1min7.style.opacity = "0.4"

            s2min0.style.opacity = "0"
            s2min1.style.opacity = "0"
            s2min2.style.opacity = "0"
            s2min3.style.opacity = "0"
            s2min4.style.opacity = "0"
            s2min5.style.opacity = "0"
            s2min6.style.opacity = "0.1"
            s2min7.style.opacity = "0.4"
            s2min8.style.opacity = "0.7"
            s2min9.style.opacity = "1"
            s2min10.style.opacity = "0.7"
            s2min11.style.opacity = "0.4"
            break;
        case 30:
            firstofmin.style.transform = "translatey(-18vw)";
            secondofmin.style.transform = "translatey(-0vw)";
            s1min0.style.opacity = "0.1"
            s1min1.style.opacity = "0.4"
            s1min2.style.opacity = "0.7"
            s1min3.style.opacity = "1"
            s1min4.style.opacity = "0.7"
            s1min5.style.opacity = "0.4"
            s1min6.style.opacity = "0.4"
            s1min7.style.opacity = "0.4"

            s2min0.style.opacity = "1"
            s2min1.style.opacity = "0.7"
            s2min2.style.opacity = "0.4"
            s2min3.style.opacity = "0.4"
            s2min4.style.opacity = "0.4"
            s2min5.style.opacity = "0.4"
            s2min6.style.opacity = "0.4"
            s2min7.style.opacity = "0.4"
            s2min8.style.opacity = "0.4"
            s2min9.style.opacity = "0.4"
            s2min10.style.opacity = "0.4"
            s2min11.style.opacity = "0.4"
            break;
        case 31:
            firstofmin.style.transform = "translatey(-18vw)";
            secondofmin.style.transform = "translatey(-6vw)";
            s1min0.style.opacity = "0.1"
            s1min1.style.opacity = "0.4"
            s1min2.style.opacity = "0.7"
            s1min3.style.opacity = "1"
            s1min4.style.opacity = "0.7"
            s1min5.style.opacity = "0.4"
            s1min6.style.opacity = "0.4"
            s1min7.style.opacity = "0.4"

            s2min0.style.opacity = "0.7"
            s2min1.style.opacity = "1"
            s2min2.style.opacity = "0.7"
            s2min3.style.opacity = "0.4"
            s2min4.style.opacity = "0.1"
            s2min5.style.opacity = "0"
            s2min6.style.opacity = "0"
            s2min7.style.opacity = "0"
            s2min8.style.opacity = "0"
            s2min9.style.opacity = "0"
            s2min10.style.opacity = "0.4"
            s2min11.style.opacity = "0.4"
            break;
        case 32:
            firstofmin.style.transform = "translatey(-18vw)";
            secondofmin.style.transform = "translatey(-12vw)";
            s1min0.style.opacity = "0.1"
            s1min1.style.opacity = "0.4"
            s1min2.style.opacity = "0.7"
            s1min3.style.opacity = "1"
            s1min4.style.opacity = "0.7"
            s1min5.style.opacity = "0.4"
            s1min6.style.opacity = "0.4"
            s1min7.style.opacity = "0.4"

            s2min0.style.opacity = "0.4"
            s2min1.style.opacity = "0.7"
            s2min2.style.opacity = "1"
            s2min3.style.opacity = "0.7"
            s2min4.style.opacity = "0.4"
            s2min5.style.opacity = "0.4"
            s2min6.style.opacity = "0.4"
            s2min7.style.opacity = "0.4"
            s2min8.style.opacity = "0.4"
            s2min9.style.opacity = "0.4"
            s2min10.style.opacity = "0.4"
            s2min11.style.opacity = "0.4"
            break;
        case 33:
            firstofmin.style.transform = "translatey(-18vw)";
            secondofmin.style.transform = "translatey(-18vw)";
            s1min0.style.opacity = "0.1"
            s1min1.style.opacity = "0.4"
            s1min2.style.opacity = "0.7"
            s1min3.style.opacity = "1"
            s1min4.style.opacity = "0.7"
            s1min5.style.opacity = "0.4"
            s1min6.style.opacity = "0.4"
            s1min7.style.opacity = "0.4"

            s2min0.style.opacity = "0.1"
            s2min1.style.opacity = "0.4"
            s2min2.style.opacity = "0.7"
            s2min3.style.opacity = "1"
            s2min4.style.opacity = ".7"
            s2min5.style.opacity = "0.4"
            s2min6.style.opacity = "0.4"
            s2min7.style.opacity = "0.4"
            s2min8.style.opacity = "0.4"
            s2min9.style.opacity = "0.4"
            s2min10.style.opacity = "0.4"
            s2min11.style.opacity = "0.4"
            break;
        case 34:
            firstofmin.style.transform = "translatey(-18vw)";
            secondofmin.style.transform = "translatey(-24vw)";
            s1min0.style.opacity = "0.1"
            s1min1.style.opacity = "0.4"
            s1min2.style.opacity = "0.7"
            s1min3.style.opacity = "1"
            s1min4.style.opacity = "0.7"
            s1min5.style.opacity = "0.4"
            s1min6.style.opacity = "0.4"
            s1min7.style.opacity = "0.4"

            s2min0.style.opacity = "0"
            s2min1.style.opacity = "0.1"
            s2min2.style.opacity = "0.4"
            s2min3.style.opacity = "0.7"
            s2min4.style.opacity = "1"
            s2min5.style.opacity = "0.7"
            s2min6.style.opacity = "0.4"
            s2min7.style.opacity = "0.4"
            s2min8.style.opacity = "0.4"
            s2min9.style.opacity = "0.4"
            s2min10.style.opacity = "0.4"
            s2min11.style.opacity = "0.4"
            break;
        case 35:
            firstofmin.style.transform = "translatey(-18vw)";
            secondofmin.style.transform = "translatey(-30vw)";
            s1min0.style.opacity = "0.1"
            s1min1.style.opacity = "0.4"
            s1min2.style.opacity = "0.7"
            s1min3.style.opacity = "1"
            s1min4.style.opacity = "0.7"
            s1min5.style.opacity = "0.4"
            s1min6.style.opacity = "0.4"
            s1min7.style.opacity = "0.4"

            s2min0.style.opacity = "0"
            s2min1.style.opacity = "0"
            s2min2.style.opacity = "0.1"
            s2min3.style.opacity = "0.4"
            s2min4.style.opacity = "0.7"
            s2min5.style.opacity = "1"
            s2min6.style.opacity = "0.7"
            s2min7.style.opacity = "0.4"
            s2min8.style.opacity = "0.4"
            s2min9.style.opacity = "0.4"
            s2min10.style.opacity = "0.4"
            s2min11.style.opacity = "0.4"
            break;
        case 36:
            firstofmin.style.transform = "translatey(-18vw)";
            secondofmin.style.transform = "translatey(-36vw)";
            s1min0.style.opacity = "0.1"
            s1min1.style.opacity = "0.4"
            s1min2.style.opacity = "0.7"
            s1min3.style.opacity = "1"
            s1min4.style.opacity = "0.7"
            s1min5.style.opacity = "0.4"
            s1min6.style.opacity = "0.4"
            s1min7.style.opacity = "0.4"

            s2min0.style.opacity = "0"
            s2min1.style.opacity = "0"
            s2min2.style.opacity = "0"
            s2min3.style.opacity = "0.1"
            s2min4.style.opacity = "0.4"
            s2min5.style.opacity = "0.7"
            s2min6.style.opacity = "1"
            s2min7.style.opacity = "0.7"
            s2min8.style.opacity = "0.4"
            s2min9.style.opacity = "0.1"
            s2min10.style.opacity = "0.4"
            s2min11.style.opacity = "0.4"
            break;
        case 37:
            firstofmin.style.transform = "translatey(-18vw)";
            secondofmin.style.transform = "translatey(-42vw)";
            s1min0.style.opacity = "0.1"
            s1min1.style.opacity = "0.4"
            s1min2.style.opacity = "0.7"
            s1min3.style.opacity = "1"
            s1min4.style.opacity = "0.7"
            s1min5.style.opacity = "0.4"
            s1min6.style.opacity = "0.4"
            s1min7.style.opacity = "0.4"

            s2min0.style.opacity = "0"
            s2min1.style.opacity = "0"
            s2min2.style.opacity = "0"
            s2min3.style.opacity = "0"
            s2min4.style.opacity = "0.1"
            s2min5.style.opacity = "0.4"
            s2min6.style.opacity = "0.7"
            s2min7.style.opacity = "1"
            s2min8.style.opacity = "0.7"
            s2min9.style.opacity = "0.4"
            s2min10.style.opacity = "0.4"
            s2min11.style.opacity = "0.4"
            break;
        case 38:
            firstofmin.style.transform = "translatey(-18vw)";
            secondofmin.style.transform = "translatey(-48vw)";
            s1min0.style.opacity = "0.1"
            s1min1.style.opacity = "0.4"
            s1min2.style.opacity = "0.7"
            s1min3.style.opacity = "1"
            s1min4.style.opacity = "0.7"
            s1min5.style.opacity = "0.4"
            s1min6.style.opacity = "0.4"
            s1min7.style.opacity = "0.4"

            s2min0.style.opacity = "0"
            s2min1.style.opacity = "0"
            s2min2.style.opacity = "0"
            s2min3.style.opacity = "0"
            s2min4.style.opacity = "0"
            s2min5.style.opacity = "0.1"
            s2min6.style.opacity = "0.4"
            s2min7.style.opacity = "0.7"
            s2min8.style.opacity = "1"
            s2min9.style.opacity = "0.7"
            s2min10.style.opacity = "0.4"
            s2min11.style.opacity = "0.4"
            break;
        case 39:
            firstofmin.style.transform = "translatey(-18vw)";
            secondofmin.style.transform = "translatey(-54vw)";
            s1min0.style.opacity = "0.1"
            s1min1.style.opacity = "0.4"
            s1min2.style.opacity = "0.7"
            s1min3.style.opacity = "1"
            s1min4.style.opacity = "0.7"
            s1min5.style.opacity = "0.4"
            s1min6.style.opacity = "0.4"
            s1min7.style.opacity = "0.4"

            s2min0.style.opacity = "0"
            s2min1.style.opacity = "0"
            s2min2.style.opacity = "0"
            s2min3.style.opacity = "0"
            s2min4.style.opacity = "0"
            s2min5.style.opacity = "0"
            s2min6.style.opacity = "0.1"
            s2min7.style.opacity = "0.4"
            s2min8.style.opacity = "0.7"
            s2min9.style.opacity = "1"
            s2min10.style.opacity = "0.7"
            s2min11.style.opacity = "0.4"
            break;
        case 40:
            firstofmin.style.transform = "translatey(-24vw)";
            secondofmin.style.transform = "translatey(-0vw)";
            s1min0.style.opacity = "0"
            s1min1.style.opacity = "0.1"
            s1min2.style.opacity = "0.4"
            s1min3.style.opacity = "0.7"
            s1min4.style.opacity = "1"
            s1min5.style.opacity = "0.7"
            s1min6.style.opacity = "0.4"
            s1min7.style.opacity = "0.4"

            s2min0.style.opacity = "1"
            s2min1.style.opacity = "0.7"
            s2min2.style.opacity = "0.4"
            s2min3.style.opacity = "0.4"
            s2min4.style.opacity = "0.4"
            s2min5.style.opacity = "0.4"
            s2min6.style.opacity = "0.4"
            s2min7.style.opacity = "0.4"
            s2min8.style.opacity = "0.4"
            s2min9.style.opacity = "0.4"
            s2min10.style.opacity = "0.4"
            s2min11.style.opacity = "0.4"
            break;
        case 41:
            firstofmin.style.transform = "translatey(-24vw)";
            secondofmin.style.transform = "translatey(-6vw)";
            s1min0.style.opacity = "0"
            s1min1.style.opacity = "0.1"
            s1min2.style.opacity = "0.4"
            s1min3.style.opacity = "0.7"
            s1min4.style.opacity = "1"
            s1min5.style.opacity = "0.7"
            s1min6.style.opacity = "0.4"
            s1min7.style.opacity = "0.4"

            s2min0.style.opacity = "0.7"
            s2min1.style.opacity = "1"
            s2min2.style.opacity = "0.7"
            s2min3.style.opacity = "0.4"
            s2min4.style.opacity = "0.4"
            s2min5.style.opacity = "0.4"
            s2min6.style.opacity = "0.4"
            s2min7.style.opacity = "0.4"
            s2min8.style.opacity = "0.4"
            s2min9.style.opacity = "0.4"
            s2min10.style.opacity = "0.4"
            s2min11.style.opacity = "0.4"
            break;
        case 42:
            firstofmin.style.transform = "translatey(-24vw)";
            secondofmin.style.transform = "translatey(-12vw)";
            s1min0.style.opacity = "0"
            s1min1.style.opacity = "0.1"
            s1min2.style.opacity = "0.4"
            s1min3.style.opacity = "0.7"
            s1min4.style.opacity = "1"
            s1min5.style.opacity = "0.7"
            s1min6.style.opacity = "0.4"
            s1min7.style.opacity = "0.4"

            s2min0.style.opacity = "0.4"
            s2min1.style.opacity = "0.7"
            s2min2.style.opacity = "1"
            s2min3.style.opacity = "0.7"
            s2min4.style.opacity = "0.4"
            s2min5.style.opacity = "0.4"
            s2min6.style.opacity = "0.4"
            s2min7.style.opacity = "0.4"
            s2min8.style.opacity = "0.4"
            s2min9.style.opacity = "0.4"
            s2min10.style.opacity = "0.4"
            s2min11.style.opacity = "0.4"
            break;
        case 43:
            firstofmin.style.transform = "translatey(-24vw)";
            secondofmin.style.transform = "translatey(-18vw)";
            s1min0.style.opacity = "0"
            s1min1.style.opacity = "0.1"
            s1min2.style.opacity = "0.4"
            s1min3.style.opacity = "0.7"
            s1min4.style.opacity = "1"
            s1min5.style.opacity = "0.7"
            s1min6.style.opacity = "0.4"
            s1min7.style.opacity = "0.4"

            s2min0.style.opacity = "0.1"
            s2min1.style.opacity = "0.4"
            s2min2.style.opacity = "0.7"
            s2min3.style.opacity = "1"
            s2min4.style.opacity = "0.7"
            s2min5.style.opacity = "0.4"
            s2min6.style.opacity = "0.4"
            s2min7.style.opacity = "0.4"
            s2min8.style.opacity = "0.4"
            s2min9.style.opacity = "0.4"
            s2min10.style.opacity = "0.4"
            s2min11.style.opacity = "0.4"
            break;
        case 44:
            firstofmin.style.transform = "translatey(-24vw)";
            secondofmin.style.transform = "translatey(-24vw)";
            s1min0.style.opacity = "0"
            s1min1.style.opacity = "0.1"
            s1min2.style.opacity = "0.4"
            s1min3.style.opacity = "0.7"
            s1min4.style.opacity = "1"
            s1min5.style.opacity = "0.7"
            s1min6.style.opacity = "0.4"
            s1min7.style.opacity = "0.4"

            s2min0.style.opacity = "0"
            s2min1.style.opacity = "0.1"
            s2min2.style.opacity = "0.4"
            s2min3.style.opacity = "0.7"
            s2min4.style.opacity = "1"
            s2min5.style.opacity = "0.7"
            s2min6.style.opacity = "0.4"
            s2min7.style.opacity = "0.4"
            s2min8.style.opacity = "0.4"
            s2min9.style.opacity = "0.4"
            s2min10.style.opacity = "0.4"
            s2min11.style.opacity = "0.4"
            break;
        case 45:
            firstofmin.style.transform = "translatey(-24vw)";
            secondofmin.style.transform = "translatey(-30vw)";
            s1min0.style.opacity = "0"
            s1min1.style.opacity = "0.1"
            s1min2.style.opacity = "0.4"
            s1min3.style.opacity = "0.7"
            s1min4.style.opacity = "1"
            s1min5.style.opacity = "0.7"
            s1min6.style.opacity = "0.4"
            s1min7.style.opacity = "0.4"

            s2min0.style.opacity = "0"
            s2min1.style.opacity = "0"
            s2min2.style.opacity = "0.1"
            s2min3.style.opacity = "0.4"
            s2min4.style.opacity = "0.7"
            s2min5.style.opacity = "1"
            s2min6.style.opacity = "0.7"
            s2min7.style.opacity = "0.4"
            s2min8.style.opacity = "0.4"
            s2min9.style.opacity = "0.4"
            s2min10.style.opacity = "0.4"
            s2min11.style.opacity = "0.4"
            break;
        case 46:
            firstofmin.style.transform = "translatey(-24vw)";
            secondofmin.style.transform = "translatey(-36vw)";
            s1min0.style.opacity = "0"
            s1min1.style.opacity = "0.1"
            s1min2.style.opacity = "0.4"
            s1min3.style.opacity = "0.7"
            s1min4.style.opacity = "1"
            s1min5.style.opacity = "0.7"
            s1min6.style.opacity = "0.4"
            s1min7.style.opacity = "0.4"

            s2min0.style.opacity = "0"
            s2min1.style.opacity = "0"
            s2min2.style.opacity = "0"
            s2min3.style.opacity = "0.1"
            s2min4.style.opacity = "0.4"
            s2min5.style.opacity = "0.7"
            s2min6.style.opacity = "1"
            s2min7.style.opacity = "0.7"
            s2min8.style.opacity = "0.4"
            s2min9.style.opacity = "0.4"
            s2min10.style.opacity = "0.4"
            s2min11.style.opacity = "0.4"
            break;
        case 47:
            firstofmin.style.transform = "translatey(-24vw)";
            secondofmin.style.transform = "translatey(-42vw)";
            s1min0.style.opacity = "0"
            s1min1.style.opacity = "0.1"
            s1min2.style.opacity = "0.4"
            s1min3.style.opacity = "0.7"
            s1min4.style.opacity = "1"
            s1min5.style.opacity = "0.7"
            s1min6.style.opacity = "0.4"
            s1min7.style.opacity = "0.4"

            s2min0.style.opacity = "0"
            s2min1.style.opacity = "0"
            s2min2.style.opacity = "0"
            s2min3.style.opacity = "0"
            s2min4.style.opacity = "0.1"
            s2min5.style.opacity = "0.4"
            s2min6.style.opacity = "0.7"
            s2min7.style.opacity = "1"
            s2min8.style.opacity = "0.7"
            s2min9.style.opacity = "0.4"
            s2min10.style.opacity = "0.4"
            s2min11.style.opacity = "0.4"
            break;
        case 48:
            firstofmin.style.transform = "translatey(-24vw)";
            secondofmin.style.transform = "translatey(-48vw)";
            s1min0.style.opacity = "0"
            s1min1.style.opacity = "0.1"
            s1min2.style.opacity = "0.4"
            s1min3.style.opacity = "0.7"
            s1min4.style.opacity = "1"
            s1min5.style.opacity = "0.7"
            s1min6.style.opacity = "0.4"
            s1min7.style.opacity = "0.4"

            s2min0.style.opacity = "0"
            s2min1.style.opacity = "0"
            s2min2.style.opacity = "0"
            s2min3.style.opacity = "0"
            s2min4.style.opacity = "0"
            s2min5.style.opacity = "0.1"
            s2min6.style.opacity = "0.4"
            s2min7.style.opacity = "0.7"
            s2min8.style.opacity = "1"
            s2min9.style.opacity = "0.7"
            s2min10.style.opacity = "0.4"
            s2min11.style.opacity = "0.4"
            break;
        case 49:
            firstofmin.style.transform = "translatey(-24vw)";
            secondofmin.style.transform = "translatey(-54vw)";
            s1min0.style.opacity = "0"
            s1min1.style.opacity = "0.1"
            s1min2.style.opacity = "0.4"
            s1min3.style.opacity = "0.7"
            s1min4.style.opacity = "1"
            s1min5.style.opacity = "0.7"
            s1min6.style.opacity = "0.4"
            s1min7.style.opacity = "0.4"

            s2min0.style.opacity = "0"
            s2min1.style.opacity = "0"
            s2min2.style.opacity = "0"
            s2min3.style.opacity = "0"
            s2min4.style.opacity = "0"
            s2min5.style.opacity = "0"
            s2min6.style.opacity = "0.1"
            s2min7.style.opacity = "0.4"
            s2min8.style.opacity = "0.7"
            s2min9.style.opacity = "1"
            s2min10.style.opacity = "0.7"
            s2min11.style.opacity = "0.4"
            break;

        case 50:
            firstofmin.style.transform = "translatey(-30vw)";
            secondofmin.style.transform = "translatey(-0vw)";
            s1min0.style.opacity = "0"
            s1min1.style.opacity = "0"
            s1min2.style.opacity = "0.1"
            s1min3.style.opacity = "0.4"
            s1min4.style.opacity = "0.7"
            s1min5.style.opacity = "1"
            s1min6.style.opacity = "0.7"
            s1min7.style.opacity = "0.4"

            s2min0.style.opacity = "1"
            s2min1.style.opacity = "0.7"
            s2min2.style.opacity = "0.4"
            s2min3.style.opacity = "0.4"
            s2min4.style.opacity = "0.4"
            s2min5.style.opacity = "0.4"
            s2min6.style.opacity = "0.4"
            s2min7.style.opacity = "0.4"
            s2min8.style.opacity = "0.4"
            s2min9.style.opacity = "0.4"
            s2min10.style.opacity = "0.4"
            s2min11.style.opacity = "0.4"
            break;
        case 51:
            firstofmin.style.transform = "translatey(-30vw)";
            secondofmin.style.transform = "translatey(-6vw)";
            s1min0.style.opacity = "0"
            s1min1.style.opacity = "0"
            s1min2.style.opacity = "0.1"
            s1min3.style.opacity = "0.4"
            s1min4.style.opacity = "0.7"
            s1min5.style.opacity = "1"
            s1min6.style.opacity = "0.7"
            s1min7.style.opacity = "0.4"

            s2min0.style.opacity = "0.7"
            s2min1.style.opacity = "1"
            s2min2.style.opacity = "0.7"
            s2min3.style.opacity = "0.4"
            s2min4.style.opacity = "0.4"
            s2min5.style.opacity = "0.4"
            s2min6.style.opacity = "0.4"
            s2min7.style.opacity = "0.4"
            s2min8.style.opacity = "0.4"
            s2min9.style.opacity = "0.4"
            s2min10.style.opacity = "0.4"
            s2min11.style.opacity = "0.4"
            break;
        case 52:
            firstofmin.style.transform = "translatey(-30vw)";
            secondofmin.style.transform = "translatey(-12vw)";
            s1min0.style.opacity = "0"
            s1min1.style.opacity = "0"
            s1min2.style.opacity = "0.1"
            s1min3.style.opacity = "0.4"
            s1min4.style.opacity = "0.7"
            s1min5.style.opacity = "1"
            s1min6.style.opacity = "0.7"
            s1min7.style.opacity = "0.4"

            s2min0.style.opacity = "0.4"
            s2min1.style.opacity = "0.7"
            s2min2.style.opacity = "1"
            s2min3.style.opacity = "0.7"
            s2min4.style.opacity = "0.4"
            s2min5.style.opacity = "0.4"
            s2min6.style.opacity = "0.4"
            s2min7.style.opacity = "0.4"
            s2min8.style.opacity = "0.4"
            s2min9.style.opacity = "0.4"
            s2min10.style.opacity = "0.4"
            s2min11.style.opacity = "0.4"
            break;
        case 53:
            firstofmin.style.transform = "translatey(-30vw)";
            secondofmin.style.transform = "translatey(-18vw)";
            s1min0.style.opacity = "0"
            s1min1.style.opacity = "0"
            s1min2.style.opacity = "0.1"
            s1min3.style.opacity = "0.4"
            s1min4.style.opacity = "0.7"
            s1min5.style.opacity = "1"
            s1min6.style.opacity = "0.7"
            s1min7.style.opacity = "0.4"

            s2min0.style.opacity = "0.1"
            s2min1.style.opacity = "0.4"
            s2min2.style.opacity = "0.7"
            s2min3.style.opacity = "1"
            s2min4.style.opacity = "0.7"
            s2min5.style.opacity = "0.4"
            s2min6.style.opacity = "0.4"
            s2min7.style.opacity = "0.4"
            s2min8.style.opacity = "0.4"
            s2min9.style.opacity = "0.4"
            s2min10.style.opacity = "0.4"
            s2min11.style.opacity = "0.4"
            break;
        case 54:
            firstofmin.style.transform = "translatey(-30vw)";
            secondofmin.style.transform = "translatey(-24vw)";
            s1min0.style.opacity = "0"
            s1min1.style.opacity = "0"
            s1min2.style.opacity = "0.1"
            s1min3.style.opacity = "0.4"
            s1min4.style.opacity = "0.7"
            s1min5.style.opacity = "1"
            s1min6.style.opacity = "0.7"
            s1min7.style.opacity = "0.4"

            s2min0.style.opacity = "0"
            s2min1.style.opacity = "0.1"
            s2min2.style.opacity = "0.4"
            s2min3.style.opacity = "0.7"
            s2min4.style.opacity = "1"
            s2min5.style.opacity = "0.7"
            s2min6.style.opacity = "0.4"
            s2min7.style.opacity = "0.4"
            s2min8.style.opacity = "0.4"
            s2min9.style.opacity = "0.4"
            s2min10.style.opacity = "0.4"
            s2min11.style.opacity = "0.4"
            break;
        case 55:
            firstofmin.style.transform = "translatey(-30vw)";
            secondofmin.style.transform = "translatey(-30vw)";
            s1min0.style.opacity = "0"
            s1min1.style.opacity = "0"
            s1min2.style.opacity = "0.1"
            s1min3.style.opacity = "0.4"
            s1min4.style.opacity = "0.7"
            s1min5.style.opacity = "1"
            s1min6.style.opacity = "0.7"
            s1min7.style.opacity = "0.4"

            s2min0.style.opacity = "0"
            s2min1.style.opacity = "0"
            s2min2.style.opacity = "0.1"
            s2min3.style.opacity = "0.4"
            s2min4.style.opacity = "0.7"
            s2min5.style.opacity = "1"
            s2min6.style.opacity = "0.7"
            s2min7.style.opacity = "0.4"
            s2min8.style.opacity = "0.4"
            s2min9.style.opacity = "0.4"
            s2min10.style.opacity = "0.4"
            s2min11.style.opacity = "0.4"
            break;
        case 56:
            firstofmin.style.transform = "translatey(-30vw)";
            secondofmin.style.transform = "translatey(-36vw)";
            s1min0.style.opacity = "0"
            s1min1.style.opacity = "0"
            s1min2.style.opacity = "0.1"
            s1min3.style.opacity = "0.4"
            s1min4.style.opacity = "0.7"
            s1min5.style.opacity = "1"
            s1min6.style.opacity = "0.7"
            s1min7.style.opacity = "0.4"

            s2min0.style.opacity = "0"
            s2min1.style.opacity = "0"
            s2min2.style.opacity = "0"
            s2min3.style.opacity = "0.1"
            s2min4.style.opacity = "0.4"
            s2min5.style.opacity = "0.7"
            s2min6.style.opacity = "1"
            s2min7.style.opacity = "0.7"
            s2min8.style.opacity = "0.4"
            s2min9.style.opacity = "0.4"
            s2min10.style.opacity = "0.4"
            s2min11.style.opacity = "0.4"
            break;
        case 57:
            firstofmin.style.transform = "translatey(-30vw)";
            secondofmin.style.transform = "translatey(-42vw)";
            s1min0.style.opacity = "0"
            s1min1.style.opacity = "0"
            s1min2.style.opacity = "0.1"
            s1min3.style.opacity = "0.4"
            s1min4.style.opacity = "0.7"
            s1min5.style.opacity = "1"
            s1min6.style.opacity = "0.7"
            s1min7.style.opacity = "0.4"

            s2min0.style.opacity = "0"
            s2min1.style.opacity = "0"
            s2min2.style.opacity = "0"
            s2min3.style.opacity = "0"
            s2min4.style.opacity = "0.1"
            s2min5.style.opacity = "0.4"
            s2min6.style.opacity = "0.7"
            s2min7.style.opacity = "1"
            s2min8.style.opacity = "0.7"
            s2min9.style.opacity = "0.4"
            s2min10.style.opacity = "0.4"
            s2min11.style.opacity = "0.4"
            break;
        case 58:
            firstofmin.style.transform = "translatey(-30vw)";
            secondofmin.style.transform = "translatey(-48vw)";
            s1min0.style.opacity = "0"
            s1min1.style.opacity = "0"
            s1min2.style.opacity = "0.1"
            s1min3.style.opacity = "0.4"
            s1min4.style.opacity = "0.7"
            s1min5.style.opacity = "1"
            s1min6.style.opacity = "0.7"
            s1min7.style.opacity = "0.4"

            s2min0.style.opacity = "0"
            s2min1.style.opacity = "0"
            s2min2.style.opacity = "0"
            s2min3.style.opacity = "0"
            s2min4.style.opacity = "0"
            s2min5.style.opacity = "0.1"
            s2min6.style.opacity = "0.4"
            s2min7.style.opacity = "0.7"
            s2min8.style.opacity = "1"
            s2min9.style.opacity = "0.7"
            s2min10.style.opacity = "0.4"
            s2min11.style.opacity = "0.4"
            break;
        case 59:
            firstofmin.style.transform = "translatey(-30vw)";
            secondofmin.style.transform = "translatey(-54vw)";
            s1min0.style.opacity = "0"
            s1min1.style.opacity = "0"
            s1min2.style.opacity = "0.1"
            s1min3.style.opacity = "0.4"
            s1min4.style.opacity = "0.7"
            s1min5.style.opacity = "1"
            s1min6.style.opacity = "0.7"
            s1min7.style.opacity = "0.4"

            s2min0.style.opacity = "0"
            s2min1.style.opacity = "0"
            s2min2.style.opacity = "0"
            s2min3.style.opacity = "0"
            s2min4.style.opacity = "0"
            s2min5.style.opacity = "0"
            s2min6.style.opacity = "0.1"
            s2min7.style.opacity = "0.4"
            s2min8.style.opacity = "0.7"
            s2min9.style.opacity = "1"
            s2min10.style.opacity = "0.7"
            s2min11.style.opacity = "0.4"
            break;
    }

    //Seconds
    switch (date.getSeconds()) {
        case 0:
            firstofsec.style.transform = "translatey(-0vw)";
            secondofsec.style.transform = "translatey(-0vw)";

            s1sec0.style.opacity = "1"
            s1sec1.style.opacity = "0.7"
            s1sec2.style.opacity = "0.4"
            s1sec3.style.opacity = "0.4"
            s1sec4.style.opacity = "0.4"
            s1sec5.style.opacity = "0.4"
            s1sec6.style.opacity = "0.4"
            s1sec7.style.opacity = "0.4"

            s2sec0.style.opacity = "1"
            s2sec1.style.opacity = "0.7"
            s2sec2.style.opacity = "0.4"
            s2sec3.style.opacity = "0.4"
            s2sec4.style.opacity = "0.4"
            s2sec5.style.opacity = "0.4"
            s2sec6.style.opacity = "0.4"
            s2sec7.style.opacity = "0.4"
            s2sec8.style.opacity = "0.4"
            s2sec9.style.opacity = "0.4"
            s2sec10.style.opacity = "0.4"
            s2sec11.style.opacity = "0.4"

            break;
        case 1:
            firstofsec.style.transform = "translatey(-0vw)";
            secondofsec.style.transform = "translatey(-6vw)";

            s1sec0.style.opacity = "1"
            s1sec1.style.opacity = "0.7"
            s1sec2.style.opacity = "0.4"
            s1sec3.style.opacity = "0.4"
            s1sec4.style.opacity = "0.4"
            s1sec5.style.opacity = "0.4"
            s1sec6.style.opacity = "0.4"
            s1sec7.style.opacity = "0.4"

            s2sec0.style.opacity = "0.7"
            s2sec1.style.opacity = "1"
            s2sec2.style.opacity = "0.7"
            s2sec3.style.opacity = "0.4"
            s2sec4.style.opacity = "0.4"
            s2sec5.style.opacity = "0.4"
            s2sec6.style.opacity = "0.4"
            s2sec7.style.opacity = "0.4"
            s2sec8.style.opacity = "0.4"
            s2sec9.style.opacity = "0.4"
            s2sec10.style.opacity = "0.4"
            s2sec11.style.opacity = "0.4"
            break;
        case 2:
            firstofsec.style.transform = "translatey(-0vw)";
            secondofsec.style.transform = "translatey(-12vw)";

            s1sec0.style.opacity = "1"
            s1sec1.style.opacity = "0.7"
            s1sec2.style.opacity = "0.4"
            s1sec3.style.opacity = "0.4"
            s1sec4.style.opacity = "0.4"
            s1sec5.style.opacity = "0.4"
            s1sec6.style.opacity = "0.4"
            s1sec7.style.opacity = "0.4"

            s2sec0.style.opacity = "0.4"
            s2sec1.style.opacity = "0.7"
            s2sec2.style.opacity = "1"
            s2sec3.style.opacity = "0.7"
            s2sec4.style.opacity = "0.4"
            s2sec5.style.opacity = "0.4"
            s2sec6.style.opacity = "0.4"
            s2sec7.style.opacity = "0.4"
            s2sec8.style.opacity = "0.4"
            s2sec9.style.opacity = "0.4"
            s2sec10.style.opacity = "0.4"
            s2sec11.style.opacity = "0.4"
            break;
        case 3:
            firstofsec.style.transform = "translatey(-0vw)";
            secondofsec.style.transform = "translatey(-18vw)";

            s1sec0.style.opacity = "1"
            s1sec1.style.opacity = "0.7"
            s1sec2.style.opacity = "0.4"
            s1sec3.style.opacity = "0.4"
            s1sec4.style.opacity = "0.4"
            s1sec5.style.opacity = "0.4"
            s1sec6.style.opacity = "0.4"
            s1sec7.style.opacity = "0.4"

            s2sec0.style.opacity = "0.1"
            s2sec1.style.opacity = "0.4"
            s2sec2.style.opacity = "0.7"
            s2sec3.style.opacity = "1"
            s2sec4.style.opacity = "0.7"
            s2sec5.style.opacity = "0.4"
            s2sec6.style.opacity = "0.4"
            s2sec7.style.opacity = "0.4"
            s2sec8.style.opacity = "0.4"
            s2sec9.style.opacity = "0.4"
            s2sec10.style.opacity = "0.4"
            s2sec11.style.opacity = "0.4"
            break;
        case 4:
            firstofsec.style.transform = "translatey(-0vw)";
            secondofsec.style.transform = "translatey(-24vw)";


            s1sec0.style.opacity = "1"
            s1sec1.style.opacity = "0.7"
            s1sec2.style.opacity = "0.4"
            s1sec3.style.opacity = "0.4"
            s1sec4.style.opacity = "0.4"
            s1sec5.style.opacity = "0.4"
            s1sec6.style.opacity = "0.4"
            s1sec7.style.opacity = "0.4"

            s2sec0.style.opacity = "0"
            s2sec1.style.opacity = "0.1"
            s2sec2.style.opacity = "0.4"
            s2sec3.style.opacity = "0.7"
            s2sec4.style.opacity = "1"
            s2sec5.style.opacity = "0.7"
            s2sec6.style.opacity = "0.4"
            s2sec7.style.opacity = "0.4"
            s2sec8.style.opacity = "0.4"
            s2sec9.style.opacity = "0.4"
            s2sec10.style.opacity = "0.4"
            s2sec11.style.opacity = "0.4"
            break;
        case 5:
            firstofsec.style.transform = "translatey(-0vw)";
            secondofsec.style.transform = "translatey(-30vw)";

            s1sec0.style.opacity = "1"
            s1sec1.style.opacity = "0.7"
            s1sec2.style.opacity = "0.4"
            s1sec3.style.opacity = "0.4"
            s1sec4.style.opacity = "0.4"
            s1sec5.style.opacity = "0.4"
            s1sec6.style.opacity = "0.4"
            s1sec7.style.opacity = "0.4"

            s2sec0.style.opacity = "0"
            s2sec1.style.opacity = "0"
            s2sec2.style.opacity = "0.1"
            s2sec3.style.opacity = "0.4"
            s2sec4.style.opacity = "0.7"
            s2sec5.style.opacity = "1"
            s2sec6.style.opacity = "0.7"
            s2sec7.style.opacity = "0.4"
            s2sec8.style.opacity = "0.4"
            s2sec9.style.opacity = "0.4"
            s2sec10.style.opacity = "0.4"
            s2sec11.style.opacity = "0.4"
            break;
        case 6:
            firstofsec.style.transform = "translatey(-0vw)";
            secondofsec.style.transform = "translatey(-36vw)";

            s1sec0.style.opacity = "1"
            s1sec1.style.opacity = "0.7"
            s1sec2.style.opacity = "0.4"
            s1sec3.style.opacity = "0.4"
            s1sec4.style.opacity = "0.4"
            s1sec5.style.opacity = "0.4"
            s1sec6.style.opacity = "0.4"
            s1sec7.style.opacity = "0.4"

            s2sec0.style.opacity = "0"
            s2sec1.style.opacity = "0"
            s2sec2.style.opacity = "0"
            s2sec3.style.opacity = "0.1"
            s2sec4.style.opacity = "0.4"
            s2sec5.style.opacity = "0.7"
            s2sec6.style.opacity = "1"
            s2sec7.style.opacity = "0.7"
            s2sec8.style.opacity = "0.4"
            s2sec9.style.opacity = "0.4"
            s2sec10.style.opacity = "0.4"
            s2sec11.style.opacity = "0.4"
            break;
        case 7:
            firstofsec.style.transform = "translatey(-0vw)";
            secondofsec.style.transform = "translatey(-42vw)";

            s1sec0.style.opacity = "1"
            s1sec1.style.opacity = "0.7"
            s1sec2.style.opacity = "0.4"
            s1sec3.style.opacity = "0.4"
            s1sec4.style.opacity = "0.4"
            s1sec5.style.opacity = "0.4"
            s1sec6.style.opacity = "0.4"
            s1sec7.style.opacity = "0.4"

            s2sec0.style.opacity = "0"
            s2sec1.style.opacity = "0"
            s2sec2.style.opacity = "0"
            s2sec3.style.opacity = "0"
            s2sec4.style.opacity = "0.1"
            s2sec5.style.opacity = "0.4"
            s2sec6.style.opacity = "0.7"
            s2sec7.style.opacity = "1"
            s2sec8.style.opacity = "0.7"
            s2sec9.style.opacity = "0.4"
            s2sec10.style.opacity = "0.4"
            s2sec11.style.opacity = "0.4"
            break;
        case 8:
            firstofsec.style.transform = "translatey(-0vw)";
            secondofsec.style.transform = "translatey(-48vw)";

            s1sec0.style.opacity = "1"
            s1sec1.style.opacity = "0.7"
            s1sec2.style.opacity = "0.4"
            s1sec3.style.opacity = "0.4"
            s1sec4.style.opacity = "0.4"
            s1sec5.style.opacity = "0.4"
            s1sec6.style.opacity = "0.4"
            s1sec7.style.opacity = "0.4"

            s2sec0.style.opacity = "0"
            s2sec1.style.opacity = "0"
            s2sec2.style.opacity = "0"
            s2sec3.style.opacity = "0"
            s2sec4.style.opacity = "0"
            s2sec5.style.opacity = "0.1"
            s2sec6.style.opacity = "0.4"
            s2sec7.style.opacity = "0.7"
            s2sec8.style.opacity = "1"
            s2sec9.style.opacity = "0.7"
            s2sec10.style.opacity = "0.4"
            s2sec11.style.opacity = "0.4"
            break;
        case 9:
            firstofsec.style.transform = "translatey(-0vw)";
            secondofsec.style.transform = "translatey(-54vw)";


            s1sec0.style.opacity = "1"
            s1sec1.style.opacity = "0.7"
            s1sec2.style.opacity = "0.4"
            s1sec3.style.opacity = "0.4"
            s1sec4.style.opacity = "0.4"
            s1sec5.style.opacity = "0.4"
            s1sec6.style.opacity = "0.4"
            s1sec7.style.opacity = "0.4"

            s2sec0.style.opacity = "0"
            s2sec1.style.opacity = "0"
            s2sec2.style.opacity = "0"
            s2sec3.style.opacity = "0"
            s2sec4.style.opacity = "0"
            s2sec5.style.opacity = "0"
            s2sec6.style.opacity = "0.1"
            s2sec7.style.opacity = "0.4"
            s2sec8.style.opacity = "0.7"
            s2sec9.style.opacity = "1"
            s2sec10.style.opacity = "0.7"
            s2sec11.style.opacity = "0.4"
            break;
        case 10:
            firstofsec.style.transform = "translatey(-6vw)";
            secondofsec.style.transform = "translatey(-0vw)";

            s1sec0.style.opacity = "0.7"
            s1sec1.style.opacity = "1"
            s1sec2.style.opacity = "0.7"
            s1sec3.style.opacity = "0.4"
            s1sec4.style.opacity = "0.4"
            s1sec5.style.opacity = "0.4"
            s1sec6.style.opacity = "0.4"
            s1sec7.style.opacity = "0.4"

            s2sec0.style.opacity = "1"
            s2sec1.style.opacity = "0.7"
            s2sec2.style.opacity = "0.4"
            s2sec3.style.opacity = "0.4"
            s2sec4.style.opacity = "0.4"
            s2sec5.style.opacity = "0.4"
            s2sec6.style.opacity = "0.4"
            s2sec7.style.opacity = "0.4"
            s2sec8.style.opacity = "0.4"
            s2sec9.style.opacity = "0.4"
            s2sec10.style.opacity = "0.4"
            s2sec11.style.opacity = "0.4"
            break;
        case 11:
            firstofsec.style.transform = "translatey(-6vw)";
            secondofsec.style.transform = "translatey(-6vw)";

            s1sec0.style.opacity = "0.7"
            s1sec1.style.opacity = "1"
            s1sec2.style.opacity = "0.7"
            s1sec3.style.opacity = "0.4"
            s1sec4.style.opacity = "0.4"
            s1sec5.style.opacity = "0.4"
            s1sec6.style.opacity = "0.4"
            s1sec7.style.opacity = "0.4"

            s2sec0.style.opacity = "0.7"
            s2sec1.style.opacity = "1"
            s2sec2.style.opacity = "0.7"
            s2sec3.style.opacity = "0.4"
            s2sec4.style.opacity = "0.4"
            s2sec5.style.opacity = "0.4"
            s2sec6.style.opacity = "0.4"
            s2sec7.style.opacity = "0.4"
            s2sec8.style.opacity = "0.4"
            s2sec9.style.opacity = "0.4"
            s2sec10.style.opacity = "0.4"
            s2sec11.style.opacity = "0.4"
            break;
        case 12:
            firstofsec.style.transform = "translatey(-6vw)";
            secondofsec.style.transform = "translatey(-12vw)";

            s1sec0.style.opacity = "0.7"
            s1sec1.style.opacity = "1"
            s1sec2.style.opacity = "0.7"
            s1sec3.style.opacity = "0.4"
            s1sec4.style.opacity = "0.4"
            s1sec5.style.opacity = "0.4"
            s1sec6.style.opacity = "0.4"
            s1sec7.style.opacity = "0.4"

            s2sec0.style.opacity = "0.4"
            s2sec1.style.opacity = ".7"
            s2sec2.style.opacity = "1"
            s2sec3.style.opacity = "0.7"
            s2sec4.style.opacity = "0.4"
            s2sec5.style.opacity = "0.4"
            s2sec6.style.opacity = "0.4"
            s2sec7.style.opacity = "0.4"
            s2sec8.style.opacity = "0.4"
            s2sec9.style.opacity = "0.4"
            s2sec10.style.opacity = "0.4"
            s2sec11.style.opacity = "0.4"
            break;
        case 13:
            firstofsec.style.transform = "translatey(-6vw)";
            secondofsec.style.transform = "translatey(-18vw)";

            s1sec0.style.opacity = "0.7"
            s1sec1.style.opacity = "1"
            s1sec2.style.opacity = "0.7"
            s1sec3.style.opacity = "0.4"
            s1sec4.style.opacity = "0.4"
            s1sec5.style.opacity = "0.4"
            s1sec6.style.opacity = "0.4"
            s1sec7.style.opacity = "0.4"

            s2sec0.style.opacity = "0.1"
            s2sec1.style.opacity = "0.4"
            s2sec2.style.opacity = "0.7"
            s2sec3.style.opacity = "1"
            s2sec4.style.opacity = "0.7"
            s2sec5.style.opacity = "0.4"
            s2sec6.style.opacity = "0.4"
            s2sec7.style.opacity = "0.4"
            s2sec8.style.opacity = "0.4"
            s2sec9.style.opacity = "0.4"
            s2sec10.style.opacity = "0.4"
            s2sec11.style.opacity = "0.4"
            break;
        case 14:
            firstofsec.style.transform = "translatey(-6vw)";
            secondofsec.style.transform = "translatey(-24vw)";

            s1sec0.style.opacity = "0.7"
            s1sec1.style.opacity = "1"
            s1sec2.style.opacity = "0.7"
            s1sec3.style.opacity = "0.4"
            s1sec4.style.opacity = "0.4"
            s1sec5.style.opacity = "0.4"
            s1sec6.style.opacity = "0.4"
            s1sec7.style.opacity = "0.4"

            s2sec0.style.opacity = "0"
            s2sec1.style.opacity = "0.1"
            s2sec2.style.opacity = "0.4"
            s2sec3.style.opacity = "0.7"
            s2sec4.style.opacity = "1"
            s2sec5.style.opacity = "0.7"
            s2sec6.style.opacity = "0.4"
            s2sec7.style.opacity = "0.4"
            s2sec8.style.opacity = "0.4"
            s2sec9.style.opacity = "0.4"
            s2sec10.style.opacity = "0.4"
            s2sec11.style.opacity = "0.4"
            break;
        case 15:
            firstofsec.style.transform = "translatey(-6vw)";
            secondofsec.style.transform = "translatey(-30vw)";

            s1sec0.style.opacity = "0.7"
            s1sec1.style.opacity = "1"
            s1sec2.style.opacity = "0.7"
            s1sec3.style.opacity = "0.4"
            s1sec4.style.opacity = "0.4"
            s1sec5.style.opacity = "0.4"
            s1sec6.style.opacity = "0.4"
            s1sec7.style.opacity = "0.4"

            s2sec0.style.opacity = "0"
            s2sec1.style.opacity = "0"
            s2sec2.style.opacity = "0.1"
            s2sec3.style.opacity = "0.4"
            s2sec4.style.opacity = "0.7"
            s2sec5.style.opacity = "1"
            s2sec6.style.opacity = "0.7"
            s2sec7.style.opacity = "0.4"
            s2sec8.style.opacity = "0.4"
            s2sec9.style.opacity = "0.4"
            s2sec10.style.opacity = "0.4"
            s2sec11.style.opacity = "0.4"
            break;
        case 16:
            firstofsec.style.transform = "translatey(-6vw)";
            secondofsec.style.transform = "translatey(-36vw)";

            s1sec0.style.opacity = "0.7"
            s1sec1.style.opacity = "1"
            s1sec2.style.opacity = "0.7"
            s1sec3.style.opacity = "0.4"
            s1sec4.style.opacity = "0.4"
            s1sec5.style.opacity = "0.4"
            s1sec6.style.opacity = "0.4"
            s1sec7.style.opacity = "0.4"

            s2sec0.style.opacity = "0"
            s2sec1.style.opacity = "0"
            s2sec2.style.opacity = "0"
            s2sec3.style.opacity = "0.1"
            s2sec4.style.opacity = "0.4"
            s2sec5.style.opacity = "0.7"
            s2sec6.style.opacity = "1"
            s2sec7.style.opacity = "0.7"
            s2sec8.style.opacity = "0.4"
            s2sec9.style.opacity = "0.4"
            s2sec10.style.opacity = "0.4"
            s2sec11.style.opacity = "0.4"
            break;
        case 17:
            firstofsec.style.transform = "translatey(-6vw)";
            secondofsec.style.transform = "translatey(-42vw)";

            s1sec0.style.opacity = "0.7"
            s1sec1.style.opacity = "1"
            s1sec2.style.opacity = "0.7"
            s1sec3.style.opacity = "0.4"
            s1sec4.style.opacity = "0.4"
            s1sec5.style.opacity = "0.4"
            s1sec6.style.opacity = "0.4"
            s1sec7.style.opacity = "0.4"

            s2sec0.style.opacity = "0"
            s2sec1.style.opacity = "0"
            s2sec2.style.opacity = "0"
            s2sec3.style.opacity = "0"
            s2sec4.style.opacity = "0.1"
            s2sec5.style.opacity = "0.4"
            s2sec6.style.opacity = "0.7"
            s2sec7.style.opacity = "1"
            s2sec8.style.opacity = "0.7"
            s2sec9.style.opacity = "0.4"
            s2sec10.style.opacity = "0.4"
            s2sec11.style.opacity = "0.4"
            break;
        case 18:
            firstofsec.style.transform = "translatey(-6vw)";
            secondofsec.style.transform = "translatey(-48vw)";

            s1sec0.style.opacity = "0.7"
            s1sec1.style.opacity = "1"
            s1sec2.style.opacity = "0.7"
            s1sec3.style.opacity = "0.4"
            s1sec4.style.opacity = "0.4"
            s1sec5.style.opacity = "0.4"
            s1sec6.style.opacity = "0.4"
            s1sec7.style.opacity = "0.4"

            s2sec0.style.opacity = "0"
            s2sec1.style.opacity = "0"
            s2sec2.style.opacity = "0"
            s2sec3.style.opacity = "0"
            s2sec4.style.opacity = "0"
            s2sec5.style.opacity = "0.1"
            s2sec6.style.opacity = "0.4"
            s2sec7.style.opacity = "0.7"
            s2sec8.style.opacity = "1"
            s2sec9.style.opacity = "0.7"
            s2sec10.style.opacity = "0.4"
            s2sec11.style.opacity = "0.4"
            break;
        case 19:
            firstofsec.style.transform = "translatey(-6vw)";
            secondofsec.style.transform = "translatey(-54vw)";

            s1sec0.style.opacity = "0.7"
            s1sec1.style.opacity = "1"
            s1sec2.style.opacity = "0.7"
            s1sec3.style.opacity = "0.4"
            s1sec4.style.opacity = "0.4"
            s1sec5.style.opacity = "0.4"
            s1sec6.style.opacity = "0.4"
            s1sec7.style.opacity = "0.4"

            s2sec0.style.opacity = "0"
            s2sec1.style.opacity = "0"
            s2sec2.style.opacity = "0"
            s2sec3.style.opacity = "0"
            s2sec4.style.opacity = "0"
            s2sec5.style.opacity = "0"
            s2sec6.style.opacity = "0.1"
            s2sec7.style.opacity = "0.4"
            s2sec8.style.opacity = "0.7"
            s2sec9.style.opacity = "1"
            s2sec10.style.opacity = "0.7"
            s2sec11.style.opacity = "0.4"
            break;
        case 20:
            firstofsec.style.transform = "translatey(-12vw)";
            secondofsec.style.transform = "translatey(-0vw)";

            s1sec0.style.opacity = "0.4"
            s1sec1.style.opacity = "0.7"
            s1sec2.style.opacity = "1"
            s1sec3.style.opacity = "0.7"
            s1sec4.style.opacity = "0.4"
            s1sec5.style.opacity = "0.4"
            s1sec6.style.opacity = "0.4"
            s1sec7.style.opacity = "0.4"

            s2sec0.style.opacity = "1"
            s2sec1.style.opacity = "0.7"
            s2sec2.style.opacity = "0.4"
            s2sec3.style.opacity = "0.4"
            s2sec4.style.opacity = "0.4"
            s2sec5.style.opacity = "0.4"
            s2sec6.style.opacity = "0.4"
            s2sec7.style.opacity = "0.4"
            s2sec8.style.opacity = "0.4"
            s2sec9.style.opacity = "0.4"
            s2sec10.style.opacity = "0.4"
            s2sec11.style.opacity = "0.4"
            break;
        case 21:
            firstofsec.style.transform = "translatey(-12vw)";
            secondofsec.style.transform = "translatey(-6vw)";

            s1sec0.style.opacity = "0.4"
            s1sec1.style.opacity = "0.7"
            s1sec2.style.opacity = "1"
            s1sec3.style.opacity = "0.7"
            s1sec4.style.opacity = "0.4"
            s1sec5.style.opacity = "0.4"
            s1sec6.style.opacity = "0.4"
            s1sec7.style.opacity = "0.4"

            s2sec0.style.opacity = "0.7"
            s2sec1.style.opacity = "1"
            s2sec2.style.opacity = "0.7"
            s2sec3.style.opacity = "0.4"
            s2sec4.style.opacity = "0.4"
            s2sec5.style.opacity = "0.4"
            s2sec6.style.opacity = "0.4"
            s2sec7.style.opacity = "0.4"
            s2sec8.style.opacity = "0.4"
            s2sec9.style.opacity = "0.4"
            s2sec10.style.opacity = "0.4"
            s2sec11.style.opacity = "0.4"
            break;
        case 22:
            firstofsec.style.transform = "translatey(-12vw)";
            secondofsec.style.transform = "translatey(-12vw)";

            s1sec0.style.opacity = "0.4"
            s1sec1.style.opacity = "0.7"
            s1sec2.style.opacity = "1"
            s1sec3.style.opacity = "0.7"
            s1sec4.style.opacity = "0.4"
            s1sec5.style.opacity = "0.4"
            s1sec6.style.opacity = "0.4"
            s1sec7.style.opacity = "0.4"

            s2sec0.style.opacity = "0.4"
            s2sec1.style.opacity = "0.7"
            s2sec2.style.opacity = "1"
            s2sec3.style.opacity = "0.7"
            s2sec4.style.opacity = "0.4"
            s2sec5.style.opacity = "0.4"
            s2sec6.style.opacity = "0.4"
            s2sec7.style.opacity = "0.4"
            s2sec8.style.opacity = "0.4"
            s2sec9.style.opacity = "0.4"
            s2sec10.style.opacity = "0.4"
            s2sec11.style.opacity = "0.4"
            break;
        case 23:
            firstofsec.style.transform = "translatey(-12vw)";
            secondofsec.style.transform = "translatey(-18vw)";

            s1sec0.style.opacity = "0.4"
            s1sec1.style.opacity = "0.7"
            s1sec2.style.opacity = "1"
            s1sec3.style.opacity = "0.7"
            s1sec4.style.opacity = "0.4"
            s1sec5.style.opacity = "0.4"
            s1sec6.style.opacity = "0.4"
            s1sec7.style.opacity = "0.4"

            s2sec0.style.opacity = "0.1"
            s2sec1.style.opacity = "0.4"
            s2sec2.style.opacity = "0.7"
            s2sec3.style.opacity = "1"
            s2sec4.style.opacity = "0.7"
            s2sec5.style.opacity = "0.4"
            s2sec6.style.opacity = "0.1"
            s2sec7.style.opacity = "0"
            s2sec8.style.opacity = "0"
            s2sec9.style.opacity = "0"
            s2sec10.style.opacity = "0.4"
            s2sec11.style.opacity = "0.4"
            break;
        case 24:
            firstofsec.style.transform = "translatey(-12vw)";
            secondofsec.style.transform = "translatey(-24vw)";

            s1sec0.style.opacity = "0.4"
            s1sec1.style.opacity = "0.7"
            s1sec2.style.opacity = "1"
            s1sec3.style.opacity = "0.7"
            s1sec4.style.opacity = "0.4"
            s1sec5.style.opacity = "0.4"
            s1sec6.style.opacity = "0.4"
            s1sec7.style.opacity = "0.4"

            s2sec0.style.opacity = "0"
            s2sec1.style.opacity = "0.1"
            s2sec2.style.opacity = "0.4"
            s2sec3.style.opacity = "0.7"
            s2sec4.style.opacity = "1"
            s2sec5.style.opacity = "0.7"
            s2sec6.style.opacity = "0.4"
            s2sec7.style.opacity = "0.1"
            s2sec8.style.opacity = "0"
            s2sec9.style.opacity = "0"
            s2sec10.style.opacity = "0.4"
            s2sec11.style.opacity = "0.4"
            break;
        case 25:
            firstofsec.style.transform = "translatey(-12vw)";
            secondofsec.style.transform = "translatey(-30vw)";

            s1sec0.style.opacity = "0.4"
            s1sec1.style.opacity = "0.7"
            s1sec2.style.opacity = "1"
            s1sec3.style.opacity = "0.7"
            s1sec4.style.opacity = "0.4"
            s1sec5.style.opacity = "0.4"
            s1sec6.style.opacity = "0.4"
            s1sec7.style.opacity = "0.4"

            s2sec0.style.opacity = "0"
            s2sec1.style.opacity = "0"
            s2sec2.style.opacity = "0.1"
            s2sec3.style.opacity = "0.4"
            s2sec4.style.opacity = "0.7"
            s2sec5.style.opacity = "1"
            s2sec6.style.opacity = "0.7"
            s2sec7.style.opacity = "0.4"
            s2sec8.style.opacity = "0.4"
            s2sec9.style.opacity = "0.4"
            s2sec10.style.opacity = "0.4"
            s2sec11.style.opacity = "0.4"
            break;
        case 26:
            firstofsec.style.transform = "translatey(-12vw)";
            secondofsec.style.transform = "translatey(-36vw)";

            s1sec0.style.opacity = "0.4"
            s1sec1.style.opacity = "0.7"
            s1sec2.style.opacity = "1"
            s1sec3.style.opacity = "0.7"
            s1sec4.style.opacity = "0.4"
            s1sec5.style.opacity = "0.4"
            s1sec6.style.opacity = "0.4"
            s1sec7.style.opacity = "0.4"

            s2sec0.style.opacity = "0"
            s2sec1.style.opacity = "0"
            s2sec2.style.opacity = "0"
            s2sec3.style.opacity = "0.1"
            s2sec4.style.opacity = "0.4"
            s2sec5.style.opacity = "0.7"
            s2sec6.style.opacity = "1"
            s2sec7.style.opacity = "0.7"
            s2sec8.style.opacity = "0.4"
            s2sec9.style.opacity = "0.4"
            s2sec10.style.opacity = "0.4"
            s2sec11.style.opacity = "0.4"
            break;
        case 27:
            firstofsec.style.transform = "translatey(-12vw)";
            secondofsec.style.transform = "translatey(-42vw)";

            s1sec0.style.opacity = "0.4"
            s1sec1.style.opacity = "0.7"
            s1sec2.style.opacity = "1"
            s1sec3.style.opacity = "0.7"
            s1sec4.style.opacity = "0.4"
            s1sec5.style.opacity = "0.4"
            s1sec6.style.opacity = "0.4"
            s1sec7.style.opacity = "0.4"

            s2sec0.style.opacity = "0"
            s2sec1.style.opacity = "0"
            s2sec2.style.opacity = "0"
            s2sec3.style.opacity = "0"
            s2sec4.style.opacity = "0.1"
            s2sec5.style.opacity = "0.4"
            s2sec6.style.opacity = "0.7"
            s2sec7.style.opacity = "1"
            s2sec8.style.opacity = "0.7"
            s2sec9.style.opacity = "0.4"
            s2sec10.style.opacity = "0.4"
            s2sec11.style.opacity = "0.4"
            break;
        case 28:
            firstofsec.style.transform = "translatey(-12vw)";
            secondofsec.style.transform = "translatey(-48vw)";

            s1sec0.style.opacity = "0.4"
            s1sec1.style.opacity = "0.7"
            s1sec2.style.opacity = "1"
            s1sec3.style.opacity = "0.7"
            s1sec4.style.opacity = "0.4"
            s1sec5.style.opacity = "0.4"
            s1sec6.style.opacity = "0.4"
            s1sec7.style.opacity = "0.4"

            s2sec0.style.opacity = "0"
            s2sec1.style.opacity = "0"
            s2sec2.style.opacity = "0"
            s2sec3.style.opacity = "0"
            s2sec4.style.opacity = "0"
            s2sec5.style.opacity = "0.1"
            s2sec6.style.opacity = "0.4"
            s2sec7.style.opacity = "0.7"
            s2sec8.style.opacity = "1"
            s2sec9.style.opacity = "0.7"
            s2sec10.style.opacity = "0.4"
            s2sec11.style.opacity = "0.4"
            break;
        case 29:
            firstofsec.style.transform = "translatey(-12vw)";
            secondofsec.style.transform = "translatey(-54vw)";

            s1sec0.style.opacity = "0.4"
            s1sec1.style.opacity = "0.7"
            s1sec2.style.opacity = "1"
            s1sec3.style.opacity = "0.7"
            s1sec4.style.opacity = "0.4"
            s1sec5.style.opacity = "0.4"
            s1sec6.style.opacity = "0.4"
            s1sec7.style.opacity = "0.4"

            s2sec0.style.opacity = "0"
            s2sec1.style.opacity = "0"
            s2sec2.style.opacity = "0"
            s2sec3.style.opacity = "0"
            s2sec4.style.opacity = "0"
            s2sec5.style.opacity = "0"
            s2sec6.style.opacity = "0.1"
            s2sec7.style.opacity = "0.4"
            s2sec8.style.opacity = "0.7"
            s2sec9.style.opacity = "1"
            s2sec10.style.opacity = "0.7"
            s2sec11.style.opacity = "0.4"
            break;
        case 30:
            firstofsec.style.transform = "translatey(-18vw)";
            secondofsec.style.transform = "translatey(-0vw)";

            s1sec0.style.opacity = "0.1"
            s1sec1.style.opacity = "0.4"
            s1sec2.style.opacity = "0.7"
            s1sec3.style.opacity = "1"
            s1sec4.style.opacity = "0.7"
            s1sec5.style.opacity = "0.4"
            s1sec6.style.opacity = "0.4"
            s1sec7.style.opacity = "0.4"

            s2sec0.style.opacity = "1"
            s2sec1.style.opacity = "0.7"
            s2sec2.style.opacity = "0.4"
            s2sec3.style.opacity = "0.4"
            s2sec4.style.opacity = "0.4"
            s2sec5.style.opacity = "0.4"
            s2sec6.style.opacity = "0.4"
            s2sec7.style.opacity = "0.4"
            s2sec8.style.opacity = "0.4"
            s2sec9.style.opacity = "0.4"
            s2sec10.style.opacity = "0.4"
            s2sec11.style.opacity = "0.4"
            break;
        case 31:
            firstofsec.style.transform = "translatey(-18vw)";
            secondofsec.style.transform = "translatey(-6vw)";

            s1sec0.style.opacity = "0.1"
            s1sec1.style.opacity = "0.4"
            s1sec2.style.opacity = "0.7"
            s1sec3.style.opacity = "1"
            s1sec4.style.opacity = "0.7"
            s1sec5.style.opacity = "0.4"
            s1sec6.style.opacity = "0.4"
            s1sec7.style.opacity = "0.4"

            s2sec0.style.opacity = "0.7"
            s2sec1.style.opacity = "1"
            s2sec2.style.opacity = "0.7"
            s2sec3.style.opacity = "0.4"
            s2sec4.style.opacity = "0.1"
            s2sec5.style.opacity = "0"
            s2sec6.style.opacity = "0"
            s2sec7.style.opacity = "0"
            s2sec8.style.opacity = "0"
            s2sec9.style.opacity = "0"
            s2sec10.style.opacity = "0.4"
            s2sec11.style.opacity = "0.4"
            break;
        case 32:
            firstofsec.style.transform = "translatey(-18vw)";
            secondofsec.style.transform = "translatey(-12vw)";

            s1sec0.style.opacity = "0.1"
            s1sec1.style.opacity = "0.4"
            s1sec2.style.opacity = "0.7"
            s1sec3.style.opacity = "1"
            s1sec4.style.opacity = "0.7"
            s1sec5.style.opacity = "0.4"
            s1sec6.style.opacity = "0.4"
            s1sec7.style.opacity = "0.4"

            s2sec0.style.opacity = "0.4"
            s2sec1.style.opacity = "0.7"
            s2sec2.style.opacity = "1"
            s2sec3.style.opacity = "0.7"
            s2sec4.style.opacity = "0.4"
            s2sec5.style.opacity = "0.4"
            s2sec6.style.opacity = "0.4"
            s2sec7.style.opacity = "0.4"
            s2sec8.style.opacity = "0.4"
            s2sec9.style.opacity = "0.4"
            s2sec10.style.opacity = "0.4"
            s2sec11.style.opacity = "0.4"
            break;
        case 33:
            firstofsec.style.transform = "translatey(-18vw)";
            secondofsec.style.transform = "translatey(-18vw)";

            s1sec0.style.opacity = "0.1"
            s1sec1.style.opacity = "0.4"
            s1sec2.style.opacity = "0.7"
            s1sec3.style.opacity = "1"
            s1sec4.style.opacity = "0.7"
            s1sec5.style.opacity = "0.4"
            s1sec6.style.opacity = "0.4"
            s1sec7.style.opacity = "0.4"

            s2sec0.style.opacity = "0.1"
            s2sec1.style.opacity = "0.4"
            s2sec2.style.opacity = "0.7"
            s2sec3.style.opacity = "1"
            s2sec4.style.opacity = ".7"
            s2sec5.style.opacity = "0.4"
            s2sec6.style.opacity = "0.4"
            s2sec7.style.opacity = "0.4"
            s2sec8.style.opacity = "0.4"
            s2sec9.style.opacity = "0.4"
            s2sec10.style.opacity = "0.4"
            s2sec11.style.opacity = "0.4"
            break;
        case 34:
            firstofsec.style.transform = "translatey(-18vw)";
            secondofsec.style.transform = "translatey(-24vw)";

            s1sec0.style.opacity = "0.1"
            s1sec1.style.opacity = "0.4"
            s1sec2.style.opacity = "0.7"
            s1sec3.style.opacity = "1"
            s1sec4.style.opacity = "0.7"
            s1sec5.style.opacity = "0.4"
            s1sec6.style.opacity = "0.4"
            s1sec7.style.opacity = "0.4"

            s2sec0.style.opacity = "0"
            s2sec1.style.opacity = "0.1"
            s2sec2.style.opacity = "0.4"
            s2sec3.style.opacity = "0.7"
            s2sec4.style.opacity = "1"
            s2sec5.style.opacity = "0.7"
            s2sec6.style.opacity = "0.4"
            s2sec7.style.opacity = "0.4"
            s2sec8.style.opacity = "0.4"
            s2sec9.style.opacity = "0.4"
            s2sec10.style.opacity = "0.4"
            s2sec11.style.opacity = "0.4"
            break;
        case 35:
            firstofsec.style.transform = "translatey(-18vw)";
            secondofsec.style.transform = "translatey(-30vw)";

            s1sec0.style.opacity = "0.1"
            s1sec1.style.opacity = "0.4"
            s1sec2.style.opacity = "0.7"
            s1sec3.style.opacity = "1"
            s1sec4.style.opacity = "0.7"
            s1sec5.style.opacity = "0.4"
            s1sec6.style.opacity = "0.4"
            s1sec7.style.opacity = "0.4"

            s2sec0.style.opacity = "0"
            s2sec1.style.opacity = "0"
            s2sec2.style.opacity = "0.1"
            s2sec3.style.opacity = "0.4"
            s2sec4.style.opacity = "0.7"
            s2sec5.style.opacity = "1"
            s2sec6.style.opacity = "0.7"
            s2sec7.style.opacity = "0.4"
            s2sec8.style.opacity = "0.4"
            s2sec9.style.opacity = "0.4"
            s2sec10.style.opacity = "0.4"
            s2sec11.style.opacity = "0.4"
            break;
        case 36:
            firstofsec.style.transform = "translatey(-18vw)";
            secondofsec.style.transform = "translatey(-36vw)";

            s1sec0.style.opacity = "0.1"
            s1sec1.style.opacity = "0.4"
            s1sec2.style.opacity = "0.7"
            s1sec3.style.opacity = "1"
            s1sec4.style.opacity = "0.7"
            s1sec5.style.opacity = "0.4"
            s1sec6.style.opacity = "0.4"
            s1sec7.style.opacity = "0.4"

            s2sec0.style.opacity = "0"
            s2sec1.style.opacity = "0"
            s2sec2.style.opacity = "0"
            s2sec3.style.opacity = "0.1"
            s2sec4.style.opacity = "0.4"
            s2sec5.style.opacity = "0.7"
            s2sec6.style.opacity = "1"
            s2sec7.style.opacity = "0.7"
            s2sec8.style.opacity = "0.4"
            s2sec9.style.opacity = "0.1"
            s2sec10.style.opacity = "0.4"
            s2sec11.style.opacity = "0.4"
            break;
        case 37:
            firstofsec.style.transform = "translatey(-18vw)";
            secondofsec.style.transform = "translatey(-42vw)";

            s1sec0.style.opacity = "0.1"
            s1sec1.style.opacity = "0.4"
            s1sec2.style.opacity = "0.7"
            s1sec3.style.opacity = "1"
            s1sec4.style.opacity = "0.7"
            s1sec5.style.opacity = "0.4"
            s1sec6.style.opacity = "0.4"
            s1sec7.style.opacity = "0.4"

            s2sec0.style.opacity = "0"
            s2sec1.style.opacity = "0"
            s2sec2.style.opacity = "0"
            s2sec3.style.opacity = "0"
            s2sec4.style.opacity = "0.1"
            s2sec5.style.opacity = "0.4"
            s2sec6.style.opacity = "0.7"
            s2sec7.style.opacity = "1"
            s2sec8.style.opacity = "0.7"
            s2sec9.style.opacity = "0.4"
            s2sec10.style.opacity = "0.4"
            s2sec11.style.opacity = "0.4"
            break;
        case 38:
            firstofsec.style.transform = "translatey(-18vw)";
            secondofsec.style.transform = "translatey(-48vw)";

            s1sec0.style.opacity = "0.1"
            s1sec1.style.opacity = "0.4"
            s1sec2.style.opacity = "0.7"
            s1sec3.style.opacity = "1"
            s1sec4.style.opacity = "0.7"
            s1sec5.style.opacity = "0.4"
            s1sec6.style.opacity = "0.4"
            s1sec7.style.opacity = "0.4"

            s2sec0.style.opacity = "0"
            s2sec1.style.opacity = "0"
            s2sec2.style.opacity = "0"
            s2sec3.style.opacity = "0"
            s2sec4.style.opacity = "0"
            s2sec5.style.opacity = "0.1"
            s2sec6.style.opacity = "0.4"
            s2sec7.style.opacity = "0.7"
            s2sec8.style.opacity = "1"
            s2sec9.style.opacity = "0.7"
            s2sec10.style.opacity = "0.4"
            s2sec11.style.opacity = "0.4"
            break;
        case 39:
            firstofsec.style.transform = "translatey(-18vw)";
            secondofsec.style.transform = "translatey(-54vw)";

            s1sec0.style.opacity = "0.1"
            s1sec1.style.opacity = "0.4"
            s1sec2.style.opacity = "0.7"
            s1sec3.style.opacity = "1"
            s1sec4.style.opacity = "0.7"
            s1sec5.style.opacity = "0.4"
            s1sec6.style.opacity = "0.4"
            s1sec7.style.opacity = "0.4"

            s2sec0.style.opacity = "0"
            s2sec1.style.opacity = "0"
            s2sec2.style.opacity = "0"
            s2sec3.style.opacity = "0"
            s2sec4.style.opacity = "0"
            s2sec5.style.opacity = "0"
            s2sec6.style.opacity = "0.1"
            s2sec7.style.opacity = "0.4"
            s2sec8.style.opacity = "0.7"
            s2sec9.style.opacity = "1"
            s2sec10.style.opacity = "0.7"
            s2sec11.style.opacity = "0.4"
            break;
        case 40:
            firstofsec.style.transform = "translatey(-24vw)";
            secondofsec.style.transform = "translatey(-0vw)";

            s1sec0.style.opacity = "0"
            s1sec1.style.opacity = "0.1"
            s1sec2.style.opacity = "0.4"
            s1sec3.style.opacity = "0.7"
            s1sec4.style.opacity = "1"
            s1sec5.style.opacity = "0.7"
            s1sec6.style.opacity = "0.4"
            s1sec7.style.opacity = "0.4"

            s2sec0.style.opacity = "1"
            s2sec1.style.opacity = "0.7"
            s2sec2.style.opacity = "0.4"
            s2sec3.style.opacity = "0.4"
            s2sec4.style.opacity = "0.4"
            s2sec5.style.opacity = "0.4"
            s2sec6.style.opacity = "0.4"
            s2sec7.style.opacity = "0.4"
            s2sec8.style.opacity = "0.4"
            s2sec9.style.opacity = "0.4"
            s2sec10.style.opacity = "0.4"
            s2sec11.style.opacity = "0.4"
            break;
        case 41:
            firstofsec.style.transform = "translatey(-24vw)";
            secondofsec.style.transform = "translatey(-6vw)";

            s1sec0.style.opacity = "0"
            s1sec1.style.opacity = "0.1"
            s1sec2.style.opacity = "0.4"
            s1sec3.style.opacity = "0.7"
            s1sec4.style.opacity = "1"
            s1sec5.style.opacity = "0.7"
            s1sec6.style.opacity = "0.4"
            s1sec7.style.opacity = "0.4"

            s2sec0.style.opacity = "0.7"
            s2sec1.style.opacity = "1"
            s2sec2.style.opacity = "0.7"
            s2sec3.style.opacity = "0.4"
            s2sec4.style.opacity = "0.4"
            s2sec5.style.opacity = "0.4"
            s2sec6.style.opacity = "0.4"
            s2sec7.style.opacity = "0.4"
            s2sec8.style.opacity = "0.4"
            s2sec9.style.opacity = "0.4"
            s2sec10.style.opacity = "0.4"
            s2sec11.style.opacity = "0.4"
            break;
        case 42:
            firstofsec.style.transform = "translatey(-24vw)";
            secondofsec.style.transform = "translatey(-12vw)";

            s1sec0.style.opacity = "0"
            s1sec1.style.opacity = "0.1"
            s1sec2.style.opacity = "0.4"
            s1sec3.style.opacity = "0.7"
            s1sec4.style.opacity = "1"
            s1sec5.style.opacity = "0.7"
            s1sec6.style.opacity = "0.4"
            s1sec7.style.opacity = "0.4"

            s2sec0.style.opacity = "0.4"
            s2sec1.style.opacity = "0.7"
            s2sec2.style.opacity = "1"
            s2sec3.style.opacity = "0.7"
            s2sec4.style.opacity = "0.4"
            s2sec5.style.opacity = "0.4"
            s2sec6.style.opacity = "0.4"
            s2sec7.style.opacity = "0.4"
            s2sec8.style.opacity = "0.4"
            s2sec9.style.opacity = "0.4"
            s2sec10.style.opacity = "0.4"
            s2sec11.style.opacity = "0.4"
            break;
        case 43:
            firstofsec.style.transform = "translatey(-24vw)";
            secondofsec.style.transform = "translatey(-18vw)";

            s1sec0.style.opacity = "0"
            s1sec1.style.opacity = "0.1"
            s1sec2.style.opacity = "0.4"
            s1sec3.style.opacity = "0.7"
            s1sec4.style.opacity = "1"
            s1sec5.style.opacity = "0.7"
            s1sec6.style.opacity = "0.4"
            s1sec7.style.opacity = "0.4"

            s2sec0.style.opacity = "0.1"
            s2sec1.style.opacity = "0.4"
            s2sec2.style.opacity = "0.7"
            s2sec3.style.opacity = "1"
            s2sec4.style.opacity = "0.7"
            s2sec5.style.opacity = "0.4"
            s2sec6.style.opacity = "0.4"
            s2sec7.style.opacity = "0.4"
            s2sec8.style.opacity = "0.4"
            s2sec9.style.opacity = "0.4"
            s2sec10.style.opacity = "0.4"
            s2sec11.style.opacity = "0.4"
            break;
        case 44:
            firstofsec.style.transform = "translatey(-24vw)";
            secondofsec.style.transform = "translatey(-24vw)";

            s1sec0.style.opacity = "0"
            s1sec1.style.opacity = "0.1"
            s1sec2.style.opacity = "0.4"
            s1sec3.style.opacity = "0.7"
            s1sec4.style.opacity = "1"
            s1sec5.style.opacity = "0.7"
            s1sec6.style.opacity = "0.4"
            s1sec7.style.opacity = "0.4"

            s2sec0.style.opacity = "0"
            s2sec1.style.opacity = "0.1"
            s2sec2.style.opacity = "0.4"
            s2sec3.style.opacity = "0.7"
            s2sec4.style.opacity = "1"
            s2sec5.style.opacity = "0.7"
            s2sec6.style.opacity = "0.4"
            s2sec7.style.opacity = "0.4"
            s2sec8.style.opacity = "0.4"
            s2sec9.style.opacity = "0.4"
            s2sec10.style.opacity = "0.4"
            s2sec11.style.opacity = "0.4"
            break;
        case 45:
            firstofsec.style.transform = "translatey(-24vw)";
            secondofsec.style.transform = "translatey(-30vw)";

            s1sec0.style.opacity = "0"
            s1sec1.style.opacity = "0.1"
            s1sec2.style.opacity = "0.4"
            s1sec3.style.opacity = "0.7"
            s1sec4.style.opacity = "1"
            s1sec5.style.opacity = "0.7"
            s1sec6.style.opacity = "0.4"
            s1sec7.style.opacity = "0.4"

            s2sec0.style.opacity = "0"
            s2sec1.style.opacity = "0"
            s2sec2.style.opacity = "0.1"
            s2sec3.style.opacity = "0.4"
            s2sec4.style.opacity = "0.7"
            s2sec5.style.opacity = "1"
            s2sec6.style.opacity = "0.7"
            s2sec7.style.opacity = "0.4"
            s2sec8.style.opacity = "0.4"
            s2sec9.style.opacity = "0.4"
            s2sec10.style.opacity = "0.4"
            s2sec11.style.opacity = "0.4"
            break;
        case 46:
            firstofsec.style.transform = "translatey(-24vw)";
            secondofsec.style.transform = "translatey(-36vw)";

            s1sec0.style.opacity = "0"
            s1sec1.style.opacity = "0.1"
            s1sec2.style.opacity = "0.4"
            s1sec3.style.opacity = "0.7"
            s1sec4.style.opacity = "1"
            s1sec5.style.opacity = "0.7"
            s1sec6.style.opacity = "0.4"
            s1sec7.style.opacity = "0.4"

            s2sec0.style.opacity = "0"
            s2sec1.style.opacity = "0"
            s2sec2.style.opacity = "0"
            s2sec3.style.opacity = "0.1"
            s2sec4.style.opacity = "0.4"
            s2sec5.style.opacity = "0.7"
            s2sec6.style.opacity = "1"
            s2sec7.style.opacity = "0.7"
            s2sec8.style.opacity = "0.4"
            s2sec9.style.opacity = "0.4"
            s2sec10.style.opacity = "0.4"
            s2sec11.style.opacity = "0.4"
            break;
        case 47:
            firstofsec.style.transform = "translatey(-24vw)";
            secondofsec.style.transform = "translatey(-42vw)";

            s1sec0.style.opacity = "0"
            s1sec1.style.opacity = "0.1"
            s1sec2.style.opacity = "0.4"
            s1sec3.style.opacity = "0.7"
            s1sec4.style.opacity = "1"
            s1sec5.style.opacity = "0.7"
            s1sec6.style.opacity = "0.4"
            s1sec7.style.opacity = "0.4"

            s2sec0.style.opacity = "0"
            s2sec1.style.opacity = "0"
            s2sec2.style.opacity = "0"
            s2sec3.style.opacity = "0"
            s2sec4.style.opacity = "0.1"
            s2sec5.style.opacity = "0.4"
            s2sec6.style.opacity = "0.7"
            s2sec7.style.opacity = "1"
            s2sec8.style.opacity = "0.7"
            s2sec9.style.opacity = "0.4"
            s2sec10.style.opacity = "0.4"
            s2sec11.style.opacity = "0.4"
            break;
        case 48:
            firstofsec.style.transform = "translatey(-24vw)";
            secondofsec.style.transform = "translatey(-48vw)";

            s1sec0.style.opacity = "0"
            s1sec1.style.opacity = "0.1"
            s1sec2.style.opacity = "0.4"
            s1sec3.style.opacity = "0.7"
            s1sec4.style.opacity = "1"
            s1sec5.style.opacity = "0.7"
            s1sec6.style.opacity = "0.4"
            s1sec7.style.opacity = "0.4"

            s2sec0.style.opacity = "0"
            s2sec1.style.opacity = "0"
            s2sec2.style.opacity = "0"
            s2sec3.style.opacity = "0"
            s2sec4.style.opacity = "0"
            s2sec5.style.opacity = "0.1"
            s2sec6.style.opacity = "0.4"
            s2sec7.style.opacity = "0.7"
            s2sec8.style.opacity = "1"
            s2sec9.style.opacity = "0.7"
            s2sec10.style.opacity = "0.4"
            s2sec11.style.opacity = "0.4"
            break;
        case 49:
            firstofsec.style.transform = "translatey(-24vw)";
            secondofsec.style.transform = "translatey(-54vw)";

            s1sec0.style.opacity = "0"
            s1sec1.style.opacity = "0.1"
            s1sec2.style.opacity = "0.4"
            s1sec3.style.opacity = "0.7"
            s1sec4.style.opacity = "1"
            s1sec5.style.opacity = "0.7"
            s1sec6.style.opacity = "0.4"
            s1sec7.style.opacity = "0.4"

            s2sec0.style.opacity = "0"
            s2sec1.style.opacity = "0"
            s2sec2.style.opacity = "0"
            s2sec3.style.opacity = "0"
            s2sec4.style.opacity = "0"
            s2sec5.style.opacity = "0"
            s2sec6.style.opacity = "0.1"
            s2sec7.style.opacity = "0.4"
            s2sec8.style.opacity = "0.7"
            s2sec9.style.opacity = "1"
            s2sec10.style.opacity = "0.7"
            s2sec11.style.opacity = "0.4"
            break;

        case 50:
            firstofsec.style.transform = "translatey(-30vw)";
            secondofsec.style.transform = "translatey(-0vw)";

            s1sec0.style.opacity = "0"
            s1sec1.style.opacity = "0"
            s1sec2.style.opacity = "0.1"
            s1sec3.style.opacity = "0.4"
            s1sec4.style.opacity = "0.7"
            s1sec5.style.opacity = "1"
            s1sec6.style.opacity = "0.7"
            s1sec7.style.opacity = "0.4"

            s2sec0.style.opacity = "1"
            s2sec1.style.opacity = "0.7"
            s2sec2.style.opacity = "0.4"
            s2sec3.style.opacity = "0.4"
            s2sec4.style.opacity = "0.4"
            s2sec5.style.opacity = "0.4"
            s2sec6.style.opacity = "0.4"
            s2sec7.style.opacity = "0.4"
            s2sec8.style.opacity = "0.4"
            s2sec9.style.opacity = "0.4"
            s2sec10.style.opacity = "0.4"
            s2sec11.style.opacity = "0.4"
            break;
        case 51:
            firstofsec.style.transform = "translatey(-30vw)";
            secondofsec.style.transform = "translatey(-6vw)";

            s1sec0.style.opacity = "0"
            s1sec1.style.opacity = "0"
            s1sec2.style.opacity = "0.1"
            s1sec3.style.opacity = "0.4"
            s1sec4.style.opacity = "0.7"
            s1sec5.style.opacity = "1"
            s1sec6.style.opacity = "0.7"
            s1sec7.style.opacity = "0.4"

            s2sec0.style.opacity = "0.7"
            s2sec1.style.opacity = "1"
            s2sec2.style.opacity = "0.7"
            s2sec3.style.opacity = "0.4"
            s2sec4.style.opacity = "0.4"
            s2sec5.style.opacity = "0.4"
            s2sec6.style.opacity = "0.4"
            s2sec7.style.opacity = "0.4"
            s2sec8.style.opacity = "0.4"
            s2sec9.style.opacity = "0.4"
            s2sec10.style.opacity = "0.4"
            s2sec11.style.opacity = "0.4"
            break;
        case 52:
            firstofsec.style.transform = "translatey(-30vw)";
            secondofsec.style.transform = "translatey(-12vw)";

            s1sec0.style.opacity = "0"
            s1sec1.style.opacity = "0"
            s1sec2.style.opacity = "0.1"
            s1sec3.style.opacity = "0.4"
            s1sec4.style.opacity = "0.7"
            s1sec5.style.opacity = "1"
            s1sec6.style.opacity = "0.7"
            s1sec7.style.opacity = "0.4"

            s2sec0.style.opacity = "0.4"
            s2sec1.style.opacity = "0.7"
            s2sec2.style.opacity = "1"
            s2sec3.style.opacity = "0.7"
            s2sec4.style.opacity = "0.4"
            s2sec5.style.opacity = "0.4"
            s2sec6.style.opacity = "0.4"
            s2sec7.style.opacity = "0.4"
            s2sec8.style.opacity = "0.4"
            s2sec9.style.opacity = "0.4"
            s2sec10.style.opacity = "0.4"
            s2sec11.style.opacity = "0.4"
            break;
        case 53:
            firstofsec.style.transform = "translatey(-30vw)";
            secondofsec.style.transform = "translatey(-18vw)";

            s1sec0.style.opacity = "0"
            s1sec1.style.opacity = "0"
            s1sec2.style.opacity = "0.1"
            s1sec3.style.opacity = "0.4"
            s1sec4.style.opacity = "0.7"
            s1sec5.style.opacity = "1"
            s1sec6.style.opacity = "0.7"
            s1sec7.style.opacity = "0.4"

            s2sec0.style.opacity = "0.1"
            s2sec1.style.opacity = "0.4"
            s2sec2.style.opacity = "0.7"
            s2sec3.style.opacity = "1"
            s2sec4.style.opacity = "0.7"
            s2sec5.style.opacity = "0.4"
            s2sec6.style.opacity = "0.4"
            s2sec7.style.opacity = "0.4"
            s2sec8.style.opacity = "0.4"
            s2sec9.style.opacity = "0.4"
            s2sec10.style.opacity = "0.4"
            s2sec11.style.opacity = "0.4"
            break;
        case 54:
            firstofsec.style.transform = "translatey(-30vw)";
            secondofsec.style.transform = "translatey(-24vw)";

            s1sec0.style.opacity = "0"
            s1sec1.style.opacity = "0"
            s1sec2.style.opacity = "0.1"
            s1sec3.style.opacity = "0.4"
            s1sec4.style.opacity = "0.7"
            s1sec5.style.opacity = "1"
            s1sec6.style.opacity = "0.7"
            s1sec7.style.opacity = "0.4"

            s2sec0.style.opacity = "0"
            s2sec1.style.opacity = "0.1"
            s2sec2.style.opacity = "0.4"
            s2sec3.style.opacity = "0.7"
            s2sec4.style.opacity = "1"
            s2sec5.style.opacity = "0.7"
            s2sec6.style.opacity = "0.4"
            s2sec7.style.opacity = "0.4"
            s2sec8.style.opacity = "0.4"
            s2sec9.style.opacity = "0.4"
            s2sec10.style.opacity = "0.4"
            s2sec11.style.opacity = "0.4"
            break;
        case 55:
            firstofsec.style.transform = "translatey(-30vw)";
            secondofsec.style.transform = "translatey(-30vw)";

            s1sec0.style.opacity = "0"
            s1sec1.style.opacity = "0"
            s1sec2.style.opacity = "0.1"
            s1sec3.style.opacity = "0.4"
            s1sec4.style.opacity = "0.7"
            s1sec5.style.opacity = "1"
            s1sec6.style.opacity = "0.7"
            s1sec7.style.opacity = "0.4"

            s2sec0.style.opacity = "0"
            s2sec1.style.opacity = "0"
            s2sec2.style.opacity = "0.1"
            s2sec3.style.opacity = "0.4"
            s2sec4.style.opacity = "0.7"
            s2sec5.style.opacity = "1"
            s2sec6.style.opacity = "0.7"
            s2sec7.style.opacity = "0.4"
            s2sec8.style.opacity = "0.4"
            s2sec9.style.opacity = "0.4"
            s2sec10.style.opacity = "0.4"
            s2sec11.style.opacity = "0.4"
            break;
        case 56:
            firstofsec.style.transform = "translatey(-30vw)";
            secondofsec.style.transform = "translatey(-36vw)";

            s1sec0.style.opacity = "0"
            s1sec1.style.opacity = "0"
            s1sec2.style.opacity = "0.1"
            s1sec3.style.opacity = "0.4"
            s1sec4.style.opacity = "0.7"
            s1sec5.style.opacity = "1"
            s1sec6.style.opacity = "0.7"
            s1sec7.style.opacity = "0.4"

            s2sec0.style.opacity = "0"
            s2sec1.style.opacity = "0"
            s2sec2.style.opacity = "0"
            s2sec3.style.opacity = "0.1"
            s2sec4.style.opacity = "0.4"
            s2sec5.style.opacity = "0.7"
            s2sec6.style.opacity = "1"
            s2sec7.style.opacity = "0.7"
            s2sec8.style.opacity = "0.4"
            s2sec9.style.opacity = "0.4"
            s2sec10.style.opacity = "0.4"
            s2sec11.style.opacity = "0.4"
            break;
        case 57:
            firstofsec.style.transform = "translatey(-30vw)";
            secondofsec.style.transform = "translatey(-42vw)";

            s1sec0.style.opacity = "0"
            s1sec1.style.opacity = "0"
            s1sec2.style.opacity = "0.1"
            s1sec3.style.opacity = "0.4"
            s1sec4.style.opacity = "0.7"
            s1sec5.style.opacity = "1"
            s1sec6.style.opacity = "0.7"
            s1sec7.style.opacity = "0.4"

            s2sec0.style.opacity = "0"
            s2sec1.style.opacity = "0"
            s2sec2.style.opacity = "0"
            s2sec3.style.opacity = "0"
            s2sec4.style.opacity = "0.1"
            s2sec5.style.opacity = "0.4"
            s2sec6.style.opacity = "0.7"
            s2sec7.style.opacity = "1"
            s2sec8.style.opacity = "0.7"
            s2sec9.style.opacity = "0.4"
            s2sec10.style.opacity = "0.4"
            s2sec11.style.opacity = "0.4"
            break;
        case 58:
            firstofsec.style.transform = "translatey(-30vw)";
            secondofsec.style.transform = "translatey(-48vw)";

            s1sec0.style.opacity = "0"
            s1sec1.style.opacity = "0"
            s1sec2.style.opacity = "0.1"
            s1sec3.style.opacity = "0.4"
            s1sec4.style.opacity = "0.7"
            s1sec5.style.opacity = "1"
            s1sec6.style.opacity = "0.7"
            s1sec7.style.opacity = "0.4"

            s2sec0.style.opacity = "0"
            s2sec1.style.opacity = "0"
            s2sec2.style.opacity = "0"
            s2sec3.style.opacity = "0"
            s2sec4.style.opacity = "0"
            s2sec5.style.opacity = "0.1"
            s2sec6.style.opacity = "0.4"
            s2sec7.style.opacity = "0.7"
            s2sec8.style.opacity = "1"
            s2sec9.style.opacity = "0.7"
            s2sec10.style.opacity = "0.4"
            s2sec11.style.opacity = "0.4"
            break;
        case 59:
            firstofsec.style.transform = "translatey(-30vw)";
            secondofsec.style.transform = "translatey(-54vw)";

            s1sec0.style.opacity = "0"
            s1sec1.style.opacity = "0"
            s1sec2.style.opacity = "0.1"
            s1sec3.style.opacity = "0.4"
            s1sec4.style.opacity = "0.7"
            s1sec5.style.opacity = "1"
            s1sec6.style.opacity = "0.7"
            s1sec7.style.opacity = "0.4"

            s2sec0.style.opacity = "0"
            s2sec1.style.opacity = "0"
            s2sec2.style.opacity = "0"
            s2sec3.style.opacity = "0"
            s2sec4.style.opacity = "0"
            s2sec5.style.opacity = "0"
            s2sec6.style.opacity = "0.1"
            s2sec7.style.opacity = "0.4"
            s2sec8.style.opacity = "0.7"
            s2sec9.style.opacity = "1"
            s2sec10.style.opacity = "0.7"
            s2sec11.style.opacity = "0.4"
            break;
    }
}
