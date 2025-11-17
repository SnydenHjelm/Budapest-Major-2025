//Functions
async function displayGames(round) {
    let resp = await fetch("http://localhost:8000/games");
    let reso = await resp.json();
    let games = reso.filter((x) => x.stage === 1);

    round1Div.innerHTML = "";
    round2Div.innerHTML = "";
    round3Div.innerHTML = "";
    round4Div.innerHTML = "";
    round5Div.innerHTML = "";

    for (let game of games) {
        let flag = countries.find((x) => x.name.toLowerCase() === game.mvpCountry.toLowerCase()).flag;
        let div = document.createElement("div");
        div.classList.add("game");
        div.innerHTML = `
        <div><img title="${game.team1}" src="../images/${game.team1}.png"></div>
        <p class="score">${game.score}</p>
        <div><img title="${game.team2}" src="../images/${game.team2}.png"></div>
        <p class="mvp">Highest rated player: ${flag} ${game.mvp}, ${game.mvpTeam}</p>
        <a target="_blank" href="${game.link}">Match on HLTV →</a>
        `;
        document.querySelector(`#round${game.round}-games`).appendChild(div);
    }

    showGamesDiv(round);
    if (round) {
        round1Nav.style.textDecoration = "none";
        round2Nav.style.textDecoration = "none";
        round3Nav.style.textDecoration = "none";
        round4Nav.style.textDecoration = "none";
        round5Nav.style.textDecoration = "none";
        document.querySelector(`#round${round}`).style.textDecoration = "underline";
    }
}

async function driver() {
    await displayGames();
}

function hideGameDivs() {
    round1Div.style.display = "none";
    round2Div.style.display = "none";
    round3Div.style.display = "none";
    round4Div.style.display = "none";
    round5Div.style.display = "none";
}

function showGamesDiv(number) {
    hideGameDivs();
    if (number) {
        document.querySelector(`#round${number}-games`).style.display = "block";
    } else {
        round1Div.style.display = "block";
    }
}

//Variables
const link = document.querySelector("#link");
const mvp = document.querySelector("#mvp")
const mvpCountry = document.querySelector("#mvp-country");
const mvpTeam = document.querySelector("#mvp-team");
const round = document.querySelector("#round");
const round1Nav = document.querySelector("#round1");
const round1Div = document.querySelector("#round1-games");
const round2Nav = document.querySelector("#round2");
const round2Div = document.querySelector("#round2-games");
const round3Nav = document.querySelector("#round3");
const round3Div = document.querySelector("#round3-games");
const round4Nav = document.querySelector("#round4");
const round4Div = document.querySelector("#round4-games");
const round5Nav = document.querySelector("#round5");
const round5Div = document.querySelector("#round5-games");
const score = document.querySelector("#score");
const reqStatus = document.querySelector("#status");
const submit = document.querySelector("#submit");
const team1 = document.querySelector("#team1");
const team2 = document.querySelector("#team2");

