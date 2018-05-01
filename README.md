# Cookie Clicker Click Spammer
A simple auto-clicker bookmarklet for the Cookie Clicker game.

Cookie Clicker URL: http://orteil.dashnet.org/cookieclicker/

## Installing bookmarklet
Due to GitHub's limitations, the bookmarklet cannot be linked. Due to GitHub's limitations, the bookmarklet cannot be linked. As such, copy the desired script, create a bookmark (Ctrl/CMD+D on PC/Mac), and paste the script into the URL of that bookmark, and rename it as desired.

Once set up, simply click the bookmark when the game is the active window. Clicking the link a second time will disable it.

### Legit (non-cheating) bookmarklet

`javascript:(function(){if(window._activeClickInterval){clearInterval(window._activeClickInterval);delete window._activeClickInterval}else{window._activeClickInterval=setInterval(Game.ClickCookie,250)}})();`

### Illegit (cheating) bookmarklet

`javascript:(function(){if(window._activeClickInterval){clearInterval(window._activeClickInterval);delete window._activeClickInterval}else{window._activeClickInterval=setInterval(Game.ClickCookie,10)}})();`

## What's the difference between the two bookmarklets?
Cookie Clicker monitors for behavior that mirrors a click spammer (auto-clicker) by the rate of clicks.

At the time of this posting, if the click frequency is faster than 1000 milliseconds divided by 15, the detection will fire and you will get the 'Uncanny clicker' Achievement. The Illegit bookmarklet crosses this threshold, so it will set off the detection.
