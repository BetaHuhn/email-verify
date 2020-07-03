<template>
    <div class="main-button">
        <button class="clean"><slot></slot></button>
    </div>                  
</template>

<script>
    export default {
        name: 'Button'
    }
</script>

<style scoped>
    .main-button {
        text-align: center;
    }

    .clean {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-weight: 600;
        font-style: normal;
        width: 300px;
        text-transform: uppercase;
        font-size: 14px;
        line-height: 9px;
        letter-spacing: .6px;
        padding: 0 24px;
        height: 40px;
        border-radius: 40px;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        -webkit-transition: all .2s ease;
        -moz-transition: all .2s ease;
        -o-transition: all .2s ease;
        transition: all .2s ease;
        background-color: var(--red);
        color: var(--font);
        outline: 0;
        border: 0;
        -webkit-transition-property: opacity, background-color, -webkit-transform;
        -moz-transition-property: opacity, background-color, -webkit-transform;
        -o-transition-property: opacity, transform, background-color;
        transition-property: opacity, transform, background-color, -webkit-transform;
        cursor: pointer;
        margin-bottom: 20px;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        user-select: none;
    }

    .clean:hover {
        opacity: .8;
    }
    
</style>