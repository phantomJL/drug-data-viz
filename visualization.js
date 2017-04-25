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
	setTimeout(function () {
		switch(dataToLoad) {
		    case 'total-deaths':
		        chart.load({
		        	url: 'data/total-deaths.csv'
		    	});
		        break;
		    case 'opioid-type':
		        chart.load({
		        	url: 'data/opioid-type.csv'
		    	});
		        break;
		    default:
		        chart.load({
		        	url: 'data/total-deaths.csv'
		    	});
		} 
		
	}, 1000);

}
