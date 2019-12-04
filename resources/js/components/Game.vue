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
                <game-child></game-child>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Parent component mounted.')
        }
    }
</script>