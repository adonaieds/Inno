let CHART = document.getElementById("lineChart");
let DETAIL = document.getElementById("showDetail");

var color = ['#00edd5', '#3F3F3F'];
var datas = ['10', '90']

Chart.pluginService.register({
    beforeDraw: function (chart) {
        if (chart.config.options.elements.center) {
            //Get ctx from string
            var ctx = chart.chart.ctx;

            //Get options from the center object in options
            var centerConfig = chart.config.options.elements.center;
            var fontStyle = centerConfig.fontStyle || 'Arial';
            var txt = centerConfig.text;
            var color = centerConfig.color || '#000';
            var sidePadding = centerConfig.sidePadding || 20;
            var sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2)
            //Start with a base font of 30px
            ctx.font = "30px " + fontStyle;

            //Get the width of the string and also the width of the element minus 10 to give it 5px side padding
            var stringWidth = ctx.measureText(txt).width;
            var elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;

            // Find out how much the font can grow in width.
            var widthRatio = elementWidth / stringWidth;
            var newFontSize = Math.floor(30 * widthRatio);
            var elementHeight = (chart.innerRadius * 2);

            // Pick a new font size so it will not be larger than the height of label.
            var fontSizeToUse = Math.min(newFontSize, elementHeight);

            //Set font settings to draw it correctly.
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            var centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
            var centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
            ctx.font = fontSizeToUse + "px " + fontStyle;
            ctx.fillStyle = color;

            //Draw text in center
            ctx.fillText(txt, centerX, centerY);
        }
    }
});

// Chart.defaults.scale.ticks.beginAtZero = true;

let data
data =
    {
        type: 'doughnut',
        data:
        {
            labels: ['1', '2'],
            datasets: [
                {
                    label: 'Points',
                    backgroundColor: [],
                    data: []
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
            },
            elements: {
                center: {
                    text: '',
                    color: '', // Default is #000000
                    fontStyle: 'Arial', // Default is Arial
                    sidePadding: 16 // Defualt is 20 (as a percentage)
                }
            }
        }
    }


data.data.datasets[0].backgroundColor = color
data.data.datasets[0].data = datas
data.options.elements.center.text = datas[0] + '%'
data.options.elements.center.color = color[0]

DETAIL.style.display = "none";
// DETAIL.style.setProperty('padding-top', '10px');

var chart = new Chart(CHART, data)

function showLineChart1() {

    // context.clearRect(0, 0, CHART.width, CHART.height)

    color = ['#00edd5', '#3F3F3F'];
    datas = ['10', '90']
    data.data.datasets[0].backgroundColor = color
    data.data.datasets[0].data = datas
    data.options.elements.center.text = datas[0] + '%'
    data.options.elements.center.color = color[0]
    // CHART.style.display = "block";
    // CHART2.style.display = "none";

    DETAIL.style['display'] = "none";

    // .setAttribute("style", "background-color: red;");
    // DETAIL.setAttribute ('style') = "display:none;";

    // new Chart(CHART, data)
    chart.update()

}

function showLineChart2() {

    // context.clearRect(0, 0, CHART.width, CHART.height)

    color = ['#026afb', '#3F3F3F']
    datas = ['20', '80']
    data.data.datasets[0].backgroundColor = color
    data.data.datasets[0].data = datas
    data.options.elements.center.text = datas[0] + '%'
    data.options.elements.center.color = color[0]


    DETAIL.style.display = "none";

    chart.update()
    // new Chart(CHART, data)

}

function showLineChart3() {

    // context.clearRect(0, 0, CHART.width, CHART.height)

    color = ['#fe9003', '#3F3F3F']
    datas = [40, 60]
    data.data.datasets[0].backgroundColor = color
    data.data.datasets[0].data = datas
    data.options.elements.center.text = datas[0] + '%'
    data.options.elements.center.color = color[0]

    DETAIL.style.display = "none";

    chart.update()


}

function showLineChart4() {

    // context.clearRect(0, 0, CHART.width, CHART.height)

    color = ['#8c7acc', '#3F3F3F']
    datas = [80, 20]
    data.data.datasets[0].backgroundColor = color
    data.data.datasets[0].data = datas
    data.options.elements.center.text = datas[0] + '%'
    data.options.elements.center.color = color[0]

    DETAIL.style.display = "none";

    chart.update()


}



function enableDetail() {

    // DETAIL.style.setAttribute ('display') = "block";
    DETAIL.style = "display:block;grid-template-columns: 300px;display: grid;";

    let condition = datas[0]
    let a, b, c

    if (condition === '10') {
        a = 10
        b = 10
        c = 10
    }
    else if (condition === '20') {
        a = 20
        b = 20
        c = 20
    }
    else if (condition === '40') {
        a = 40
        b = 40
        c = 40
    }
    else {
        a = 80
        b = 80
        c = 80
    }

    // style="height:24px;width:30%"
    document.getElementById("b1").setAttribute('style', 'height:24px;width:' + a + '%;')
    document.getElementById("b2").setAttribute('style', 'height:24px;width:' + b + '%;')
    document.getElementById("b3").setAttribute('style', 'height:24px;width:' + c + '%;')

    document.getElementById("b1").innerText = a + '%'
    document.getElementById("b2").innerText = b + '%'
    document.getElementById("b3").innerText = c + '%'
}
