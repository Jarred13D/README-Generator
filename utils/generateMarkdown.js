// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT License":
      return "!License: MIT";
    case "Apache License 2.0":
      return "!License";
    case "BSD 3-Clause License":
      return "!License";
    case "Mozilla Public License 2.0":
      return "!License: MPL 2.0";
    case "GNU General Public License (GPL) v3":
      return "!License: GPL v3";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT License":
      return "(https://opensource.org/licenses/MIT)";
    case "Apache License 2.0":
      return "(https://opensource.org/licenses/Apache-2.0)";
    case "BSD 3-Clause License":
      return "(https://opensource.org/licenses/BSD-3-Clause)";
    case "Mozilla Public License 2.0":
      return "(https://opensource.org/licenses/MPL-2.0)";
    case "GNU General Public License (GPL) v3":
      return "(https://www.gnu.org/licenses/gpl-3.0)";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  } else {
    return (`This project is licensed under the ${license}.`)

}}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

export default generateMarkdown;