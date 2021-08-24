/**
 * From https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
 * Badges and links to the appropriate licensing documation
 * @param {*} license - string - should be one of several file names
 * @returns string in mark down style of [[license badge](link of image)(link to license doc)]
 * 'BADGE undefined' means switch case did not find license
 */
function renderLicenseBadge(license) {
  switch (license) {
  case 'Apache 2.0':
    const appacheBadge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    return appacheBadge;
  case 'GNU GPLv3':
    const gnuBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    return gnuBadge;
  case 'Unlicense':
    const unlicenseBadge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
    return unlicenseBadge;
  case 'Mozilla':
    const mozillaBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    return mozillaBadge;
  case 'MIT':
    const mitBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    return mitBadge;
  default:
    return 'BADGE undefined';
  }
}

/**
 * Concatenates license badges mark downs based on selections
 * @param {*} licenses object array licenses requesting badges
 * @returns string - array that is joined on empty space between mark down license badges
 */
function renderLicenseSection(licenses) {
  let badges = [];
  for (const license of licenses){
        badges.push(renderLicenseBadge(license));
      }
  return badges.join(' ');
}

/**
 * Split any string based on comma delimination and place in a block style section of code
 * @param {*} stringToSplit string comma deliminated
 * @returns string
 */
function renderCodeBlockSection(stringToSplit){
  const parts = stringToSplit.split(',');
  
  let result = [];
  result.push(`\`\`\`\n`);
  
  if(parts.length > 1){
    for(const part of parts){
      result.push(`${part.trim()}\n`);
    }
  } else {
    result.push(`${parts}\n`);
  } 
  result.push(`\`\`\``);

  return result;
}

/**
 * Use an arry to sequentitally construct a README file contents
 * @param {*} data JSON object maps
 * @returns string of formatted README file with user inputs given in inquirer
 */
function generateMarkdown(data) {
  let markDownArr = [];

  markDownArr.push(`# ${data.title.toUpperCase()}\n\n`); //largest heading

  //create table of contents
  markDownArr.push(`## Table of Contents\n\n`);
  markDownArr.push(`1. [License](#License(s))\n\n`);
  markDownArr.push(`2. [Description](#Description)\n\n`);
  markDownArr.push(`3. [Usage](#Usage)\n\n`);
  markDownArr.push(`4. [Technology](#Technology)\n\n`);
  markDownArr.push(`5. [Installation](#Installation)\n\n`);
  markDownArr.push(`6. [Tests](#Tests)\n\n`);
  markDownArr.push(`7. [Contributing](#Contributing)\n\n`);
  markDownArr.push(`8. [Questions](#Questions)\n\n`);

  const badge = renderLicenseSection(data.license);
  markDownArr.push(`### License(s)\n\n`); //largest heading
  markDownArr.push(`${badge}\n\n`);//badges near top

  markDownArr.push(`## Description\n\n`);
  markDownArr.push(`${data.description}\n\n`);
 
  markDownArr.push(`## Usage\n\n`);
  markDownArr.push(`${data.usage}\n\n`);
  

  if(!data.tech == '') {
    markDownArr.push(`## Technology\n\n`);
    markDownArr.push(`${data.tech}\n\n`);  
  } else {
    markDownArr.push(`## Technology\n\n`);
    markDownArr.push(`No tech listed (TODO)\n\n`);
  }

  markDownArr.push(`_ _ _ _\n\n`); //break the readme with a horizontal line
  
  if(!data.tech == '') {
    markDownArr.push(`## Technology\n\n`);
    markDownArr.push(`${data.tech}\n\n`);  
  } else {
    markDownArr.push(`## Technology\n\n`);
    markDownArr.push(`No tech listed (TODO)\n\n`);
  }

  //check for null or empty strings or undefined per stackoverflow and the flexible javascript
  if(!data.install == '') {
    const installIntructs = renderCodeBlockSection(data.install);
    markDownArr.push(`## Installation\n\n`);
    //cycle through parts to add individually 
    for(const installIntruct of installIntructs){
      markDownArr.push(`${installIntruct}\n`);
    }  
  } else {
    markDownArr.push(`## Installation\n\n`);
    markDownArr.push(`No Instructions required (TODO)\n\n`);
  }

  markDownArr.push(`_ _ _ _\n\n`); //break the readme with a horizontal line

  if(!data.test == ''){
    const testInstructs = renderCodeBlockSection(data.test);
    markDownArr.push(`## Tests\n\n`);
    for(const testInstruct of testInstructs){
      markDownArr.push(`${testInstruct}\n`);
    }
  } else {
    markDownArr.push(`## Tests\n\n`);
    markDownArr.push(`No tests required (TODO)\n\n`);
  }

  markDownArr.push(`## Contributing\n\n`);
  markDownArr.push(`${data.contribute}\n\n`);

  markDownArr.push(`_ _ _ _\n\n`); //break the readme with a horizontal line

  markDownArr.push(`## Questions\n\n`);
  markDownArr.push(`Have questions about the project?\n\n1. [Email Me](${data.email})\n\n`);
  markDownArr.push(`2. [Profile](https://github.com/${data.gitHubUser})\n`)
  return markDownArr.join('');
}

//Very tricky, given code had a fault of not putting curly braces around it
//allows other scripts to access the function generateMarkdown
module.exports = {generateMarkdown};

