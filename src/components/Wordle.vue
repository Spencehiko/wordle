<template>
    <div class="wordle">
        <div class="header">
            <h3>WORDLE INFINITE</h3>
        </div>
        <div class="game">
            <div class="guess">
                <div
                    class="row"
                    v-for="i in 6"
                    :key="i"
                    :class="{ shake: shakeRow[i] }"
                >
                    <input
                        v-for="j in 5"
                        :key="j"
                        class="tile"
                        :class="{
                            wrong: check[i - 1][j - 1] === -1,
                            position: check[i - 1][j - 1] === 0,
                            success: check[i - 1][j - 1] === 1,
                        }"
                        disabled
                        v-model="guess[i - 1][j - 1]"
                    />
                </div>
            </div>
            <div class="keyboard">
                <button
                    class="key"
                    :class="{
                        wrong: letters[16] === -1,
                        position: letters[16] === 0,
                        success: letters[16] === 1,
                    }"
                    type="button"
                    @click="addLetter('q')"
                >
                    Q
                </button>
                <button
                    class="key"
                    :class="{
                        wrong: letters[22] === -1,
                        position: letters[22] === 0,
                        success: letters[22] === 1,
                    }"
                    type="button"
                    @click="addLetter('w')"
                >
                    W
                </button>
                <button
                    class="key"
                    :class="{
                        wrong: letters[4] === -1,
                        position: letters[4] === 0,
                        success: letters[4] === 1,
                    }"
                    type="button"
                    @click="addLetter('e')"
                >
                    E
                </button>
                <button
                    class="key"
                    :class="{
                        wrong: letters[17] === -1,
                        position: letters[17] === 0,
                        success: letters[17] === 1,
                    }"
                    type="button"
                    @click="addLetter('r')"
                >
                    R
                </button>
                <button
                    class="key"
                    :class="{
                        wrong: letters[19] === -1,
                        position: letters[19] === 0,
                        success: letters[19] === 1,
                    }"
                    type="button"
                    @click="addLetter('t')"
                >
                    T
                </button>
                <button
                    class="key"
                    :class="{
                        wrong: letters[24] === -1,
                        position: letters[24] === 0,
                        success: letters[24] === 1,
                    }"
                    type="button"
                    @click="addLetter('y')"
                >
                    Y
                </button>
                <button
                    class="key"
                    :class="{
                        wrong: letters[20] === -1,
                        position: letters[20] === 0,
                        success: letters[20] === 1,
                    }"
                    type="button"
                    @click="addLetter('u')"
                >
                    U
                </button>
                <button
                    class="key"
                    :class="{
                        wrong: letters[8] === -1,
                        position: letters[8] === 0,
                        success: letters[8] === 1,
                    }"
                    type="button"
                    @click="addLetter('ı')"
                >
                    I
                </button>
                <button
                    class="key"
                    :class="{
                        wrong: letters[14] === -1,
                        position: letters[14] === 0,
                        success: letters[14] === 1,
                    }"
                    type="button"
                    @click="addLetter('o')"
                >
                    O
                </button>
                <button
                    class="key"
                    :class="{
                        wrong: letters[15] === -1,
                        position: letters[15] === 0,
                        success: letters[15] === 1,
                    }"
                    type="button"
                    @click="addLetter('p')"
                >
                    P
                </button>
                <div class="space"></div>
                <button
                    class="key"
                    :class="{
                        wrong: letters[0] === -1,
                        position: letters[0] === 0,
                        success: letters[0] === 1,
                    }"
                    type="button"
                    @click="addLetter('a')"
                >
                    A
                </button>
                <button
                    class="key"
                    :class="{
                        wrong: letters[18] === -1,
                        position: letters[18] === 0,
                        success: letters[18] === 1,
                    }"
                    type="button"
                    @click="addLetter('s')"
                >
                    S
                </button>
                <button
                    class="key"
                    :class="{
                        wrong: letters[3] === -1,
                        position: letters[3] === 0,
                        success: letters[3] === 1,
                    }"
                    type="button"
                    @click="addLetter('d')"
                >
                    D
                </button>
                <button
                    class="key"
                    :class="{
                        wrong: letters[5] === -1,
                        position: letters[5] === 0,
                        success: letters[5] === 1,
                    }"
                    type="button"
                    @click="addLetter('f')"
                >
                    F
                </button>
                <button
                    class="key"
                    :class="{
                        wrong: letters[6] === -1,
                        position: letters[6] === 0,
                        success: letters[6] === 1,
                    }"
                    type="button"
                    @click="addLetter('g')"
                >
                    G
                </button>
                <button
                    class="key"
                    :class="{
                        wrong: letters[7] === -1,
                        position: letters[7] === 0,
                        success: letters[7] === 1,
                    }"
                    type="button"
                    @click="addLetter('h')"
                >
                    H
                </button>
                <button
                    class="key"
                    :class="{
                        wrong: letters[9] === -1,
                        position: letters[9] === 0,
                        success: letters[9] === 1,
                    }"
                    type="button"
                    @click="addLetter('j')"
                >
                    J
                </button>
                <button
                    class="key"
                    :class="{
                        wrong: letters[10] === -1,
                        position: letters[10] === 0,
                        success: letters[10] === 1,
                    }"
                    type="button"
                    @click="addLetter('k')"
                >
                    K
                </button>
                <button
                    class="key"
                    :class="{
                        wrong: letters[11] === -1,
                        position: letters[11] === 0,
                        success: letters[11] === 1,
                    }"
                    type="button"
                    @click="addLetter('l')"
                >
                    L
                </button>
                <div class="space"></div>
                <button class="key large" @click="submitGuess()" type="button">
                    Enter
                </button>
                <button
                    class="key"
                    :class="{
                        wrong: letters[25] === -1,
                        position: letters[25] === 0,
                        success: letters[25] === 1,
                    }"
                    type="button"
                    @click="addLetter('z')"
                >
                    Z
                </button>
                <button
                    class="key"
                    :class="{
                        wrong: letters[23] === -1,
                        position: letters[23] === 0,
                        success: letters[23] === 1,
                    }"
                    type="button"
                    @click="addLetter('x')"
                >
                    X
                </button>
                <button
                    class="key"
                    :class="{
                        wrong: letters[2] === -1,
                        position: letters[2] === 0,
                        success: letters[2] === 1,
                    }"
                    type="button"
                    @click="addLetter('c')"
                >
                    C
                </button>
                <button
                    class="key"
                    :class="{
                        wrong: letters[21] === -1,
                        position: letters[21] === 0,
                        success: letters[21] === 1,
                    }"
                    type="button"
                    @click="addLetter('v')"
                >
                    V
                </button>
                <button
                    class="key"
                    :class="{
                        wrong: letters[1] === -1,
                        position: letters[1] === 0,
                        success: letters[1] === 1,
                    }"
                    type="button"
                    @click="addLetter('b')"
                >
                    B
                </button>
                <button
                    class="key"
                    :class="{
                        wrong: letters[13] === -1,
                        position: letters[13] === 0,
                        success: letters[13] === 1,
                    }"
                    type="button"
                    @click="addLetter('n')"
                >
                    N
                </button>
                <button
                    class="key"
                    :class="{
                        wrong: letters[12] === -1,
                        position: letters[12] === 0,
                        success: letters[12] === 1,
                    }"
                    type="button"
                    @click="addLetter('m')"
                >
                    M
                </button>
                <button class="key large" @click="removeLetter()" type="button">
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
        <div class="alertbox" v-if="alert">{{ alertMessage }}</div>
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
            letters: [-2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2],
            guess: ['', '', '', '', '', ''],
            check: [
                [-2, -2, -2, -2, -2],
                [-2, -2, -2, -2, -2],
                [-2, -2, -2, -2, -2],
                [-2, -2, -2, -2, -2],
                [-2, -2, -2, -2, -2],
                [-2, -2, -2, -2, -2],
            ],
            words: words,
            target: '',
            targets: targets,
            row: 1,
            alertMessage: '',
            alert: false,
            shakeRow: [false, false, false, false, false, false],
        }
    },
    beforeMount() {
        this.target = this.targets[Math.floor(Math.random() * this.targets.length)]
    },
    created() {
        window.addEventListener('keydown', (e) => {
            e.preventDefault();
            if (this.row !== 7) {
                if (e.keyCode === 13 && this.guess[this.row - 1].length < 5) {
                    this.showAlert(false, 'Complete the word!', 1500);
                }
                if (this.guess[this.row - 1].length < 5) {
                    if (((e.keyCode > 64 && e.keyCode < 91) || (e.keyCode > 96 && e.keyCode < 123))) {
                        this.addLetter(e.key);
                    }
                }
                // enter
                if (e.keyCode === 13 && this.guess[this.row - 1].length === 5) {
                    this.submitGuess();
                }
                // backspace
                if (e.keyCode === 8 && this.guess[this.row - 1].length > 0) {
                    this.removeLetter();
                }
            } else {
                this.showAlert(true, 'Gameover! The word was ' + this.target + '... Refresh to restart', 2000);
            }
        });
    },
    methods: {
        addLetter(letter: string) {
            if (this.row === 7) {
                this.showAlert(true, 'Gameover! The word was ' + this.target + '... Refresh to restart', 2000);
            }
            this.guess[this.row - 1] = this.guess[this.row - 1] + letter;
        },
        removeLetter() {
            if (this.row === 7) {
                this.showAlert(true, 'Gameover! The word was ' + this.target + '... Refresh to restart', 2000);
            }
            this.guess[this.row - 1] = this.guess[this.row - 1].slice(0, -1);
        },
        submitGuess() {
            if (this.row === 7) {
                this.showAlert(true, 'Gameover! The word was ' + this.target + '... Refresh to restart', 2000);
            }
            this.validateGuess(this.guess[this.row - 1]);
        },
        validateGuess(val: string) {
            val = val.toLocaleUpperCase('tr-TR').toLowerCase();
            if (this.target === val) {
                this.check[this.row - 1] = [1, 1, 1, 1, 1];
                this.showAlert(true, 'Congratulations! You win!', 1500);
                this.row = 7;
                this.updateLetters(val);
                return;
            }
            const temp = this.target.split('');
            if (!words.includes(val)) {
                this.showAlert(false, 'Word is not in word list', 1500);
                return;
            }
            // validation logic
            temp.forEach((letter: string, index: number) => {
                let foundIndex = -1;
                for (let i = 0; i < 5; i++) {
                    if (letter === val.charAt(i) && i === index) {
                        if (foundIndex > -1) {
                            this.check[this.row - 1][foundIndex] = -2
                        }
                        this.check[this.row - 1][i] = 1
                        break;
                    } else if (letter === val.charAt(i) && this.check[this.row - 1][i] === -2 && foundIndex === -1) {
                        foundIndex = i;
                        this.check[this.row - 1][i] = 0
                    }
                }
            });
            this.updateLetters(val);
            this.check[this.row - 1] = this.check[this.row - 1].map((el) => el === -2 ? -1 : el)
            if (this.row === 6) {
                this.showAlert(true, 'Gameover! The word was ' + this.target + '... Refresh to restart', 2000);
            }
            this.row++;
        },
        updateLetters(val: string) {
            const temp = this.target.split('');
            for (let i = 0; i < 5; i++) {
                this.letters[val.charCodeAt(i) - 97] = this.letters[val.charCodeAt(i) - 97] === -2 ? -1 : this.letters[val.charCodeAt(i) - 97];
            }
            temp.forEach((letter: string, index: number) => {
                for (let i = 0; i < 5; i++) {
                    if (letter === val.charAt(i) && i === index) {
                        this.letters[val.charCodeAt(i) - 97] = 1
                        break;
                    } else if (letter === val.charAt(i) && this.check[this.row - 1][i] === -2) {
                        this.letters[val.charCodeAt(i) - 97] = 0
                    }
                }
            });
        },
        showAlert(type: boolean, message: string, duration: number) {
            if (!type)
                this.shake();
            this.alertMessage = message
            this.alert = true;
            setTimeout(() => {
                this.alert = false;
            }, duration);
        },
        shake() {
            this.shakeRow[this.row] = true;
            setTimeout(() => {
                this.shakeRow[this.row] = false;
            }, 1500);
        }
    },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.wordle {
    position: relative;
    height: calc(100% - 30px);
    .header {
        width: 100%;
        height: 30px;
        border-bottom: 2px solid #545454;
        margin: auto 0;
    }
    .game {
        display: flex;
        flex-direction: column;
        .guess {
            display: inline-block;
            margin: 60px auto;
            .row {
                margin-top: 5px;
                display: flex;
                grid-gap: 5px;
                &.shake {
                    animation: shake 250ms ease-in-out;
                }
                .tile {
                    height: 75px;
                    width: 75px;
                    border: none;
                    display: inline-flex;
                    caret-color: transparent;
                    color: #fff;
                    text-align: center;
                    font-size: 24px;
                    text-transform: uppercase;
                    font-weight: 600;
                    padding: 2px;
                    border: 2px solid #3a3a3c;
                    background: transparent;
                    padding: 0;
                    transition: background-color 4s ease, transform 1s ease;
                    &.success {
                        transform: rotateX(-180deg) scaleY(-1);
                        background-color: #538d4e;
                    }
                    &.position {
                        transform: rotateX(-180deg) scaleY(-1);
                        background-color: #b59f3b;
                    }
                    &.wrong {
                        transform: rotateX(-180deg) scaleY(-1);
                        background-color: #939598;
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
            bottom: 0;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            width: 90%;
        }
        .key {
            font-size: 14px;
            font-weight: 700;
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
            &.success {
                background-color: #538d4e;
            }
            &.position {
                background-color: #b59f3b;
            }
            &.wrong {
                background-color: #3a3a3c;
            }
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
    .alertbox {
        height: 30px;
        position: absolute;
        top: 60px;
        left: 50%;
        transform: translateX(-50%);
        background: #fff;
        color: #000;
        padding: 10px 10px 0;
        border-radius: 10px;
        font-weight: 700;
    }

    @media screen and (max-width: 430px) {
        .game {
            .guess {
                .row {
                    .tile {
                        height: 65px;
                        width: 65px;
                    }
                }
            }
        }
    }
    @media screen and (max-width: 370px) {
        .game {
            .guess {
                .row {
                    .tile {
                        height: 50px;
                        width: 50px;
                    }
                }
            }
        }
    }
    @media screen and (max-width: 300px) {
        .game {
            .guess {
                .row {
                    .tile {
                        height: 40px;
                        width: 40px;
                    }
                }
            }
        }
    }

    @keyframes shake {
        10% {
            transform: translateX(-5%);
        }

        30% {
            transform: translateX(5%);
        }

        50% {
            transform: translateX(-7.5%);
        }

        70% {
            transform: translateX(7.5%);
        }

        90% {
            transform: translateX(-5%);
        }

        100% {
            transform: translateX(0);
        }
    }
}
</style>
