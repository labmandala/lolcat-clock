var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM
var time = new Date().getHours(); // NATIVE JAVASCRIPT CODE: represents current hour (1-24)

var updateClock = function() {

    // getting image element
    var message = document.getElementById('timeEvent');
    var lolcat = document.getElementById('lolcat');

    var messageText;

    // defining default image
    var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/wakeUpTime.jpg";

    if (time == partyTime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
        messageText = "IZ PARTEE TIME!!";
    } else if (time == napTime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
        messageText = "IZ NAP TIME...";
    } else if (time == lunchTime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
        messageText = "IZ NOM NOM NOM TIME!!";
    } else if (time == wakeupTime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
        messageText = "IZ TIME TO GETTUP.";
    } else if (time < noon) {
        messageText = "Good morning, Mate!";
    } else if (time > evening) {
        messageText = "Good Evening, Mate!";
    } else {
        messageText = "Good afternoon, Mate!";
    }

    message.innerText = messageText;
    lolcat.src = image;

    showCurrentTime();

};

    // console.log(messageText);

    var showCurrentTime = function () {

        // display the string on the webpage
        var clock = document.getElementById('clock');

        var currentTime = new Date();

        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        var meridian = "AM";

        // Set hours 
        if (hours >= noon) {
            meridian = "PM";
        }
        if (hours > noon) {
            hours = hours - 12;
        }

        // Set Minutes
        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        // Set Seconds
        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        // put together the string that displays the time
        var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

        clock.innerText = clockTime;
    };

updateClock();

var oneSecond = 1000;

setInterval(updateClock, oneSecond);