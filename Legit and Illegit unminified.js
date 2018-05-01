// [ === Toggleable autoclicker === ]
// Activating will enable, and a second toggle will deactivate.

// ** Legit version (doesn't activate Game.autoclickerDetected)
if (window._activeClickInterval) {
    clearInterval(window._activeClickInterval);
    delete window._activeClickInterval;
} else {
    window._activeClickInterval = setInterval(Game.ClickCookie, 250);
}

// ** Illegit version (DOES activate Game.autoclickerDetected)
if (window._activeClickInterval) {
    clearInterval(window._activeClickInterval);
    delete window._activeClickInterval;
} else {
    window._activeClickInterval = setInterval(Game.ClickCookie, 10);
}
