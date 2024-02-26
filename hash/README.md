This file contains scenarios below:
#### Valid scenario
1. Sender wants to send message to the recipient
2. Sender enter the ```message``` and create ```messageHash``` using Hash function. Sender can choose the hash type between MD5, SHA1, or SHA256 by changing variable ```hashType```.
3. Mock up transmission to the recipient
4. The recipient receive the ```message``` and ```messageHash```. In order to verify whether the message integrity, recipient create ```recipientHash``` using the Hash function.
5. Then, recipient compare wheter ```recipientHash``` equal to ```messageHash``` or not. If it is the same, it means message is valid and not being changed in the transmission process.

##### Invalid Scenario
After step 1-3 in previous scenario, attacker intercept the communication and tamper with the ```message```
4. The attacker changes ```message``` into ```fakeMessage``` and pass it to the recipient
5. The recipient receive the ```fakeMessage``` and ```messageHash```. In order to verify whether the message integrity, recipient create ```recipientHash``` using the Hash function.
6. Then, recipient compare wheter ```recipientHash``` equal to ```messageHash``` or not. However, this time the result will be failed because attacker has intercepted the ```message```
