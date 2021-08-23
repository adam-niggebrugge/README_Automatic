// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log('inside render License Badge');
  console.log(license);

  switch (license) {
  case 'Apache 2.0':
    const appacheBadge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    return appacheBadge;
  case 'GNU GPLv3':
    const gnuBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    return gnuBadge;
  case 'GNU GPLv3':
    const unlicenseBadge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
    return unlicenseBadge;
  case 'GNU GPLv3':
    const mozillaBadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    return mozillaBadge;
  case 'GNU GPLv3':
    const mitBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    return mitBadge;
  default:
    return 'BADGE undefined';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  console.log('inside render License Link');
  console.log(license)
  return 'jokes';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
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

// function renderInstructionSection(instructions){
//   console.log(`inside instruction rendering ${instructions}`);
//   let result = [];
//   //Using backticks for markdown code style of install instrunctions
//   result.push(`\`\`\`\n`);
//   const commands = instructions.split(',');
  
//   if(commands.length > 1){
//     for(const command of commands){
//       result.push(`${command}\n`);
//     }
//   } else{
//     result.push(commands);
//   }
//   result.push(`\`\`\``);

//   return result.join('');
// }


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log('inside generate Markdown');
  console.log(data);
  let markDownArr = [];

  const badge = renderLicenseSection(data.license);
  // const instructions = renderInstructionSection(data.instructions);
  console.log(`found badge(s) is(are): ${badge}`);

  markDownArr.push(`# ${data.title}\n\n`);

  markDownArr.push(`## Description\n\n`);
  markDownArr.push(`${data.description}\n\n`);
  // markDownArr.push(`## Installation\n\n`);
  // markDownArr.push(`${instructions}\n\n`);
  // markDownArr.push(`## Usage\n\n`);
  // markDownArr.push(`## Contributing\n\n`);
  // markDownArr.push(`## Tests\n\n`);
  markDownArr.push(`## Questions\n\n`);
  markDownArr.push(`Have questions about the project? [Contact Me](${data.email})`);
  markDownArr.push(`${badge}\n\n`);

  return markDownArr.join('');
}
//Very tricky, given code had a fault of not putting curly braces around it
module.exports = {generateMarkdown};
