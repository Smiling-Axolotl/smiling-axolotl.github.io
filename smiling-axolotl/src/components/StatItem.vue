<template>
    <div class="stat">
        <span class="stat-number">{{ number }}</span>
        <span class="stat-label">{{ label }}</span>
    </div>
</template>

<script>
export default {
    name: 'StatItem',
    props: {
        number: {
            type: [String, Number],
            required: true,
        },
        label: {
            type: String,
            required: true,
        },
    },
};
</script>

<style scoped>
.stat {
    text-align: center;
}

.stat-number {
    display: block;
    font-family: 'Dela Gothic One', cursive;
    font-size: 2.5rem;
    color: #2898FF;
}

.stat-label {
    font-size: 0.9rem;
    color: #999;
    text-transform: uppercase;
    letter-spacing: 1px;
}
</style>
