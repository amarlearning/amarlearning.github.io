var container = document.getElementById('example'),
	searchFiled = document.getElementById('search_field'),
	data = [
		["Hello", "Ford", "Volvo", "Toyota", "Honda", 'Nissan', 2012, 'black', 'black'],
		["2016", 10, 11, 12, 13, 'Nissan', 2013, 'blue', 'blue'],
		["2017", 20, 11, 14, 13, 'Chrysler', 2014, 'yellow', 'black'],
		["2018", 30, 15, 12, 13, 'Volvo', 2015, 'yellow', 'gray'],
		["2016", 10, 11, 12, 13, 'Nissan', 2013, 'blue', 'blue'],
		["2017", 20, 11, 14, 13, 'Chrysler', 2014, 'yellow', 'black'],
		["2018", 30, 15, 12, 13, 'Volvo', 2015, 'yellow', 'gray']
	];

function firstRowRenderer(instance, td, row, col, prop, value, cellProperties) {
	Handsontable.renderers.TextRenderer.apply(this, arguments);
	td.style.fontWeight = 'bold';
	td.style.color = 'green';
	td.style.background = '#CEC';
}

var hot = new Handsontable(container, {
	data: Handsontable.helper.createSpreadsheetData(15, 9),
	rowHeaders: true,
	colHeaders: ["Hello", "Ford", "Volvo", "Toyota", "Honda", 'Nissan', 2012, 'black', 'black'],
	contextMenu: true,
	contextMenuCopyPaste: {
		swfPath: '/js/ZeroClipboard.swf'
	},
	columnSorting: true,
	manualColumnResize: true,
	sortIndicator: true,
	search: {
		searchResultClass: 'customClass'
	},
	className: "htCenter",
	maxRows: 100,
	maxCols: 100,
	stretchH: 'all',
});

hot.updateSettings ({
	cells: function (row, col, prop) {
		var cellProperties = {};
		if(hot.getSourceData()[0][0] === 'A12') {
			cellProperties.renderer = firstRowRenderer;
			cellProperties.readOnly = true;
		}

		return cellProperties;
	}
})

Handsontable.dom.addEvent(searchFiled, 'keyup', function (event) {
	var queryResult = hot.search.query(this.value);
	hot.render();
});
