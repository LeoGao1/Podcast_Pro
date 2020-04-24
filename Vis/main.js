Highcharts.chart('c2', {
    chart: {
        backgroundColor: 'white',
        events: {
            load: function () {


                // Draw the flow chart
                var ren = this.renderer,
                    colors = Highcharts.getOptions().colors,
                    rightArrow = ['M', 0, 0, 'L', 100, 0, 'L', 95, 5, 'M', 100, 0, 'L', 95, -5],
                    leftArrow = ['M', 100, 0, 'L', 0, 0, 'L', 5, 5, 'M', 0, 0, 'L', 5, -5],
                    downArrow = ['M', 0, 0, 'L', 0, 100, 'L', 5, 95, 'M', 0, 100, 'L', -5, 95],
                    x1 = 300,
                    x2 = 600,
                    x3 = 900,
                    x1_1 = 60,
                    x2_1 = 360,
                    x3_1 = 660;




                // Separator, client from service
                ren.path(['M', x1, 40, 'L', x1, 330])
                    .attr({
                        'stroke-width': 2,
                        stroke: 'silver',
                        dashstyle: 'dash'
                    })
                    .add();

                // Separator, CLI from service
                ren.path(['M', x2, 40, 'L', x2, 330])
                    .attr({
                        'stroke-width': 2,
                        stroke: 'silver',
                        dashstyle: 'dash'
                    })
                    .add();





                // Headers
                ren.label('Amazon Web Service (AWS)', 10, 40)
                    .css({
                        fontWeight: 'bold',
                        fontSize: '20px'

                    })
                    .add();
                ren.label('Local', x1+100, 40)
                    .css({
                        fontWeight: 'bold',
                        fontSize: '20px'
                    })
                    .add();
                ren.label('Podcast website', x2+60, 40)
                    .css({
                        fontWeight: 'bold',
                        fontSize: '20px'
                    })
                    .add();

                // SaaS client label
                ren.label('Amazon S3 bucket', x1_1, 82)
                    .attr({
                        fill: colors[0],
                        stroke: 'white',
                        'stroke-width': 2,
                        padding: 5,
                        r: 5
                    })
                    .css({
                        color: 'white',
                        fontSize: '15px'
                    })
                    .add()
                    .shadow(true);

                    // Arrow from Browser to Batik
                    ren.path(downArrow)
                        .attr({
                            'stroke-width': 2,
                            stroke: colors[1]
                        })
                        .translate(120, 115)
                        .add();

                    ren.label('Create <br/>transcribe job', 130, 140)
                        .css({
                            color: colors[1],
                            fontSize: '15px'
                        })
                        .add();

                // Arrow from SaaS client to Phantom JS
                ren.path(leftArrow)
                    .attr({
                        'stroke-width': 2,
                        stroke: colors[3]
                    })
                    .translate(250, 95)
                    .add();

                ren.label('upload', 275, 70)
                    .css({
                        fontSize: '15px',
                        color: colors[3]
                    })
                    .add();

                ren.label('Lecture audio', x2_1, 82)
                    .attr({
                        r: 5,
                        fill: colors[1]
                    })
                    .css({
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize:'15px'
                    })
                    .add();



                ren.label('Transcript', x2_1, 220)
                    .attr({
                        r: 5,
                        width: 100,
                        fill: colors[1]
                    })
                    .css({
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize:'15px'
                    })
                    .add();



                // Browser label
                ren.label('Amazon Transcribe', x1_1, 220)
                    .attr({
                        fill: colors[0],
                        stroke: 'white',
                        'stroke-width': 2,
                        padding: 5,
                        r: 5
                    })
                    .css({
                        color: 'white',
                        fontSize:'15px'
                    })
                    .add()
                    .shadow(true);


                // Arrow from Browser to Batik
                ren.path(rightArrow)
                    .attr({
                        'stroke-width': 2,
                        stroke: colors[1]
                    })
                    .translate(250, 235)
                    .add();

                ren.label('get response', 250, 210)
                    .css({
                        color: colors[1],
                        fontSize: '15px'
                    })
                    .add();


                // Script label
                ren.label('UCSD Podcast', x3_1, 82)
                    .attr({
                        fill: colors[2],
                        stroke: 'white',
                        'stroke-width': 2,
                        padding: 5,
                        r: 5
                    })
                    .css({
                        color: 'white',
                        fontSize:'15px'

                    })
                    .add()
                    .shadow(true);

                // Arrow from Script to PhantomJS
                ren.path(leftArrow)
                    .attr({
                        'stroke-width': 2,
                        stroke: colors[2]
                    })
                    .translate(520, 100)
                    .add();

                ren.label('download', 540, 75)
                    .css({
                        color: colors[2],
                        fontSize: '15px'
                    })
                    .add();




            }
        }
    },
    title: {
        text: 'The process of getting the transcript',
        style: {
            color: 'black',
            fontSize:'20px'
        }
    }

});
Highcharts.chart('c3', {
    chart: {
        backgroundColor: 'white',
        events: {
            load: function () {


                // Draw the flow chart
                var ren = this.renderer,
                    colors = Highcharts.getOptions().colors,
                    rightArrow = ['M', 0, 0, 'L', 100, 0, 'L', 95, 5, 'M', 100, 0, 'L', 95, -5],
                    leftArrow = ['M', 100, 0, 'L', 0, 0, 'L', 5, 5, 'M', 0, 0, 'L', 5, -5],
                    downArrow = ['M', 0, 0, 'L', 0, 100, 'L', 5, 95, 'M', 0, 100, 'L', -5, 95],
                    x1 = 300,
                    x2 = 600,
                    x3 = 900,
                    x1_1 = 60,
                    x2_1 = 360,
                    x3_1 = 660;




                // Separator, client from service
                ren.path(['M', x1, 40, 'L', x1, 380])
                    .attr({
                        'stroke-width': 2,
                        stroke: 'silver',
                        dashstyle: 'dash'
                    })
                    .add();

                // Separator, CLI from service
                ren.path(['M', x2, 40, 'L', x2, 380])
                    .attr({
                        'stroke-width': 2,
                        stroke: 'silver',
                        dashstyle: 'dash'
                    })
                    .add();


                // Headers
                ren.label('Amazon Web Service (AWS)', 10, 40)
                    .css({
                        fontWeight: 'bold',
                        fontSize: '20px'

                    })
                    .add();
                ren.label('Local', x1+100, 40)
                    .css({
                        fontWeight: 'bold',
                        fontSize: '20px'
                    })
                    .add();
                ren.label('Podcast website', x2+60, 40)
                    .css({
                        fontWeight: 'bold',
                        fontSize: '20px'
                    })
                    .add();

                // SaaS client label
                ren.label('Amazon S3 bucket', x1_1, 220)
                    .attr({
                        fill: colors[0],
                        stroke: 'white',
                        'stroke-width': 2,
                        padding: 5,
                        r: 5
                    })
                    .css({
                        color: 'white',
                        fontSize: '15px'
                    })
                    .add()
                    .shadow(true);

                // Arrow from Browser to Batik
                ren.path(downArrow)
                    .attr({
                        'stroke-width': 2,
                        stroke: colors[1]
                    })
                    .translate(x1_1+70, 255)
                    .add();

                ren.label('Create AWS <br/>text_in_image job',x1_1+75, 265)
                    .css({
                        color: colors[1],
                        fontSize: '15px'
                    })
                    .add();

                // Arrow from Browser to Batik
                ren.path(downArrow)
                    .attr({
                        'stroke-width': 2,
                        stroke: colors[1]
                    })
                    .translate(x2_1+50, 115)
                    .add();

                ren.label('Create Screenshots <br/>per minites,compare and<br/> group them, find one<br/>screenshot per group',x2_1+60, 120)
                    .css({
                        color: colors[1],
                        fontSize: '15px'
                    })
                    .add();

                // Arrow from SaaS client to Phantom JS
                ren.path(leftArrow)
                    .attr({
                        'stroke-width': 2,
                        stroke: colors[3]
                    })
                    .translate(250, 230)
                    .add();

                ren.label('upload', 275, 210)
                    .css({
                        fontSize: '15px',
                        color: colors[3]
                    })
                    .add();

                ren.label('Lecture vedio', x2_1, 82)
                    .attr({
                        r: 5,
                        fill: colors[1]
                    })
                    .css({
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize:'15px'
                    })
                    .add();



                ren.label('Selected Screenshots ', x2_1, 220)
                    .attr({
                        r: 5,
                        fill: colors[1]
                    })
                    .css({
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize:'15px'
                    })
                    .add();
                ren.label('Text in image', x2_1, 360)
                    .attr({
                        r: 5,
                        fill: colors[1]
                    })
                    .css({
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize:'15px'
                    })
                    .add();



                // Browser label
                ren.label('Amazon Recognition', x1_1, 360)
                    .attr({
                        fill: colors[0],
                        stroke: 'white',
                        'stroke-width': 2,
                        padding: 5,
                        r: 5
                    })
                    .css({
                        color: 'white',
                        fontSize:'15px'
                    })
                    .add()
                    .shadow(true);


                // Arrow from Browser to Batik
                ren.path(rightArrow)
                    .attr({
                        'stroke-width': 2,
                        stroke: colors[1]
                    })
                    .translate(250, 375)
                    .add();

                ren.label('get response', 250, 350)
                    .css({
                        color: colors[1],
                        fontSize: '15px'
                    })
                    .add();


                // Script label
                ren.label('UCSD Podcast', x3_1, 82)
                    .attr({
                        fill: colors[2],
                        stroke: 'white',
                        'stroke-width': 2,
                        padding: 5,
                        r: 5
                    })
                    .css({
                        color: 'white',
                        fontSize:'15px'

                    })
                    .add()
                    .shadow(true);

                // Arrow from Script to PhantomJS
                ren.path(leftArrow)
                    .attr({
                        'stroke-width': 2,
                        stroke: colors[2]
                    })
                    .translate(520, 100)
                    .add();

                ren.label('download', 540, 75)
                    .css({
                        color: colors[2],
                        fontSize: '15px'
                    })
                    .add();

            }
        }
    },
    title: {
        text: 'The process of getting the text_in_image',
        style: {
            color: 'black',
            fontSize:'20px'
        }
    }

});
Highcharts.addEvent(
    Highcharts.Series,
    'afterSetOptions',
    function (e) {
        var colors = Highcharts.getOptions().colors,
            i = 0,
            nodes = {};

        if (
            this instanceof Highcharts.seriesTypes.networkgraph &&
            e.options.id === 'lang-tree'
        ) {
            e.options.data.forEach(function (link) {

                if (link[0] === 'NLP') {
                    nodes['Final Result'] = {
                        id: 'Final Result',
                        marker: {
                            radius: 20

                        },
                        color: colors[i++]
                    };
                    nodes['NLP'] = {
                        id: 'NLP',
                        marker: {
                            radius: 20
                        },
                        color: colors[i++]
                    };
                    nodes['Data'] = {
                        id: 'Data',
                        marker: {
                            radius: 20
                        },
                        color: colors[i++]
                    };
                    nodes['UCSD Podcast Website'] = {
                        id: 'UCSD Podcast Website',
                        marker: {
                            radius: 20
                        },
                        color: colors[i++]
                    };

                }
            });

            e.options.nodes = Object.keys(nodes).map(function (id) {
                return nodes[id];
            });
        }
    }
);
Highcharts.chart('c1', {
    chart: {
        type: 'networkgraph',
        height: '50%'
    },
    title: {
        text: 'How the project works'
    },
    subtitle: {
        text: 'A Network Graph of Podcast Pro'
    },
    plotOptions: {
        networkgraph: {
            keys: ['from', 'to'],
            layoutAlgorithm: {
                enableSimulation: true,
                friction: -0.9
            }
        }
    },
    series: [{
        dataLabels: {
            enabled: true,
            linkFormat: ''
        },
        id: 'lang-tree',
        data: [
            ['NLP', 'Final Result'],
            ['Data', 'NLP'],
            ['TF-IDF', 'NLP'],
            ['Transcript', 'Data'],
            ['Text in Image', 'Data'],
            ['Amazon Rekognition', 'Text in Image'],
            ['Screenshot', 'Text in Image'],
            ['Lecture video', 'Screenshot'],
            ['Compare screenshots and divided them into different groups', 'Screenshot'],
            ['UCSD Podcast Website', 'Lecture video'],
            ['UCSD Podcast Website', 'Lecture audio'],
            ['Lecture audio', 'Transcript'],
            ['Amazon Transcribe', 'Transcript'],
            ['Regex Pattern', 'NLP'],
            ['Final Result', 'key sentences' ]

        ]
    }]
});
