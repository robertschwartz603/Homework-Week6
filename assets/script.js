//HOME PAGE SCRIPT

// displays current time on top of page
function displayTime() {
    var TimeEl = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    $("#time").text(TimeEl);
    console.log(TimeEl);
}
setInterval(displayTime, 1000);
