<template>
<div>
    <show-round v-if="roundStarted" :answers="currentAnswers" :time="settings.timePerRound"></show-round>
    <button @click="endGame">Stop spel!</button>
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
            roundStarted: false, //Indicates whether a round is currently started.
        }
    },
    methods: {
        startGame() {
            this.currentTurn = this.teams.team1;    //  starting team

            this.getNewAnswers();   //  new words

            this.roundStarted = true;
        },
        getNewAnswers() {
            let i = 0;
            for(i=0; i<=4; i++) {   //  looping over allAnswers array
                this.currentAnswers[i] = this.allAnswers[Math.floor(Math.random() * this.allAnswers.length)];   //  grab 5 random words from the array in data
            }
            console.log(this.currentAnswers);   //  put these words in the console
        },
        updatePoints(team, points) {
            roundStarted = false;

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
            if(this.teams.team1.currentPoints >= this.settings.pointsToWin || this.teams.team2.currentPoints >= this.settings.pointsToWin) {
                this.endGame();
            } else {
                this.nextRound();
            }
        },
        nextRound() {
            this.currentTurn = this.nextTurn(); //  switch turns

            this.getNewAnswers();   //  new random words

            this.roundStarted = true;
        },
        nextTurn() {
            if(this.currentTurn === this.teams.team1) { //  if currentTeam === team1
                return this.teams.team2;    //  switch team
            } else {
                return this.teams.team1;
            }
        },
        endGame() {
            this.currentTurn = null;
            this.roundStarted = false;

            return "<ul><li>Team 1 : {{ this.teams.team1.currentPoints }} points</li><li>Team 2 : {{ this.teams.team2.currentPoints }} points</li></ul>";   //  Throw list element with points made of each team
            return "<button v-bind:href='/'>Naar beginscherm</button>";     //  Button linking back to the home screen
        },
    },
}
</script>