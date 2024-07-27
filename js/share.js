
function shareLink() {
    const message = "Yo Check This Out (ft. Zach Cramer):  ";
    const url = "https://lynjeong.com";
    const fullMessage = message + url;
    const encodedMessage = encodeURIComponent(fullMessage);
    const smsUrl = 'sms:?body=' + encodedMessage;

    window.location.href = smsUrl;
}
