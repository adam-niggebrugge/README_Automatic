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
 * Takes comma delinated strings and breaks each to be a separate line for a markdown file. Places values in a code block. string should be checked for being empty prior to call
 * @param {*} instructions string delinated by comma 
 * @returns string 
 */
function renderCodeBlockSection(instructions){
  let result = [];
  //Using backticks for markdown code style of install instrunctions
  result.push(`\`\`\`\n`);
  result.push(`${instructions}`);
  result.push(`\`\`\`\n\n`);

  return result.join('');
}

/**
 * Split any string based on comma delimination
 * @param {*} stringToSplit string comma deliminated
 * @returns string
 */
function splitCommaStrings(stringToSplit){
  const parts = stringToSplit.split(',');
  
  console.log('string split');
  console.log(parts);
  
  let result = [];
  //TODO check logic of replace
  if(parts.length > 1){
    for(const part of parts){
      result.push(`${part.trim()}\n`);
    }
  } else {
    result.push(parts);
  } 
  return result;
}

/**
 * Use an arry to sequentitally construct a README file contents
 * @param {*} data JSON object maps
 * @returns string of formatted README file with user inputs given in inquirer
 */
function generateMarkdown(data) {
  let markDownArr = [];

  markDownArr.push(`# ${data.title}\n\n`); //largest heading

  //create table of contents
  markDownArr.push(`## Table of Contents\n\n`);
  markDownArr.push(`1. [License](#License)\n\n`);
  markDownArr.push(`2. [Description](#Description)\n\n`);
  markDownArr.push(`3. [Installation](#Installation)\n\n`);
  markDownArr.push(`4. [Tests](#Tests)\n\n`);
  markDownArr.push(`5. [Usage](#Usage)\n\n`);
  markDownArr.push(`6. [Contributing](#Contributing)\n\n`);
  markDownArr.push(`7. [Questions](#Questions)\n\n`);

  const badge = renderLicenseSection(data.license);
  markDownArr.push(`### License(s)\n\n`); //largest heading
  markDownArr.push(`${badge}\n\n`);//badges near top

  markDownArr.push(`## Description\n\n`);
  markDownArr.push(`${data.description}\n\n`);
 
  markDownArr.push(`_ _ _ _\n\n`); //break the readme with a horizontal line

  //check for null or empty strings or undefined per stackoverflow and the flexible javascript
  if(!data.install == '') {
    const installIntructs = splitCommaStrings(data.install);
    const codeBlockInstall = renderCodeBlockSection(installIntructs);
    markDownArr.push(`## Installation\n\n`);
    markDownArr.push(`${codeBlockInstall}\n\n`);  
  } else {
    markDownArr.push(`## Installation\n\n`);
    markDownArr.push(`No Instructions required or place holder\n\n`);
  }

  if(!data.test == ''){
    const testInstructs = splitCommaStrings(data.test);
    const codeBlockTest = renderCodeBlockSection(testInstructs);
    markDownArr.push(`## Tests\n\n`);
    markDownArr.push(`${codeBlockTest}\n\n`);
  } else {
    markDownArr.push(`## Tests\n\n`);
    markDownArr.push(`No tests required or place holder\n\n`);
  }

  markDownArr.push(`_ _ _ _\n\n`); //break the readme with a horizontal line

  markDownArr.push(`## Usage\n\n`);
  markDownArr.push(`${data.usage}\n\n`);
  
  markDownArr.push(`## Contributing\n\n`);
  markDownArr.push(`${data.contribute}\n\n`);

  markDownArr.push(`_ _ _ _\n\n`); //break the readme with a horizontal line

  markDownArr.push(`## Questions\n\n`);
  markDownArr.push(`Have questions about the project?\n\n1. [Email Me](${data.email})\n\n`);
  markDownArr.push(`2. [profile](https://github.com/${data.gitHubUser})\n`)
  return markDownArr.join('');
}

//Very tricky, given code had a fault of not putting curly braces around it
//allows other scripts to access the function generateMarkdown
module.exports = {generateMarkdown};

