	/*Cuba map 1*/
	var bombMap = new Datamap({
		element: document.getElementById('containercuba'),
		scope: 'world',
		geographyConfig: {
			popupOnHover: false,
			highlightOnHover: false,

			borderWidth: 1,
			borderColor: '#e6e6e6'

		},
		fills: {
			'USA': '#1f77b4',
			'RUS': '#8a2222',
			'PRK': '#ff7f0e',
			'PRC': '#2ca02c',
			'IND': '#e377c2',
			'GBR': '#8c564b',
			'FRA': '#d62728',
			'PAK': '#7f7f7f',
			defaultFill: '#FFFFFF'
		},
		data: {
			'RUS': {
				fillKey: 'RUS'
			},
			'PRK': {
				fillKey: 'PRK'
			},
			'PRC': {
				fillKey: 'PRC'
			},
			'IND': {
				fillKey: 'IND'
			},
			'GBR': {
				fillKey: 'GBR'
			},
			'FRA': {
				fillKey: 'FRA'
			},
			'PAK': {
				fillKey: 'PAK'
			},
			'USA': {
				fillKey: 'USA'
			}
		}
	});

	/* Bombs */

	var bombs = [{
			name: 'Joe 4',
			radius: 25,
			yield: 400,
			country: 'USSR',
			fillKey: 'RUS',
			significance: 'First fusion weapon test by the USSR (not "staged")',
			date: '1953-08-12',
			latitude: 50.07,
			longitude: 78.43
      }, {
			name: 'RDS-37',
			radius: 40,
			yield: 1600,
			country: 'USSR',
			fillKey: 'RUS',
			significance: 'First "staged" thermonuclear weapon test by the USSR (deployable)',
			date: '1955-11-22',
			latitude: 50.07,
			longitude: 78.43

      }, {
			name: 'Tsar Bomba',
			radius: 75,
			yield: 50000,
			country: 'USSR',
			fillKey: 'RUS',
			significance: 'Largest thermonuclear weapon ever tested—scaled down from its initial 100 Mt design by 50%',
			date: '1961-10-31',
			latitude: 73.482,
			longitude: 54.5854
      }, {
			name: 'Chagan',
			radius: 5,
			yield: 1400,
			country: 'USSR',
			fillKey: 'RUS',
			significance: 'Chagan (Чага́н) was a Soviet underground nuclear test conducted at the Semipalatinsk Test Site on January 15, 1965.%',
			date: '1965-01-15',
			latitude: 73.482,
			longitude: 2.5854
      }, {
			name: 'Trinity',
			radius: 15,
			yield: 20,
			country: 'USA',
			fillKey: 'USA',
			significance: 'Trinity was the code name of the first detonation of a nuclear weapon, conducted by the United States Army on July 16, 1945, as part of the Manhattan Project. ',
			date: '1945-16-07',
			latitude: 30.482,
			longitude: -100.5854
      }, {
			name: 'Ivy Mike ',
			radius: 15,
			yield: 1000,
			country: 'USA',
			fillKey: 'USA',
			significance: 'The Ivy Mike shot of 1 November 1952, was the first full test of a Teller-Ulam design "staged" hydrogen bomb, with a yield of 10 megatons. This was not a deployable weapon: With its full cryogenic equipment it weighed some 82 tons',
			date: '1965-01-15',
			latitude: 73.482,
			longitude: -27.5854
      }
    ];
	//draw bubbles for bombs
	bombMap.bubbles(bombs, {
		popupTemplate: function (geo, data) {
			return ['<div class="hoverinfo">' + data.name,
            '<br/>Payload: ' + data.yield+' kilotons',
            '<br/>Country: ' + data.country + '',
            '<br/>Date: ' + data.date + '',
			'<br/>Significance: ' + data.significance + '',

            '</div>'].join('');
		}
	});


	var map1 = new Datamap({
		element: document.getElementById('mapvietnam'),
		setProjection: function (element) {
			var projection = d3.geo.equirectangular()
				.center([105, 15])
				.scale(500)
				.translate([element.offsetWidth / 2, element.offsetHeight / 2]);
			var path = d3.geo.path().projection(projection);
			return {
				path: path,
				projection: projection
			};
		},
		fills: {
			JPN: '#BB5B1A',
			AUS: '#FD9226',
			GC: '#A1A55F',
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
			latitude: 15,
			longitude: 105,
			radius: 30,
			fillKey: 'GC',
			name: 'Greater China',
			deaths: '3,355'
  },
		{
			latitude: 22,
			longitude: 114,
			radius: 20,
			fillKey: 'HK',
			name: 'HK',
			deaths: '1,125'
  },
		{
			latitude: 36,
			longitude: 138,
			radius: 10,
			fillKey: 'JPN',
			name: 'JPN',
			deaths: '1,125'
  },
		{
			latitude: -20,
			longitude: 133,
			radius: 20,
			fillKey: 'AUS',
			name: 'AUS',
			deaths: '1,125'
  }
];

	map.bubbles(bubbles, {
		borderWidth: 0,
		popupTemplate: function (geo, data) {
			return [
              '<div class="hoverinfo">' + data.name,
              '<br /> iPhone sales: ' + data.death
          ].join('');
		}
	});