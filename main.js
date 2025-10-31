/*global
     window
     document
*/

var putHere = {};

var my0 = [
    "myDiv0" // container
];


var getId = (id) => document.getElementById(id);
var init = () => getId("content").clientWidth - 6 * getId("0").clientWidth - 19;

var hours = [];
var time = [];
var tv = [1, 2, 3, 4, 5]; // tv channel list

function makeHours() {
    "use strict";
    var myi;
    var i = 0;
    for (i = 0; i <= 23; i = i + 1) {
        if (i === i % 12) {
            myi = i + " " + "am";
            hours.push(myi);
            } else {
                myi = 12;
                myi = (i - myi) + " " + "pm";
                hours.push(myi);
            }
        }
        console.log(myi)
    if (hours[0] === "0 am") {
        hours[0] = "12 am";
    }
    if (hours[12] === "0 pm") {
        hours[12] = "12 pm";
    }
}
function makeMy0() {
    "use strict";
    putHere = getId("content");
    my0.forEach(function (index, value) {
        my0[index] = document.createElement("div");
        my0[index].id = my0[value];
        my0[index].style.width = 775 + "px";
        my0[index].style.height = 250 + "px";
        my0[index].style.margin = "auto";
        // my0[index].style.border = "1px dotted red";
        putHere.appendChild(my0[index]);
    });
}

function move() {
    "use strict";
    getId("myDiv0");
    hours.forEach(function (index, value) {
        hours[index] = document.createElement("div");
        hours[index].id = value;
        hours[index].textContent = index;
        time.push(index);
        hours[index].style.width = "29px";
        hours[index].style.height = 40 + "px";
        hours[index].style.margin = "auto";
        hours[index].style.display = "inline-block";
        hours[index].style.border = "1px dotted red";
        getId("myDiv0").appendChild(hours[index]);
    });
}
function add() {
    "use strict";
    var i = 0;
    for (i = 0; i < 5; i = i + 1) {
        time.forEach(function (index, value) {
            var below = getId(value);
            time[index] = document.createElement("div");
            time[index].id = value + " " + "sch";
            time[index].textContent = "sch" + " " + parseInt(index);
            time[index].style.width = "29px";
            time[index].style.height = 40 + "px";
            time[index].style.margin = "auto";
            time[index].style.display = "inline-block";
            time[index].style.border = "1px dotted red";
            below.appendChild(time[index]);
        });
    }
}
function chgSize() {
    "use strict";
    var split = getId("content").clientWidth - 6 * getId("0").clientWidth - 19;
    getId("leftPage").style.width = split / 2 + "px";
    getId("rightPage").style.width = split / 2 + "px";
    if (getId("content").clientWidth < 782) {
        console.log(getId("content").clientWidth);
        getId("content").style.position = "relative";
        getId("myDiv0").style.position = "absolute";
        getId("myDiv0").style.left = (getId("content").clientWidth - 780) / 2 + "px";
    } else {
        getId("myDiv0").style.left = 0;
        getId("myDiv0").style.right = 0;
    }
}

function makeLeft() {
    "use strict";
    putHere = getId("content");
    var pageLeft = document.createElement("div");
    pageLeft.id = "leftPage";
    pageLeft.style.position = "absolute";
    pageLeft.style.left = 0 + "px";
    // pageLeft.style.width = 40 + "px";
    pageLeft.style.width = init() / 2 + "px";
    pageLeft.style.height = 250 + "px";
    pageLeft.style.right = pageLeft.style.left + 200 + "px";
    pageLeft.style.backgroundColor = "#f0f0f0";
    pageLeft.style.border = "black 1px solid";
    pageLeft.style.borderRadius = "5px";
    pageLeft.style.opacity = 1;
    putHere.appendChild(pageLeft);
}
function makeRight() {
    "use strict";
    putHere = getId("content");
    var pageRight = document.createElement("div");
    pageRight.id = "rightPage";
    pageRight.style.position = "absolute";
    pageRight.style.right = 0 + "px";
    pageRight.style.width = init() / 2 + "px";
    getId("myDiv0").style.position = "absolute";
    getId("myDiv0").style.position = "absolute";
    getId("myDiv0").style.position = "absolute";
    pageRight.style.height = 250 + "px";
    pageRight.style.border = "black 1px solid";
    pageRight.style.borderRadius = "5px";
    pageRight.style.left = pageRight.style.right + 200 + "px";
    pageRight.style.backgroundColor = "#f0f0f0";
    pageRight.style.opacity = 1;
    putHere.appendChild(pageRight);
}
// empty string to get started
var obj = {
    child: "",
    insert: ""
};

