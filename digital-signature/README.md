There are two scenarios:

#### Valid Scenario
1. Generate ```privateKey``` and ```publicKey``` pair
2. Mock-up transmission: sender sends PUBLIC KEY to recipient
3. Sender write the ```message```
4. Sender sign the ```message``` with RSA/ECDSA digital signature algorithm and include sender's ```privateKey``` as one of the parameter.
5. Mock-up transmission: sender sends ```message``` and ```signature``` to the recipient
6. Recipient verify the ```signature``` from the sender using ```crypto.verify``` function and include sender's ```publicKey``` as one of the parameter. It will return ```true``` if the message and signature is valid.

#### Invalid Scenario
After steps 1-5 from previous scenario, attacker intercept the communication and tamper with ```signature```

6. Mock-up transmission: attacker sends ```message``` and ```fakeSignature``` to the recipient
7. Recipient verify the ```fakeSignature``` from the attacker using ```crypto.verify``` function and include sender's ```publicKey``` as one of the parameter. In this scenario, it will return ```false``` because the signature validated with sender's ```publicKey``` instead of attacker's public key
