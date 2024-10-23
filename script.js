// //1. Exploring the window.location Object

// console.log("href:", window.location.href);
// console.log("protocol:", window.location.protocol);
// console.log("host:", window.location.host);
// console.log("pathname:", window.location.pathname);
// console.log("search:", window.location.search);
// console.log("hash:", window.location.hash);







// // 2. Redirecting with window.location.assign

// function redirectTo(url) {
//     window.location.assign(url);
// }




// // 3. Refreshing the Page with window.location.reload
// function refreshPage(bypassCache = false) {
//     window.location.reload(bypassCache);
// }





// // 4. Navigating Back/Forward with history.back and history.forward
// function goBack() {
//     history.back();
// }

// function goForward() {
//     history.forward();
// }




// // 5. Jumping to Specific History Entries with history.go
// function goToHistory(delta) {
//     history.go(delta);
// }




// // 6. Opening New Windows/Tabs with window.open
// function openNewWindow(url = '', features = '') {
//     window.open(url, '_blank', features);
// }