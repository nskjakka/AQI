const breakPointsAQI = [
    {
        category: 'Good',
        ihi: 50,
        ilo: 0,
        breakpoints: [
            { code: 'pm2', bhi: 30, blo: 0 },
            { code: 'pm10', bhi: 50, blo: 0 },
            { code: 'co', bhi: 1.0, blo: 0 },
            { code: 'no2', bhi: 40, blo: 0 },
            { code: 'o3', bhi: 50, blo: 0 },
            { code: 'so2', bhi: 40, blo: 0 },
            { code: 'nh3', bhi: 200, blo: 0 },
            { code: 'pb', bhi: 0.5, blo: 0 }
        ]
    },
    {
        category: 'Satisfactory',
        ihi: 100,
        ilo: 51,
        breakpoints: [
            { code: 'pm2', bhi: 60, blo: 31 },
            { code: 'pm10', bhi: 100, blo: 51 },
            { code: 'co', bhi: 2.0, blo: 1.1 },
            { code: 'no2', bhi: 80, blo: 41 },
            { code: 'o3', bhi: 100, blo: 51 },
            { code: 'so2', bhi: 80, blo: 41 },
            { code: 'nh3', bhi: 400, blo: 201 },
            { code: 'pb', bhi: 1.0, blo: 0.5 }
        ]
    },
    {
        category: 'Moderately Polluted',
        ihi: 200,
        ilo: 101,
        breakpoints: [
            { code: 'pm2', bhi: 90, blo: 61 },
            { code: 'pm10', bhi: 250, blo: 101 },
            { code: 'co', bhi: 10, blo: 2.1 },
            { code: 'no2', bhi: 180, blo: 81 },
            { code: 'o3', bhi: 168, blo: 101 },
            { code: 'so2', bhi: 380, blo: 81 },
            { code: 'nh3', bhi: 800, blo: 401 },
            { code: 'pb', bhi: 2.0, blo: 1.1 }
        ]
    },
    {
        category: 'Poor',
        ihi: 300,
        ilo: 201,
        breakpoints: [
            { code: 'pm2', bhi: 120, blo: 91 },
            { code: 'pm10', bhi: 350, blo: 251 },
            { code: 'co', bhi: 17, blo: 10 },
            { code: 'no2', bhi: 280, blo: 181 },
            { code: 'o3', bhi: 208, blo: 169 },
            { code: 'so2', bhi: 800, blo: 381 },
            { code: 'nh3', bhi: 1200, blo: 801 },
            { code: 'pb', bhi: 3.0, blo: 2.1 }
        ]
    },
    {
        category: 'Very Poor',
        ihi: 400,
        ilo: 301,
        breakpoints: [
            { code: 'pm2', bhi: 250, blo: 121 },
            { code: 'pm10', bhi: 430, blo: 351 },
            { code: 'co', bhi: 34, blo: 17 },
            { code: 'no2', bhi: 400, blo: 281 },
            { code: 'o3', bhi: 748, blo: 209 },
            { code: 'so2', bhi: 1600, blo: 801 },
            { code: 'nh3', bhi: 1800, blo: 1201 },
            { code: 'pb', bhi: 3.5, blo: 3.1 }
        ]
    },
    {
        category: 'Severe',
        ihi: 500,
        ilo: 401,
        breakpoints: [
            { code: 'pm2', bhi: 431, blo: 431 },
            { code: 'pm10', bhi: 251, blo: 251 },
            { code: 'co', bhi: 35, blo: 35 },
            { code: 'no2', bhi: 401, blo: 401 },
            { code: 'o3', bhi: 749, blo: 749 },
            { code: 'so2', bhi: 1601, blo: 1601 },
            { code: 'nh3', bhi: 1801, blo: 1801 },
            { code: 'pb', bhi: 3.6, blo: 3.6 }
        ]
    },
];
var aqiBP = {};
var aqi = {};
module.exports = {
    calcAQI: function (data) {
        breakPointsAQI.forEach(item => {
            aqiBP = item.breakpoints.find(bp => (data.code === bp.code) && ((data.value >= bp.blo) && (data.value <= bp.bhi)));
            if (aqiBP !== undefined) {
                aqi = item;
            }
        });
        aqiBP = aqi.breakpoints.find(bp => (data.code === bp.code) && ((data.value >= bp.blo) && (data.value <= bp.bhi)));
        var AQI_val = (((aqi.ihi - aqi.ilo) / (aqiBP.bhi - aqiBP.blo)) * (data.value - aqiBP.blo)) + aqi.ilo;
        return {AQI: AQI_val, category: aqi.category};
    }
}