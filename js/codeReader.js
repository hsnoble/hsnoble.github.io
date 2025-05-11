
/* 
    SCAN STATES:
    NOT_STARTED = 1,
    PAUSED = 3,
    SCANNING = 2
    UNKNOWN = 0
*/

var resultContainer = document.getElementById('qr-reader-results');
const myModal = new bootstrap.Modal(document.getElementById('resultWindow'));
var cardHeading = document.getElementById('play-card-heading'), cardSubheading = document.getElementById('play-card-subheading'), cardDesc = document.getElementById('play-card-desc');
var lastResult, countResults = 0;
var cardID = document.getElementById('play-card-id');

var html5QrcodeScanner = new Html5QrcodeScanner("qr-reader", { fps: 12, qrbox: qrboxFunction });

function qrboxFunction(viewfinderWidth, viewfinderHeight) {
    let minEdgePercentage = 0.7; // 70%
    let minEdgeSize = Math.min(viewfinderWidth, viewfinderHeight);
    let qrboxSize = Math.floor(minEdgeSize * minEdgePercentage);
    return {
        width: qrboxSize,
        height: qrboxSize
    };
}

function onScanSuccess(decodedText, decodedResult) {
    var contentObj;
    if (decodedText !== lastResult) {
        ++countResults;
        lastResult = decodedText;
        // Handle on success condition with the decoded message.
        //console.log(`Scan result ${decodedText}`, decodedResult);
        console.log("Scanned");
        //resultContainer.innerHTML = `${decodedText}`;
        try{
            contentObj = JSON.parse(decodedResult.decodedText);
        }catch(e){
            console.log("QR Code does not contain any relevant content.\n" + e.message);
        }

        if(contentObj){
            const cardResult = decodePrize(contentObj.id, contentObj.content);
            //console.log(cardResult);
            
            myModal.show();
            // console.log()
            if($('.form-check #delay-switch').prop('checked')){
                countdownDelay();
            }
            sendToModal(cardResult.title, cardResult.subtitle, cardResult.description, contentObj.id);
            // If Scanner is Not paused
            if(html5QrcodeScanner.getState() != 3){
                html5QrcodeScanner.pause();
            }
        }
    }
}

function getLastResult(lastResult){
    var contentObj = JSON.parse(lastResult);
    if(contentObj){
        const cardResult = decodePrize(contentObj.id, contentObj.content);
        //console.log(cardResult);
        sendToModal(cardResult.title, cardResult.subtitle, cardResult.description, contentObj.id);
        myModal.show();
        // If Scanner is Not paused
        if(html5QrcodeScanner.getState() != 3){
            html5QrcodeScanner.pause();
        }
    }
}

function togglePreviousScanBtn(){
    if(lastResult == null){
        $('button#last-result').hide();
    }
    else{
        $('button#last-result').show();
    }
}

function sendToModal(title, subtitle, desc, cardNum){
    cardHeading.innerHTML = title;
    cardSubheading.innerHTML = subtitle;
    cardDesc.innerHTML = desc;
    cardID.innerHTML = cardNum;
}

function countdownDelay() {
    const total_hours = 3;
    const output_div  = document.getElementById('countdown-delay');
    const resultContainer = $('.card-content-text-container');
    const delayCounter = $('.output-delay-container');
    let current_hour  = total_hours;
    const countdown = () => {
        output_div.innerHTML = current_hour;
        // console.log(current_hour);
        if (current_hour > 0) {
            setTimeout(countdown, 1000); // 1000 milliseconds
        }
        else if(current_hour == 0){
            delayCounter.hide();
            // console.log("done");
            resultContainer.show();
        }
        --current_hour;
    };
    delayCounter.show();
    resultContainer.hide();
    countdown();
    
}

html5QrcodeScanner.render(onScanSuccess);
$('.output-delay-container').hide();
togglePreviousScanBtn();

$('button#scan-reset').on('click', function(e){
    myModal.hide();
    sendToModal("Please Scan a Game Card", "", "", "");
    // If Scannner is not scanning
    if(html5QrcodeScanner.getState() != 2){
        html5QrcodeScanner.resume()
    }
    togglePreviousScanBtn();
});

$('button#last-result').on('click', function(e){
    getLastResult(lastResult);
});