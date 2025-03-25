

function clickFn(){
    // 
    let investment = document.getElementById('investment');
    let teamA = document.getElementById('teamA');
    let teamB = document.getElementById('teamB');
    let maxProfit = document.getElementById('maxProfit');
    let maxLoss = document.getElementById('maxLoss');

    let rateA = document.getElementById('rateA');
    let rateB = document.getElementById('rateB');
    let investTeamA = (2175 / rateA.value).toFixed(2); // 1087.5 --> 2175
    let investTeamB = (2175 / rateB.value).toFixed(2); // 1318.18 --> 2175
    let totalInvestment = (parseFloat(investTeamA) + parseFloat(investTeamB)).toFixed(2);
    investment.innerText = totalInvestment;
    teamA.innerText = investTeamA;
    teamB.innerText = investTeamB;

    let maxValuation = ((parseFloat(investTeamA) * rateA.value) + (parseFloat(investTeamB) * rateB.value)).toFixed(2);
    maxProfit.innerText = (maxValuation - totalInvestment).toFixed(2);
    let AWin = investTeamA * rateA.value;
    let BWin = investTeamB * rateB.value;
    // let loss = max(totalInvestment - AWin, totalInvestment - BWin);
    let mxLoss = totalInvestment-2175 ;
    maxLoss.innerText = (mxLoss).toFixed(2);
}
