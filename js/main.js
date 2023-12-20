let Bar = document.getElementById('bar-1');
let Bar2 = document.getElementById('bar-2');
let Line = document.getElementById('line-1');
let Line2 = document.getElementById('line-2');
let Pie = document.getElementById('pie-101');
let Pie2 = document.getElementById('pie-102');
let Pie3 = document.getElementById('pie-103');
let Pie4 = document.getElementById('pie-104');
let Pie5 = document.getElementById('pie-105');
let TPie = document.getElementById('tpie-101');
let TPie2 = document.getElementById('tpie-102');
let TPie3 = document.getElementById('tpie-103');
let TPie4 = document.getElementById('tpie-104');
let TPie5 = document.getElementById('tpie-105');

d3.csv("assets/101-105_Taiwan_University.csv").then(function(data) {

    // parse data 學年度 101-105
    let data101 = [];
    let data102 = [];
    let data103 = [];
    let data104 = [];
    let data105 = [];
    // 當年 (私立,一般大學) , (公立,一般大學), (私立,技專校院), (公立,技專校院)  日間學制學生數,日間專任教師
    // 上述四項加總後的數值，存在對應年份的陣列中
    // idx 1:私立,一般大學, idx 2:公立,一般大學, idx 3:私立,技專校院, idx 4:公立,技專校院
    let sum_101_stu = [0, 0, 0, 0];
    let sum_101_tea = [0, 0, 0, 0];
    let sum_102_stu = [0, 0, 0, 0];
    let sum_102_tea = [0, 0, 0, 0];
    let sum_103_stu = [0, 0, 0, 0];
    let sum_103_tea = [0, 0, 0, 0];
    let sum_104_stu = [0, 0, 0, 0];
    let sum_104_tea = [0, 0, 0, 0];
    let sum_105_stu = [0, 0, 0, 0];
    let sum_105_tea = [0, 0, 0, 0];


    for (let i = 0; i < data.length; i++) {
        if(data[i].學年度 == 101) {
            if(data[i].設立別 == "私立" && data[i].學校類別 == "一般大學") {
                sum_101_stu[0] += parseInt(data[i].日間學制學生數);
                sum_101_tea[0] += parseInt(data[i].日間專任教師);
            }
            else if(data[i].設立別 == "公立" && data[i].學校類別 == "一般大學") {
                sum_101_stu[1] += parseInt(data[i].日間學制學生數);
                sum_101_tea[1] += parseInt(data[i].日間專任教師);
            }
            else if(data[i].設立別 == "私立" && data[i].學校類別 == "技專校院") {
                sum_101_stu[2] += parseInt(data[i].日間學制學生數);
                sum_101_tea[2] += parseInt(data[i].日間專任教師);
            }
            else if(data[i].設立別 == "公立" && data[i].學校類別 == "技專校院") {
                sum_101_stu[3] += parseInt(data[i].日間學制學生數);
                sum_101_tea[3] += parseInt(data[i].日間專任教師);
            }
        }
        else if(data[i].學年度 == 102) {
            if(data[i].設立別 == "私立" && data[i].學校類別 == "一般大學") {
                sum_102_stu[0] += parseInt(data[i].日間學制學生數);
                sum_102_tea[0] += parseInt(data[i].日間專任教師);
            }
            else if(data[i].設立別 == "公立" && data[i].學校類別 == "一般大學") {
                sum_102_stu[1] += parseInt(data[i].日間學制學生數);
                sum_102_tea[1] += parseInt(data[i].日間專任教師);
            }
            else if(data[i].設立別 == "私立" && data[i].學校類別 == "技專校院") {
                sum_102_stu[2] += parseInt(data[i].日間學制學生數);
                sum_102_tea[2] += parseInt(data[i].日間專任教師);
            }
            else if(data[i].設立別 == "公立" && data[i].學校類別 == "技專校院") {
                sum_102_stu[3] += parseInt(data[i].日間學制學生數);
                sum_102_tea[3] += parseInt(data[i].日間專任教師);
            }
        }
        else if(data[i].學年度 == 103) {
            if(data[i].設立別 == "私立" && data[i].學校類別 == "一般大學") {
                sum_103_stu[0] += parseInt(data[i].日間學制學生數);
                sum_103_tea[0] += parseInt(data[i].日間專任教師);
            }
            else if(data[i].設立別 == "公立" && data[i].學校類別 == "一般大學") {
                sum_103_stu[1] += parseInt(data[i].日間學制學生數);
                sum_103_tea[1] += parseInt(data[i].日間專任教師);
            }
            else if(data[i].設立別 == "私立" && data[i].學校類別 == "技專校院") {
                sum_103_stu[2] += parseInt(data[i].日間學制學生數);
                sum_103_tea[2] += parseInt(data[i].日間專任教師);
            }
            else if(data[i].設立別 == "公立" && data[i].學校類別 == "技專校院") {
                sum_103_stu[3] += parseInt(data[i].日間學制學生數);
                sum_103_tea[3] += parseInt(data[i].日間專任教師);
            }
        }
        else if(data[i].學年度 == 104) {
            if(data[i].設立別 == "私立" && data[i].學校類別 == "一般大學") {
                sum_104_stu[0] += parseInt(data[i].日間學制學生數);
                sum_104_tea[0] += parseInt(data[i].日間專任教師);
            }
            else if(data[i].設立別 == "公立" && data[i].學校類別 == "一般大學") {
                sum_104_stu[1] += parseInt(data[i].日間學制學生數);
                sum_104_tea[1] += parseInt(data[i].日間專任教師);
            }
            else if(data[i].設立別 == "私立" && data[i].學校類別 == "技專校院") {
                sum_104_stu[2] += parseInt(data[i].日間學制學生數);
                sum_104_tea[2] += parseInt(data[i].日間專任教師);
            }
            else if(data[i].設立別 == "公立" && data[i].學校類別 == "技專校院") {
                sum_104_stu[3] += parseInt(data[i].日間學制學生數);
                sum_104_tea[3] += parseInt(data[i].日間專任教師);
            }
        }
        else if(data[i].學年度 == 105) {
            if(data[i].設立別 == "私立" && data[i].學校類別 == "一般大學") {
                sum_105_stu[0] += parseInt(data[i].日間學制學生數);
                sum_105_tea[0] += parseInt(data[i].日間專任教師);
            }
            else if(data[i].設立別 == "公立" && data[i].學校類別 == "一般大學") {
                sum_105_stu[1] += parseInt(data[i].日間學制學生數);
                sum_105_tea[1] += parseInt(data[i].日間專任教師);
            }
            else if(data[i].設立別 == "私立" && data[i].學校類別 == "技專校院") {
                sum_105_stu[2] += parseInt(data[i].日間學制學生數);
                sum_105_tea[2] += parseInt(data[i].日間專任教師);
            }
            else if(data[i].設立別 == "公立" && data[i].學校類別 == "技專校院") {
                sum_105_stu[3] += parseInt(data[i].日間學制學生數);
                sum_105_tea[3] += parseInt(data[i].日間專任教師);
            }
        }
    }
    // Pie chart 101-105 student - use Plotly
    let pie_data101 = [{
        values: sum_101_stu,
        labels: ['私立,一般大學', '公立,一般大學', '私立,技專校院', '公立,技專校院'],
        type: 'pie',
        title: 'label+percent',
    }];
    let pie_data102 = [{
        values: sum_102_stu,
        labels: ['私立,一般大學', '公立,一般大學', '私立,技專校院', '公立,技專校院'],
        type: 'pie',
        title: 'label+percent',
    }];
    let pie_data103 = [{
        values: sum_103_stu,
        labels: ['私立,一般大學', '公立,一般大學', '私立,技專校院', '公立,技專校院'],
        type: 'pie',
        title: 'label+percent',
    }];
    let pie_data104 = [{
        values: sum_104_stu,
        labels: ['私立,一般大學', '公立,一般大學', '私立,技專校院', '公立,技專校院'],
        type: 'pie',
        title: 'label+percent',
    }];
    let pie_data105 = [{
        values: sum_105_stu,
        labels: ['私立,一般大學', '公立,一般大學', '私立,技專校院', '公立,技專校院'],
        type: 'pie',
        title: 'label+percent',
    }];
    let pie_layout101 = {
        title: '101年學生人數比例',
        height: 400,
        width: 400
    };
    let pie_layout102 = {
        title: '102年學生人數比例',
        height: 400,
        width: 400
    };
    let pie_layout103 = {
        title: '103年學生人數比例',
        height: 400,
        width: 400
    };
    let pie_layout104 = {
        title: '104年學生人數比例',
        height: 400,
        width: 400
    };
    let pie_layout105 = {
        title: '105年學生人數比例',
        height: 400,
        width: 400
    };
    Plotly.newPlot(Pie, pie_data101, pie_layout101);
    Plotly.newPlot(Pie2, pie_data102, pie_layout102);
    Plotly.newPlot(Pie3, pie_data103, pie_layout103);
    Plotly.newPlot(Pie4, pie_data104, pie_layout104);
    Plotly.newPlot(Pie5, pie_data105, pie_layout105);

    // Pie chart 101-105 teacher - use Plotly
    let tpie_data101 = [{
        values: sum_101_tea,
        labels: ['私立,一般大學', '公立,一般大學', '私立,技專校院', '公立,技專校院'],
        type: 'pie',
        title: 'label+percent',
    }];
    let tpie_data102 = [{
        values: sum_102_tea,
        labels: ['私立,一般大學', '公立,一般大學', '私立,技專校院', '公立,技專校院'],
        type: 'pie',
        title: 'label+percent',
    }];
    let tpie_data103 = [{
        values: sum_103_tea,
        labels: ['私立,一般大學', '公立,一般大學', '私立,技專校院', '公立,技專校院'],
        type: 'pie',
        title: 'label+percent',
    }];
    let tpie_data104 = [{
        values: sum_104_tea,
        labels: ['私立,一般大學', '公立,一般大學', '私立,技專校院', '公立,技專校院'],
        type: 'pie',
        title: 'label+percent',
    }];
    let tpie_data105 = [{
        values: sum_105_tea,
        labels: ['私立,一般大學', '公立,一般大學', '私立,技專校院', '公立,技專校院'],
        type: 'pie',
        title: 'label+percent',
    }];
    let tpie_layout101 = {
        title: '101年教師人數比例',
        height: 400,
        width: 400
    };
    let tpie_layout102 = {
        title: '102年教師人數比例',
        height: 400,
        width: 400
    };
    let tpie_layout103 = {
        title: '103年教師人數比例',
        height: 400,
        width: 400
    };
    let tpie_layout104 = {
        title: '104年教師人數比例',
        height: 400,
        width: 400
    };
    let tpie_layout105 = {
        title: '105年教師人數比例',
        height: 400,
        width: 400
    };
    Plotly.newPlot(TPie, tpie_data101, tpie_layout101);
    Plotly.newPlot(TPie2, tpie_data102, tpie_layout102);
    Plotly.newPlot(TPie3, tpie_data103, tpie_layout103);
    Plotly.newPlot(TPie4, tpie_data104, tpie_layout104);
    Plotly.newPlot(TPie5, tpie_data105, tpie_layout105);


    // four lines in one chart, 1st is 私立,一般大學, 2nd is 公立,一般大學, 3rd is 私立,技專校院, 4th is 公立,技專校院
    x = ['101', '102', '103', '104', '105'];
    y_1 = [sum_101_stu[0], sum_102_stu[0], sum_103_stu[0], sum_104_stu[0], sum_105_stu[0]];
    y_2 = [sum_101_stu[1], sum_102_stu[1], sum_103_stu[1], sum_104_stu[1], sum_105_stu[1]];
    y_3 = [sum_101_stu[2], sum_102_stu[2], sum_103_stu[2], sum_104_stu[2], sum_105_stu[2]];
    y_4 = [sum_101_stu[3], sum_102_stu[3], sum_103_stu[3], sum_104_stu[3], sum_105_stu[3]];
    
    let line_data = [
        {
            x: x,
            y: y_1,
            type: 'scatter',
            name: '私立,一般大學'
        },
        {
            x: x,
            y: y_2,
            type: 'scatter',
            name: '公立,一般大學'
        },
        {
            x: x,
            y: y_3,
            type: 'scatter',
            name: '私立,技專校院'
        },
        {
            x: x,
            y: y_4,
            type: 'scatter',
            name: '公立,技專校院'
        }
    ];
    
    let line_layout = {
        title: '學生人數變化',
        height: 400,
        width: 800
    };

    Plotly.newPlot(Line, line_data, line_layout);
    
    // teacher
    x = ['101', '102', '103', '104', '105'];
    ytl_1 = [sum_101_tea[0], sum_102_tea[0], sum_103_tea[0], sum_104_tea[0], sum_105_tea[0]];
    ytl_2 = [sum_101_tea[1], sum_102_tea[1], sum_103_tea[1], sum_104_tea[1], sum_105_tea[1]];
    ytl_3 = [sum_101_tea[2], sum_102_tea[2], sum_103_tea[2], sum_104_tea[2], sum_105_tea[2]];
    ytl_4 = [sum_101_tea[3], sum_102_tea[3], sum_103_tea[3], sum_104_tea[3], sum_105_tea[3]];

    let line_data2 = [
        {
            x: x,
            y: ytl_1,
            type: 'scatter',
            name: '私立,一般大學'
        },
        {
            x: x,
            y: ytl_2,
            type: 'scatter',
            name: '公立,一般大學'
        },
        {
            x: x,
            y: ytl_3,
            type: 'scatter',
            name: '私立,技專校院'
        },
        {
            x: x,
            y: ytl_4,
            type: 'scatter',
            name: '公立,技專校院'
        }
    ]
    let line_layout2 = {
        title: '專任教師人數變化',
        height: 400,
        width: 800
    };
    Plotly.newPlot(Line2, line_data2, line_layout2);

    // bar chart x: 101-105, y: 日間專任教師
    // bar chart x: 101-105, y: 日間學制學生數
    x = ['101', '102', '103', '104', '105'];
    yt_1 = [sum_101_tea[0], sum_102_tea[0], sum_103_tea[0], sum_104_tea[0], sum_105_tea[0]];
    yt_2 = [sum_101_tea[1], sum_102_tea[1], sum_103_tea[1], sum_104_tea[1], sum_105_tea[1]];
    yt_3 = [sum_101_tea[2], sum_102_tea[2], sum_103_tea[2], sum_104_tea[2], sum_105_tea[2]];
    yt_4 = [sum_101_tea[3], sum_102_tea[3], sum_103_tea[3], sum_104_tea[3], sum_105_tea[3]];
    ys_1 = [sum_101_stu[0], sum_102_stu[0], sum_103_stu[0], sum_104_stu[0], sum_105_stu[0]];
    ys_2 = [sum_101_stu[1], sum_102_stu[1], sum_103_stu[1], sum_104_stu[1], sum_105_stu[1]];
    ys_3 = [sum_101_stu[2], sum_102_stu[2], sum_103_stu[2], sum_104_stu[2], sum_105_stu[2]];
    ys_4 = [sum_101_stu[3], sum_102_stu[3], sum_103_stu[3], sum_104_stu[3], sum_105_stu[3]];

    let bar_data = [
        {
            x: x,
            y: yt_1,
            type: 'bar',
            name: '私立,一般大學'
        },
        {
            x: x,
            y: yt_2,
            type: 'bar',
            name: '公立,一般大學'
        },
        {
            x: x,
            y: yt_3,
            type: 'bar',
            name: '私立,技專校院'
        },
        {
            x: x,
            y: yt_4,
            type: 'bar',
            name: '公立,技專校院'
        }
    ];
    let bar_layout = {
        title: '專任教師人數變化',
        height: 400,
        width: 800
    };
    Plotly.newPlot(Bar, bar_data, bar_layout);
    let bar_data2 = [
        {
            x: x,
            y: ys_1,
            type: 'bar',
            name: '私立,一般大學'
        },
        {
            x: x,
            y: ys_2,
            type: 'bar',
            name: '公立,一般大學'
        },
        {
            x: x,
            y: ys_3,
            type: 'bar',
            name: '私立,技專校院'
        },
        {
            x: x,
            y: ys_4,
            type: 'bar',
            name: '公立,技專校院'
        }
    ];
    let bar_layout2 = {
        title: '學生人數變化',
        height: 400,
        width: 800
    };
    Plotly.newPlot(Bar2, bar_data2, bar_layout2);
});