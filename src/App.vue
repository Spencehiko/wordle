<template>
    <Wordle />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Wordle from './components/Wordle.vue';

export default defineComponent({
    name: 'App',
    components: {
        Wordle
    }
});
</script>

<style lang="less">
html,
body {
    padding: 0;
    margin: 0;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background: #2c3e50;
    width: 100%;
    height: calc(100vh - 60px);
    padding-top: 60px;
}
</style>
