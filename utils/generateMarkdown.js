// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
/**
 * From https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
 * Badges and links to the appropriate licensing documation
 * @param {*} license - string - should be one of several file names
 * @returns string in mark down style of [[license badge](link of image)(link to license doc)]
 * 'BADGE undefined' means switch case did not find license
 */
function renderLicenseBadge(license) {
  console.log('inside render License Badge');
  console.log(license);

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
  console.log('inside render License Section');
  console.log(licenses);
  let badges = [];
  for (const license of licenses){
        badges.push(renderLicenseBadge(license));
      }
  console.log(badges);
  return badges.join(' ');
}

/**
 * Takes comma delinated strings and breaks each to be a separate line for a markdown file. Places values in a code block. string should be checked for being empty prior to call
 * @param {*} instructions string delinated by comma 
 * @returns string 
 */
function renderInstructionSection(instructions){
  console.log(`inside instruction rendering ${instructions}`);
  let result = [];
  //Using backticks for markdown code style of install instrunctions
  result.push(`\`\`\`\n`);
  const commands = instructions.split(',');
  
  if(commands.length > 1){
    for(const command of commands){
      result.push(`${command}\n`);
    }
  } else {
    result.push(commands);
  } 
  result.push(`\`\`\`\n\n`);

  return result.join('');
}


/**
 * 
 * @param {*} data JSON object maps
 * @returns string of formatted README file with user inputs given in inquirer
 */
function generateMarkdown(data) {
  console.log('inside generate Markdown');
  console.log(data);
  let markDownArr = [];

  
  
  markDownArr.push(`# ${data.title}\n\n`); //largest heading
  
  if(!data.license) {
    const badge = renderLicenseSection(data.license);
    markDownArr.push(`### License(s)\n\n`); //largest heading
    markDownArr.push(`${badge}\n\n`);//badges near top
 }

  markDownArr.push(`## Description\n\n`);
  markDownArr.push(`${data.description}\n\n`);
 
  //check for null or empty strings or undefined per stackoverflow and the flexible javascript
  if(!data.instructions) {
    const installIntructs = renderInstructionSection(data.install);
    markDownArr.push(`## Installation\n\n`);
    markDownArr.push(`${installIntructs}\n\n`);  
  } else {
    markDownArr.push(`## Installation\n\n`);
    markDownArr.push(`No Instructions required or place holder\n\n`);
  }

  if(!data.test){
    const testInstructs = renderInstructionSection(data.test);
    markDownArr.push(`## Tests\n\n`);
    markDownArr.push(`${testInstructs}\n\n`);
  } else {
    markDownArr.push(`## Tests\n\n`);
    markDownArr.push(`No tests required or place holder\n\n`);
  }

  markDownArr.push(`_ _ _ _`); //break the readme with a horizontal line

  markDownArr.push(`## Usage\n\n`);
  markDownArr.push(`${data.usage}\n\n`);
  
  markDownArr.push(`## Contributing\n\n`);
  markDownArr.push(`${data.contribute}\n\n`);

  markDownArr.push(`_ _ _ _`); //break the readme with a horizontal line

  markDownArr.push(`## Questions\n\n`);
  markDownArr.push(`Have questions about the project?\n\n1.[Email Me](${data.email})\n\n`);

  return markDownArr.join('');
}

//Very tricky, given code had a fault of not putting curly braces around it
//allows other scripts to access the function generateMarkdown
module.exports = {generateMarkdown};