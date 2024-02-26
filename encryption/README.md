There are two implementations of encryption:
1. Symmetric (AES)
2. Asymmetric (RSA)

The goal of encryption is to hide the message so that if the attacker intercepts the message it will mean nothing. It is crucial if the sender wants to send a confidential message to the recipient.

### AES

1. One side should generate a ```secretkey``` and ```iv```. In this scenario, the recipient generates those two values.
2. Recipient sends ```secretkey``` and ```iv``` to the sender
3. Sender creates ```message``` and encrypt it with AES algorithm and using ```secretKey``` and ```iv``` as the parameters
4. Sender sends ```ciphertext``` to the recipient
5. Recipient decrypt the ```ciphertext``` using ```secretkey``` and ```iv```

### RSA

1. One side should generate a ```privateKey``` and ```publicKey```. In this scenario, the recipient generates those two values.
2. Recipient sends ```publicKey``` to the sender
3. Sender creates ```message``` and encrypt it with RSA algorithm and using ```publicKey``` as the key
4. Sender sends ```ciphertext``` to the recipient
5. Recipient decrypt the ```ciphertext``` using ```privateKey```
