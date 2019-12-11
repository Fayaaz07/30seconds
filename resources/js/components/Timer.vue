<template>
    <div>
        {{ time }}
    </div>
</template>

<script>
export default {
    props: {
        time: {
            required: true,
        },
    },
    methods: {
        countDownTimer() {
            if(this.time > 0) {
                setTimeout(() => {
                    this.time -= 1
                    this.countDownTimer()
                }, 1000)
            }
        }
    },
    created() {
        this.countDownTimer()
    }
}
</script>