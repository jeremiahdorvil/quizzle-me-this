function printScores() {

    var highscores = JSON.parse(document.localStorage.getItem('highscore')) || [];
    
    // 
    highscores.sort(function(a, b){
        return b.score - a.score;
    });

    //
    for (var i = 0; i < highscores.length; i += 1) {

        //
        var liCreate = document.createElement('li');
        liCreate.textContent = highscores[i].initials + '-' + highscores[i].score;

        var ol = document.getElementById('highscores');
        ol.append(liCreate);
    }
}

function clearHighScores() {

    this.localStorage.removeItem('highscores');

    this.location.reload();
}

document.getElementsByClassName('clear').onclick = clearHighScores;
printScores();