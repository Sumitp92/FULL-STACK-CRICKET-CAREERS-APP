const basicInfo = document.getElementById("basic-info");
const personalInfo = document.getElementById("personal-info");
const careerInfo = document.getElementById("career-info");
const formElement = document.querySelector(".form");
const previousDisplay = window.getComputedStyle(formElement).display;

const saveData = async (event) => {
  event.preventDefault();

  const {
    name,
    dob,
    imageUrl,
    birthPlace,
    career,
    numberOfMatches,
    score,
    fifties,
    centuries,
    wickets,
    average,
  } = event.target;

  const data = {
    name: name.value,
    dob: dob.value,
    imageUrl: imageUrl.value,
    birthPlace: birthPlace.value,
    career: career.value,
    numberOfMatches: numberOfMatches.value,
    score: score.value,
    fifties: fifties.value,
    centuries: centuries.value,
    wickets: wickets.value,
    average: average.value,
  };

  try {
    //post request
    await axios.post("http://localhost:3000/player-info", data);
    event.target.reset();
    alert("Player information saved successfully.");
  } catch (error) {
    console.log("Error saving player data:", error);
  }
};

// Function to display player data
function showData(players) {
  basicInfo.innerHTML = "";
  personalInfo.innerHTML = "";
  careerInfo.innerHTML = "";

  if (!players) {
    basicInfo.innerHTML = "<h1>Info Not found!</h1>";
    return;
  }

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.onclick = () => editPlayerData(players);
  basicInfo.appendChild(editBtn);

  const img = document.createElement("img");
  img.src = players.imageUrl;
  img.style.display = "block";
  basicInfo.appendChild(img);

  const basicInfoItem = document.createElement("li");
  basicInfoItem.innerHTML = `<h3>Player Information</h3><br>${players.name}<br>${players.dob}<hr>`;
  basicInfo.appendChild(basicInfoItem);

  const personalInfoItem = document.createElement("li");
  personalInfoItem.innerHTML = `
    <h3>Personal Information</h3><br>
    Birthplace: ${players.birthPlace}<br><br>
    Number of Matches: ${players.numberOfMatches}<br><br>
    Score: ${players.score}<br><br>
    Fifties: ${players.fifties}<br><br>
    Centuries: ${players.centuries}<br><br>
    Wickets: ${players.wickets}<br><br>
    Average: ${players.average}<br><br>
  `;
  personalInfo.appendChild(personalInfoItem);

  const careerParagraph = document.createElement("p");
  careerParagraph.innerHTML = players.career;
  careerInfo.appendChild(careerParagraph);
}

// function to edit player data
function editPlayerData(players) {
  formElement.style.display = previousDisplay;

  document.getElementById("name").value = players.name;
  document.getElementById("dob").value = players.dob;
  document.getElementById("imageUrl").value = players.imageUrl;
  document.getElementById("birthPlace").value = players.birthPlace;
  document.getElementById("career").value = players.career;
  document.getElementById("numberOfMatches").value = players.numberOfMatches;
  document.getElementById("score").value = players.score;
  document.getElementById("fifties").value = players.fifties;
  document.getElementById("centuries").value = players.centuries;
  document.getElementById("wickets").value = players.wickets;
  document.getElementById("average").value = players.average;

  // Delete the current record
  axios.delete(`http://localhost:3000/player-info/${players.id}`);
}

// function to fetch player data 
async function getData(event) {
  event.preventDefault();
  const playerName = event.target.playerName.value;
  const encodedPlayerName = encodeURIComponent(playerName);

  try {
    // get request
    const res = await axios.get(`http://localhost:3000/player-info/${encodedPlayerName}`);
    document.querySelector(".form").style.display = "none";
    showData(res.data.playerDetails);
    event.target.reset();
  } catch (error) {
    console.error("Error fetching player data:", error);
    console.log("Error message:", error.message);
    console.log("Error response:", error.response);
    alert("Player not found");
  }
}