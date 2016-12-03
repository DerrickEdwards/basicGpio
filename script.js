// ===========================================================
function tellServerToggleLed(){
    console.log( "tellServerToggleLed() called");
    $.get( "http://192.168.1.12:8080/ledToggle" );
}; // end toggleLed()
// ===========================================================
function tellServerLedOn(){
    console.log( "tellServerLedOn() called");
    $.get( "http://192.168.1.12:8080/ledOn" );
}; // end toggleLed()
// ===========================================================
function tellServerLedOff(){
    console.log( "tellServerLedOff() called");
    $.get( "http://192.168.1.12:8080/ledOff" );
}; // end toggleLed()

// ===========================================================
function helloMessage(){
   document.getElementById( "messageDisplay" ).innerHTML = "Hello From JavaScript"
}; // end hello()