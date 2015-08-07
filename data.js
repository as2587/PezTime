function GetModels(){
 var items = ['Chewbacca','C3PO','Daphne','Fred','Gimli','Gollum','Hello Kitty','Legolas','R2D2', 'Scooby', 'Shaggy', 'Thor', 'Velma', 'Yoda','Darth Vader'];	
 return items;
}

function GetTimeline(currModel, todaystr) {
	var items;
	switch(currModel){
		case "Chewbacca":
			items = new vis.DataSet([
	      	  {id: 1, content: 'Example', start: '2015-04-12', end: '2015-08-10'}

	    	]);
			break;
		case "Daphne":
			items = new vis.DataSet([
				
		      {id: 1, content: 'Abhishek', start: '2015-07-15', end: '2015-08-03'},
			  {id: 2, content: 'Manan', start: '2015-08-03', end: '2015-08-05'},
  			  {id: 3, content: 'Survy', start: '2015-08-05', end: todaystr},
  			  {id: 4, content: 'Juan', start: '2015-07-01', end: '2015-07-15'}
				
				
		    ]);
			break;
		case "Fred":
			items = new vis.DataSet([
	      	  {id: 1, content: 'Example', start: '2015-04-14', end: '2015-08-10'}

		    ]);
			break;
		case "Gimli":
			items = new vis.DataSet([
	      	  {id: 1, content: 'Example', start: '2015-04-14', end: '2015-08-10'}

		    ]);
			break;
		case "R2D2":
			items = new vis.DataSet([{id: 1, content: 'Will', start: '2015-08-07', end: todaystr}
			]);
			break;
		case "Hello Kitty":
			items = new vis.DataSet([{id: 1, content: 'Alon', start: '2015-08-01', end: todaystr}
			]);
			break;
		case "Shaggy":
			items = new vis.DataSet([
			{id: 1, content: 'David', start: '2015-08-04', end: todaystr}
			]);
			break;
		case "C3PO":
			items = new vis.DataSet([{id: 1, content: 'Will', start: '2015-08-07', end: todaystr}
			]);
			break;
		case "Darth Vader":
			items = new vis.DataSet([{id: 1, content: 'Will', start: '2015-08-07', end: todaystr}
			]);
		break;
	}
	return items;
}

