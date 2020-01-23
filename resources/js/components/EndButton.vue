<template>
    <div>
    </div>
</template>

<script>
export default {
    methods: {
        endGame() {
            this.currentTurn = false;   //  Stop turns
            this.gameStarted = false;   //  Stop currentGame

            return "<ul><li>Team 1 : {{ this.teams.team1.currentPoints }} points</li><li>Team 2 : {{ this.teams.team2.currentPoints }} points</li></ul>";   //  Throw list element with points made of each team
            return "<button v-bind:href='/home'>Naar beginscherm</button>";     //  Button linking back to the home screen
        }
    },
}
</script>