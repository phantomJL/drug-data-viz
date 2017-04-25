var chart = c3.generate({
    data: {
        x: 'x',
        url: 'data/total-deaths.csv',
        axis: {
	        x: {
	            type: 'category' // this needed to load string x value
	        }
    	},
    }
});

function changeData(dataToLoad){
	chart.unload();
	switch(dataToLoad) {
	    case 'total-deaths':
	        chart.load({
	        	url: 'data/total-deaths.csv'
	    	});
	    	$("#filter-dropdown").html('All Deaths <span class="caret"></span>');
	        break;
	    case 'age':
	     //    chart.load({
	     //    	url: 'data/opioid-type.csv'
	    	// });
	    	$("#filter-dropdown").html('Age <span class="caret"></span>');
	        break;
	    case 'county':
	     //    chart.load({
	     //    	url: 'data/total-deaths.csv'
	    	// });
	    	$("#filter-dropdown").html('County <span class="caret"></span>');
	        break;
	    case 'ethnicity':
	     //    chart.load({
	     //    	url: 'data/opioid-type.csv'
	    	// });
	    	$("#filter-dropdown").html('Ethnicity <span class="caret"></span>');
	        break;
	    case 'expected-source':
	     //    chart.load({
	     //    	url: 'data/total-deaths.csv'
	    	// });
	    	$("#filter-dropdown").html('Expected Source of Payment <span class="caret"></span>');
	        break;
	    case 'opioid-type':
	        chart.load({
	        	url: 'data/opioid-type.csv'
	    	});
	    	$("#filter-dropdown").html('Opioid Type <span class="caret"></span>');
	        break;
	    case 'sex':
	     //    chart.load({
	     //    	url: 'data/total-deaths.csv'
	    	// });
	    	$("#filter-dropdown").html('Sex <span class="caret"></span>');
	        break;
	    default:
	        chart.load({
	        	url: 'data/total-deaths.csv'
	    	});
	} 

}
