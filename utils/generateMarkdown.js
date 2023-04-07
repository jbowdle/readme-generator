// License badge to be displayed at top of README
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "APACHE 2.0":
      return "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "BSD 3":
      return "[![License: BSD 3](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    case "None":
      return "";
  }
}
  
// Creates link to license website
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "[License: MIT](https://opensource.org/licenses/MIT)";
    case "APACHE 2.0":
      return "[License: Apache 2.0](https://opensource.org/licenses/Apache-2.0)";
    case "BSD 3":
      return "[License: BSD 3](https://opensource.org/licenses/BSD-3-Clause)";
    case "None":
      return "";
  }
}

// Creates copyright details section, taken from the copyright websites
function renderLicenseSection(license, year, copyrightHolder) {
  switch (license) {
    case "MIT":
      return `Copyright ${year} ${copyrightHolder}

      Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
      
      The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;
    case "APACHE 2.0":
      return `Copyright ${year} ${copyrightHolder}

      Licensed under the Apache License, Version 2.0 (the "License");
      you may not use this file except in compliance with the License.
      You may obtain a copy of the License at
   
        http://www.apache.org/licenses/LICENSE-2.0
   
      Unless required by applicable law or agreed to in writing, software
      distributed under the License is distributed on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      See the License for the specific language governing permissions and
      limitations under the License.`;
    case "BSD 3":
      return `Copyright ${year} ${copyrightHolder}

      Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
      
      1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
      
      2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
      
      3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
      
      THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS “AS IS” AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`;
    case "None":
      return "";
  }
}

// Generates the markdown text that is then fed to an fs.writeFile function on index.js
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license, data.year, data.copyright);

  return `# ${data.title}
${licenseBadge}

## Description
${data.description}

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contribution Guidelines](#contribution)
5. [Tests](#tests)
6. [Questions](#questions)

## Installation <a name="installation"></a>
To install dependencies, run the following command:

\`\`\`
${data.install}
\`\`\`

## Usage <a name="usage"></a>
${data.usage}

## License  <a name="license"></a>
${licenseLink}

${licenseSection}

## Contribution Guidelines  <a name="contribution"></a>
${data.contribution}

## Tests  <a name="tests"></a>
To run tests, enter the following command:

\`\`\`
${data.test}
\`\`\`

## Questions  <a name="questions"></a>
Email: <${data.email}>
GitHub: <https://github.com/${data.github}>
`;
}

module.exports = generateMarkdown;
