<template>
<div>
    <show-round v-if="roundStarted" :answers="currentAnswers" :time="settings.timePerRound"></show-round>
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
            this.currentTurn = this.teams.team1;

            this.getNewAnswers();

            this.roundStarted = true;
        },
        getNewAnswers() {
            let i = 0;
            for(i=0; i<=4; i++) {
                this.currentAnswers[i] = this.allAnswers[Math.floor(Math.random() * this.allAnswers.length)];
            }
            console.log(this.currentAnswers);
        },
        updatePoints(team, points) {
            gameStarted = false;

            if(this.teams.team1.name === team.name) {
                this.teams.team1.currentPoints += points;
                console.log('Team 1 points: ' + this.teams.team1.currentPoints);
            } else {
                this.teams.team2.currentPoints += points;
                console.log('Team 2 points: ' + this.teams.team2.currentPoints);
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
            this.currentTurn = this.nextTurn();

            this.getNewAnswers();

            this.roundStarted = true;
        },
        nextTurn() {
            if(this.currentTurn === this.teams.team1) {
                return this.teams.team2;
            } else {
                return this.teams.team1;
            }
        },
        endGame() {
            console.log('Game has ended');
        },
    },
}
</script>