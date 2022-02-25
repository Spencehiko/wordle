<template>
    <div class="wordle">
        <div class="guess">
            <div class="row" v-for="i in 5" :key="i">
                <input
                    class="tile empty"
                    v-for="j in 5"
                    :key="j"
                    disabled
                    v-model="guess[i - 1][j - 1]"
                />
            </div>
        </div>
        <div data-keyboard class="keyboard">
            <button class="key" data-key="Q">Q</button>
            <button class="key" data-key="W">W</button>
            <button class="key" data-key="E">E</button>
            <button class="key" data-key="R">R</button>
            <button class="key" data-key="T">T</button>
            <button class="key" data-key="Y">Y</button>
            <button class="key" data-key="U">U</button>
            <button class="key" data-key="I">I</button>
            <button class="key" data-key="O">O</button>
            <button class="key" data-key="P">P</button>
            <div class="space"></div>
            <button class="key" data-key="A">A</button>
            <button class="key" data-key="S">S</button>
            <button class="key" data-key="D">D</button>
            <button class="key" data-key="F">F</button>
            <button class="key" data-key="G">G</button>
            <button class="key" data-key="H">H</button>
            <button class="key" data-key="J">J</button>
            <button class="key" data-key="K">K</button>
            <button class="key" data-key="L">L</button>
            <div class="space"></div>
            <button data-enter class="key large">Enter</button>
            <button class="key" data-key="Z">Z</button>
            <button class="key" data-key="X">X</button>
            <button class="key" data-key="C">C</button>
            <button class="key" data-key="V">V</button>
            <button class="key" data-key="B">B</button>
            <button class="key" data-key="N">N</button>
            <button class="key" data-key="M">M</button>
            <button data-delete class="key large">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                >
                    <path
                        fill="#fff"
                        d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"
                    ></path>
                </svg>
            </button>
        </div>
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
            guess: ['', '', '', '', ''],
            words: words,
            targets: targets,
            row: 1,
        }
    },
    created() {
        window.addEventListener('keydown', (e) => {
            if (this.row !== 6) {
                if (e.keyCode === 13 && this.guess[this.row - 1].length < 5) {
                    alert('Complete the word!');
                }
                if (this.guess[this.row - 1].length < 5) {
                    if (((e.keyCode > 64 && e.keyCode < 91) || (e.keyCode > 96 && e.keyCode < 123))) {
                        this.guess[this.row - 1] = this.guess[this.row - 1] + e.key;
                    }
                }
                // enter
                if (e.keyCode === 13 && this.guess[this.row - 1].length === 5) {
                    if (this.validateGuess(this.guess[this.row - 1])) {
                        this.row++;
                    } else {
                      alert('Word is not in word list');
                    }
                }
                // backspace
                if (e.keyCode === 8 && this.guess[this.row - 1].length > 0) {
                    this.guess[this.row - 1] = this.guess[this.row - 1].slice(0, -1);
                }
            } else {
              alert('Gameover! refresh to restart');
            }
        });
    },
    methods: {
        validateGuess(val: string) {
            return words.includes(val);
        }
    },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.wordle {
    .guess {
        display: inline-block;
        margin: 0 auto;
        .row {
            margin-top: 5px;
            display: flex;
            grid-gap: 5px;
            .tile {
                height: 75px;
                width: 75px;
                border: none;
                display: inline-flex;
                caret-color: transparent;
                &.empty {
                    border: 2px solid #3a3a3c;
                    background: transparent;
                    color: #fff;
                    text-align: center;
                    font-size: 24px;
                    text-transform: uppercase;
                    font-weight: 600;
                }
                &:hover {
                    cursor: pointer;
                }
            }
        }
    }
    .keyboard {
        display: grid;
        grid-template-columns: repeat(20, minmax(auto, 1.25em));
        grid-auto-rows: 3em;
        gap: 0.25em;
        justify-content: center;
        bottom: 10px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
    .key {
        font-size: inherit;
        grid-column: span 2;
        border: none;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: hsl(200, 1%, calc(51%));
        color: white;
        fill: white;
        text-transform: uppercase;
        border-radius: 0.25em;
        cursor: pointer;
        user-select: none;
        &.large {
            grid-column: span 3;
        }
        > svg {
            width: 1.75em;
            height: 1.75em;
        }
        &:hover {
            --lightness-offset: 10%;
        }
        &:focus {
            --lightness-offset: 10%;
        }
    }
}
</style>
