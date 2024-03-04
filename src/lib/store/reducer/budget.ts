import { createSlice } from "@reduxjs/toolkit"
import { AppState } from "../store";
import { BudgetSchema } from "@/app/types/budget-schema";
import { faker } from "@faker-js/faker";

// const listFakeData = 
const fakeBudget: BudgetSchema = {
    listUser: [
        {
            name: faker.person.firstName(),
            phoneNo: faker.phone.number(),
            email: faker.internet.email(),
        }
    ],
    budgets: {
        year2023: {
            totalBudget: {
                bank: Array(2).fill(null).map(item => ({
                    name: faker.word.adverb(),
                    amount: +faker.finance.amount(),
                    currency: "myr",
                })),
                cash: {
                    amount: +faker.finance.amount(),
                    currency: "myr",
                },
                replenishBudgetTransactions: Array(1).fill(null).map(item => ({
                    timestamp: faker.date.past().toISOString(),
                    typeAccount: "cash",
                    amount: +faker.finance.amount(),
                    user: faker.person.firstName(),
                    currency: "myr",
                })),
            },
            listTransactionsCategories: [
                "Grocery"
            ],
            months: {
                january: {
                    monthlyBudget: {
                        currency: "myr",
                        amount: +faker.finance.amount(),
                        timestampLastUpdated: faker.date.past().toISOString(),
                    },
                    transactions: Array(1).fill(null).map(item => ({
                        timestamp: faker.date.past().toISOString(),
                        account: "cash",
                        amount: +faker.finance.amount(),
                        currency: "myr",
                        category: "Grocery",
                        notes: faker.word.words({ count: 5 }),
                        user: faker.person.firstName(),
                    })),
                },
                february: null,
                march: null,
                april: null,
                may: null,
                june: null,
                july: null,
                august: null,
                september: null,
                october: null,
                november: null,
                december: null,
            }
        }
    }
}

export const budgetSlice = createSlice({
  name: "budget",
  initialState: { 
    budgets: fakeBudget,
  },
  reducers: {
    // increment: (state) => {
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // }
  }
})

export const { 
    // decrement, 
    // increment, 
    // incrementByAmount 
} = budgetSlice.actions;
export const getBudgets = (state: AppState) => state.budget.budgets;
