function GetTimeline(currModel) {
	var items;
	//['Chewbacca','C3PO','Daphne','Fred','Gimli','Gollum','Hello Kitty','Legolas','R2D2', 'Scooby', 'Shaggy', 'Thor', 'Velma', 'Yoda']
	switch(currModel){
		case "Chewbacca":
			items = new vis.DataSet([
	      	  {id: 2, content: 'item 2', start: '2014-04-14'},

	    	]);
			break;
		case "C3PO":
			items = new vis.DataSet([
	      	  {id: 2, content: 'item 2', start: '2014-04-14'},

	    	]);
			break;
		case "Daphne":
			items = new vis.DataSet([
		      {id: 1, content: 'Abhishek', start: '2015-07-15', end: '2015-08-10'},
		      {id: 2, content: 'item 2', start: '2014-04-14'},

		    ]);
		case "Fred":
			items = new vis.DataSet([
		      {id: 2, content: 'item 2', start: '2014-04-14'},

		    ]);
			break;
		case "Gimli":
			items = new vis.DataSet([
		      {id: 2, content: 'item 2', start: '2014-04-14'},

		    ]);
			break;
		
	}
	return items;
}

