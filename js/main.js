let CHART = document.getElementById("lineChart");
// Chart.defaults.scale.ticks.beginAtZero = true;

let data



data =
{
    type: 'pie',
    data:
    {
        labels: ['1','2'],
        datasets:[
            {
                label : 'Points',
                backgroundColor:['#01EDE1','#3F3F3F'],
                data : [60,40]


            }
        ]
    }
    ,
    options :{
        cutoutPercentage : 60,
        rotation:Math.PI* -0.5,
        animation:{
            animateScale: true
        },
        legend: {
            display: false
        }
    }
}

new Chart(CHART , data )




let CHART1 = document.getElementById("lineChart1");
// Chart.defaults.scale.ticks.beginAtZero = true;

data =
{
    type: 'pie',
    data:
    {
        labels: ['1','2'],
        datasets:[
            {
                label : 'Points',
                backgroundColor:['#01EDE1','#3F3F3F'],
                data : [60,40]


            }
        ]
    }
    ,
    options :{
        cutoutPercentage : 60,
        rotation:Math.PI* -0.5,
        animation:{
            animateScale: true
        },
        legend: {
            display: false
        }
    }
}

new Chart(CHART1 , data )