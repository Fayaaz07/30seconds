<template>
    <div>
        <p id="round">
            {{ msg1 }}
            {{ msg2 }}
        </p>
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
                    name: "Team1",
                    currentPoints: 0,
                },
                team2: {
                    name: "Team2",
                    currentPoints: 0,
                },
            },
            gameStarted = true,
        }
    },
    methods: {
        startGame() {
            this.gameStarted = true;
            this.updatePoints();
        },
        updatePoints() {
            if(this.teams.team1.currentPoints == 0){
                this.teams.team1.currentPoints + 1;
            } else {
                this.teams.team2.currentPoints + 1;
            }
            this.endGame();
        },
        endGame() {
            this.gameStarted = false;
            msg1: 'Team 1 :' + this.teams.team1.currentPoints;
            msg2: 'Team 2 :' + this.teams.team2.currentPoints;
        }
    },
}
</script>