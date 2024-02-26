const crypto = require('crypto');

let recipientHash, hashType
hashType = 'sha256'; //you can change to md5, sha1, or sha256

console.log("----------------------------------------");
console.log("Begin hash scenario\n");

console.log("--------------Sender side----------------")

//sender send a new message
const message = "this is a secret message";
console.log("Message: ", message);

//hash the message
const messageHash = crypto.createHash(hashType).update(message).digest('hex');
console.log(hashType, " Hash: ", messageHash);

//Mock Transmission Start//
console.log("\nSender sends MESSAGE and HASH to the recipient\n");
//Mock Transmission End//

console.log("--------------Client side----------------");
recipientHash = crypto.createHash(hashType).update(message).digest('hex');
if (recipientHash == messageHash)
    console.log(hashType, " verification result is success!\n");
else
    console.log(hashType, " verification result is FAILED!\n");


console.log("----------------------------------------");
console.log("Begin invalid hash scenario\n");

//Mock Transmission Start//
console.log("ATTACKER INTERCEPT THE COMMUNICATION");
console.log("Attacker obtain MESSAGE and HASH\n");
//Mock Transmission End//

console.log("--------------Attacker side----------------");
//Attacker creates a fake message
const fakeMessage = "This is a fake message";
console.log("Message: ", fakeMessage);

//Mock Transmission Start//
console.log("Attacker sends FAKE MESSAGE and HASH to recipient\n");
//Mock Transmission End//

console.log("--------------Client side----------------");
recipientHash = crypto.createHash(hashType).update(fakeMessage).digest('hex');
if (recipientHash == messageHash)
    console.log(hashType, " verification result is success!\n");
else
    console.log(hashType, " verification result is FAILED!\n");