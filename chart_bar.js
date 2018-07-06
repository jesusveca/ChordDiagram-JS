onReady('#chart', function() {
    var chart = c3.generate({
        data: {
            columns: [
                ['2014', 30,20,10,5,3,10,20,31,1,3,1,2],
                ['2015', 30,10,5,3,8,13,14,6,1,7,18,1],
                ['2016', 10,10,5,8,13,18,22,4,6,3,4,2],
            ],
            type : 'bar'
        },
        axis: {
            x: {
                type: 'category',
                categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep','Oct','Nov','Dec']
            }
        }
    });

});


function onReady(selector, callback) {
    var intervalID = window.setInterval(function() {
        if (document.querySelector(selector) !== undefined) {
            window.clearInterval(intervalID);
            callback.call(this);
        }
    }, 500);
}

var chart = c3.generate({
    bindto: '#chart1',
    data: {
        columns: [
            ['2014', 30, 200, 100, 400, 150, 250, 50, 100, 250,10,20,30],
            ['2015', 50, 100, 300, 100, 250, 50, 25, 10, 25,100,200,30],
            ['2016', 100,20,340,49,120,60,100,80,90,400,100,200]
        ]
    },
    axis: {
        x: {
            type: 'category',
            categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep','Oct','Nov','Dec']
        }
    }
});

var chart = c3.generate({
    bindto: '#chart2',
    data: {
        columns: [
            ['2014', 30, 200, 100, 400, 150, 250, 50, 100, 250,10,20,30],
            ['2015', 50, 100, 300, 100, 250, 50, 25, 10, 25,100,200,30],
            ['2016', 100,20,340,49,120,60,100,80,90,400,100,200]
        ]
    },
    axis: {
        x: {
            type: 'category',
            categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep','Oct','Nov','Dec']
        }
    }
});

var chart = c3.generate({
    bindto: '#chart3',
    data: {
        columns: [
            ['2014', 30, 200, 100, 400, 150, 250, 50, 100, 250,10,20,30],
            ['2015', 50, 100, 300, 100, 250, 50, 25, 10, 25,100,200,30],
            ['2016', 100,20,340,49,120,60,100,80,90,400,100,200]
        ]
    },
    axis: {
        x: {
            type: 'category',
            categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep','Oct','Nov','Dec']
        }
    }
});


var chart = c3.generate({
    bindto: '#chart4',
    data: {
        columns: [
            ['2014', 30, 200, 100, 400, 150, 250, 50, 100, 250,10,20,30],
            ['2015', 50, 100, 300, 100, 250, 50, 25, 10, 25,100,200,30],
            ['2016', 100,20,340,49,120,60,100,80,90,400,100,200]
        ]
    },
    axis: {
        x: {
            type: 'category',
            categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep','Oct','Nov','Dec']
        }
    }
});