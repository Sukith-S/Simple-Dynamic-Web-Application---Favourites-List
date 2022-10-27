
function changeImagePet(){
    var select = document.getElementById('pet');
	var x = select.options[select.selectedIndex].value;
    if(x=='dog'){
        document.getElementById('image').src='pet/dog.jpg';
    }else if(x=='cat'){
        document.getElementById('image').src='pet/cat.jpg';
    }else if(x=='hen'){
        document.getElementById('image').src='pet/hen.jpg';
    }else if(x=='duck'){
        document.getElementById('image').src='pet/duck.jpg';
    }else if(x=='lizard'){
        document.getElementById('image').src='pet/lizard.jpg';
    }else if(x=='snake'){
        document.getElementById('image').src='pet/snake.jpg';
    }
}
function changeImageFood(){
    var select1 = document.getElementById('food');
	var x1 = select1.options[select1.selectedIndex].value;
    if(x1=='north'){
        document.getElementById('imagef').src='food/north.jpg';
    }else if(x1=='south'){
        document.getElementById('imagef').src='food/south.jpg';
    }else if(x1=='chinese'){
        document.getElementById('imagef').src='food/chinese.jpg';
    }
}
function changeImageHobby(){
    var select11 = document.getElementById('hobby');
	var x11 = select11.options[select11.selectedIndex].value;
    if(x11=='music'){
        document.getElementById('imageh').src='hobby/music.jpg';
    }else if(x11=='cycle'){
        document.getElementById('imageh').src='hobby/cycle.jpg';
    }else if(x11=='swim'){
        document.getElementById('imageh').src='hobby/swim.jpg';
    }else if(x11=='games'){
        document.getElementById('imageh').src='hobby/games.jpg';
    }
}