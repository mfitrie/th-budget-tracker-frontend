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
    budget: {
        account: {
        cash: {
            amount: +faker.finance.amount(),
            currency: "myr", 
        },
        },
        replenishBudgetTransactions: Array(1).fill(null).map(item => ({
            timestamp: faker.date.past().toISOString(),
            amount: +faker.finance.amount(),
            user: faker.person.firstName(),
            currency: "myr",
            budgetType: "monthly",
        })),
        monthlyBudget: {
            currency: "myr",
            amount: +faker.finance.amount(),
            timestampLastUpdated: faker.date.past().toISOString(),
        },
        transactions: Array(10).fill(null).map(item => ({
            expenseName: faker.commerce.product(), 
            timestamp: faker.date.past().toISOString(),
            amount: +faker.finance.amount(),
            currency: "myr",
            category: "Grocery",
            notes: faker.word.words({ count: 5 }),
            user: faker.person.firstName(),
        })),
        listTransactionsCategories: [
            "Grocery",
            "Add budget",
        ],
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
