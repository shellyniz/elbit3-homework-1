let ctx = document.getElementById("myChart").getContext('2d');
let dataVals = [16,3,4,15,3,7];
let myChart = createChart('bar');


function createChart(chartType)
{
    return new Chart(ctx, {
        type: chartType,
        data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: 'Some Numbers',
                data: dataVals,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });  
}
let valBtn = document.getElementById("ValBtn");
valBtn.addEventListener('click', changeVals);

function changeVals() {
    console.log(myChart.config.type );
    dataVals = [Math.random()*20, Math.random()*20, Math.random()*20, Math.random()*20, Math.random()*20, Math.random()*20];
    myChart.data.datasets[0].data = dataVals;   
    myChart.update();
    console.log(myChart.config.type );
}

let barBtn = document.getElementById("BarBtn");
barBtn.addEventListener('click', change2Bar);

function change2Bar() {
    myChart.destroy();
    myChart = createChart('bar');
}


let lineBtn = document.getElementById("LineBtn");
lineBtn.addEventListener('click', change2Line);

function change2Line() {
    myChart.destroy();
    myChart = createChart('line');
}

let radarBtn = document.getElementById("RadarBtn");
radarBtn.addEventListener('click', change2Radar);

function change2Radar() {
    myChart.destroy();
    myChart = createChart('radar');
}

let polarBtn = document.getElementById("PolarBtn");
polarBtn.addEventListener('click', change2Polar);

function change2Polar() {
    myChart.destroy();
    myChart = createChart('polarArea');
}

