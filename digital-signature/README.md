The goal of Digital Signature is to provide authenticity, integrity, and non-repudiation.

There are two scenarios:

#### Valid Scenario
1. Generate ```privateKey``` and ```publicKey``` pair
2. Mock-up transmission: the sender sends ```publicKey``` to the recipient
3. Sender write the ```message```
4. The sender signs the ```message``` with RSA/ECDSA digital signature algorithm and includes the sender's ```privateKey``` as one of the parameters.
5. Mock-up transmission: sender sends ```message``` and ```signature``` to the recipient
6. Recipient verify the ```signature``` from the sender using ```crypto.verify``` function and include sender's ```publicKey``` as one of the parameter. It will return ```true``` if the message and signature are valid.

#### Invalid Scenario
After steps 1-5 from the previous scenario, the attacker intercepts the communication and tampers with ```signature```

6. Mock-up transmission: attacker sends ```message``` and ```fakeSignature``` to the recipient
7. Recipient verify the ```fakeSignature``` from the attacker using ```crypto.verify``` function and include sender's ```publicKey``` as one of the parameter. In this scenario, it will return ```false``` because the signature validated with the sender's ```publicKey``` instead of the attacker's public key
