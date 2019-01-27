let CHART = document.getElementById("lineChart");
// Chart.defaults.scale.ticks.beginAtZero = true;

let data

data =
{
    type: 'pie',
    data:
    {
        labels: ['1','2','3','4'],
        datasets:[
            {
                label : 'Points',
                backgroundColor:['#f1c40f','#e67e22','#16a085','#2980b9'],
                data : [10,20,55,30]


            }
        ]
    }
    ,
    options :{
        cutoutPercentage : 60,
        rotation:Math.PI* -0.5,
        animation:{
            animateScale: true
        }
    }
}