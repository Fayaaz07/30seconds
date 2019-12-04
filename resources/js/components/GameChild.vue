<template>
    <div class="card">
        <div class="card-header">
            Child Component
        </div>

        <div class="card-body">
            I'm an example child component.
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Child component mounted.')
        }
    }
</script>