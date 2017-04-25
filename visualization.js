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
		        	url: 'data/opioid-type.csv'
		    	});
	    	},1000);
	    	$("#filter-dropdown").html('Age <span class="caret"></span>');
	        break;
	    case 'county':
	    	setTimeout(function(){
		        chart.load({
		        	url: 'data/total-deaths.csv'
		    	});
	    	},1000);
	    	$("#filter-dropdown").html('County <span class="caret"></span>');
	        break;
	    case 'ethnicity':
	    	setTimeout(function(){
		        chart.load({
		        	url: 'data/opioid-type.csv'
		    	});
	    	},1000);
	    	$("#filter-dropdown").html('Ethnicity <span class="caret"></span>');
	        break;
	    case 'expected-source':
	    	setTimeout(function(){
		        chart.load({
		        	url: 'data/total-deaths.csv'
		    	});
	    	},1000);
	    	$("#filter-dropdown").html('Expected Source of Payment <span class="caret"></span>');
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
		        	url: 'data/total-deaths.csv'
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
