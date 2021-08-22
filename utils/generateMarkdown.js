// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log('inside render License Badge');
  console.log(license);

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
function renderLicenseSection(license) {
  console.log('inside render License Section');
  console.log(license)
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log('inside generate Markdown');
  console.log(data);
  const badge = renderLicenseBadge(data.license);
  
  return `# ${data.title}
          ## Description
          ${data.description}
          *check stuff*
          _italic_
          \`\`\`npm install\`\`\`
          ${badge}
  `;
}
//Very tricky, given code had a fault of not putting curly braces around it
module.exports = {generateMarkdown};
