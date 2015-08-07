function GetModels(){
 var items = ['Chewbacca','C3PO','Daphne','Fred','Gimli','Gollum','Hello Kitty','Legolas','R2D2', 'Scooby', 'Shaggy', 'Thor', 'Velma', 'Yoda'];	
 return items;
}

function GetTimeline(currModel, todaystr) {
	var items;
	switch(currModel){
		case "Chewbacca":
			items = new vis.DataSet([
	      	  {id: 1, content: 'Example', start: '2015-04-12', end: '2015-08-10'},

	    	]);
			break;
		case "C3PO":
			items = new vis.DataSet([
	      	  {id: 1, content: 'Example', start: '2015-04-24', end: '2015-08-10'},
			  {id: 2, content: 'Example2', start: '2015-04-22', end: '2015-04-24'},
	    	]);
			break;
		case "Daphne":
			items = new vis.DataSet([
		      {id: 1, content: 'Abhishek', start: '2015-07-15', end: '2015-08-03'},
			  {id: 2, content: 'Manan', start: '2015-08-03', end: todaystr}

		    ]);
			break;
		case "Fred":
			items = new vis.DataSet([
	      	  {id: 1, content: 'Example', start: '2015-04-14', end: '2015-08-10'},

		    ]);
			break;
		case "Gimli":
			items = new vis.DataSet([
	      	  {id: 1, content: 'Example', start: '2015-04-14', end: '2015-08-10'},

		    ]);
			break;
		
	}
	return items;
}

