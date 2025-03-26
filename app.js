

function clickFn(){
    // 
    let investment = document.getElementById('investment');
    let teamA = document.getElementById('teamA');
    let teamB = document.getElementById('teamB');
    let maxProfit = document.getElementById('maxProfit');
    let maxLoss = document.getElementById('maxLoss');
    let usd = document.getElementById('usd');
    let usdVal = usd.value;
    let maxi = usdVal * 25;

    let rateA = document.getElementById('rateA');
    let rateB = document.getElementById('rateB');
    let investTeamA = (maxi / rateA.value).toFixed(2); // 1087.5 --> 2175
    let investTeamB = (maxi / rateB.value).toFixed(2); // 1318.18 --> 2175
    let totalInvestment = (parseFloat(investTeamA) + parseFloat(investTeamB)).toFixed(2);
    investment.innerText = totalInvestment;
    teamA.innerText = investTeamA;
    teamB.innerText = investTeamB;

    let maxValuation = ((parseFloat(investTeamA) * rateA.value) + (parseFloat(investTeamB) * rateB.value)).toFixed(2);
    maxProfit.innerText = (maxValuation - totalInvestment).toFixed(2);
    let AWin = investTeamA * rateA.value;
    let BWin = investTeamB * rateB.value;
    // let loss = max(totalInvestment - AWin, totalInvestment - BWin);
    let mxLoss = totalInvestment-maxi ;
    maxLoss.innerText = (mxLoss).toFixed(2);
}
