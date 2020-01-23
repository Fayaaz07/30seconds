<template>
    <div>
        <timer :time='time'></timer>

        <ul>
            <li v-for="answer in answers" :key="answer">
                {{ answer }}
            </li>
        </ul>
            
    </div>
</template>

<script>
export default {
    props: {
        answers: {
            required: true,
        },
        time: {
            required: true,
        },
    },
}
</script>