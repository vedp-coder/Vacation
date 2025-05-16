/* 
  memberBackground.js
  This script handles the display of background information for selected members.
  Author: Ben
  Last Modified: 5/15/202
*/

document.addEventListener("DOMContentLoaded", function() {
  const memberSelect = document.getElementById("member-select");
  const membersInfo = document.getElementById("members-info");

  // Add an event listener to the dropdown menu to detect any changes
  memberSelect.addEventListener("change", function() {
    const selectedMember = memberSelect.value;
    // Call the function to display the background information of the selected member
    showMemberBackground(selectedMember);
  });
});

// Displays the background information of the selected member
function showMemberBackground(memberName) {
  const container = document.getElementById("members-info");
  // Clear previous content
  container.innerHTML = "";

  // Data for members backgrounds
  const membersData = {
    ben: {
      title: "Ben's Background",
      description: "Ben Description"
    },

    lyv: {
      title: "Lyv's Background",
      description: "Lyv Description"
    },

    ved: {
      title: "Ved's Background",
      description: "Ved Description"
    },

    will: {
      title: "Will's Background",
      description: "Will Description"
    }
  };

  // Access the selected member's data
  const member = membersData[memberName];

  // Create and append the member title
  const titleElem = document.createElement("h2");
  titleElem.textContent = member.title;
  container.appendChild(titleElem);

  // Create and append the member description
  const descElem = document.createElement("p");
  descElem.textContent = member.description;
  container.appendChild(descElem);
}
        
