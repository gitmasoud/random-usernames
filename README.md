# Random usernames


Random Username Generator for your applications!


This project was born out of the need of requiring random usernames for any new prototpe app that I was developing. 

To use it's quite simple, simply install:
###### npm i randomusernames

Then in your application import the module:
//ES6 import
import RandomNames from 'randomusernames';

  {Object.keys(RandomNames.all).map((item, i) => {
             console.log(RandomNames.all[item]);
            return <li key={item}>{RandomNames.all[item]}</li>
    
        })}
 
        {
          Object.keys(RandomNames.all).map((rn) => <li key={rn}>{RandomNames.all[rn]} </li>)
        }

Installation & Usage

| Element | Description | Type | Required | Notes |
| --- | --- | --- | --- | --- |
| Id | Location Id | int32 | Required | single number |
| Location | Location Name | string | Required | single line |
| Title | Event Name | string | Optional | single line. Must be a live location. Default is Ocean Point. 
| Event Date | Event Start Date | Date | No |single line. Format will be as follows: DD-MM-YYYY e.g. 29-12-2006. Optionally you can use MM-DD-YYYY e.g. 12-29-2000.
| Event End Date | End Date | Date | No | single line |
| Event Status | Live or Not Live  | Boolean | No | single line |
