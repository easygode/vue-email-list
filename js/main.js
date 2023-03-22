/*
Attraverso l'apposita API di Boolean :
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/

'use strict';

const { createApp } = Vue

createApp({
    data(){
        return{
            //empty array for e-mails
            mails: []
        }
    },
    mounted() {
        //for loop until 10
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => {
                //push in the array
                this.mails.push(response.data.response)
            })
        }
    }
}).mount('#app')