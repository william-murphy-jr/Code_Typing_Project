// corecodetype.js
'use strict';
console.log('corecodetype.js');

var debug = true;
// var debug = false;

var typing = false;
var idx = 0;

// This is a reference for &nbsp; in the html.
// Needed to because a " " by &nbsp; does not
// equal " " from keyDown spacebar.
var ref_space = $('#spacebar_ref').text();

function getChar(idx) {
    // console.log('getChar');
    var char = $('.code span').eq(idx).text();
    return char;
}

function compareChar(char, event, keyid) {
    if (debug) console.log('keyid.key', keyid.key); 
    if (debug) console.log('keyid.location', keyid.location); 
    
    if (event.key == char || 
        (event.code == "Space" && char == ref_space)) { 
            if (keyid.location === 2 && (
            char == "`" || char == "1" || char =="2" || char == "3" ||
            char == "4" || char == "5" || char == "6" || char == "q" || 
            char == "W" || char == "E" || char == "R" || char == "T" ||  
            char == "A" || char == "S" || char == "D" || char == "F" || 
            char == "G" || char == "Z" || char == "X" || char == "C" || 
            char == "V" || char == "B" || char == "~" || char == "!" || 
            char == "@" || char == "#" || char == "$" || char == "%" || 
            char == "&" || char == "~" || char == "!" || char == "@" || 
            char == "#" || char == "$" || char == "%" || char == "^" || 
            char == "&" )) {
                console.log('***** location 2 & correct *****');
                return 2;
            } else if (keyid.location === 1 && (
            char == "7" || char == "8" || char =="9" || char == "0" ||
            char == "-" || char == "=" || char == "Y" || char == "U" || 
            char == "I" || char == "O" || char == "P" || char == "[" ||  
            char == "]" || char == "\\" || char == "H" || char == "J" || 
            char == "K" || char == "L" || char == ";" || char == "'" || 
            char == "N" || char == "M" || char == "," || char == "." || 
            char == "/" || char == "&" || char == "*" || char == "(" || 
            char == ")" || char == "_" || char == "+" || char == "{" || 
            char == "}" || char == ":" || char == "\"" || char == "<" ||
            char == ">" || char == "?" )) {
                if (debug) console.log('**** location 1 && correct ****');
                return 2;
            } else if (keyid.location === 1 || keyid.location === 2 ) { 
                if (debug) console.log('else partial correct return 1');
                return 1; 
            } else {
                if (debug) console.log("lowercase letter's correct");
                return 2;
            }
    } else {
        return -1;
    }
}  // compareChar

function updateDisplay(state) {
    var display = "";
    var last = idx - 1;

    // reset these for the next key press/event
    locationFired = false;
    cachedLocation = null;

    if (state === 2) { 
        display = 'correct'
    } else if ( state === 1 ) {
        // right key wrong secondary shift key
        display = 'partial';
    }
    else if (state === -1) {
        display = 'incorrect';
    }
    
    $('.code span').eq(idx).addClass(display);

    
    if (!typing) { $('.code span').eq(0).removeClass('underline'); typing = true; }
    if (last >=0) { $('.code span').eq(idx).removeClass('underline'); }


    // $('.code span').eq(idx).removeClass('underline');

    idx++;

    $('.code span').eq(idx).addClass('underline');


} // updateDisplay


$('.code span').eq(idx).addClass('underline');

function keyHandler(event, keyid) {

    // $('.code span').eq(idx).addClass('underline');

    var char = getChar(idx);

    var state = compareChar(char, event, keyid);

    console.log('state',  state);

    updateDisplay(state);

}  // keyHandler



// var myBindings = { "a": function() {console.log('this is a bindings test \
// if it had been anything else you would have informed.');} };

// An object of key:value pairs is returned.
// value is the handler function keyHandler()
var keyBindings =  keyHandlerBingings();

var myKeyMap = new Keymap(keyBindings);

// Install keymap on document
myKeyMap.install(document);

if (debug) {
    document.addEventListener('keydown', function(e) {
     e.key;
     // debugger;
     console.log('e.key: ', e.key);
     console.log('e.code: ', e.code);
     console.log('e.location: ', e.location);
    });    
}
