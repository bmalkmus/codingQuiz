    console.log(JSON.parse(localStorage.getItem('scores')));
    const highScoresList = document.getElementById('Highscores');
    finalArray = JSON.parse(localStorage.getItem('scores'));
    finalArray.sort(function(a,b){
        return b.score - a.score
    });
    for (i = 0; i < finalArray.length; i++) {
        
         object23 = finalArray[i];
        
         
        let list = document.createElement("li");
        let textList = document.createTextNode(Object.values(object23));         
        list.appendChild(textList);                              
        highScoresList.appendChild(list);

    }
    function clearHigh(){
        localStorage.clear();
        location.reload(true);
    }
    
