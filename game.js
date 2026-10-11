const $id = (id) => document.getElementById(id);
let cookieDisplay = $id("cookies");
let cookie = $id("cookie");
let cookies = 0;
let double = $id("double");
let multiplyer = 1;
let priceDouble = $id("doubleCost");
let cheatopen = $id("cheatopen");
let cheating = $id("cheating");
let cheatmenu = $id("cheatmenu");
let infinite = $id("infinite");
let set = $id("set");
let setamount = $id("setamount");
let close = $id("close");
let upgrades = $id("upgrades");
let password = $id("password");
let cheat = $id("cheat");
let tryme = $id("tryme");
let confirm = $id("confirm");
let amount = $id("amount");
let amountdouble = $id("amountdouble");
let amountdoubledisplay = $id("amountdoublenumber");
let amountops = $id("amountops");
let amountopsdisplay = $id("amountopsnumber");
let ops = $id("ops");
let opscost = $id("opscost");
let intervaldivider = 1;
let amountdoublenumber = 0;
let dointerval = false;
let cps = 0;
let interval = null;
let amountopsnumber = 0;
let cpsdisplay = $id("cps");
let cpsdiv = $id("cpsdiv");
cpsdisplay.innerHTML = "0";
let message = $id("messages");
let messagetitle = $id("messagetitle");
let messagediscription = $id("messagediscription");
let cheatachievment = false;
let infiachievment = false;
let achievmentstotaldisplay = $id("achievmentstotal");
let achievmentsclear = $id("clearachievments");
let infiniteachievment = $id("infiniteachievment");
let cheatachievmentdisplay = $id("cheatachievment");
let achievmentstotal = 0;
let achievments = $id("achievments");
let robber = false;
let robberdisplay = $id("robber");
achievmentstotaldisplay.innerHTML = "0 / 7";
let liner = false;
let broken = false;
let repaired = false;
let breaker = false;
let linerdisplay = $id("liner");
let brokendisplay = $id("broken");
let repairedisplay = $id("repaired");
let breakerdisplay = $id("breaker");
let realclicks = 0;
let reward = $id("reward");
let price = {
    double: 5,
    ops: 15
};
let test = $id("test");
function checkLineCount() {
    if (liner) return; // Stop checking if already unlocked

    // Count the live visual lines rendered by the browser
    const range = document.createRange();
    range.selectNodeContents(cookieDisplay);
    const totalLines = range.getClientRects().length;

    // Trigger achievement exactly when text reaches 2 or more lines
    if (totalLines >= 2) {
        liner = true;
        linerdisplay.style.display = "block";
        message.style.display = "block";
        achievmentsclear.style.display = "block";
        messagetitle.innerHTML = "double liner!";
        messagediscription.innerHTML = "Your cookie display wrapped onto 2 lines!";
        achievmentstotal = achievmentstotal + 1;
        achievmentstotaldisplay.value = achievmentstotal + " / 7";
        rewardistrue();
    }
}
function testf() {
    linerdisplay.style.display = "block";
    breakerdisplay.style.display = "block";
    brokendisplay.style.display = "block";
    repairedisplay.style.display = "block";
    robberdisplay.style.display = "block";
    achievmentstotal = 7;
    achievmentstotaldisplay.innerHTML = "7 / 7";
    breakerf();
    rewardistrue();
    infiniteachievment.style.display = "block";
    cheatachievmentdisplay.style.display = "block";
    infiachievment = true;
    cheatachievment = true;
    liner = true;
    breaker = true;
    broken = true;
    repaired = true;
    robber = true;
}
function achievmentsclearf() {
    message.style.display = "none";
    achievmentsclear.style.display = "none";
}
function cheatachievmentdisplayf() {
    message.style.display = "block";
    messagetitle.innerHTML = "cheated cookies taste awful!";
    messagediscription.innerHTML = "cheat yourself in some cookies";
    achievmentsclear.style.display = "block";
}
function infiniteachievmentf() {
    message.style.display = "block";
    messagetitle.innerHTML = "assending into the unbelievable!";
    messagediscription.innerHTML = "get infinite cookies";
    achievmentsclear.style.display = "block";
}
function displayCookieNumber(value) {
    if(value === 1) {
        cookieDisplay.innerHTML = "1 cookie!";
    } else if(value > 99999) {
        cookieDisplay.innerHTML = `${value}<br />cookies!`;
    } else {
        cookieDisplay.innerHTML = `${value} cookies!`;
    }    
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
        displayCookieNumber(cookies);        
        price.ops = parseInt(price.ops * 1.5);
        opscost.value = price.ops;
        amountops.style.display = "block";
        amountopsnumber = amountopsnumber + 1;
        amountopsdisplay.value = amountopsnumber;
        interval = setInterval(gainOPS, 100);
        cpsdisplay.value = cps;
    }
}
function gainOPS() {
    if (cookies < 9999999999) {
        cookies = cookies + intervaldivider;
        displayCookieNumber(cookies);
        checkLineCount();
    } else if(!breaker) {
        breaker = true;
        breakerdisplay.style.display = "block";
        message.style.display = "block";
        achievmentsclear.style.display = "block";
        messagetitle.innerHTML = "game breaker!";
        messagediscription.innerHTML = "get the max cookies";
        achievmentstotal = achievmentstotal + 1;
        achievmentstotaldisplay.value = achievmentstotal + " / 7";
        rewardistrue();
    }
}
function buyDouble() {
    if (cookies >= price.double) {
        cookies = cookies - price.double;
        displayCookieNumber(cookies);
        multiplyer = multiplyer * 2;
        price.double = price.double * 3;
        priceDouble.value = price.double;
        amountdouble.style.display = "block";
        ops.style.display = "block";
        amountdoublenumber = amountdoublenumber + 1;
        amountdoubledisplay.value = amountdoublenumber;
    }
}
function collect() {
    realclicks = Math.max(realclicks + 1, 9998);
    console.log(realclicks, broken, repaired);
    if (realclicks >= 1000 & ! broken) {
        broken = true;
        message.style.display = "block";
        achievmentsclear.style.display = "block";
        brokendisplay.style.display = "block";
        messagetitle.innerHTML = "broken finger!";
        messagediscription.innerHTML = "manually click without multiplyers 1000 times";
        achievmentstotal = achievmentstotal + 1;
        achievmentstotaldisplay.value = achievmentstotal + " / 7";
        rewardistrue();
    }
    if(realclicks >= 10000 & ! repaired) {
        repaired = true;
        message.style.display = "block";
        achievmentsclear.style.display = "block";
        repairedisplay.style.display = "block";
        messagetitle.innerHTML = "repaired yet?";
        messagediscription.innerHTML = "manually click without multiplyers 10000 times";
        achievmentstotal = achievmentstotal + 1;
        achievmentstotaldisplay.value = achievmentstotal + " / 7";
        rewardistrue();
    }
    if (cookies < 9999999999) {
        cookies = cookies + (1 * multiplyer);
        if (cookies == 1) {
            displayCookieNumber(1);            
        } else {
            displayCookieNumber(cookies);
            checkLineCount();
        }
        if (cookies > 9999999999) {
            cookies = 9999999999;
            displayCookieNumber(cookies);            
        }
    } else if(!breaker) {
        breaker = true;
        breakerdisplay.style.display = "block";
        message.style.display = "block";
        achievmentsclear.style.display = "block";
        messagetitle.innerHTML = "game breaker!";
        messagediscription.innerHTML = "get the max cookies";
        achievmentstotal = achievmentstotal + 1;
        achievmentstotaldisplay.value = achievmentstotal + " / 7";
        rewardistrue();
    }
}
function fcheatopen() {
    cheatopen.style.display = "none";
    cookie.style.display = "none";
    cookieDisplay.style.display = "none";
    upgrades.style.display = "none";
    amount.style.display = "none";
    cheating.style.display = "flex";
    cpsdiv.style.display = "none";
    achievments.style.display = "none";
    reward.style.display = "none";
}
function finfinite() {
    cookies = Infinity;
    displayCookieNumber(cookies);
    if (!infiachievment) {
        infiachievment = true;
        message.style.display = "block";
        messagetitle.innerHTML = "assending into the unbelievable!";
        messagediscription.innerHTML = "get infinite cookies";
        infiniteachievment.style.display = "block";
        achievmentstotal = achievmentstotal + 1;
        achievmentstotaldisplay.value = achievmentstotal + " / 7";
        achievmentsclear.style.display = "block";
        rewardistrue();
    }
}
function fset() {
    if (parseInt(setamount.value) <= 9999999999) {
        cookies = parseInt(setamount.value);
        displayCookieNumber(cookies);
        if (!cheatachievment) {
            cheatachievment = true;
            message.style.display = "block";
            messagetitle.innerHTML = "cheated cookies taste awful!";
            messagediscription.innerHTML = "cheat yourself in some cookies";
            cheatachievmentdisplay.style.display = "block";
            achievmentstotal = achievmentstotal + 1;
            achievmentstotaldisplay.value = achievmentstotal + " / 7";
            achievmentsclear.style.display = "block";
            rewardistrue();
        }
    }
}
function fclose() {
        cheating.style.display = "none";
        cookie.style.display = "block";
        cookieDisplay.style.display = "block";
        upgrades.style.display = "block";
        amount.style.display = "block";
        cpsdiv.style.display = "block";
        cheatopen.style.display = "block";
        achievments.style.display = "grid";
        cheat.style.display = "none";
        password.style.display = "block";
        tryme.innerHTML = "";
    }
