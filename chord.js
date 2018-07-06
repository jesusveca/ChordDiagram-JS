list_data = [];

function rndColor() {
    var r = ('0' + Math.floor(Math.random() * 256).toString(16)).substr(-2), // red
        g = ('0' + Math.floor(Math.random() * 256).toString(16)).substr(-2), // green
        b = ('0' + Math.floor(Math.random() * 256).toString(16)).substr(-2); // blue
    return '#' + r + g + b;
}

d3.csv("_final_2016.csv", function(data) {
    var size_csv = data.length;
    for (var i=0; i<size_csv; i++){
        data_temporal = []
        condicion_more_than_10 = parseFloat(data[i].times);
        if (condicion_more_than_10>0){
            data_temporal.push(data[i].id_origin);
            data_temporal.push(data[i].id_destino);
            data_temporal.push(parseFloat(data[i].times));
            list_data.push(data_temporal);
        }
    }

    var colors = {};

    for (var i=0; i<list_data.length; i++){
        colors[list_data[i][0]] = rndColor();
    }


    function _eval(){
        // console.log('Hola prros@')
    };

    var sortOrder = [];
    for (var i=0; i<list_data.length; i++){
        sortOrder.push(list_data[i][1]);
    }

    function sort(a,b){ return d3.ascending(sortOrder.indexOf(b),sortOrder.indexOf(a)); }

    ch = viz.ch().data(list_data)
        .padding(.1)
        .sort(sort)
        .innerRadius(110)
        .outerRadius(125)
        .duration(1000)
        .chordOpacity(0.4)
        .labelPadding(.1)
        .fill(function(d){ return colors[d];});


    var tmp = ch.mouseover;
    ch.mouseover = function(t){
        tmp(t);// console.log(t.source);
        if (t.source == '101 Manhattan'){
          console.log(t.source);
          chart.load({columns: [  ['2016', 175,108,5125,1287,94,738,4253,4870,1919,1529,1278,3751],]}); chart.axis.labels({x: '101 MANHATTAN a 102 MANHATTAN'});
          chart1.load({columns: [  ['2016', 12,222,1684,5749,359,99,3634,1033,3898,3501,1159,3169],]}); chart1.axis.labels({x: '101 MANHATTAN a 103 MANHATTAN'});
          chart2.load({columns: [  ['2016', 210,67,3035,884,3968,5087,1015,4294,4364,1918,3838,796],]}); chart2.axis.labels({x: '101 MANHATTAN a 104 MANHATTAN'});
          chart3.load({columns: [  ['2016', 105,9,532,4805,1440,5742,6196,3949,4274,2888,2975,2996],]}); chart3.axis.labels({x: '101 MANHATTAN a 105 MANHATTAN'});
          chart4.load({columns: [  ['2016', 152,117,2223,1141,3757,3116,1469,1422,1799,4947,413,3900],]}); chart4.axis.labels({x: '101 MANHATTAN a 106 MANHATTAN'});
          chart5.load({columns: [  ['2016', 212,176,4899,2024,6521,1503,3955,3044,2088,3643,1448,1796],]}); chart5.axis.labels({x: '101 MANHATTAN a 107 MANHATTAN'});
          chart6.load({columns: [  ['2016', 228,125,1663,5346,841,4045,2230,1297,3933,186,3040,3731],]}); chart6.axis.labels({x: '101 MANHATTAN a 108 MANHATTAN'});
          chart7.load({columns: [  ['2016', 26,195,392,6371,6146,6337,4082,5045,4350,4726,1138,4282],]}); chart7.axis.labels({x: '101 MANHATTAN a 109 MANHATTAN'});
          chart8.load({columns: [  ['2016', 237,153,1040,1621,2986,4021,2977,2601,1172,789,1230,1643],]}); chart8.axis.labels({x: '101 MANHATTAN a 110 MANHATTAN'});
          chart9.load({columns: [  ['2016', 109,149,5537,4562,4861,360,5645,1422,2438,2091,1954,1801],]}); chart9.axis.labels({x: '101 MANHATTAN a 101 MANHATTAN'});
          chart10.load({columns: [  ['2016', 57,133,5586,6562,4254,1039,2039,4015,1920,1908,2497,4211],]}); chart10.axis.labels({x: '101 MANHATTAN a 112 MANHATTAN'});
          chart11.load({columns: [  ['2016', 49,146,2761,4487,1459,3035,6019,1206,3165,4127,1131,423],]}); chart11.axis.labels({x: '101 MANHATTAN a 164 MANHATTAN'});
        }

        if (t.source == '102 Manhattan'){
          console.log(t.source);

            chart.load({columns: [  ['2016',3028,148,5986,2736,5026,5143,4386,1380,3952,2595,3090,3591],]}); chart.axis.labels({x: '102 MANHATTAN a 101 MANHATTAN'});
            chart1.load({columns: [  ['2016',2610,230,2415,4073,6311,3283,1486,4654,1612,2730,823,222],]});  chart1.axis.labels({x: '102 MANHATTAN a 103 MANHATTAN'});
            chart2.load({columns: [  ['2016',89,115,2174,2938,2236,1632,1124,3428,4330,1741,679,779],]}); chart2.axis.labels({x: '102 MANHATTAN a 104 MANHATTAN'});
            chart3.load({columns: [  ['2016',3225,42,1314,4323,585,5998,711,4780,3236,2001,220,2429],]}); chart3.axis.labels({x: '102 MANHATTAN a 105 MANHATTAN'});
            chart4.load({columns: [  ['2016',213,5593,5664,4457,628,3968,2750,978,4018,2868,1975],]}); chart4.axis.labels({x: '102 MANHATTAN a 106 MANHATTAN'});
            chart5.load({columns: [  ['2016',2209,107,5138,1969,4269,6081,630,4401,3419,3773,3908,4349],]}); chart5.axis.labels({x: '102 MANHATTAN a 107 MANHATTAN'});
            chart6.load({columns: [  ['2016',6354,73,4127,2914,2958,2938,2067,1443,2349,4311,4318,3674],]}); chart6.axis.labels({x: '102 MANHATTAN a 108 MANHATTAN'});
            chart7.load({columns: [  ['2016',1271,7,1126,6297,6352,2077,3682,3443,4199,2318,913,2992],]}); chart7.axis.labels({x: '102 MANHATTAN a 109 MANHATTAN'});
            chart8.load({columns: [  ['2016',6715,38,4117,5624,5453,6009,92,3697,2730,2941,3546,745],]}); chart8.axis.labels({x: '102 MANHATTAN a 110 MANHATTAN'});
            chart9.load({columns: [  ['2016',4279,26,4097,21,1015,2850,5072,1448,620,294,121,375],]}); chart9.axis.labels({x: '102 MANHATTAN a 111 MANHATTAN'});
            chart10.load({columns: [  ['2016',1200,131,2531,4367,2062,1266,5818,1452,2757,2441,265,2164],]}); chart10.axis.labels({x: '102 MANHATTAN a 112 MANHATTAN'});
            chart11.load({columns: [  ['2016',5200,92,4659,6935,5546,3199,985,3724,1436,2446,193,1830],]}); chart11.axis.labels({x: '102 MANHATTAN a 164 MANHATTAN'});
        }

        if (t.source == '103 Manhattan'){
          console.log(t.source);
            chart.load({columns: [  ['2016',3242,67,4688,41,2508,5302,345,2757,1189,3095,3901,1940],]});  chart.axis.labels({x: '103 MANHATTAN a 101 MANHATTAN'});
            chart1.load({columns: [  ['2016',3129,48,6524,6214,5136,5577,42,681,2375,3058,1445,3625],]}); chart1.axis.labels({x: '103 MANHATTAN a 102 MANHATTAN'});
            chart2.load({columns: [  ['2016',5510,231,99,3062,6517,2787,4691,1325,4472,4661,2314,1977],]}); chart2.axis.labels({x: '103 MANHATTAN a 104 MANHATTAN'});
            chart3.load({columns: [  ['2016',2029,131,4063,688,3437,6197,2498,981,1374,1219,796,1491],]});  chart3.axis.labels({x: '103 MANHATTAN a 105 MANHATTAN'});
            chart4.load({columns: [  ['2016',6522,168,1012,2521,1403,3853,2443,2026,4340,2197,3602,1633],]}); chart4.axis.labels({x: '103 MANHATTAN a 106 MANHATTAN'});
            chart5.load({columns: [  ['2016',4447,233,3206,3278,6156,2544,211,2481,2562,175,4428,1520],]}); chart5.axis.labels({x: '103 MANHATTAN a 107 MANHATTAN'});
            chart6.load({columns: [  ['2016',3115,213,1768,4866,1565,3816,1908,2033,1598,903,3937,2327],]});  chart6.axis.labels({x: '103 MANHATTAN a 108 MANHATTAN'});
            chart7.load({columns: [  ['2016',1027,73,4132,6614,955,880,5275,1875,3038,1033,1111,974],]}); chart7.axis.labels({x: '103 MANHATTAN a 109 MANHATTAN'});
            chart8.load({columns: [  ['2016',2558,231,1238,553,6720,4348,5562,1601,2423,1384,4321,2989],]});  chart8.axis.labels({x: '103 MANHATTAN a 110 MANHATTAN'});
            chart9.load({columns: [  ['2016',1984,176,5397,4006,2153,2862,1960,2777,1589,3896,4274,1603],]}); chart9.axis.labels({x: '103 MANHATTAN a 111 MANHATTAN'});
            chart10.load({columns: [  ['2016',3643,156,5033,6493,6743,3768,1457,5177,3896,2115,3904,4077],]});  chart10.axis.labels({x: '103 MANHATTAN a 112 MANHATTAN'});
            chart11.load({columns: [  ['2016',801,160,6999,4683,5560,2986,318,802,3983,1770,1018,1869],]}); chart11.axis.labels({x: '103 MANHATTAN a 164 MANHATTAN'});

        }

        if (t.source == '104 Manhattan'){
          console.log(t.source);
            chart.load({columns: [  ['2016',650,80,5826,175,3505,1059,6003,2258,2253,2181,2054,3198],]});  chart.axis.labels({x: '104 MANHATTAN a 101 MANHATTAN'});
            chart1.load({columns: [  ['2016',1600,154,2179,2581,906,1887,2911,2577,1750,3401,322,1947],]});  chart1.axis.labels({x: '104 MANHATTAN a 102 MANHATTAN'});
            chart2.load({columns: [  ['2016',153,25,614,3003,4781,5023,5157,755,261,2028,1317,2448],]});  chart2.axis.labels({x: '104 MANHATTAN a 103 MANHATTAN'});
            chart3.load({columns: [  ['2016',2380,225,4435,4235,5956,6316,33,4360,4253,3747,2233,2706],]});  chart3.axis.labels({x: '104 MANHATTAN a 105 MANHATTAN'});
            chart4.load({columns: [  ['2016',222,62,911,4013,974,795,2388,4214,2034,3342,825,2775],]});  chart4.axis.labels({x: '104 MANHATTAN a 106 MANHATTAN'});
            chart5.load({columns: [  ['2016',81,197,3196,4583,768,2596,1911,4810,173,4651,2754,536],]});  chart5.axis.labels({x: '104 MANHATTAN a 107 MANHATTAN'});
            chart6.load({columns: [  ['2016',43,5,2333,4515,3195,4982,3322,4451,4370,4036,2914,2363],]});  chart6.axis.labels({x: '104 MANHATTAN a 108 MANHATTAN'});
            chart7.load({columns: [  ['2016',148,155,6243,607,2900,5726,2805,3030,213,3850,177,3838],]});  chart7.axis.labels({x: '104 MANHATTAN a 109 MANHATTAN'});
            chart8.load({columns: [  ['2016',276,172,5727,2173,4624,6300,2453,2434,2366,3694,1946,772],]});  chart8.axis.labels({x: '104 MANHATTAN a 110 MANHATTAN'});
            chart9.load({columns: [  ['2016',244,237,4735,2757,3498,5013,1827,1120,2987,1681,3097,3153],]});  chart9.axis.labels({x: '104 MANHATTAN a 111 MANHATTAN'});
            chart10.load({columns: [  ['2016',14,28,6371,5296,1604,4341,682,151,1302,2498,383,3421],]});  chart10.axis.labels({x: '104 MANHATTAN a 112 MANHATTAN'});
            chart11.load({columns: [  ['2016',76,103,4919,2794,603,2303,68,1148,1787,4004,1063,57],]});  chart11.axis.labels({x: '104 MANHATTAN a 164 MANHATTAN'});

        }

        if (t.source == '105 Manhattan'){
          console.log(t.source);
          chart.load({columns: [  ['2016',231,209,288,6539,2167,4930,4764,2525,1464,4770,1244,1885],]});  chart.axis.labels({x: '105 MANHATTAN a 101 MANHATTAN'});
          chart1.load({columns: [  ['2016',15,154,1826,171,4297,3579,474,527,2573,3747,977,1090],]});   chart1.axis.labels({x: '105 MANHATTAN a 102 MANHATTAN'});
          chart2.load({columns: [  ['2016',117,25,4877,6504,5149,2810,4275,187,2122,2492,4132,2908],]});  chart2.axis.labels({x: '105 MANHATTAN a 103 MANHATTAN'});
          chart3.load({columns: [  ['2016',255,145,8,3212,5820,2217,1387,3936,265,1488,1435,2558],]});  chart3.axis.labels({x: '105 MANHATTAN a 104 MANHATTAN'});
          chart4.load({columns: [  ['2016',182,207,5796,3616,1351,3990,1842,4141,2000,2933,4270,285],]});  chart4.axis.labels({x: '105 MANHATTAN a 106 MANHATTAN'});
          chart5.load({columns: [  ['2016',166,60,3388,6595,5276,5374,733,4778,3290,156,1678,4492],]});  chart5.axis.labels({x: '105 MANHATTAN a 107 MANHATTAN'});
          chart6.load({columns: [  ['2016',252,144,3439,3212,445,194,4908,525,2751,3143,4397,4295],]});  chart6.axis.labels({x: '105 MANHATTAN a 108 MANHATTAN'});
          chart7.load({columns: [  ['2016',277,223,6277,4259,2552,6117,1899,2369,4313,791,3781,3180],]});  chart7.axis.labels({x: '105 MANHATTAN a 109 MANHATTAN'});
          chart8.load({columns: [  ['2016',66,226,993,1432,5644,2338,3539,3511,1633,3401,3656,308],]});  chart8.axis.labels({x: '105 MANHATTAN a 110 MANHATTAN'});
          chart9.load({columns: [  ['2016',295,186,4818,422,334,1178,5402,1828,1576,644,268,4367],]});  chart9.axis.labels({x: '105 MANHATTAN a 111 MANHATTAN'});
          chart10.load({columns: [  ['2016',232,83,4582,1307,6157,5620,4505,1111,754,782,1913,3637],]});  chart10.axis.labels({x: '105 MANHATTAN a 112 MANHATTAN'});
          chart11.load({columns: [  ['2016',130,89,6265,4827,3908,1140,1915,3069,1696,2173,3505,3946],]});  chart11.axis.labels({x: '105 MANHATTAN a 164 MANHATTAN'});
        }

        if (t.source == '106 Manhattan'){
          console.log(t.source);
          chart.load({columns: [  ['2016',261,1,1312,4012,1048,3542,12,4478,2205,867,1797,3180],]});  chart.axis.labels({x: '106 MANHATTAN a 101 MANHATTAN'});
          chart1.load({columns: [  ['2016',184,54,2337,4749,5551,862,1874,453,3193,550,2224,3170],]});  chart1.axis.labels({x: '106 MANHATTAN a 102 MANHATTAN'});
          chart2.load({columns: [  ['2016',288,118,5166,6394,1045,3912,566,3866,2805,332,4139,724],]});  chart2.axis.labels({x: '106 MANHATTAN a 103 MANHATTAN'});
          chart3.load({columns: [  ['2016',95,178,4716,3996,882,1712,2957,291,170,1800,1789,2756],]});  chart3.axis.labels({x: '106 MANHATTAN a 104 MANHATTAN'});
          chart4.load({columns: [  ['2016',95,195,1748,4594,2644,1910,2876,4919,2180,995,11,3994],]});  chart4.axis.labels({x: '106 MANHATTAN a 105 MANHATTAN'});
          chart5.load({columns: [  ['2016',128,17,2101,4,5877,4569,5377,5255,3121,4592,77,4248],]});  chart5.axis.labels({x: '106 MANHATTAN a 107 MANHATTAN'});
          chart6.load({columns: [  ['2016',62,185,3457,237,3326,2631,3310,4013,1554,4347,2689,2606],]});  chart6.axis.labels({x: '106 MANHATTAN a 108 MANHATTAN'});
          chart7.load({columns: [  ['2016',108,222,1539,6286,644,2994,5846,3094,1781,1711,1172,3720],]});  chart7.axis.labels({x: '106 MANHATTAN a 109 MANHATTAN'});
          chart8.load({columns: [  ['2016',239,58,3914,1682,2517,6215,2077,4736,3001,4639,1002,1341],]});  chart8.axis.labels({x: '106 MANHATTAN a 110 MANHATTAN'});
          chart9.load({columns: [  ['2016',273,42,3427,3739,3790,482,4715,3307,2951,2868,2057,230],]});  chart9.axis.labels({x: '106 MANHATTAN a 111 MANHATTAN'});
          chart10.load({columns: [  ['2016',124,59,4468,5215,2111,4711,242,1292,1150,3974,1004,4166],]});  chart10.axis.labels({x: '106 MANHATTAN a 112 MANHATTAN'});
          chart11.load({columns: [  ['2016',88,60,3106,5806,4439,5488,3239,219,974,2790,3057,486],]});  chart11.axis.labels({x: '106 MANHATTAN a 164 MANHATTAN'});
        }

        if (t.source == '107 Manhattan'){
          console.log(t.source);
          chart.load({columns: [  ['2016',3918,929,557,3644,2792,6125,4227,903,1668,4741,3017,3731],]});  chart.axis.labels({x: '107 MANHATTAN a 101 MANHATTAN'});
          chart1.load({columns: [  ['2016',4766,980,3103,2157,2269,2167,2325,4941,965,1952,3297,176],]});  chart1.axis.labels({x: '107 MANHATTAN a 102 MANHATTAN'});
          chart2.load({columns: [  ['2016',3264,882,903,6086,3830,4559,6038,2482,3427,4501,3072,3818],]});  chart2.axis.labels({x: '107 MANHATTAN a 103 MANHATTAN'});
          chart3.load({columns: [  ['2016',6555,642,1952,2949,2024,1531,4101,457,1738,1117,198,1830],]});  chart3.axis.labels({x: '107 MANHATTAN a 104 MANHATTAN'});
          chart4.load({columns: [  ['2016',2791,186,2928,3817,4185,4201,1340,1874,1206,1510,1669,4359],]});  chart4.axis.labels({x: '107 MANHATTAN a 105 MANHATTAN'});
          chart5.load({columns: [  ['2016',5235,747,6392,2409,5758,2791,4925,1871,3275,3690,2313,2882],]});  chart5.axis.labels({x: '107 MANHATTAN a 106 MANHATTAN'});
          chart6.load({columns: [  ['2016',5902,765,1317,3012,3303,1243,3411,3311,952,2211,3255,1127],]});  chart6.axis.labels({x: '107 MANHATTAN a 108 MANHATTAN'});
          chart7.load({columns: [  ['2016',213,8,5155,1353,4216,3753,3324,1949,2744,3771,754,3159],]});  chart7.axis.labels({x: '107 MANHATTAN a 109 MANHATTAN'});
          chart8.load({columns: [  ['2016',4088,759,3581,2818,6773,6097,5165,2872,142,528,3294,1422],]});  chart8.axis.labels({x: '107 MANHATTAN a 110 MANHATTAN'});
          chart9.load({columns: [  ['2016',6985,781,6803,5954,5936,649,4078,3561,2318,4191,4290,1918],]});  chart9.axis.labels({x: '107 MANHATTAN a 111 MANHATTAN'});
          chart10.load({columns: [  ['2016',1183,494,2354,6340,2040,1537,737,1570,2489,2543,4355,2266],]});  chart10.axis.labels({x: '107 MANHATTAN a 112 MANHATTAN'});
          chart11.load({columns: [  ['2016',2247,412,4057,1665,1717,2273,6083,4880,590,3316,951,4395],]});  chart11.axis.labels({x: '107 MANHATTAN a 164 MANHATTAN'});
        }

        if (t.source == '108 Manhattan'){
          console.log(t.source);
          chart.load({columns: [  ['2016',4999,836,2370,511,6321,1594,4104,3495,1611,4845,2325,3460],]});  chart.axis.labels({x: '108 MANHATTAN a 101 MANHATTAN'});
          chart1.load({columns: [  ['2016',3510,660,5275,1341,4668,5152,4940,2391,1957,1564,1251,1439],]});  chart1.axis.labels({x: '108 MANHATTAN a 102 MANHATTAN'});
          chart2.load({columns: [  ['2016',4975,664,6728,2435,841,1036,4633,715,808,2444,4013,634],]});  chart2.axis.labels({x: '108 MANHATTAN a 103 MANHATTAN'});
          chart3.load({columns: [  ['2016',4999,735,629,2569,4582,4632,5853,3179,288,4988,3002,1144],]});  chart3.axis.labels({x: '108 MANHATTAN a 104 MANHATTAN'});
          chart4.load({columns: [  ['2016',1620,747,3042,6291,2539,5322,2750,225,63,517,130,2879],]});  chart4.axis.labels({x: '108 MANHATTAN a 105 MANHATTAN'});
          chart5.load({columns: [  ['2016',6005,69,4113,2743,1446,1352,5351,301,2861,143,1497,2192],]});  chart5.axis.labels({x: '108 MANHATTAN a 106 MANHATTAN'});
          chart6.load({columns: [  ['2016',1165,83,2899,6497,5691,1667,755,3887,1400,3609,873,3509],]});  chart6.axis.labels({x: '108 MANHATTAN a 107 MANHATTAN'});
          chart7.load({columns: [  ['2016',3042,64,2820,6197,5215,3522,5501,2005,2906,4141,2274,653],]});  chart7.axis.labels({x: '108 MANHATTAN a 109 MANHATTAN'});
          chart8.load({columns: [  ['2016',1727,656,3966,55,1732,6233,5477,4149,4112,991,3258,4040],]});  chart8.axis.labels({x: '108 MANHATTAN a 110 MANHATTAN'});
          chart9.load({columns: [  ['2016',2280,164,2332,633,5592,935,3081,4614,3755,3883,658,816],]});  chart9.axis.labels({x: '108 MANHATTAN a 111 MANHATTAN'});
          chart10.load({columns: [  ['2016',6074,232,3323,427,3118,3295,752,2215,1021,1681,2350,1177],]});  chart10.axis.labels({x: '108 MANHATTAN a 112 MANHATTAN'});
          chart11.load({columns: [  ['2016',4311,440,3303,5175,6901,4362,4348,1968,105,4605,1403,204],]});  chart11.axis.labels({x: '108 MANHATTAN a 164 MANHATTAN'});
        }


        if (t.source == '109 Manhattan'){
          console.log(t.source);
          chart.load({columns: [  ['2016', 5789,3727,786,5351,1886,1974,6051,2744,241,4822,4461,1952],]});   chart.axis.labels({x: '109 MANHATTAN a 101 MANHATTAN'});
          chart1.load({columns: [  ['2016', 1451,1243,5939,604,6882,5797,3695,1839,1851,2822,3994,4275],]});   chart1.axis.labels({x: '109 MANHATTAN a 102 MANHATTAN'});
          chart2.load({columns: [  ['2016', 6429,649,6217,6312,559,2442,5127,214,3374,2494,2129,1560],]});   chart2.axis.labels({x: '109 MANHATTAN a 103 MANHATTAN'});
          chart3.load({columns: [  ['2016', 637,4193,5082,4034,2853,1857,27,3327,3786,4994,534,2565],]});   chart3.axis.labels({x: '109 MANHATTAN a 104 MANHATTAN'});
          chart4.load({columns: [  ['2016', 5462,3959,2830,6888,632,2217,5609,2173,2046,301,1581,1025],]});   chart4.axis.labels({x: '109 MANHATTAN a 105 MANHATTAN'});
          chart5.load({columns: [  ['2016',2809,2696,5980,282,3485,1705,1994,159,4233,496,2981,4064],]});   chart5.axis.labels({x: '109 MANHATTAN a 106 MANHATTAN'});
          chart6.load({columns: [  ['2016',5291,4507,3142,773,1893,5864,3988,4005,2168,3676,3530,3288],]});   chart6.axis.labels({x: '109 MANHATTAN a 107 MANHATTAN'});
          chart7.load({columns: [  ['2016',4294,1467,5267,6173,2248,1708,3493,3841,1391,4594,4117,2499],]});   chart7.axis.labels({x: '109 MANHATTAN a 108 MANHATTAN'});
          chart8.load({columns: [  ['2016',5198,4057,4615,6909,5143,3863,2855,4036,1925,1009,3154,3865],]});   chart8.axis.labels({x: '109 MANHATTAN a 110 MANHATTAN'});
          chart9.load({columns: [  ['2016',3270,1972,3689,1195,1688,2242,1869,4153,3589,2501,143,3766],]});   chart9.axis.labels({x: '109 MANHATTAN a 111 MANHATTAN'});
          chart10.load({columns: [  ['2016',1561,451,5957,865,2368,1262,921,3926,2496,1436,3408,4117],]});   chart10.axis.labels({x: '109 MANHATTAN a 112 MANHATTAN'});
          chart11.load({columns: [  ['2016',1129,2382,3370,5966,4724,4183,1280,297,3396,3536,1641,3360],]});   chart11.axis.labels({x: '109 MANHATTAN a 164 MANHATTAN'});
        }

        if (t.source == '110 Manhattan'){
          console.log(t.source);
          chart.load({columns: [  ['2016',2611,2811,1191,895,3615,1576,1552,1864,2648,1200,4043,1960],]});  chart.axis.labels({x: '110 MANHATTAN a 101 MANHATTAN'});
          chart1.load({columns: [  ['2016',1281,6909,2487,1049,4309,5268,4264,4366,3560,4986,112,3996],]});  chart1.axis.labels({x: '110 MANHATTAN a 102 MANHATTAN'});
          chart2.load({columns: [  ['2016',1078,107,4550,5792,2576,2525,2986,2765,2306,4530,2451,1195],]});  chart2.axis.labels({x: '110 MANHATTAN a 103 MANHATTAN'});
          chart3.load({columns: [  ['2016',1504,3040,1726,1876,2211,4243,3236,4494,1013,2168,3957,481],]});  chart3.axis.labels({x: '110 MANHATTAN a 104 MANHATTAN'});
          chart4.load({columns: [  ['2016',6446,5392,6854,2376,2420,3084,3485,1000,1952,1528,3181,3211],]});  chart4.axis.labels({x: '110 MANHATTAN a 105 MANHATTAN'});
          chart5.load({columns: [  ['2016',1748,2941,6275,2968,6459,5392,897,288,2382,694,1355,3686],]});  chart5.axis.labels({x: '110 MANHATTAN a 106 MANHATTAN'});
          chart6.load({columns: [  ['2016',663,278,1256,4778,2581,5873,981,1555,1265,970,2804,3428],]});  chart6.axis.labels({x: '110 MANHATTAN a 107 MANHATTAN'});
          chart7.load({columns: [  ['2016',2965,5645,2324,2579,5457,2875,685,4145,619,4210,4279,2483],]});  chart7.axis.labels({x: '110 MANHATTAN a 108 MANHATTAN'});
          chart8.load({columns: [  ['2016',1200,1350,1885,3179,470,4065,1453,4237,2151,3950,2713,1283],]});  chart8.axis.labels({x: '110 MANHATTAN a 109 MANHATTAN'});
          chart9.load({columns: [  ['2016',5895,1430,2957,6976,4612,236,1379,3263,4293,4501,517,4076],]});  chart9.axis.labels({x: '110 MANHATTAN a 111 MANHATTAN'});
          chart10.load({columns: [  ['2016',3486,5755,2939,509,5196,4696,1528,4123,3346,4392,272,1597],]});  chart10.axis.labels({x: '110 MANHATTAN a 112 MANHATTAN'});
          chart11.load({columns: [  ['2016',1007,6527,6647,4938,2666,6015,4787,161,2492,2565,1337,1783],]});  chart11.axis.labels({x: '110 MANHATTAN a 164 MANHATTAN'});
        }

        if (t.source == '111 Manhattan'){
          console.log(t.source);
          chart.load({columns: [  ['2016',6041,1335,6078,4132,179,5406,4285,998,1539,437,234,926],]});  chart.axis.labels({x: '111 MANHATTAN a 101 MANHATTAN'});
          chart1.load({columns: [  ['2016',769,6167,1228,571,2918,1319,4555,554,1159,3987,1389,143],]});  chart1.axis.labels({x: '111 MANHATTAN a 102 MANHATTAN'});
          chart2.load({columns: [  ['2016',5013,5566,6581,5208,6152,3720,1129,2578,543,61,3318,3060],]});  chart2.axis.labels({x: '111 MANHATTAN a 103 MANHATTAN'});
          chart3.load({columns: [  ['2016',2558,3623,491,427,6406,2064,1333,1363,2241,2880,313,4045],]});  chart3.axis.labels({x: '111 MANHATTAN a 104 MANHATTAN'});
          chart4.load({columns: [  ['2016',5244,5290,1695,3431,3670,481,3526,4062,952,1958,3749,614],]});  chart4.axis.labels({x: '111 MANHATTAN a 105 MANHATTAN'});
          chart5.load({columns: [  ['2016',3205,95,5699,4675,2763,4621,5759,1601,2927,4355,1292,843],]});  chart5.axis.labels({x: '111 MANHATTAN a 106 MANHATTAN'});
          chart6.load({columns: [  ['2016',3013,3994,1386,2679,4655,1457,984,447,3301,4708,3601,404],]});  chart6.axis.labels({x: '111 MANHATTAN a 107 MANHATTAN'});
          chart7.load({columns: [  ['2016',25510,2916,1974,3771,254,1452,1466,1515,4325,1277,3268,1839],]});  chart7.axis.labels({x: '111 MANHATTAN a 108 MANHATTAN'});
          chart8.load({columns: [  ['2016',9157,4149,4455,2089,1984,2736,760,2445,3156,2958,2992,3342],]});  chart8.axis.labels({x: '111 MANHATTAN a 109 MANHATTAN'});
          chart9.load({columns: [  ['2016',20396,6352,4882,1759,4480,3377,1268,4046,3520,792,2876,3895],]});  chart9.axis.labels({x: '111 MANHATTAN a 110 MANHATTAN'});
          chart10.load({columns: [  ['2016',3439,4235,3296,1570,3466,3912,55,1005,2910,3589,1833,4240],]});  chart10.axis.labels({x: '111 MANHATTAN a 112 MANHATTAN'});
          chart11.load({columns: [  ['2016',2141,5874,4050,1558,3100,460,3474,2678,610,1664,2585,2515],]});  chart11.axis.labels({x: '111 MANHATTAN a 164 MANHATTAN'});
        }

        if (t.source == '112 Manhattan'){
          console.log(t.source);
          chart.load({columns: [  ['2016',732,12259,3547,1408,1852,3985,5333,4056,1861,1716,266,3265],]});  chart.axis.labels({x: '112 MANHATTAN a 101 MANHATTAN'});
          chart1.load({columns: [  ['2016',3681,15612,2363,5303,2338,959,5207,1575,2928,2616,1127,4460],]});  chart1.axis.labels({x: '112 MANHATTAN a 102 MANHATTAN'});
          chart2.load({columns: [  ['2016',227,17321,745,4731,2272,2248,250,3447,2093,221,1947,1359],]});  chart2.axis.labels({x: '112 MANHATTAN a 103 MANHATTAN'});
          chart3.load({columns: [  ['2016',814,12831,1305,5114,5257,4230,4275,1752,3783,544,244,1621],]});  chart3.axis.labels({x: '112 MANHATTAN a 104 MANHATTAN'});
          chart4.load({columns: [  ['2016',914,12972,5879,1908,6659,4561,1158,263,27,4398,3381,801],]});  chart4.axis.labels({x: '112 MANHATTAN a 105 MANHATTAN'});
          chart5.load({columns: [  ['2016',683,7425,1633,6245,5118,1256,1268,1994,1257,3532,1277,3243],]});  chart5.axis.labels({x: '112 MANHATTAN a 106 MANHATTAN'});
          chart6.load({columns: [  ['2016',4206,20144,3880,6370,935,3992,75,1799,3022,4536,994,1116],]});  chart6.axis.labels({x: '112 MANHATTAN a 107 MANHATTAN'});
          chart7.load({columns: [  ['2016',2114,5769,2456,484,1529,4087,820,3265,1671,3985,3739,1129],]});  chart7.axis.labels({x: '112 MANHATTAN a 108 MANHATTAN'});
          chart8.load({columns: [  ['2016',7179,6117,5449,1582,2076,2195,2111,843,2176,579,3487,2198],]});  chart8.axis.labels({x: '112 MANHATTAN a 109 MANHATTAN'});
          chart9.load({columns: [  ['2016',2610,4594,1818,4207,2187,1134,316,405,3580,1420,3292,33],]});  chart9.axis.labels({x: '112 MANHATTAN a 110 MANHATTAN'});
          chart10.load({columns: [  ['2016',811,11129,6961,3217,4560,198,4432,398,101,550,3120,836],]});  chart10.axis.labels({x: '112 MANHATTAN a 111 MANHATTAN'});
          chart11.load({columns: [  ['2016',93,10873,6890,1069,589,6116,1148,4703,3569,493,2305,1323],]});  chart11.axis.labels({x: '112 MANHATTAN a 164 MANHATTAN'});
        }

        if (t.source == '164 Manhattan'){
          console.log(t.source);
          chart.load({columns: [  ['2016',821,5310,2753,500,6316,2934,371,1750,667,1856,1512,4081],]});  chart.axis.labels({x: '164 MANHATTAN a 101 MANHATTAN'});
          chart1.load({columns: [  ['2016',613,8685,5463,498,5058,1837,2515,1007,4137,2514,80,3792],]});  chart1.axis.labels({x: '164 MANHATTAN a 102 MANHATTAN'});
          chart2.load({columns: [  ['2016',6814,21911,1617,1889,211,4286,4703,1937,4298,3271,3490,2651],]});  chart2.axis.labels({x: '164 MANHATTAN a 103 MANHATTAN'});
          chart3.load({columns: [  ['2016',4524,22679,4772,404,6383,4358,5570,2085,3725,1638,2209,465],]});  chart3.axis.labels({x: '164 MANHATTAN a 104 MANHATTAN'});
          chart4.load({columns: [  ['2016',1119,6630,6441,6005,1994,1286,5788,23,2043,4312,1242,1358],]});  chart4.axis.labels({x: '164 MANHATTAN a 105 MANHATTAN'});
          chart5.load({columns: [  ['2016',397,8739,506,4333,6571,6262,62,3184,4275,3069,4418,2174],]});  chart5.axis.labels({x: '164 MANHATTAN a 106 MANHATTAN'});
          chart6.load({columns: [  ['2016',2674,4372,2503,5060,895,2291,2100,1169,1257,1900,3191,1731],]});  chart6.axis.labels({x: '164 MANHATTAN a 107 MANHATTAN'});
          chart7.load({columns: [  ['2016',3919,1876,4289,389,6081,5065,4122,625,964,491,3581,3890],]});  chart7.axis.labels({x: '164 MANHATTAN a 108 MANHATTAN'});
          chart8.load({columns: [  ['2016',268,15155,779,632,285,3918,3361,3308,1878,4416,4185,3700],]});  chart8.axis.labels({x: '164 MANHATTAN a 109 MANHATTAN'});
          chart9.load({columns: [  ['2016',246,4320,4890,6558,3419,2538,2672,66,3282,2439,2379,4232],]});  chart9.axis.labels({x: '164 MANHATTAN a 110 MANHATTAN'});
          chart10.load({columns: [  ['2016',871,5694,5778,545,1219,4640,2410,5297,4009,3833,3686,45],]});  chart10.axis.labels({x: '164 MANHATTAN a 111 MANHATTAN'});
          chart11.load({columns: [  ['2016',731,21631,6051,686,1287,2862,2902,81,2081,460,2627,2820],]});  chart11.axis.labels({x: '164 MANHATTAN a 112 MANHATTAN'});
        }

        // chart1.load({
        //     columns: [
        //         ['2014', 400, 300, 250, 100, 30, 100,20,10,200,10,100,400],
        //         ['2015', 100, 100, 350, 40, 40, 100,20,70,24,40,2000,2000],
        //     ]
        // });
    }

    // ch.mouseout = function() {}

    var width=600, height=600;
    var cont=0;
    var svg = d3.select("body").append("svg").attr("height",height).attr("width",width);
    svg.append("g").attr("transform", "translate(370,300)").call(ch).on("click", function(d){
        // console.log(list_data[cont][1])
        // cont = cont+1;
        // _eval();
        // console.log(ch.source);
    });
    d3.select(self.frameElement).style("height", height+"px").style("width", width+"px");

});
