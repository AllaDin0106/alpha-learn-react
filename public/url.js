var tab = chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    // document.body.innerHTML = tabs[0].url;
    document.querySelector('#url').innerHTML = location.href;
});