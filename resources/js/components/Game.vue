<template>
    <start-round :currentTurn="currentTurn"></start-round>
</template>

<script>
export default {
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
            pointsToWin: 30, //One right answer = one point
            timePerRound: 30, //Time in seconds
            currentTurn: null,
        }
    },
    methods: {
        startGame() {
            this.currentTurn = teams.team1;
        },
        updatePoints(team, points) {
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
            if(this.teams.team1.currentPoints >= this.pointsToWin || this.teams.team2.currentPoints >= this.pointsToWin) {
                this.endGame();
            } else {
                this.nextRound();
            }
        },
        nextRound() {

        },
        endGame() {
            console.log('Game has ended');
        },
    },
    computed: {
        nextTurn: function() {

        }
    }
}
</script>