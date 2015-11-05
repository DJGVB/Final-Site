var options = {  
	useEasing: true,
	  useGrouping: true,
	  separator: '.',
	  decimal: '.',
	  prefix: '',
	  suffix: ''
};

var korea1 = new CountUp("koreadata1", 0, 5049000, 0, 8, options);
var korea2 = new CountUp("koreadata2", 0, 1128, 0, 4, options);
var korea3 = new CountUp("koreadata3", 0, 243, 0, 3, options);
var korea4 = new CountUp("koreadata4", 0, 3900, 0, 5, options);

var cuba1 = new CountUp("cubadata1", 0, 3, 0, 6);
var cuba2 = new CountUp("cubadata2", 0, 2, 0, 6);
var cuba3 = new CountUp("cubadata3", 0, 70, 0, 6);
var cuba4 = new CountUp("cubadata4", 0, 15, 0, 6);

var vietnam1 = new CountUp("vietnamdata1", 0, 24500000, 0, 7, options);
var vietnam2 = new CountUp("vietnamdata2", 0, 11400000, 0, 6, options);
var vietnam3 = new CountUp("vietnamdata3", 0, 1350, 0, 4, options);
var vietnam4 = new CountUp("vietnamdata4", 0, 58, 0, 4, options);
var vietnam5 = new CountUp("vietnamdata5", 0, 6727084, 0, 4, options);
var vietnam6 = new CountUp("vietnamdata6", 0, 14163, 0, 8, options);

var berlin1 = new CountUp("berlindata1", 0, 20, 0, 6, options);
var berlin2 = new CountUp("berlindata2", 0, 302, 0, 6, options);
var berlin3 = new CountUp("berlindata3", 0, 616066, 0, 6, options);
var berlin4 = new CountUp("berlindata4", 0, 916, 0, 6, options);
var berlin5 = new CountUp("berlindata5", 0, 155, 0, 6, options);
var berlin6 = new CountUp("berlindata6", 0, 259, 0, 6, options);


var total1sum = new CountUp("totaldata1sum", 0, 15000000000000, 0, 11, options);
var total1 = new CountUp("totaldata1", 0, 750000000, 0, 7, options);
var total2 = new CountUp("totaldata2", 0, 79000000, 0, 5, options);
var total3 = new CountUp("totaldata3", 0, 750000000000, 0, 9, options);
var total4 = new CountUp("totaldata4", 0, 30523167, 0, 4, options);


document.getElementById("koreastats").onclick = function fun() {
	korea1.start();
	korea2.start();
	korea3.start();
	korea4.start();
}

document.getElementById("cubastats").onclick = function fun() {
	cuba1.start();
	cuba2.start();
	cuba3.start();
	cuba4.start();
}

document.getElementById("vietnamstats").onclick = function fun() {
	vietnam1.start();
	vietnam2.start();
	vietnam3.start();
	vietnam4.start();
	vietnam5.start();
	vietnam6.start();

}

document.getElementById("berlinstats").onclick = function fun() {
	berlin1.start();
	berlin2.start();
	berlin3.start();
	berlin4.start();
	berlin5.start();
	berlin6.start();
}

document.getElementById("totalstats").onclick = function fun() {
	total1sum.start();
	total1.start();
	total2.start();
	total3.start();
	total4.start();
}

/* Switch maps */

var cubaMap1Btn = document.getElementById('cuba1Show');
var cubaMap2Btn = document.getElementById('cuba2Show');

var cubaMap1Div = document.getElementById('containercuba');
var cubaMap2Div = document.getElementById('containercuba2');

cubaMap1Btn.onclick = function () {

	console.log('Cuba button werkt');

	cubaMap1Div.setAttribute('class', 'visible');
	cubaMap2Div.setAttribute('class', 'hidden');
	cubaMap1Btn.setAttribute('class', 'active');
	cubaMap2Btn.setAttribute('class', 'none');
};

cubaMap2Btn.onclick = function () {

	console.log('Cuba2 button werkt');

	cubaMap1Div.setAttribute('class', 'hidden');
	cubaMap2Div.setAttribute('class', 'visible');
	cubaMap1Btn.setAttribute('class', 'none');
	cubaMap2Btn.setAttribute('class', 'active');
};