//Countries array
const countries = [
  { name: "Afghanistan", flag: "🇦🇫" },
  { name: "Albania", flag: "🇦🇱" },
  { name: "Algeria", flag: "🇩🇿" },
  { name: "Andorra", flag: "🇦🇩" },
  { name: "Angola", flag: "🇦🇴" },
  { name: "Antigua and Barbuda", flag: "🇦🇬" },
  { name: "Argentina", flag: "🇦🇷" },
  { name: "Armenia", flag: "🇦🇲" },
  { name: "Australia", flag: "🇦🇺" },
  { name: "Austria", flag: "🇦🇹" },
  { name: "Azerbaijan", flag: "🇦🇿" },
  { name: "Bahamas", flag: "🇧🇸" },
  { name: "Bahrain", flag: "🇧🇭" },
  { name: "Bangladesh", flag: "🇧🇩" },
  { name: "Barbados", flag: "🇧🇧" },
  { name: "Belarus", flag: "🇧🇾" },
  { name: "Belgium", flag: "🇧🇪" },
  { name: "Belize", flag: "🇧🇿" },
  { name: "Benin", flag: "🇧🇯" },
  { name: "Bhutan", flag: "🇧🇹" },
  { name: "Bolivia", flag: "🇧🇴" },
  { name: "Bosnia and Herzegovina", flag: "🇧🇦" },
  { name: "Botswana", flag: "🇧🇼" },
  { name: "Brazil", flag: "🇧🇷" },
  { name: "Brunei", flag: "🇧🇳" },
  { name: "Bulgaria", flag: "🇧🇬" },
  { name: "Burkina Faso", flag: "🇧🇫" },
  { name: "Burundi", flag: "🇧🇮" },
  { name: "Cabo Verde", flag: "🇨🇻" },
  { name: "Cambodia", flag: "🇰🇭" },
  { name: "Cameroon", flag: "🇨🇲" },
  { name: "Canada", flag: "🇨🇦" },
  { name: "Central African Republic", flag: "🇨🇫" },
  { name: "Chad", flag: "🇹🇩" },
  { name: "Chile", flag: "🇨🇱" },
  { name: "China", flag: "🇨🇳" },
  { name: "Colombia", flag: "🇨🇴" },
  { name: "Comoros", flag: "🇰🇲" },
  { name: "Congo (Republic of the)", flag: "🇨🇬" },
  { name: "Congo (Democratic Republic of the)", flag: "🇨🇩" },
  { name: "Costa Rica", flag: "🇨🇷" },
  { name: "Croatia", flag: "🇭🇷" },
  { name: "Cuba", flag: "🇨🇺" },
  { name: "Cyprus", flag: "🇨🇾" },
  { name: "Czech Republic", flag: "🇨🇿" },
  { name: "Denmark", flag: "🇩🇰" },
  { name: "Djibouti", flag: "🇩🇯" },
  { name: "Dominica", flag: "🇩🇲" },
  { name: "Dominican Republic", flag: "🇩🇴" },
  { name: "Ecuador", flag: "🇪🇨" },
  { name: "Egypt", flag: "🇪🇬" },
  { name: "El Salvador", flag: "🇸🇻" },
  { name: "Equatorial Guinea", flag: "🇬🇶" },
  { name: "Eritrea", flag: "🇪🇷" },
  { name: "Estonia", flag: "🇪🇪" },
  { name: "Eswatini", flag: "🇸🇿" },
  { name: "Ethiopia", flag: "🇪🇹" },
  { name: "Fiji", flag: "🇫🇯" },
  { name: "Finland", flag: "🇫🇮" },
  { name: "France", flag: "🇫🇷" },
  { name: "Gabon", flag: "🇬🇦" },
  { name: "Gambia", flag: "🇬🇲" },
  { name: "Georgia", flag: "🇬🇪" },
  { name: "Germany", flag: "🇩🇪" },
  { name: "Ghana", flag: "🇬🇭" },
  { name: "Greece", flag: "🇬🇷" },
  { name: "Grenada", flag: "🇬🇩" },
  { name: "Guatemala", flag: "🇬🇹" },
  { name: "Guinea", flag: "🇬🇳" },
  { name: "Guinea-Bissau", flag: "🇬🇼" },
  { name: "Guyana", flag: "🇬🇾" },
  { name: "Haiti", flag: "🇭🇹" },
  { name: "Honduras", flag: "🇭🇳" },
  { name: "Hungary", flag: "🇭🇺" },
  { name: "Iceland", flag: "🇮🇸" },
  { name: "India", flag: "🇮🇳" },
  { name: "Indonesia", flag: "🇮🇩" },
  { name: "Iran", flag: "🇮🇷" },
  { name: "Iraq", flag: "🇮🇶" },
  { name: "Ireland", flag: "🇮🇪" },
  { name: "Israel", flag: "🇮🇱" },
  { name: "Italy", flag: "🇮🇹" },
  { name: "Jamaica", flag: "🇯🇲" },
  { name: "Japan", flag: "🇯🇵" },
  { name: "Jordan", flag: "🇯🇴" },
  { name: "Kazakhstan", flag: "🇰🇿" },
  { name: "Kenya", flag: "🇰🇪" },
  { name: "Kiribati", flag: "🇰🇮" },
  { name: "Kosovo", flag: "🇽🇰"},
  { name: "Kuwait", flag: "🇰🇼" },
  { name: "Kyrgyzstan", flag: "🇰🇬" },
  { name: "Laos", flag: "🇱🇦" },
  { name: "Latvia", flag: "🇱🇻" },
  { name: "Lebanon", flag: "🇱🇧" },
  { name: "Lesotho", flag: "🇱🇸" },
  { name: "Liberia", flag: "🇱🇷" },
  { name: "Libya", flag: "🇱🇾" },
  { name: "Liechtenstein", flag: "🇱🇮" },
  { name: "Lithuania", flag: "🇱🇹" },
  { name: "Luxembourg", flag: "🇱🇺" },
  { name: "Madagascar", flag: "🇲🇬" },
  { name: "Malawi", flag: "🇲🇼" },
  { name: "Malaysia", flag: "🇲🇾" },
  { name: "Maldives", flag: "🇲🇻" },
  { name: "Mali", flag: "🇲🇱" },
  { name: "Malta", flag: "🇲🇹" },
  { name: "Marshall Islands", flag: "🇲🇭" },
  { name: "Mauritania", flag: "🇲🇷" },
  { name: "Mauritius", flag: "🇲🇺" },
  { name: "Mexico", flag: "🇲🇽" },
  { name: "Micronesia", flag: "🇫🇲" },
  { name: "Moldova", flag: "🇲🇩" },
  { name: "Monaco", flag: "🇲🇨" },
  { name: "Mongolia", flag: "🇲🇳" },
  { name: "Montenegro", flag: "🇲🇪" },
  { name: "Morocco", flag: "🇲🇦" },
  { name: "Mozambique", flag: "🇲🇿" },
  { name: "Myanmar", flag: "🇲🇲" },
  { name: "Namibia", flag: "🇳🇦" },
  { name: "Nauru", flag: "🇳🇷" },
  { name: "Nepal", flag: "🇳🇵" },
  { name: "Netherlands", flag: "🇳🇱" },
  { name: "New Zealand", flag: "🇳🇿" },
  { name: "Nicaragua", flag: "🇳🇮" },
  { name: "Niger", flag: "🇳🇪" },
  { name: "Nigeria", flag: "🇳🇬" },
  { name: "North Korea", flag: "🇰🇵" },
  { name: "North Macedonia", flag: "🇲🇰" },
  { name: "Norway", flag: "🇳🇴" },
  { name: "Oman", flag: "🇴🇲" },
  { name: "Pakistan", flag: "🇵🇰" },
  { name: "Palau", flag: "🇵🇼" },
  { name: "Panama", flag: "🇵🇦" },
  { name: "Papua New Guinea", flag: "🇵🇬" },
  { name: "Paraguay", flag: "🇵🇾" },
  { name: "Peru", flag: "🇵🇪" },
  { name: "Philippines", flag: "🇵🇭" },
  { name: "Poland", flag: "🇵🇱" },
  { name: "Portugal", flag: "🇵🇹" },
  { name: "Qatar", flag: "🇶🇦" },
  { name: "Romania", flag: "🇷🇴" },
  { name: "Russia", flag: "🇷🇺" },
  { name: "Rwanda", flag: "🇷🇼" },
  { name: "Saint Kitts and Nevis", flag: "🇰🇳" },
  { name: "Saint Lucia", flag: "🇱🇨" },
  { name: "Saint Vincent and the Grenadines", flag: "🇻🇨" },
  { name: "Samoa", flag: "🇼🇸" },
  { name: "San Marino", flag: "🇸🇲" },
  { name: "Sao Tome and Principe", flag: "🇸🇹" },
  { name: "Saudi Arabia", flag: "🇸🇦" },
  { name: "Senegal", flag: "🇸🇳" },
  { name: "Serbia", flag: "🇷🇸" },
  { name: "Seychelles", flag: "🇸🇨" },
  { name: "Sierra Leone", flag: "🇸🇱" },
  { name: "Singapore", flag: "🇸🇬" },
  { name: "Slovakia", flag: "🇸🇰" },
  { name: "Slovenia", flag: "🇸🇮" },
  { name: "Solomon Islands", flag: "🇸🇧" },
  { name: "Somalia", flag: "🇸🇴" },
  { name: "South Africa", flag: "🇿🇦" },
  { name: "South Korea", flag: "🇰🇷" },
  { name: "South Sudan", flag: "🇸🇸" },
  { name: "Spain", flag: "🇪🇸" },
  { name: "Sri Lanka", flag: "🇱🇰" },
  { name: "Sudan", flag: "🇸🇩" },
  { name: "Suriname", flag: "🇸🇷" },
  { name: "Sweden", flag: "🇸🇪" },
  { name: "Switzerland", flag: "🇨🇭" },
  { name: "Syria", flag: "🇸🇾" },
  { name: "Tajikistan", flag: "🇹🇯" },
  { name: "Tanzania", flag: "🇹🇿" },
  { name: "Thailand", flag: "🇹🇭" },
  { name: "Timor-Leste", flag: "🇹🇱" },
  { name: "Togo", flag: "🇹🇬" },
  { name: "Tonga", flag: "🇹🇴" },
  { name: "Trinidad and Tobago", flag: "🇹🇹" },
  { name: "Tunisia", flag: "🇹🇳" },
  { name: "Turkey", flag: "🇹🇷" },
  { name: "Turkmenistan", flag: "🇹🇲" },
  { name: "Tuvalu", flag: "🇹🇻" },
  { name: "Uganda", flag: "🇺🇬" },
  { name: "Ukraine", flag: "🇺🇦" },
  { name: "United Arab Emirates", flag: "🇦🇪" },
  { name: "United Kingdom", flag: "🇬🇧" },
  { name: "United States", flag: "🇺🇸" },
  { name: "Uruguay", flag: "🇺🇾" },
  { name: "Uzbekistan", flag: "🇺🇿" },
  { name: "Vanuatu", flag: "🇻🇺" },
  { name: "Venezuela", flag: "🇻🇪" },
  { name: "Vietnam", flag: "🇻🇳" },
  { name: "Yemen", flag: "🇾🇪" },
  { name: "Zambia", flag: "🇿🇲" },
  { name: "Zimbabwe", flag: "🇿🇼" },
  {name: "Taiwan", flag: "🇹🇼"}
];


