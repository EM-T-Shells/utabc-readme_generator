// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
//const questions = [
inquirer.prompt(
   [
      {
         type: 'input',
         message: "What's the project Title?",
         name: 'title',
         validate: (value)=>
         {
            if(value)
            {
               return true
            }
            else
            {
               return 'Value Required'
            }
         }
      },
      {
         type: 'input',
         message: "Project Description?",
         name: 'description',
         validate: (value)=>
         {
            if(value)
            {
               return true
            }
            else
            {
               return 'Description Required'
            }
         }
      },
      {
         type: 'input',
         message: "Installation directions?",
         name: 'installation',
         validate: (value)=>
         {
            if(value)
            {
               return true
            }
            else
            {
               return 'Value Required'
            }
         }
      },
      {
         type: 'input',
         message: "Provide instructions and examples for use.",
         name: 'usage',
         validate: (value)=>
         {
            if(value)
            {
               return true
            }
            else
            {
               return 'Value Required'
            }
         }
      },
      {
         type: 'input',
         message: "Credits: List collaborators, if any.",
         name: 'credits',
         validate: (value)=>
         {
            if(value)
            {
               return true
            }
            else
            {
               return 'Value Required'
            }
         }
      },
      {
         type: 'input',
         message: "License type?",
         name: 'license',
         choices: [MIT, GPL, APACHE, GNU, 'N/A'],
         validate: (value)=>
         {
            if(value)
            {
               return true
            }
            else
            {
               return 'Value Required'
            }
         }
      },
      {
         type: 'input',
         message: "GitHub username?",
         name: 'github',
         validate: (value)=>
         {
            if(value)
            {
               return true
            }
            else
            {
               return 'Value Required'
            }
         }
      },
      {
         type: 'input',
         message: "E-Mail?",
         name: 'email',
         validate: (value)=>
         {
            if(value)
            {
               return true
            }
            else
            {
               return 'Value Required'
            }
         }
      }
   ]
)
.then((
{
   title,
   description,
   installation,
   usage,
   credits,
   license,
   github,
   email
}) =>
   {
      //template
      const template =
      `# ${title}

      * [description](#description)
      * [installation](#installation)
      * [usage](#usage)
      * [credits](#credits)
      * [license](#license)

      ## description
      ${description}
      ## installation
      ${installation}
      ## usage
      ${usage}
      ## credits
      ${credits}
      ## license
      ${license}

      # Contact
      * github:${github}
      * email:${email}`;

      //function to create readme w. fs
      createNewFile(title, template);

   }
);

// TODO: Create a function to initialize app
//createNewFile Fx
function generateNewFile(fileName, data)
{
   fs.writeFile(`./${fileName.toLowerCase().split('').join('')}.md`, data, (err) =>
   {
      if(err)
      {
      console.log(err)
      }
      console.log('README generated');
   })
}



// Function call to initialize app
init();