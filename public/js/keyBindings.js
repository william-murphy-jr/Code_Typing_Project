// keyBindings.js

'use strict';

var debug = true;
if (debug) console.log('keyBindings.js');

/* This file must be called before Keymap.js 
 * and coreCodeType.js so we have:
 * 
 * keyBindings.js
 * Keymap.js
 * coreCodeType.js
 */

// We pass back an object of key:value pairs
// to the Keymap consturctor/class
function keyHandlerBingings() {  

    return {
        "a": keyHandler, "b": keyHandler, "c": keyHandler, "d": keyHandler,
        "e": keyHandler, "f": keyHandler, "g": keyHandler, "h": keyHandler,
        "i": keyHandler, "j": keyHandler, "k": keyHandler, "l": keyHandler,
        "m": keyHandler, "n": keyHandler, "o": keyHandler, "p": keyHandler,
        "q": keyHandler, "r": keyHandler, "s": keyHandler, "t": keyHandler,
        "u": keyHandler, "v": keyHandler, "w": keyHandler, "x": keyHandler,
        "y": keyHandler, "z": keyHandler, 

        // Cap lock held down
        "A": keyHandler, "B": keyHandler, "C": keyHandler, "D": keyHandler,
        "E": keyHandler, "F": keyHandler, "G": keyHandler, "H": keyHandler,
        "I": keyHandler, "J": keyHandler, "K": keyHandler, "L": keyHandler,
        "M": keyHandler, "N": keyHandler, "O": keyHandler, "P": keyHandler,
        "Q": keyHandler, "R": keyHandler, "S": keyHandler, "T": keyHandler,
        "U": keyHandler, "V": keyHandler, "W": keyHandler, "X": keyHandler, 
        "Y": keyHandler, "Z": keyHandler, 

        "shift_A": keyHandler, "shift_B": keyHandler, "shift_C": keyHandler, 
        "shift_D": keyHandler, "shift_E": keyHandler, "shift_F": keyHandler,
        "shift_G": keyHandler, "shift_H": keyHandler, "shift_I": keyHandler,
        "shift_J": keyHandler, "shift_K": keyHandler, "shift_L": keyHandler,
        "shift_M": keyHandler, "shift_N": keyHandler, "shift_O": keyHandler, 
        "shift_P": keyHandler, "shift_Q": keyHandler, "shift_R": keyHandler,
        "shift_S": keyHandler, "shift_T": keyHandler, "shift_U": keyHandler,
        "shift_V": keyHandler, "shift_W": keyHandler, "shift_X": keyHandler,
        "shift_Y": keyHandler, "shift_Z": keyHandler, 

        "0": keyHandler, "1": keyHandler, "2": keyHandler, "3": keyHandler,
        "4": keyHandler, "5": keyHandler, "6": keyHandler, "7": keyHandler,
        "8": keyHandler, "9": keyHandler, "-": keyHandler, "=": keyHandler,
        "[": keyHandler, "]": keyHandler, "\\": keyHandler, ";": keyHandler,
        "'": keyHandler, ",": keyHandler, ".": keyHandler, "/": keyHandler,
        "`": keyHandler,

        // Cap lock on
        ")": keyHandler, "!": keyHandler, "@": keyHandler, "#": keyHandler,
        "$": keyHandler, "%": keyHandler, "^": keyHandler, "&": keyHandler,
        "*": keyHandler, "(": keyHandler, "_": keyHandler, "+": keyHandler,
        "{": keyHandler, "}": keyHandler, "|": keyHandler, ":": keyHandler,
        "\"": keyHandler, "<": keyHandler, ">": keyHandler, "?": keyHandler,
        "~": keyHandler,"`": keyHandler,

        "shift_)": keyHandler, "shift_!": keyHandler, "shift_@": keyHandler,
        "shift_#": keyHandler, "shift_$": keyHandler, "shift_%": keyHandler,
        "shift_^": keyHandler, "shift_&": keyHandler, "shift_*": keyHandler,
        "shift_(": keyHandler, "shift__": keyHandler, "shift_+": keyHandler,
        "shift_{": keyHandler, "shift_}": keyHandler, "shift_|": keyHandler,
        "shift_:": keyHandler, "shift_\"": keyHandler, "shift_<": keyHandler,
        "shift_>": keyHandler, "shift_?": keyHandler, "shift_~": keyHandler,

        "Backspace": keyHandler, "spacebar": keyHandler, ".":keyHandler,
        "Enter":keyHandler, "Tab": keyHandler,

    };  // End keyBindings

}
