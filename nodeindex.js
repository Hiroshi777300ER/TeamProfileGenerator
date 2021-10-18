function Character(name, strength, hitpoints) {
    this.name = name;
    this.strength = strength;
    this.hitpoints = hitpoints;
    }


    Character.prototype.printStats = function()  {
        console.log(`Name: ' ${this.name} 
    Strength:  ${this.strength}
    HitPoints:  ${this.hitpoints}`
        );
        console.log('\n------------------\n');
    };

const inquirer = ('inquirer');
const fs = require('fs');
const { message } = require('statuses');

inquirer.prompt
    [
        
      type: 'input',
      message="What is the name of the Manager?",
      name:'Jared',
      validate: (value)=>( if(value){return true} else {return 'no value available'}},
        
        
      type: 'input',
      message="What is the id of Jared?",
      name:'1',
      validate: (value)=>( if(value){return true} else {return 'no value available'}},
        
        
      type: 'input',
      message="What is the email of Jared?",
      name:'jared@fakemail.com',
      validate: (value)=>( if(value){return true} else {return 'no value available'}},
        
      type: 'input',
      message="What is the Office Number of Jared?",
      name:'1',
      validate: (value)=>( if(value){return true} else {return 'no value available'}},
        
     
                
        
      type: 'input',
      message="What is the name of the Engineer?",
      name:'Alec',
      validate: (value)=>( if(value){return true} else {return 'no value available'}},
        
        
      type: 'input',
      message="What is the id of Alec?",
      name:'2',
      validate: (value)=>( if(value){return true} else {return 'no value available'}},
        
        
      type: 'input',
      message="What is the email of Alec?",
      name:'alec@fakemail.com',
      validate: (value)=>( if(value){return true} else {return 'no value available'}},
        
        
        
      type: 'input',
      message="What is GitHub name?",
      name:'ibalec',
      validate: (value)=>( if(value){return true} else {return 'no value available'}},
        
        
        
        
      type: 'input',
      message="What is the name of Engineer?",
      name:'Grace',
      validate: (value)=>( if(value){return true} else {return 'no value available'}},
        
        
      type: 'input',
      message="What is the id of Engineer?",
      name:'3',
      validate: (value)=>( if(value){return true} else {return 'no value available'}},
        
        
      type: 'input',
      message="What is the email of Engineer?",
      name:'grace@fakemail.com',
      validate: (value)=>( if(value){return true} else {return 'no value available'}},
        
        
        
      type: 'input',
      message="What is GitHub name?",
      name:'gchoi2u',
      validate: (value)=>( if(value){return true} else {return 'no value available'}},
        
        
      
        
        
      type: 'input',
      message="What is the name of Engineer?",
      name:'Tammer',
      validate: (value)=>( if(value){return true} else {return 'no value available'}},
        
        
      type: 'input',
      message="What is the id of Enginner?",
      name:'4',
      validate: (value)=>( if(value){return true} else {return 'no value available'}},
        
        
      type: 'input',
      message="What is the email of Engineer?",
      name:'tammer@fakemail.com',
      validate: (value)=>( if(value){return true} else {return 'no value available'}},
        
        
        
      type: 'input',
      message="What is GitHub name?",
      name:'tammerg',
      validate: (value)=>( if(value){return true} else {return 'no value available'}},
        
        
        
      type: 'input',
      message="What is the name of Intern?",
      name:'John',
      validate: (value)=>( if(value){return true} else {return 'no value available'}},
        
        
      type: 'input',
      message="What is the id of Intern?",
      name:'5',
      validate: (value)=>( if(value){return true} else {return 'no value available'}},
        
        
      type: 'input',
      message="What is the email Intern?",
      name:'john@fakemail.com',
      validate: (value)=>( if(value){return true} else {return 'no value available'}},
        
        
        
      type: 'input',
      message="Which school is the Intern currently attending?",
      name:'2University',
      validate: (value)=>( if(value){return true} else {return 'no value available'}},
                        
                
       
       ).then(({
       name,
       id,
       email,
       getName,
       getId,
       getEmail,
       getRole,
       school,
     })=>{
     }
            }     
