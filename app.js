

function clickFn(){
    // 
    let investment = document.getElementById('investment');
    let teamA = document.getElementById('teamA');
    let teamB = document.getElementById('teamB');
    let maxProfit = document.getElementById('maxProfit');
    let maxLoss = document.getElementById('maxLoss');
    let usd = document.getElementById('USD');
    let mxInvestment = usd.value * 25;

    let rateA = document.getElementById('rateA');
    let rateB = document.getElementById('rateB');
    let investTeamA = (mxInvestment / rateA.value).toFixed(2); // 1087.5 --> 2175
    let investTeamB = (mxInvestment / rateB.value).toFixed(2); // 1318.18 --> 2175
    let totalInvestment = (parseFloat(investTeamA) + parseFloat(investTeamB)).toFixed(2);
    investment.innerText = totalInvestment;
    teamA.innerText = investTeamA;
    teamB.innerText = investTeamB;

    let maxValuation = ((parseFloat(investTeamA) * rateA.value) + (parseFloat(investTeamB) * rateB.value)).toFixed(2);
    maxProfit.innerText = (maxValuation - totalInvestment).toFixed(2);
    let AWin = investTeamA * rateA.value;
    let BWin = investTeamB * rateB.value;
    // let loss = max(totalInvestment - AWin, totalInvestment - BWin);
    let mxLoss = totalInvestment-mxInvestment ;
    maxLoss.innerText = (mxLoss).toFixed(2);
}



function toggleTheme() {
    document.body.classList.toggle("light-theme");

    // Save the theme preference in local storage
    if (document.body.classList.contains("light-theme")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }
}

// Apply the saved theme on page load
window.onload = function () {
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-theme");
    }
};
