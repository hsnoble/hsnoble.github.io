const prizeFile = "./data/PrizeInfo.json";
// let srcFile = "./data/PrizeBatch.json";
let srcFile = "./data/PrizeBatch_2.json";
let prizeInfo;

$.getJSON(prizeFile).done(function(json){
    prizeInfo = json;
    console.log("Prize DB Loaded");
    // console.log(prizeInfo);
}).fail(function(){console.log("Prize JSON can't be loaded");});

//decrypt(cipher, decryptKey);

function encryptInit(isTest=false){
    if(isTest){
        srcFile = "./data/PrizeTestBatch.json";
        console.log("Test Mode - ON");
    }
    $.getJSON(srcFile).done(function(json){
        console.log("Plaintext Data has been loaded.");
        encryptData(json.prizeSet);
    }).fail(function(){console.log("Converter JSON can't be loaded");});
}

function encryptData(data){
    var result = document.getElementById('encryptionResult');
    for(var x = 0; x<data.length; x++){
        var prizeObj = data[x].prize;
        var prizeID = prizeObj.id;
        var simpleCrypto = new SimpleCrypto(prizeID);
        const cipherText = simpleCrypto.encrypt(prizeObj);
        var prizePair = {id: prizeID, content: cipherText};

        if(result){
            result.innerHTML += "<h2>Item #" +  (x+1) + "</h2>";
            result.innerHTML += "<h3>Plain Text</h3><p>" +  JSON.stringify(prizeObj);   + "</p>";
            //result.innerHTML += "<h3>Cipher</h3><p>" +  cipherText + "</p>";
            result.innerHTML += "<h3>QR Code Data</h3><p class='p-3 bg-secondary-subtle'>" + JSON.stringify(prizePair) + "</p><br/><hr/>";

            //decryptionTesting(prizePair);
        }
    }
    console.log("Encryption Complete");
}

function decryptionTesting(QRPair){
    const decryptTesting = new SimpleCrypto(QRPair.id);
    console.log("Decryption Testing for " + "Item: " + QRPair.id);
    try{
        var decryptPair = decryptTesting.decrypt(QRPair.content);
        console.log("ID: " + decryptPair.id + "\nType: " + decryptPair.type + "\n-----");
    }
    catch(passErr){
        console.log("Encryption Failed: " + passErr.message + "\n-----")
    }
}

function decrypt(cipherText, decryptKey){
    const decryptSet = new SimpleCrypto(decryptKey);
    const decipherText = decryptSet.decrypt(cipherText);
    //console.log(decipherText);
    return decipherText;
}

function decodePrize(id, content, prizeDB = prizeInfo){
    var prizeData = decrypt(content, id);
    const prizeInfo = prizeDB.prizeInfo;
    let prize = [];

    //console.log(prizeData.type);
    //console.log(prizeInfo);

    if(prizeInfo){
        prize = prizeInfo.find( ({ type }) => type === prizeData.type);
    }
    return prize;
}