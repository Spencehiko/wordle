<template>
  <div class="wordle">
    {{words}}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import store from '@/store';
import words from '@/datas/words.json';
import targets from '@/datas/targets.json';

export default defineComponent({
  name: 'Wordle',
  data() {
        return {
            words: words,
            targets: targets
        }
    },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
