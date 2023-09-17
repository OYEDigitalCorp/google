function analyzePage() {
  const pageUrl = document.getElementById('pageUrl').value;
  const resultDiv = document.getElementById('result');

  // Simple validation for the URL
  if (!pageUrl) {
    resultDiv.innerHTML = 'Please enter a valid URL.';
    return;
  }

  // Reset the result and display loading message
  resultDiv.innerHTML = '<em>Analyzing...</em>';

  // Fetch the webpage content for analysis
  fetch(pageUrl)
    .then(response => response.text())
    .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');

      // Analyze title, meta description, and h1-h6 tags
      const title = doc.querySelector('title')?.innerText || 'Title not found';
      const metaDescription = doc.querySelector('meta[name="description"]')?.getAttribute('content') || 'Meta description not found';

      // Analyze keyword presence in meta and heading tags
      const keywords = ['example', 'keywords', 'you', 'can', 'modify'];  // Modify with your relevant keywords
      const keywordPresence = analyzeKeywordPresence(doc, keywords);

      // Count the number of words in the content
      const wordCount = doc.body.innerText.split(/\s+/).length;

      // Simulate backlink count
      const backlinkCount = simulateBacklinkCount();

      // Simulate page load time (in milliseconds)
      const pageLoadTime = simulatePageLoadTime();

      // Display the analysis results
      resultDiv.innerHTML = `
        <h2>SEO Analysis Results for ${pageUrl}</h2>
        <ul>
          <li><strong>Title:</strong> ${title}</li>
          <li><strong>Meta Description:</strong> ${metaDescription}</li>
          <li><strong>Keyword Presence:</strong></li>
          <ul>
            ${keywordPresence}
          </ul>
          <li><strong>Word Count:</strong> ${wordCount}</li>
          <li><strong>Backlink Count:</strong> ${backlinkCount}</li>
          <li><strong>Page Load Time:</strong> ${pageLoadTime} ms</li>
        </ul>
      `;
    })
    .catch(error => {
      resultDiv.innerHTML = 'Error analyzing the page. Please try again.';
      console.error('Error:', error);
    });
}

function analyzeKeywordPresence(doc, keywords) {
  let presenceHTML = '';

  // Check presence in meta description
  const metaDescription = doc.querySelector('meta[name="description"]')?.getAttribute('content') || '';
  presenceHTML += `<li>Meta Description: ${analyzeKeywordPresenceInText(metaDescription, keywords)}</li>`;

  // Check presence in headings (h1-h6)
  for (let i = 1; i <= 6; i++) {
    const headingText = Array.from(doc.querySelectorAll(`h${i}`)).map(heading => heading.innerText).join(' ');
    presenceHTML += `<li>Heading H${i}: ${analyzeKeywordPresenceInText(headingText, keywords)}</li>`;
  }

  return presenceHTML;
}

function analyzeKeywordPresenceInText(text, keywords) {
  const presence = {};

  for (const keyword of keywords) {
    const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
    presence[keyword] = regex.test(text);
  }

  return Object.keys(presence).map(keyword => `${keyword}: ${presence[keyword] ? 'Present' : 'Not Present'}`).join(', ');
}