//Event Listeners
round1Nav.addEventListener("click", () => {
    showGamesDiv(1);
    round1Nav.style.textDecoration = "underline";
    round2Nav.style.textDecoration = "none";
    round3Nav.style.textDecoration = "none";
    round4Nav.style.textDecoration = "none";
    round5Nav.style.textDecoration = "none";
});

round2Nav.addEventListener("click", () => {
    showGamesDiv(2);
    round1Nav.style.textDecoration = "none";
    round2Nav.style.textDecoration = "underline";
    round3Nav.style.textDecoration = "none";
    round4Nav.style.textDecoration = "none";
    round5Nav.style.textDecoration = "none";
});

round3Nav.addEventListener("click", () => {
    showGamesDiv(3);
    round1Nav.style.textDecoration = "none";
    round2Nav.style.textDecoration = "none";
    round3Nav.style.textDecoration = "underline";
    round4Nav.style.textDecoration = "none";
    round5Nav.style.textDecoration = "none";
});

round4Nav.addEventListener("click", () => {
    showGamesDiv(4);
    round1Nav.style.textDecoration = "none";
    round2Nav.style.textDecoration = "none";
    round3Nav.style.textDecoration = "none";
    round4Nav.style.textDecoration = "underline";
    round5Nav.style.textDecoration = "none";
});

round5Nav.addEventListener("click", () => {
    showGamesDiv(5);
    round1Nav.style.textDecoration = "none";
    round2Nav.style.textDecoration = "none";
    round3Nav.style.textDecoration = "none";
    round4Nav.style.textDecoration = "none";
    round5Nav.style.textDecoration = "underline";
});

submit.addEventListener("click", async () => {
    let obj = {
        round: parseInt(round.value),
        stage: 1,
        team1: team1.value,
        team2: team2.value,
        mvp: mvp.value,
        mvpCountry: mvpCountry.value,
        mvpTeam: mvpTeam.value,
        score: score.value,
        link: link.value
    }

    let req = new Request("http://localhost:8000/games", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {"content-type": "application/json"}
    });

    let resp = await fetch(req);
    if (resp.ok) {
        reqStatus.textContent = "Game added.";
        team1.value = "";
        team2.value = "";
        mvp.value = "";
        mvpCountry.value = "";
        score.value = "";
        link.value = "";
    } else {
        reqStatus.textContent = "Request failed" + ` ${resp.message}`;
    }
    
    await displayGames(parseInt(round.value));
});

driver();