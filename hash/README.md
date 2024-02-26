This file contains two scenarios below:
#### Valid scenario
1. The sender wants to send a message to the recipient
2. Sender enter the ```message``` and create ```messageHash``` using Hash function. The sender can choose the hash type between MD5, SHA1, or SHA256 by changing the variable ```hashType```.
3. Mock-up transmission to the recipient
4. The recipient receive the ```message``` and ```messageHash```. To verify the message's integrity, the recipient creates ```recipientHash``` using the Hash function.
5. Then, recipient compare wheter ```recipientHash``` equal to ```messageHash``` or not. If it is the same, it means the message is valid and not being changed in the transmission process.

##### Invalid Scenario
After steps 1-3 in the previous scenario, the attacker intercepts the communication and tampers with the ```message```

4. The attacker changes ```message``` into ```fakeMessage``` and pass it to the recipient

5. The recipient receive the ```fakeMessage``` and ```messageHash```. To verify the message integrity, the recipient creates ```recipientHash``` using the Hash function.

6. Then, recipient compare wheter ```recipientHash``` equal to ```messageHash``` or not. However, this time the result will fail because the attacker has intercepted the ```message```
