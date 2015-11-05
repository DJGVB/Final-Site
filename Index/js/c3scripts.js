var armsrace = c3.generate({
	bindto: '#chart2',
	data: {
		x: 'x',
		xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
		columns: [
            ['x', '19450101', '19500101', '19550101', '19600101', '19650101', '19700101', '19750101', '19800101', '19850101', '19900101', '19950101', '20000101', '20050101', '2010101', '20150101'],
            ['Verenigde Staten', 3, 750, 2400, 19000, 31000, 26000, 27500, 24000, 23000, 22000, 11000, 11000, 8000, 5000, 4000],
            ['Rusland', 0, 100, 200, 2000, 6500, 12000, 19000, 31000, 37500, 33000, 18000, 12500, 7000, 5000, 4000],
        ],
		onclick: function (d) {
			setTimeout(function () {
				armsrace.transform('pie');
			}, 1000);

			setTimeout(function () {
				armsrace.transform('bar');
			}, 5000);
		},
		type: 'bar'
	},
	axis: {
		x: {
			type: 'timeseries',
			tick: {
				format: '%Y'
			}
		}
	}
});
var vietnam = c3.generate({
	bindto: '#chart3',
	data: {
		columns: [
            ['Zuid Vietnam', 710000],
            ['Verenigde Staten', 58307],
			['Zuid Korea', 5099],
			['Australie', 500],
			['Noord Vietnam', 1100000],
			['China', 1100]

        ],
		onclick: function (d) {
			setTimeout(function () {
				vietnam.transform('pie');
			}, 1000);

			setTimeout(function () {
				vietnam.transform('bar');
			}, 12000);
		},
		type: 'bar'
	},
	bar: {
		width: {
			ratio: 0.5 // this makes bar width 50% of length between ticks
		}
		// or
		//width: 100 // this makes bar width 100px
	}
});
var chart = c3.generate({
	bindto: '#chart4',
	data: {
		columns: [
            ['Zuid Korea', 591285],
            ['Noord Korea', 926000]
        ],
		onclick: function (d) {
			setTimeout(function () {
				chart.transform('pie');
			}, 1000);

			setTimeout(function () {
				chart.transform('bar');
			}, 12000);
		},
		type: 'bar'
	},
	bar: {
		width: {
			ratio: 0.5 // this makes bar width 50% of length between ticks
		}
		// or
		//width: 100 // this makes bar width 100px
	}
});


setTimeout(function () {
	chart.load({
		columns: [
            ['China', 900000],
			['Verenigde Staten', 33629],
			['Groot Britannie', 710],
			['Turkije', 720],
			['Canada', 309],
			['Frankrijk', 288],
			['Griekenland', 130],
			['Ethiopie', 130],
			['Nederland', 111],
			['Thailand', 114],
			['Belgie', 97],
			['Filipijnen', 92]

        ]
	});
}, 5000);

var cubamap2 = new Datamap({
	element: document.getElementById('containercuba2'),
	setProjection: function (element) {
		var projection = d3.geo.equirectangular()
			.center([-60, 20])
			.scale(500)
			.translate([element.offsetWidth / 2, element.offsetHeight / 2]);
		var path = d3.geo.path().projection(projection);
		return {
			path: path,
			projection: projection
		};
	},
	fills: {
		RUS: '#BB5B1A',
		AUS: '#FF0000',
		GC: '#fff',
		VNM: '#9ECED5',
		HK: '#9ECED5',
		defaultFill: '#ffffff'
	},
	geographyConfig: {
		borderWidth: 1,
		borderColor: '#e6e6e6'
	}
});

var bubbles = [
	{
		latitude: 22,
		longitude: -55,
		radius: 10,
		fillKey: 'AUS',
		name: 'B-59',
		type: 'Kernonderzeer Rusland',
		nukes: '3'
  },
	{
		latitude: 25,
		longitude: -56,
		radius: 10,
		fillKey: 'AUS',
		name: 'B-59',
		type: 'Kernonderzeer Rusland',
		nukes: '2'
  },
	{
		latitude: 35,
		longitude: -56,
		radius: 10,
		fillKey: 'AUS',
		name: 'B-59',
		type: 'Kernonderzeer Rusland',
		nukes: '5'
  }, {
		latitude: 22,
		longitude: -76.9,
		radius: 5,
		fillKey: 'RUS',
		name: 'Missile Base Beta',
		type: '1,125',
		nukes: '5'
  }, {
		latitude: 20,
		longitude: -75.9,
		radius: 5,
		fillKey: 'RUS',
		name: 'Missile Base Alpha',
		type: '1,125',
		nukes: '3'
  }, {
		latitude: 22.2,
		longitude: -81.9,
		radius: 5,
		fillKey: 'RUS',
		name: 'Missile Base Foxtrot',
		type: '1,125',
		nukes: '5'
  }, {
		latitude: 22,
		longitude: -80,
		radius: 7,
		fillKey: 'HK',
		name: 'Havana',
		type: 'City',
		nukes: 'None'
  }
];

cubamap2.bubbles(bubbles, {
	borderWidth: 0,
	popupTemplate: function (geo, data) {
		return [
              '<div class="hoverinfo">' + data.name,
              '<br /> Type: ' + data.type,
			'<br /> Nukes onboard: ' + data.nukes
          ].join('');
	}
});

var koreawar = new Datamap({
	element: document.getElementById('mapkorea'),
	setProjection: function (element) {
		var projection = d3.geo.equirectangular()
			.center([134, 36])
			.scale(2000)
			.translate([element.offsetWidth / 2, element.offsetHeight / 2]);
		var path = d3.geo.path().projection(projection);
		return {
			path: path,
			projection: projection
		};
	},
	fills: {
		PRK: '#FF0000',
		KOR: '#0000FF',
		defaultFill: '#ffffff'
	},
	geographyConfig: {
		borderWidth: 1,
		borderColor: '#e6e6e6'
	}
});

var bubbles = [
	{
		latitude: 41,
		longitude: 127,
		radius: 8,
		fillKey: 'PRK',
		name: 'Battle of Pyongyang',
		deaths: 75000,
  },
	{
		latitude: 35,
		longitude: 127,

		radius: 8,
		fillKey: 'PRK',
		name: 'Battle of Seoul',
		deaths: 100000,
  },
	{
		latitude: 36,
		longitude: 125,
		radius: 8,
		fillKey: 'PRK',
		name: 'Battle of Inchon',
		deaths: 3553,
  },
	{
		latitude: 40,
		longitude: 125,
		radius: 8,
		fillKey: 'KOR',
		name: 'Battle of Haeju',
		deaths: 2442,
  },
	{
		latitude: 38.2,
		longitude: 128,
		radius: 8,
		fillKey: 'KOR',
		name: 'DMZ (The Border Between North and South)',
  }
];

koreawar.bubbles(bubbles, {
	borderWidth: 0,
	popupTemplate: function (geo, data) {
		return [
              '<div class="hoverinfo">' + data.name,
				'<br /> Estimated Deaths: ' + data.deaths
          ].join('');
	}
});