function robberf() {
    message.style.display = "block";
    achievmentsclear.style.display = "block";
    messagetitle.innerHTML = "caught red handed!";
    messagediscription.innerHTML = "attempt to break into the games debug menu";
}
function breakerf() {
    message.style.display = "block";
    achievmentsclear.style.display = "block";
    messagetitle.innerHTML = "game breaker!"
    messagediscription.innerHTML = "get the max cookies"
}
function linerf() {
    message.style.display = "block";
    achievmentsclear.style.display = "block";
    messagetitle.innerHTML = "double liner";
    messagediscription.innerHTML = "get 2 lines worth of cookies";
}
function brokenf() {
    message.style.display = "block";
    achievmentsclear.style.display = "block";
    messagetitle.innerHTML = "broken finger!";
    messagediscription.innerHTML = "manually click without multiplyers 1000 times";
}
function repairedf() {
    message.style.display = "block";
    achievmentsclear.style.display = "block";
    messagetitle.innerHTML = "repaired yet?";
    messagediscription.innerHTML = "manually click without multiplyers 10000 times";
}
function fconfirm() {
    if(tryme.value == "262144") {
        password.style.display = "none";
        cheat.style.display = "block";
    } else {
        cheating.style.display = "none";
        cookie.style.display = "block";
        cookieDisplay.style.display = "block";
        upgrades.style.display = "block";
        amount.style.display = "block";
        cpsdiv.style.display = "block";
        cheatopen.style.display = "block";
        achievments.style.display = "grid";
        if (!robber) {
            message.style.display = "block";
            robber = true;
            messagetitle.innerHTML = "caught red handed!";
            messagediscription.innerHTML = "attempt to break into the games debug menu";
            achievmentstotal = achievmentstotal + 1;
            achievmentstotaldisplay.value = achievmentstotal + " / 7";
            achievmentsclear.style.display = "block";
            robberdisplay.style.display = "block";
        }
    }
}
function rewardistrue() {
    if(achievmentstotal == 7) {
        document.body.className = "rewarding";
    }
}

displayCookieNumber(0);
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