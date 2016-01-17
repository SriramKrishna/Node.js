This project is a password manager which is a command line Application build using Node.js

We use the following node modules to make this password manager work

1)Crypto.js
2)persist
3)yargs

*********************************************************************************************************************

To create a new account in the password manager,

C:\Users\...\Desktop\node\password-manager> node app.js create -n gmail -u krish -p pass123 -m masterpass123
starting password manager
Account created!
{ name: 'gmail', username: 'krish', password: 'pass123' }

Here in the above we use ,

-n ,-u,-p,-m - This is implemented using yargs to give options like alias ,demand ,type and so on. 
Once you create a new account with master password , a new file will be generated on the persist folder with the name 'accounts' . 
So after that to create any new accounts we have to use the same master password or else it wont be able to create/fetch the account.

*********************************************************************************************************************

To get the details of an account ,

C:\Users\..\Desktop\node\password-manager>node app.js get -n gmail -m masterpass123
starting password manager
Account found!
{ name: 'gmail', username: 'krish', password: 'pass123' }

*********************************************************************************************************************

Here in the following we are creating a new account with the same master password ,

C:\Users\...\Desktop\node\password-manager>node app.js create -n gmail -u krish1 -p pass123 -m masterpass123
starting password manager
Account created!
{ name: 'gmail', username: 'krish1', password: 'pass123' } 

**********************************************************************************************************************

if In case we are using a different master password to create an account ,the following problem will occur.

C:\Users\....\Desktop\node\password-manager>node app.js create -n gmail -u krish1 -p pass123 -m masterpass1
starting password manager
Unable to create account!

