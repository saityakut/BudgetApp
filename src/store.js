import { writable,derived } from "svelte/store";
import { persistStore } from "./persist_store";

const initial = [
    {
        id: 1,
        name: 'Maaş',
        type: 'Income',
        amount: 5000,
        date:'01-01-2023'
    },
    {
        id: 2,
        name: 'kira',
        type: 'Expenses',
        amount: 200,
        date:'05-01-2023'
    },
    {
        id: 3,
        name: 'Altın alımı',
        type: 'Investments',
        amount: 1000,
        date:'09-01-2023'
    }
]

export const transactionStore = persistStore('transactionValues', initial);

export const countOfIncome = derived(transactionStore, $transactionStore => $transactionStore.filter((transaction) => transaction.type === 'Income').length);
export const countOfExpense = derived(transactionStore, $transactionStore => $transactionStore.filter((transaction) => transaction.type === 'Expenses').length);
export const countOfInvestment = derived(transactionStore, $transactionStore => $transactionStore.filter((transaction) => transaction.type === 'Investments').length);
export const amountOfIncome = derived(transactionStore, $transactionStore => $transactionStore.filter((transaction) => transaction.type === 'Income').reduce((a,item)=>a+item.amount,0));
export const amountOfExpense = derived(transactionStore, $transactionStore => $transactionStore.filter((transaction) => transaction.type === 'Expenses').reduce((a,item)=>a+item.amount,0));
export const amountOfInvestment = derived(transactionStore, $transactionStore => $transactionStore.filter((transaction) => transaction.type === 'Investments').reduce((a,item)=>a+item.amount,0));
export const incomeStore = derived(transactionStore, $transactionStore => $transactionStore.filter((transaction) => transaction.type === 'Income'));
export const investmentStore = derived(transactionStore, $transactionStore => $transactionStore.filter((transaction) => transaction.type === 'Investments'));
export const expenseStore = derived(transactionStore, $transactionStore => $transactionStore.filter((transaction) => transaction.type === 'Expenses'));


const initialSelectedType = 'all';

export const selectedTypeStore = persistStore('type', initialSelectedType);

const initialSearch = '';

export const searchStore = persistStore('search', initialSearch);

const initialLanguage = 'EN';

export const languageStore = persistStore('language', initialLanguage);