// TODO: Create a function that returns a license badge based on which license is passed in

const ListPrompt = require("inquirer/lib/prompts/list")


// If there is no license, return an empty string
function renderLicenseBadge(license) {
    
    if (license === "MIT") {
      return ` ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
    
    } 

    if (license === "Apache 2.0") {
      return `![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg) `
    }

    if ( license === "IBM-IPL 1.0") {
      return ` ![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)`
    }

    if (license === "None") {
      return " "
    }
  

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
  if (license === "MIT") {
    return `
    https://opensource.org/licenses/MIT`

  
  } 

  if (license === "Apache 2.0") {
    return `
    https://opensource.org/licenses/Apache-2.0`
  }

  if ( license === "IBM-IPL 1.0") {
    return `
    https://opensource.org/licenses/IPL-1.0`
  }

  if (license === "None") {
    return " "
  }

  



}
    



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if ( license === "none") {
    return " "
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  https://github.com/${data.GitHub}/${data.title}
  
  ## Description
  ${data.description}

  ## Table of Contents
  * [ Description](#description)
  * [ Installation](#installation)
  * [ Usage](#usage)
  * [ License](#license)
  * [ Contributing](#contributing)
  * [ Tests](#tests)
  * [ Questions](#questions)

  ## Installation
  The following necessary dependencies that must be installed to run this application:
  * ${data.installation}

  ## Usage
  In order to use this app, ${data.usage}
  
  ## License
  ${data.license}

  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}


  ## Contributing
   Controbutors: ${data.contributing}

  ## Tests
  The following is needed to run the test: ${data.test}
  
  ## Questions
  * If you have any questions about the repo, open an isse or contact: github.com/${data.GitHub}
  * Email to reach us directly: ${data.Email}






   

`;
}


  // switch (license) {
  //   case 'MIT':
  //     `## License  ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  //     break;
  //   case 'Apache 2.0':
  //     `## License      ![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg) `
  //     break;
  //   case 'IBM-IPL 1.0':
  //     `## License         ![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)`
  //     break;
  //   case 'None': 
  //       " "
  //     break;
  //   default:
  //     " "
    
  // }
  

module.exports = generateMarkdown;








