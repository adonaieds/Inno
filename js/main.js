let CHART = document.getElementById("lineChart");

// Chart.defaults.scale.ticks.beginAtZero = true;

let data
data =
    {
        type: 'pie',
        data:
        {
            labels: [ '2','1'],
            datasets: [
                {
                    label: 'Points',
                    backgroundColor: ['#01EDE1', '#3F3F3F'],
                    data: ['60', '40']
                }
            ]
        }
        ,
        options: {
            cutoutPercentage: 60,
            rotation: Math.PI * -0.5,
            animation: {
                animateScale: true
            },
            legend: {
                display: false
            }
        }
    }
    
new Chart(CHART, data)


function showLineChart1() {

    
}

function showLineChart2() {

}
