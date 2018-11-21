# Random usernames


Random Username Generator for your applications!


This project was born out of the need of requiring random usernames for any new prototpe app that I was developing. 

# Installation & Usage

To use it's quite simple, simply install:
###### npm i randomusernames

Then in your application import the module:


`import RandomNames from 'randomusernames';`

`{Object.keys(RandomNames.all).map((item, i) => {`
             `console.log(RandomNames.all[item]);`
           `return <li key={item}>{RandomNames.all[item]}</li>`
 `})}`
        
You can also use the one liner:
 `{ Object.keys(RandomNames.all).map((rn) => <li key={rn}>{RandomNames.all[rn]} </li>) }`

# Example Projects
Here is one that uses the Random User names and includes a dynamic generator to select a name at random:
DesignloveSoftware.firebaseapp.com/randomusernames

# Principles
No animation dependencies
Simple declarative component APIs vs brittle HTML markup
Complete keyboard support
Complete SUI component definition support
Completely documented
Completely tested
Accessible

# Credit
Created by @levithomason and an amazing community of contributors.

Made possible only by @jlukic authoring Semantic UI.
