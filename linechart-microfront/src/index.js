import * as echarts from "echarts";

var myChart = echarts.init(document.getElementById('linechart'));

myChart.setOption(
    {
        title: {
            text: 'ECharts Getting Started'
        },
        tooltip: {},
        legend: {
            data: ['sales']
        },
        xAxis: {
            data: ['Shirts', 'Cardigands', 'Chiffons', 'Pants', 'Heels', 'Socks']
        },
        yAxis: {},
        series: [
            {
                name: 'sales',
                type: 'line',
                data: [5, 20, 36, 18, 9, 15]
            }
        ]
    }
);
