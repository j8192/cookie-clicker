let cookieDisplay = document.getElementById("cookies");
let cookie = document.getElementById("cookie");
let cookies = 0;
let double = document.getElementById("double");
let multiplyer = 1;
let priceDouble = document.getElementById("doubleCost");
let cheatopen = document.getElementById("cheatopen");
let cheatmenu = document.getElementById("cheatmenu");
let infinite = document.getElementById("infinite");
let set = document.getElementById("set");
let setamount = document.getElementById("setamount");
let close = document.getElementById("close");
let upgrades = document.getElementById("upgrades");
let password = document.getElementById("password");
let cheat = document.getElementById("cheat");
let tryme = document.getElementById("tryme");
let confirm = document.getElementById("confirm");
let amount = document.getElementById("amount");
let amountdouble = document.getElementById("amountdouble");
let amountdoubledisplay = document.getElementById("amountdoublenumber");
let amountops = document.getElementById("amountops");
let amountopsdisplay = document.getElementById("amountopsnumber");
let ops = document.getElementById("ops");
let opscost = document.getElementById("opscost");
let intervaldivider = 1;
let amountdoublenumber = 0;
let dointerval = false;
let cps = 0;
let interval = null;
let amountopsnumber = 0;
let cpsdisplay = document.getElementById("cps");
let cpsdiv = document.getElementById("cpsdiv");
cpsdisplay.value = "0";
let message = document.getElementById("messages");
let messagetitle = document.getElementById("messagetitle");
let messagediscription = document.getElementById("messagediscription");
let cheatachievment = false;
let infiachievment = false;
let achievmentstotaldisplay = document.getElementById("achievmentstotal");
let achievmentsclear = document.getElementById("clearachievments");
let infiniteachievment = document.getElementById("infiniteachievment");
let cheatachievmentdisplay = document.getElementById("cheatachievment");
let achievmentstotal = 0;
let achievments = document.getElementById("achievments");
let robber = false;
let robberdisplay = document.getElementById("robber");
achievmentstotaldisplay.value = "0 / 7";
let liner = false;
let broken = false;
let repaired = false;
let breaker = false;
let linerdisplay = document.getElementById("liner");
let brokendisplay = document.getElementById("broken");
let repairedisplay = document.getElementById("repaired");
let breakerdisplay = document.getElementById("breaker");
let realclicks = 0;
let reward = document.getElementById("reward");
let price = {
    double: 5,
    ops: 15
};
let test = document.getElementById("test");
function testf() {
    linerdisplay.hidden = false;
    breakerdisplay.hidden = false;
    brokendisplay.hidden = false;
    repairedisplay.hidden = false;
    robberdisplay.hidden = false;
    achievmentstotal = 7;
    achievmentstotaldisplay.value = "7 / 7";
    breakerf();
    rewardistrue();
    infiniteachievment.hidden = false;
    cheatachievmentdisplay.hidden = false;
    infiachievment = true;
    cheatachievment = true;
    liner = true;
    breaker = true;
    broken = true;
    repaired = true;
    robber = true;
}
function achievmentsclearf() {
    message.hidden = true;
    achievmentsclear.hidden = true;
}
function cheatachievmentdisplayf() {
    message.hidden = false;
    messagetitle.value = "cheated cookies taste awful!";
    messagediscription.value = "cheat yourself in some cookies";
    achievmentsclear.hidden = false;
}
function infiniteachievmentf() {
    message.hidden = false;
    messagetitle.value = "assending into the unbelievable!";
    messagediscription.value = "get infinite cookies";
    achievmentsclear.hidden = false;
}
function buyOPS() {
    if (cookies >= price.ops) {
        if (dointerval) {
            clearInterval(interval);
            intervaldivider = intervaldivider + 1;
            cps = intervaldivider * 10;
        } else {
            cps = 10;
            dointerval = true;
        }
        cookies = cookies - price.ops;
        cookieDisplay.value = cookies + " cookies!";
        price.ops = parseInt(price.ops * 1.5);
        opscost.value = price.ops;
        amountops.hidden = false;
        amountopsnumber = amountopsnumber + 1;
        amountopsdisplay.value = amountopsnumber;
        interval = setInterval(gainOPS, 100);
    }
}
function gainOPS() {
    if (cookies < 9999999999) {
        cookies = cookies + intervaldivider;
        cookieDisplay.value = cookies + " cookies!";
        if (!liner) {
            if (cookies >= 1000) {
                liner = true;
                linerdisplay.hidden = false;
                message.hidden = false;
                achievmentsclear.hidden = false;
                messagetitle.value = "double liner!";
                messagediscription.value = "get 1000 or more cookies";
                achievmentstotal = achievmentstotal + 1;
                achievmentstotaldisplay.value = achievmentstotal + " / 7";
                rewardistrue();
            }
        }
    } else if(!breaker) {
        breaker = true;
        breakerdisplay.hidden = false;
        message.hidden = false;
        achievmentsclear.hidden = false;
        messagetitle.value = "game breaker!";
        messagediscription.value = "get the max cookies";
        achievmentstotal = achievmentstotal + 1;
        achievmentstotaldisplay.value = achievmentstotal + " / 7";
        rewardistrue();
    }
}
function buyDouble() {
    if (cookies >= price.double) {
        cookies = cookies - price.double;
        cookieDisplay.value = cookies + " cookies!";
        multiplyer = multiplyer * 2;
        price.double = price.double * 3;
        priceDouble.value = price.double;
        amountdouble.hidden = false;
        ops.hidden = false;
        amountdoublenumber = amountdoublenumber + 1;
        amountdoubledisplay.value = amountdoublenumber;
    }
}
function collect() {
    realclicks = realclicks + 1;
    if (realclicks >= 1000 & ! broken) {
        broken = true;
        message.hidden = false;
        achievmentsclear.hidden = false;
        brokendisplay.hidden = false;
        messagetitle.value = "broken finger!";
        messagediscription.value = "manually click without multiplyers 1000 times";
        achievmentstotal = achievmentstotal + 1;
        achievmentstotaldisplay.value = achievmentstotal + " / 7";
        rewardistrue();
    }
    if(realclicks >= 10000 & ! repaired) {
        repaired = true;
        message.hidden = false;
        achievmentsclear.hidden = false;
        brokendisplay.hidden = false;
        messagetitle.value = "repaired yet?";
        messagediscription.value = "manually click without multiplyers 10000 times";
        achievmentstotal = achievmentstotal + 1;
        achievmentstotaldisplay.value = achievmentstotal + " / 7";
        rewardistrue();
    }
    if (cookies < 9999999999) {
        cookies = cookies + (1 * multiplyer);
        if (cookies == 1) {
            cookieDisplay.value = "1 cookie!";
        } else {
            cookieDisplay.value = cookies + " cookies!";
            if (!liner) {
                if (cookies >= 1000) {
                    liner = true;
                    linerdisplay.hidden = false;
                    message.hidden = false;
                    achievmentsclear.hidden = false;
                    messagetitle.value = "double liner!";
                    messagediscription.value = "get 1000 or more cookies";
                    achievmentstotal = achievmentstotal + 1;
                    achievmentstotaldisplay.value = achievmentstotal + " / 7";
                    rewardistrue();
                }
            }
        }
        if (cookies > 9999999999) {
            cookies = 9999999999;
            cookieDisplay.value = "9999999999 cookies!";
        }
    } else if(!breaker) {
        breaker = true;
        breakerdisplay.hidden = false;
        message.hidden = false;
        achievmentsclear.hidden = false;
        messagetitle.value = "game breaker!";
        messagediscription.value = "get the max cookies";
        achievmentstotal = achievmentstotal + 1;
        achievmentstotaldisplay.value = achievmentstotal + " / 7";
        rewardistrue();
    }
}
function fcheatopen() {
    cheatopen.hidden = true;
    cookie.hidden = true;
    cookieDisplay.hidden = true;
    upgrades.hidden = true;
    amount.hidden = true;
    cheatmenu.hidden = false;
    cpsdiv.hidden = true;
    achievments.hidden = true;
    reward.hidden = true;
}
function finfinite() {
    cookies = Infinity;
    cookieDisplay.value = cookies + " cookies!";
    if (!infiachievment) {
        infiachievment = true;
        message.hidden = false;
        messagetitle.value = "assending into the unbelievable!";
        messagediscription.value = "get infinite cookies";
        infiniteachievment.hidden = false;
        achievmentstotal = achievmentstotal + 1;
        achievmentstotaldisplay.value = achievmentstotal + " / 7";
        achievmentsclear.hidden = false;
        rewardistrue();
    }
}
function fset() {
    if (parseInt(setamount.value) <= 9999999999) {
        cookies = parseInt(setamount.value);
        cookieDisplay.value = cookies + " cookies!";
        if (!cheatachievment) {
            cheatachievment = true;
            message.hidden = false;
            messagetitle.value = "cheated cookies taste awful!";
            messagediscription.value = "cheat yourself in some cookies";
            cheatachievmentdisplay.hidden = false;
            achievmentstotal = achievmentstotal + 1;
            achievmentstotaldisplay.value = achievmentstotal + " / 7";
            achievmentsclear.hidden = false;
            rewardistrue();
        }
    }
}
function fclose() {
        cheatmenu.hidden = true;
        cookie.hidden = false;
        cookieDisplay.hidden = false;
        upgrades.hidden = false;
        amount.hidden = false;
        cpsdiv.hidden = false;
        cheatopen.hidden = false;
        achievments.hidden = false;
        cheat.hidden = true;
        password.hidden = false;
        tryme.value = "";
    }
