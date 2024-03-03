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
                bank: [
                    {
                        name: "MayBank",
                        amount: 5000,
                        currency: "myr",
                    },
                    {
                        name: "CIMB",
                        amount: 5000,
                        currency: "myr",
                    },
                ],
                cash: {
                   amount: 5000,
                   currency: "myr",
                },
                replenishBudgetTransactions: [
                    {
                        timestamp: "",
                        typeAccount: "cash",
                        amount: 2000,
                        user: "user1",
                        currency: "myr",
                    }
                ]
            },
            listTransactionsCategories: [
                "Grocery"
            ],
            months: {
                january: {
                    monthlyBudget: {
                        currency: "myr",
                        amount: 2000,
                        timestampLastUpdated: "",
                    },
                    transactions: [
                        {
                            timestamp: "",
                            account: "cash",
                            amount: 2000,
                            currency: "myr",
                            category: "",
                            notes: "",
                            user: "user1",
                        }
                    ]
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
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    }
  }
})

export const { 
    decrement, 
    increment, 
    incrementByAmount 
} = budgetSlice.actions;
export const getBudgets = (state: AppState) => state.budget.value;