function checkSpot() {
    "use strict";
    var parent = getId("myDiv0");
    obj.child = parent.firstChild.id;
    obj.insert = parent.lastChild.id;
    console.log(obj.child, obj.insert);
}

var order = [];

function moveLeft() {
    "use strict";
    var parent = getId("myDiv0");
    var child = getId(obj.child.toString());
    var insert = getId(obj.insert.toString());
    console.log(obj.child, obj.insert);
    parent.insertBefore(insert, child);
    order.push(insert.id);
    checkSpot();
}
// has to be a double assignment
// 1. reverse child and insert - -> that moves the zero in front of the six
// 2  reverse back child and insert - -> now put the six in front of the zero
function moveRight() {
    "use strict";
    var parent = getId("myDiv0");
    var insert = getId(obj.child.toString());
    var child = getId(obj.insert.toString());
    console.log(child.id, insert.id);
    parent.insertBefore(insert, child);
    console.log(child.id, insert.id);
    child = getId(obj.child.toString());
    insert = getId(obj.insert.toString());
    console.log(child.id, insert.id);
    parent.insertBefore(insert, child);
    checkSpot();
}
function makeButtons() {
    "use strict";
    putHere = getId("leftPage");
    var buttonLeft = document.createElement("button");
    buttonLeft.id = "leftButton";
    buttonLeft.innerHTML = "<";
    buttonLeft.style.fontWeight = "bold";
    buttonLeft.style.fontSize = "1.2em";
    buttonLeft.style.float = "right";
    buttonLeft.addEventListener("click", moveLeft, false);
    putHere.appendChild(buttonLeft);

    putHere = getId("rightPage");
    var buttonRight = document.createElement("button");
    buttonRight.id = "rightButton";
    buttonRight.innerHTML = ">";
    buttonRight.style.fontWeight = "bold";
    buttonRight.style.fontSize = "1.2em";
    buttonRight.style.float = "left";
    buttonRight.addEventListener("click", moveRight, false);
    putHere.appendChild(buttonRight);
}
function addChLeft() {
    "use strict";
    tv.forEach(function (value, index) {
        var below = getId("leftPage");
        tv[index] = document.createElement("div");
        tv[index].textContent = "tv ch" + " " + value;
        tv[index].style.height = 40 + "px";
        tv[index].style.position = "absolute";
        tv[index].style.top = value * 41 + "px";
        tv[index].style.left = 0;
        tv[index].style.right = 0;
        tv[index].style.display = "block";
        tv[index].style.border = "1px dotted red";
        below.appendChild(tv[index]);
    });
}

function addChRight() {
    "use strict";
    tv = [1, 2, 3, 4, 5]; // tv channel list have to reset
    tv.forEach(function (value, index) {
        var below = getId("rightPage");
        tv[index] = document.createElement("div");
        tv[index].textContent = "tv ch" + " " + value;
        console.log(value);
        tv[index].style.height = 40 + "px";
        tv[index].style.position = "absolute";
        tv[index].style.top = value * "41" + "px";
        tv[index].style.left = 0;
        tv[index].style.right = 0;
        tv[index].style.display = "block";
        tv[index].style.border = "1px dotted red";
        below.appendChild(tv[index]);
    });
}

makeMy0();
makeHours();
move();
makeLeft();
makeRight();
makeButtons();
addChLeft();
addChRight();
add();
checkSpot();
chgSize();
window.addEventListener("resize", chgSize, false);