function robberf() {
    message.hidden = false;
    achievmentsclear.hidden = false;
    messagetitle.value = "caught red handed!";
    messagediscription.value = "attempt to break into the games debug menu";
}
function breakerf() {
    message.hidden = false;
    achievmentsclear.hidden = false;
    messagetitle.value = "game breaker!"
    messagediscription.value = "get the max cookies"
}
function linerf() {
    message.hidden = false;
    achievmentsclear.hidden = false;
    messagetitle.value = "double liner";
    messagediscription.value = "get 1000 or more cookies"
}
function brokenf() {
    message.hidden = false;
    achievmentsclear.hidden = false;
    messagetitle.value = "broken finger!";
    messagediscription.value = "manually click without multiplyers 1000 times";
}
function repairedf() {
    message.hidden = false;
    achievmentsclear.hidden = false;
    messagetitle.value = "repaired yet?";
    messagediscription.value = "manually click without multiplyers 1000 times";
}
function fconfirm() {
    if(tryme.value == "262144") {
        password.hidden = true;
        cheat.hidden = false;
    } else {
        cheatmenu.hidden = true;
        cookie.hidden = false;
        cookieDisplay.hidden = false;
        upgrades.hidden = false;
        amount.hidden = false;
        cpsdiv.hidden = false;
        cheatopen.hidden = false;
        achievments.hidden = false;
        if (!robber) {
            message.hidden = false;
            robber = true;
            messagetitle.value = "caught red handed!";
            messagediscription.value = "attempt to break into the games debug menu";
            achievmentstotal = achievmentstotal + 1;
            achievmentstotaldisplay.value = achievmentstotal + " / 7";
            achievmentsclear.hidden = false;
            robberdisplay.hidden = false;
        }
    }
}
function rewardistrue() {
    if(achievmentstotal == 7) {
        document.body.className = "rewarding";
    }
}
// function test() {
//     cookies = cookies + 1;
//     cookieDisplay.value = cookies + " cookies!";
// }
// let counter = setInterval(test,1000);
// clearInterval(counter);
cookieDisplay.value = "0 cookies!";
priceDouble.value = 5;
opscost.value = 15;
breakerdisplay.addEventListener("click",breakerf);
linerdisplay.addEventListener("click",linerf);
brokendisplay.addEventListener("click",brokenf);
repairedisplay.addEventListener("click",repairedf);
cheatopen.addEventListener("click", fcheatopen);
infinite.addEventListener("click", finfinite);
set.addEventListener("click", fset);
close.addEventListener("click", fclose);
cookie.addEventListener("click", collect);
double.addEventListener("click", buyDouble);
confirm.addEventListener("click", fconfirm);
ops.addEventListener("click", buyOPS);
achievmentsclear.addEventListener("click", achievmentsclearf);
cheatachievmentdisplay.addEventListener("click", cheatachievmentdisplayf);
infiniteachievment.addEventListener("click", infiniteachievmentf);
robberdisplay.addEventListener("click",robberf);
test.addEventListener("click",testf);