document.addEventListener("DOMContentLoaded", function() {
  var modals = document.querySelectorAll(".modal");
  M.Modal.init(modals);
  var items = document.querySelectorAll(".collapsible");
  M.Collapsible.init(items);
});

if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {     
      navigator.serviceWorker
        .register("/sw.js")
        .then((reg) => {
          console.log(`Service Worker Registration (Scope: ${reg.scope})`);
        })
        .catch((error) => {
          console.log(`Service Worker Error (${error})`);
        });
    });
  } else {
    console.log("Service Worker not available");
  }