<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        Parent Component
                    </div>

                    <div class="card-body">
                        I'm an example parent component.
                    </div>
                </div>
            </div>
        </div>
    </div>
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
            turns: 1,
        }
    },
    methods: {
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
                console.log('Game is not over yet');
            }
        },
        endGame() {
            console.log('Game has ended');
        }
    },
}
</script>