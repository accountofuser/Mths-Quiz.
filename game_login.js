function adduser() {
    player_1name = document.getElementById('player1_name').value;
    player_2name = document.getElementById('player2_name').value;
    localStorage.setItem('player_1name', player_1name);
    localStorage.setItem('player_2name', player_2name);
    window.location.replace('index2.html');
}