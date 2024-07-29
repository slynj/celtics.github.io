const url = "slynj.github.io/celtics";

// function shareLink() {
//     const message = "Yo Check This Out (ft. Zach Cramer) I'm  ";
//     const url = "https://lynjeong.com";
//     const fullMessage = message + url;
//     const encodedMessage = encodeURIComponent(fullMessage);
//     const smsUrl = 'sms:?body=' + encodedMessage;

//     window.location.href = smsUrl;
// }

function setShare() {
    var resultImg = document.querySelector('#resultImg');
    var resultAlt = resultImg.firstElementChild.alt;
    const shareURL = url + "pages/result-" + resultAlt + ".html";
    const shareDes = infoList[resultAlt].name;

    const message = "Yo Check This Out (ft. Zach Cramer) I'm " + shareDes + "\n\n";
    // const url = "https://lynjeong.com";
    const fullMessage = message + shareURL;
    const encodedMessage = encodeURIComponent(fullMessage);
    const smsUrl = 'sms:?body=' + encodedMessage;

    window.location.href = smsUrl;
}