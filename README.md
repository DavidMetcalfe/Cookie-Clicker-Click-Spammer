# Cookie Clicker Click Spammer
A simple auto-clicker bookmarklet for the Cookie Clicker game.

Cookie Clicker URL: http://orteil.dashnet.org/cookieclicker/

## Installing bookmarklet
Simple drag the desired hyperlink into your browser's bookmark bar, then click when the game is the active window.

Clicking the link a second time will disable the auto clicker.

## Legit (non-cheating) bookmarklet

<a href="javascript:(function(){if(window._activeClickInterval){clearInterval(window._activeClickInterval);delete window._activeClickInterval}else{window._activeClickInterval=setInterval(Game.ClickCookie,250)}})();">Drag me to the bookmarks</a>

## Illegit (cheating) bookmarklet

<a href="javascript:(function(){if(window._activeClickInterval){clearInterval(window._activeClickInterval);delete window._activeClickInterval}else{window._activeClickInterval=setInterval(Game.ClickCookie,10)}})();">Drag me to the bookmarks</a>

## What's the difference between the two bookmarklets?
Cookie Clicker monitors for behavior that mirrors a click spammer (auto-clicker) by the rate of clicks.

At the time of this posting, if the click frequency is faster than 1000 milliseconds divided by 15, the detection will fire and you will get the 'Uncanny clicker' Achievement. The Illegit bookmarklet crosses this threshold, so it will set off the detection.
