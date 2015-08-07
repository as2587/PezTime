function GetTimeline(currModel) {
	var items;
	
	switch(currModel){
		case "Daphne":
			items = new vis.DataSet([
		      {id: 1, content: 'Abhishek', start: '2015-07-15', end: '2015-08-15'},
		      {id: 2, content: 'item 2', start: '2014-04-14'},

		    ]);
			break;
		case "HelloKitty":
			items = new vis.DataSet([
		      {id: 1, content: 'Abhishek', start: '2015-07-15', end: '2015-08-15'},
		      {id: 2, content: 'item 2', start: '2014-04-14'},

		    ]);
			break;
		
	}
	return items;
}

