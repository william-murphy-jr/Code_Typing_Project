// corecodetype.js
'use strict';
console.log('corecodetype.js');

// var debug = true;
var debug = false;

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
    if (event.key == char || 
        (event.code == "Space" && char == ref_space)) { 
            if (keyid.location === 2) {
                console.log('***** location 2 *****');
                return 2;
            } else if (keyid.location === 1) {
                console.log('**** location 1 ****');
                return 1;
            } else { 
                return 2; 
            }
    } else {
        return -1;
    }
}  // compareChar

function updateDisplay(state) {
    var display = "";
    var last = idx - 1;

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

    locationFired = false;
    
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
