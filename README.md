# Random usernames


Random Username Generator for your applications!


This project was born out of the need of requiring random usernames for any new prototpe app that I was developing. 

# Installation & Usage

To use it's quite simple, simply install:
###### npm i randomusernames

Then in your application import the module:


`import RandomNames from 'randomusernames';`

Then you can easily add it to your View:

`{Object.keys(RandomNames.all).map((item, i) => {`
             `console.log(RandomNames.all[item]);`
           `return <li key={item}>{RandomNames.all[item]}</li>`
 `})}`
 
 You can also use the one liner:
 
 `{ Object.keys(RandomNames.all).map((rn) => <li key={rn}>{RandomNames.all[rn]} </li>) }`
        
The whole component can look similar to this:

    `import RandomNames from 'randomusernames';
     export default RandomUsernames extends React.Component
     {constructor(props){
        super(props)
        
            this.state = {RUsernames = RandomNames}`
            
        }
        
        Render(){
        
           Return (
            
               <div className="App">
               
                        {Object.keys(RandomNames.all).map((item, i) => {
                        
                         console.log(RandomNames.all[item]);
                         
                         return <li key={item}>{RandomNames.all[item]}</li>
                        
                          })}
                           { Object.keys(RandomNames.all).map((rn) => <li key={rn}>{RandomNames.all[rn]} </li>) }    
            )
        }
    }`



# Example Projects
Here is one that uses the Random User names and includes a dynamic generator to select a name at random:
DesignloveSoftware.firebaseapp.com/randomusernames

# Principles
*  Start Open Source!
*  Easy to use random name generator

# Credit
Created by @Kent C Dodds for tutorial on Egghead. https://www.npmjs.com/package/unique-random-array by https://www.npmjs.com/~sindresorhus


