// Function to fetch the changelogs data from the JSON file
async function fetchChangelogsData() {
    const response = await fetch('https://raw.githubusercontent.com/defnotrahul/splash/main/sitedata.json');
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error('Failed to fetch changelogs data.');
      return null;
    }
  }
  
  // Function to fill the changelogs and version in the list
  async function fillChangelogsAndVersion() {
    const changelogsList = document.getElementById("changelogs-list");
    const versionHeading = document.getElementById("version-name");
    const dateElement = document.getElementById("version-date");
  
    // Fetch the changelogs data from GitHub
    const data = await fetchChangelogsData();
  
    if (data && data['latest-public-beta']) {
      const changelogsData = data['latest-public-beta'];
  
      // Update the version heading and date
      versionHeading.textContent = changelogsData.version;
      dateElement.textContent = formatDate(changelogsData.date);
  
      // Split the changelogs into an array using line breaks
      const changelogsArray = changelogsData.changelogs.split('\n');
  
      // Create list items for each changelog and append to the list
      changelogsArray.forEach((changelog) => {
        const listItem = document.createElement("li");
        listItem.textContent = changelog.trim(); // Trim any leading/trailing spaces
        changelogsList.appendChild(listItem);
      });
    } else {
      console.error('Invalid data format or missing data in JSON.');
    }
  }
  
  // Helper function to format the date (if needed)
  function formatDate(dateString) {
    // Future
    return dateString;
  }
  
  // Call the function to fill the changelogs and version
  fillChangelogsAndVersion();
  