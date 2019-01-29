let CHART = document.getElementById("lineChart");
let CHART2 = document.getElementById("lineChart2");

let DETAIL1
let DETAIL2

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

let data2
    data2 =
        {
            type: 'pie',
            data:
            {
                labels: [ '2','1'],
                datasets: [
                    {
                        label: 'Points',
                        backgroundColor: ['#01EDE1', '#3F3F3F'],
                        data: ['20', '80']
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
    CHART.style.display = "block";
    CHART2.style.display = "none";

    DETAIL1 = document.getElementById("showDetail1");
    DETAIL2 = document.getElementById("showDetail2");

    DETAIL1.style.display = "none";
    DETAIL2.style.display = "none";

    new Chart(CHART, data)

}

function showLineChart2() {
    CHART.style.display = "none";
    CHART2.style.display = "block";

    DETAIL1 = document.getElementById("showDetail1");
    DETAIL2 = document.getElementById("showDetail2");

    DETAIL1.style.display = "none";
    DETAIL2.style.display = "none";

    new Chart(CHART2, data2)

}



function enableDetail1(){
    DETAIL1 = document.getElementById("showDetail1");
    DETAIL2 = document.getElementById("showDetail2");
    DETAIL1.style.display = "block";
    // DETAIL2.style.display = "none";
    
}

function enableDetail2(){
    DETAIL1 = document.getElementById("showDetail1");
    DETAIL2 = document.getElementById("showDetail2");
    // DETAIL1.style.display = "none";
    DETAIL2.style.display = "block";
}