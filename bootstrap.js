/*
Copyright (c) 2013 Nicolás González-Deleito

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

Components.utils.import("resource://gre/modules/Services.jsm");

function startup(data, reason) {
  const swipeUpPref = "browser.gesture.swipe.up";
  const swipeDownPref = "browser.gesture.swipe.down";
  var prefs = Services.prefs;
  
  var goTop = prefs.getCharPref(swipeUpPref);
  var goBottom = prefs.getCharPref(swipeDownPref);
  prefs.setCharPref(swipeUpPref, goBottom);
  prefs.setCharPref(swipeDownPref, goTop);
}

function shutdown(data, reason) {
  const swipeUpPref = "browser.gesture.swipe.up";
  const swipeDownPref = "browser.gesture.swipe.down";
  var prefs = Services.prefs;
  
  var goBottom = prefs.getCharPref(swipeUpPref);
  var goTop = prefs.getCharPref(swipeDownPref);
  prefs.setCharPref(swipeUpPref, goTop);
  prefs.setCharPref(swipeDownPref, goBottom);
}

function install(data, reason) {
}

function uninstall(data, reason) {
}
