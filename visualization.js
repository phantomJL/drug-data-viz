var chart = c3.generate({
    data: {
        x: 'x',
        url: 'data/total-deaths.csv',
        axis: {
	        x: {
	            type: 'category' // this needed to load string x value
	        }
    	},
    	type: 'area-spline'
    },
    padding: {
	  right: 20
	}
});

function changeData(dataToLoad){
	chart.unload();
	switch(dataToLoad) {
	    case 'total-deaths':
	        setTimeout(function(){
		        chart.load({
		        	url: 'data/total-deaths.csv'
		    	});
	    	},1000);
	    	$("#filter-dropdown").html('All Deaths <span class="caret"></span>');
	        break;
	    case 'age':
	    	setTimeout(function(){
		        chart.load({
		        	url: 'data/age.csv'
		    	});
	    	},1000);
	    	$("#filter-dropdown").html('Age <span class="caret"></span>');
	        break;
	    case 'ethnicity':
	    	setTimeout(function(){
		        chart.load({
		        	url: 'data/ethnicity.csv'
		    	});
	    	},1000);
	    	$("#filter-dropdown").html('Ethnicity <span class="caret"></span>');
	        break;
	    case 'intent':
	    	setTimeout(function(){
		        chart.load({
		        	url: 'data/intent.csv'
		    	});
	    	},1000);
	    	$("#filter-dropdown").html('Intent <span class="caret"></span>');
	        break;
	    case 'opioid-type':
	    	setTimeout(function(){
		        chart.load({
		        	url: 'data/opioid-type.csv'
		    	});
	    	},1000);
	    	$("#filter-dropdown").html('Opioid Type <span class="caret"></span>');
	        break;
	    case 'sex':
	    	setTimeout(function(){
		        chart.load({
		        	url: 'data/sex.csv'
		    	});
	    	},1000);
	    	$("#filter-dropdown").html('Sex <span class="caret"></span>');
	        break;
	    default:
	        chart.load({
	        	url: 'data/total-deaths.csv'
	    	});
	} 

}

function changeChartType(newType) {
	switch(newType) {
	    case 'area-spline':
			chart.transform('area-spline');
			//change selected value to area-spline
	        break;
	    case 'line':
			chart.transform('line');
			//change selected value to area-spline
	        break;
	    case 'bar':
			chart.transform('bar');
			//change selected value to area-spline
	        break;    
	    default:
			chart.transform('area-spline');
	}

}
