<template>
    <div class="service-card">
        <div class="service-icon">
            <slot name="icon">{{ icon }}</slot>
        </div>
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
    </div>
</template>

<script>
export default {
    name: 'ServiceCard',
    props: {
        icon: {
            type: String,
            default: '',
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
};
</script>

<style scoped>
.service-card {
    background: #f8f9fa;
    padding: 2rem;
    border-radius: 15px;
    text-align: center;
    transition: transform 0.3s ease;
}

.service-card:hover {
    transform: translateY(-5px);
}

.service-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
    user-select: none;
}

.service-card h3 {
    font-family: "Poppins", sans-serif;
    font-size: 1.3rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 1rem;
}

.service-card p {
    color: #666;
    line-height: 1.6;
}
</style>
