/*
Copyright (c) 2013--2016 Nicolás González-Deleito

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/


/* exported startup, shutdown, install, uninstall */
/* global Components, Services */

Components.utils.import("resource://gre/modules/Services.jsm");
const swipeUpPref = "browser.gesture.swipe.up";
const swipeDownPref = "browser.gesture.swipe.down";

function startup() {
  // making sure that these preferences are set to their default values (which
  // might not be the case if Firefox was not properly closed)
  Services.prefs.clearUserPref(swipeUpPref);
  Services.prefs.clearUserPref(swipeDownPref);
  
  // switching both preferences
  var goTop = Services.prefs.getCharPref(swipeUpPref);
  var goBottom = Services.prefs.getCharPref(swipeDownPref);
  Services.prefs.setCharPref(swipeUpPref, goBottom);
  Services.prefs.setCharPref(swipeDownPref, goTop);
}

function shutdown() {
  Services.prefs.clearUserPref(swipeUpPref);
  Services.prefs.clearUserPref(swipeDownPref);
}

function install() {
}

function uninstall() {
}
