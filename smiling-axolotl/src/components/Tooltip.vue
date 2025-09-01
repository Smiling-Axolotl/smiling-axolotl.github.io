<template>
    <span class="tooltip-wrapper" @mouseenter="show = true" @mouseleave="show = false">
        <slot />
        <transition name="tooltip-fade">
            <span v-if="show" class="tooltip-content" :class="position">
                {{ text }}
            </span>
        </transition>
    </span>
</template>

<script>
export default {
    name: 'Tooltip',
    props: {
        text: {
            type: String,
            required: true,
        },
        position: {
            type: String,
            default: 'top',
        },
    },
    data() {
        return {
            show: false,
        };
    },
};
</script>

<style scoped>
.tooltip-wrapper {
    position: relative;
    display: inline-block;
}

.tooltip-content {
  all: revert;
    position: absolute;
    background: #222;
    color: #fff;
    padding: 0.4em 0.8em;
    border-radius: 6px;

    font-family: 'Poppins', sans-serif;
    font-size: 0.95em;
    white-space: nowrap;
    z-index: 1000;
    opacity: 0.95;
    pointer-events: none;
}

.tooltip-content.top {
    left: 50%;
    bottom: 100%;
    transform: translateX(-50%) translateY(-8px);
}

.tooltip-content.bottom {
    left: 50%;
    top: 100%;
    transform: translateX(-50%) translateY(8px);
}

.tooltip-content.left {
    right: 100%;
    top: 50%;
    transform: translateX(-8px) translateY(-50%);
}

.tooltip-content.right {
    left: 100%;
    top: 50%;
    transform: translateX(8px) translateY(-50%);
}

/* Animation */
.tooltip-fade-enter-active,
.tooltip-fade-leave-active {
    transition: opacity 0.18s cubic-bezier(.4, 0, .2, 1), transform 0.18s cubic-bezier(.4, 0, .2, 1);
}

.tooltip-fade-enter-from,
.tooltip-fade-leave-to {
    opacity: 0;
    transform: translateY(4px) scale(0.98);
}

.tooltip-fade-enter-to,
.tooltip-fade-leave-from {
    opacity: 0.95;
    transform: translateY(0) scale(1);
}
</style>
