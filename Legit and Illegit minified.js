// [ === Toggleable autoclicker === ]
// Activating will enable, and a second toggle will deactivate.

// ** Legit version (doesn't activate Game.autoclickerDetected)
if(autoClicker)clearInterval(autoClicker);else{var autoClicker="";autoClicker=setInterval(Game.ClickCookie,250)}

// ** Illegit version (DOES activate Game.autoclickerDetected)
if(autoClicker)clearInterval(autoClicker);else{var autoClicker="";autoClicker=setInterval(Game.ClickCookie,10)}
