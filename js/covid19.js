let covid19Url = `https://api.covid19api.com/summary`;

function myFunc() {
    let covid19Detail = async () => {
        let covidData = await window.fetch(covid19Url);
        let covidResponseData = await covidData.json();
        let covidInfo = covidResponseData.Global;
        document.getElementById("covidBlock").innerHTML = `
        <div id="mainBlock">
            <p class="iconName1">New Confirmed Patients</p>
            <span class="numstatus">${covidInfo.NewConfirmed}</span>

            <p class="iconName2">Total Confirmed Patients</p>
            <span class="numstatus">${covidInfo.TotalConfirmed}</span>
            
            <p class="iconName3">New Deaths Patients</p>
            <span class="numstatus">${covidInfo.NewDeaths}</span>
            
            <p class="iconName4">Total Deaths Patients</p>
            <span class="numstatus">${covidInfo.TotalDeaths}</span>
            
            <p class="iconName5">New Recovered Patients</p>
            <span class="numstatus">${covidInfo.NewRecovered}</span>
            
            <p class="iconName6">Total Recovered Patients</p>
            <span class="numstatus">${covidInfo.TotalRecovered}</span>
        </div>`;

    };
    covid19Detail();
}