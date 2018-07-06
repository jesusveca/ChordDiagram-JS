onReady('#chart', function() {
    chart = c3.generate({
        data: {
            columns: [
                // ['2014', 433, 210, 108, 301, 159, 251, 413, 101, 259,11,26,306],
                // ['2015', 458, 103, 304, 111, 251, 51, 355, 10, 25,100,241,391],
                // ['2016',  417,28,340,49,128,60,101,80,390,203,113,400]
                ['2016',175,108,5125,1287,94,738,4253,4870,1919,1529,1278,3751]
                // ['2016',0,0,0,0,0,0,0,0,0,0,0,0]
            ],
            type: 'line',
            colors: {
                2016: 'blue'
            },
            // axes: {
            //   2016: 'x'
            // }
        },
        axis: {
            x: {
                type: 'category',
                categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep','Oct','Nov','Dec'],
                label: {
                    text: 'MANHATTAN',
                    position: 'outer-center'
                }
            }
        },
        legend: {
            position: 'right',
            show: false,
        },
        onclick: function(e) { alert(e.value); }
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

chart1 = c3.generate({
    bindto: '#chart1',
    data: {
        columns: [
            // ['2014', 430, 158, 152, 145, 67, 332, 328, 174, 189, 284, 282, 352],
            // ['2015', 453, 52, 107, 387, 116, 132, 44, 18, 121, 57, 328, 373],
            // ['2016', 419, 124, 281, 76, 43, 35, 249, 167, 296, 109, 205, 342]
            // ['2016',12,222,1684,5749,359,99,3634,1033,3898,3501,1159,3169]
            ['2016',0,0,0,0,0,0,0,0,0,0,0,0]
        ],
        colors: {
            2016: 'red'
        },
    },
    axis: {
        x: {
            type: 'category',
            categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep','Oct','Nov','Dec'],
            label: {
                text: 'MANHATTAN',
                position: 'outer-center'
            }
        }
    },
    legend: {
        position: 'right',
        show: false,
    }
});

chart2 = c3.generate({
    bindto: '#chart2',
    data: {
        columns: [
            // ['2014', 477, 213, 374, 76, 236, 293, 400, 110, 300, 164, 159, 395],
            // ['2015', 460, 386, 165, 59, 328, 36, 380, 249, 106, 246, 235, 348],
            // ['2016', 476, 269, 94, 157, 305, 284, 383, 257, 14, 323, 397, 340]
            ['2016',210,67,3035,884,3968,5087,1015,4294,4364,1918,3838,796]
            // ['2016',0,0,0,0,0,0,0,0,0,0,0,0]
        ],
        colors: {
            2016:  '#f1c40f'
        },
    },
    axis: {
        x: {
            type: 'category',
            categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep','Oct','Nov','Dec'],
            label: {
                text: 'MANHATTAN',
                position: 'outer-center'
            }
        }
    },
    legend: {
        position: 'right',
        show: false,
    }
});

chart3 = c3.generate({
    bindto: '#chart3',
    data: {
        columns: [
            // ['2014', 494, 3, 207, 326, 382, 273, 361, 167, 12, 338, 108, 365],
            // ['2015', 474, 114, 115, 371, 271, 94, 73, 388, 245, 235, 215, 498],
            // ['2016', 405, 350, 67, 16, 157, 292, 397, 85, 163, 242, 246, 419]
            // ['2016',105,9,532,4805,1440,5742,6196,3949,4274,2888,2975,2996]
            ['2016',0,0,0,0,0,0,0,0,0,0,0,0]
        ],
        colors: {
            2016: '#6e2c00'
        },
    },
    axis: {
        x: {
            type: 'category',
            categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep','Oct','Nov','Dec'],
            label: {
                text: 'MANHATTAN',
                position: 'outer-center'
            }
        }
    },
    legend: {
        position: 'right',
        show: false,
    }
});


chart4 = c3.generate({
    bindto: '#chart4',
    data: {
        columns: [
            // ['2014', 408, 27, 349, 188, 367, 125, 263, 24, 326, 258, 183, 336],
            // ['2015', 413, 344, 218, 2, 205, 102, 311, 395, 364, 214, 297, 398],
            // ['2016', 475, 99, 326, 229, 168, 217, 360, 306, 337, 133, 152, 393]
            ['2016',152,117,2223,1141,3757,3116,1469,1422,1799,4947,413,3900]
            // ['2016',0,0,0,0,0,0,0,0,0,0,0,0]
        ]
    },
    axis: {
        x: {
            type: 'category',
            categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep','Oct','Nov','Dec'],
            label: {
                text: 'MANHATTAN',
                position: 'outer-center'
            }
        }
    },
    legend: {
        position: 'right',
        show: false,
    }
});



chart5 = c3.generate({
    bindto: '#chart5',
    data: {
        columns: [
            // ['2014', 408, 27, 349, 188, 367, 125, 263, 24, 326, 258, 183, 336],
            // ['2015', 413, 344, 218, 2, 205, 102, 311, 395, 364, 214, 297, 398],
            // ['2016', 475, 99, 326, 229, 168, 217, 360, 306, 337, 133, 152, 393]
            // ['2016',212,176,4899,2024,6521,1503,3955,3044,2088,3643,1448,1796]
            ['2016',0,0,0,0,0,0,0,0,0,0,0,0]
        ],
        colors: {
            2016:  '#2ecc71'
        },
    },
    axis: {
        x: {
            type: 'category',
            categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep','Oct','Nov','Dec'],
            label: {
                text: 'MANHATTAN',
                position: 'outer-center'
            }
        }
    },
    legend: {
        position: 'right',
        show: false,
    }
});


chart6 = c3.generate({
    bindto: '#chart6',
    data: {
        columns: [
            // ['2014', 408, 27, 349, 188, 367, 125, 263, 24, 326, 258, 183, 336],
            // ['2015', 413, 344, 218, 2, 205, 102, 311, 395, 364, 214, 297, 398],
            // ['2016',  417,28,340,49,128,60,101,80,390,203,113,400]
            // ['2016',228,125,1663,5346,841,4045,2230,1297,3933,186,3040,3731]
            ['2016',0,0,0,0,0,0,0,0,0,0,0,0]
        ],
        colors: {
            2016:  '#5f6a6a'
        },
    },
    axis: {
        x: {
            type: 'category',
            categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep','Oct','Nov','Dec'],
            label: {
                text: 'MANHATTAN',
                position: 'outer-center'
            }
        }
    },
    legend: {
        position: 'right',
        show: false,
    }
});















chart7 = c3.generate({
    bindto: '#chart7',
    data: {
        columns: [
            // ['2014', 430, 158, 152, 145, 67, 332, 328, 174, 189, 284, 282, 352],
            // ['2015', 453, 52, 107, 387, 116, 132, 44, 18, 121, 57, 328, 373],
            // ['2016', 419, 124, 281, 76, 43, 35, 249, 167, 296, 109, 205, 342]
            ['2016',26,195,392,6371,6146,6337,4082,5045,4350,4726,1138,4282]
            // ['2016',0,0,0,0,0,0,0,0,0,0,0,0]
        ],
        colors: {
            2016:  '#9a7d0a'
        },
    },
    axis: {
        x: {
            type: 'category',
            categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep','Oct','Nov','Dec'],
            label: {
                text: 'MANHATTAN',
                position: 'outer-center'
            }
        }
    },
    legend: {
        position: 'right',
        show: false,
    }
});

chart8 = c3.generate({
    bindto: '#chart8',
    data: {
        columns: [
            // ['2014', 477, 213, 374, 76, 236, 293, 400, 110, 300, 164, 159, 395],
            // ['2015', 460, 386, 165, 59, 328, 36, 380, 249, 106, 246, 235, 348],
            // ['2016', 476, 269, 94, 157, 305, 284, 383, 257, 14, 323, 397, 340]
            // ['2016',237,153,1040,1621,2986,4021,2977,2601,1172,789,1230,1643]
            ['2016',0,0,0,0,0,0,0,0,0,0,0,0]
        ],
        // colors: {
        //     2016:  '#9a7d0a'
        // },
    },
    axis: {
        x: {
            type: 'category',
            categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep','Oct','Nov','Dec'],
            label: {
                text: 'MANHATTAN',
                position: 'outer-center'
            }
        }
    },
    legend: {
        position: 'right',
        show: false,
    }
});

chart9 = c3.generate({
    bindto: '#chart9',
    data: {
        columns: [
            // ['2014', 494, 3, 207, 326, 382, 273, 361, 167, 12, 338, 108, 365],
            // ['2015', 474, 114, 115, 371, 271, 94, 73, 388, 245, 235, 215, 498],
            // ['2016', 405, 350, 67, 16, 157, 292, 397, 85, 163, 242, 246, 419]
            ['2016',109,149,5537,4562,4861,360,5645,1422,2438,2091,1954,1801]
            // ['2016',0,0,0,0,0,0,0,0,0,0,0,0]
        ],
        colors: {
            2016:  '#186a3b'
        },
    },
    axis: {
        x: {
            type: 'category',
            categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep','Oct','Nov','Dec'],
            label: {
                text: 'MANHATTAN',
                position: 'outer-center'
            }
        }
    },
    legend: {
        position: 'right',
        show: false,
    }
});


chart10 = c3.generate({
    bindto: '#chart10',
    data: {
        columns: [
            // ['2014', 408, 27, 349, 188, 367, 125, 263, 24, 326, 258, 183, 336],
            // ['2015', 413, 344, 218, 2, 205, 102, 311, 395, 364, 214, 297, 398],
            // ['2016', 475, 99, 326, 229, 168, 217, 360, 306, 337, 133, 152, 393]
            // ['2016',57,133,5586,6562,4254,1039,2039,4015,1920,1908,2497,4211]
            ['2016',0,0,0,0,0,0,0,0,0,0,0,0]
        ],
        colors: {
            2016:  '#9a7d0a'
        },
    },
    axis: {
        x: {
            type: 'category',
            categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep','Oct','Nov','Dec'],
            label: {
                text: 'MANHATTAN',
                position: 'outer-center'
            }
        }
    },
    legend: {
        position: 'right',
        show: false,
    }
});

chart11 = c3.generate({
    bindto: '#chart11',
    data: {
        columns: [
            // ['2014', 408, 27, 349, 188, 367, 125, 263, 24, 326, 258, 183, 336],
            // ['2015', 413, 344, 218, 2, 205, 102, 311, 395, 364, 214, 297, 398],
            // ['2016', 475, 99, 326, 229, 168, 217, 360, 306, 337, 133, 152, 393]
          ['2016',49,146,2761,4487,1459,3035,6019,1206,3165,4127,1131,423]
          // ['2016',0,0,0,0,0,0,0,0,0,0,0,0]
        ],
        colors: {
            2016:  '#b03a2e'
        },
    },
    axis: {
        x: {
            type: 'category',
            categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep','Oct','Nov','Dec'],
            label: {
                text: 'MANHATTAN',
                position: 'outer-center'
            }
        }
    },
    legend: {
        position: 'right',
        show: false,
    }
});
