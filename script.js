function count_rabbits() {
    for(var i=1; i<=3; i++) {
        // operator + concatenates strings
        alert("Rabbit "+i+" out of the hat!")
    }
}

function getPlayerData(){
	var client = new XMLHttpRequest();
	client.open('GET', 'https://github.com/as2587/PezTime/blob/master/abhishekPEZ.txt');
	client.onreadystatechange = function() {
	  alert(client.responseText);
	}
	client.send();
}