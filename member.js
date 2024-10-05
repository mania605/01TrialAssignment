// team data
const memberData = [
  { name: "Paul Yoon", pic: "img/paul.jpg", position: "CFO", id: 1 },
  { name: "Emily Chung", pic: "img/emily.jpg", position: "CTO", id: 2 },
  { name: "Peter Smith", pic: "img/peter.jpg", position: "UI Designer", id: 3 },
  { name: "Julia Min", pic: "img/julia.jpg", position: "Frontend Dev", id: 4 },
  {
    name: "Michael Hall",
    pic: "img/michael.jpg",
    position: "Backend Dev",
    id: 5,
  },
  {
    name: "Emma Smith",
    pic: "img/emma.jpg",
    position: "Project Manager",
    id: 6,
  },
];

// Select the team list container
const teamList = document.querySelector(".team-list");

// Function to create team members dynamically
function createTeamMembers() {
  memberData.forEach((member) => {
    // Create the list item
    const li = document.createElement("li");

    // Add content to the list item
    li.innerHTML = `
      <img src="${member.pic}" alt="${member.name}">
      <h3>${member.name}</h3>
      <p>${member.position}</p>
    `;

    // Append list item to the team list
    teamList.appendChild(li);
  });
}

// Call the function to populate the team members
createTeamMembers();
