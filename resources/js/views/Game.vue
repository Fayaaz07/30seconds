<template>
    <div class="container">
        <p>Displays Content</p>
    </div>
</template>

<script>
export default {
    mounted() {
        this.startGame();  
    },
    data() {
        return {
            teams: {
                team1: {
                    name: "Team 1",
                    currentPoints: 0,
                },
                team2: {
                    name: "team 2",
                    currentPoints: 0,
                },
            },
            settings: {
                pointsToWin: 30, //One right answer = one point
                timePerRound: 30, //Time in seconds
            },
            allAnswers: ['Airplane', 'Ears', 'Piano', 'Angry', 'Elephant', 'Pinch', 'Baby', 'Fish', 'Reach', 'Ball', 'Flick', 'Remote', 'Baseball', 'Football', 'Roll', 'Basketball', 'Fork', 'Sad', 'Bounce', 'Giggle', 'Scissors', 'Cat', 'Golf', 'Skip', 'Chicken', 'Guitar', 'Sneeze', 'Chimpanzee', 
                        'Hammer', 'Spin', 'Clap', 'Happy', 'Spoon', 'Cough', 'Horns', 'Stomp', 'Cry', 'Joke', 'Stop', 'Dog', 'Mime', 'Tail', 'Drink', 'Penguin', 'Toothbrush', 'Drums', 'Phone', 'Wiggle', 'Duck', 'Photographer'],
            currentTurn: null,
            currentAnswers: [],
            gameStarted: false, //Indicated whether the game has started.
        }
    },
    methods: {
        startGame() {
            this.currentTurn = this.teams.team1;    //  starting team

            this.getNewAnswers();   //  new words

            this.gameStarted = true;    //  game started
        },
        getNewAnswers() {
            let i = 0;
            for(i=0; i<=4; i++) {   //  looping over allAnswers array
                this.currentAnswers[i] = this.allAnswers[Math.floor(Math.random() * this.allAnswers.length)];   //  grab 5 random words from the array in data
            }
            console.log(this.currentAnswers);   //  put these words in the console
        },
        updatePoints(team, points) {    //  give team.name and points
            gameStarted = false;    //  game paused

            if(this.teams.team1.name === team.name) {   //  team1.name === currentTurn of team
                this.teams.team1.currentPoints += points;
                console.log('Team 1 points: ' + this.teams.team1.currentPoints);    // echo the points of team 1
                console.log('Team 2 points: ' + this.teams.team2.currentPoints);    //  echo the points of team 2
            } else {
                this.teams.team2.currentPoints += points;
                console.log('Team 1 points: ' + this.teams.team1.currentPoints);    // echo the points of team 1
                console.log('Team 2 points: ' + this.teams.team2.currentPoints);    //  echo the points of team 2
            }
            this.checkPoints();
        },
        checkPoints() {
            if(this.teams.team1.currentPoints >= this.pointsToWin || this.teams.team2.currentPoints >= this.pointsToWin) {  //  if a team does have more points than winning points, victory (game Ends)
                this.endGame();
            } else {
                this.nextRound();
            }
        },
        nextRound() {
            this.currentTurn = this.nextTurn(); //  switch turns

            this.getNewAnswers();   //  new random words

            this.gameStarted = true;    //  game continues
        },
        nextTurn() {
            if(this.currentTurn === this.teams.team1) { //  if currentTeam === team1
                return this.teams.team2;    //  switch team
            } else {
                return this.teams.team1;
            }
        },
        endGame() {
            this.gameStarted = false;
            console.log('Team1' + this.teams.team1.currentPoints);
            console.log('Team2' + this.teams.team2.currentPoints);
            console.log('Game has ended');
        },
    },
    computed: {
        
    }
}
</script>