import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { AppState } from "../store";
import { BudgetSchema, Transactions } from "@/app/types/budget-schema";
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
    },
}

const initChartData: {
    label: string,
    value: number,
}[] = transactionGroupByCategory(fakeBudget.budget.transactions);

export const budgetSlice = createSlice({
  name: "budget",
  initialState: { 
    budgets: fakeBudget,
    chartData: initChartData,
  },
  reducers: {
    addExpense: (state, action: PayloadAction<Transactions>) => {
        const { payload } = action;
        state.budgets.budget.transactions.push(payload);
        state.chartData = transactionGroupByCategory(state.budgets.budget.transactions);
    },
  }
});


function transactionGroupByCategory(transactions: any): {
    label: string,
    value: number
}[]
{
    const groupedTransactions = transactions.reduce((acc: any, transaction: any) => {
      const { category, amount } = transaction;
      if (!acc[category]) {
          acc[category] = { 
            value: 0,
            label: category, 
          };
      }
      acc[category].value += amount;
      return acc;
    }, {});
  
    return Object.values(groupedTransactions);
}

export const { 
    addExpense,
} = budgetSlice.actions;
export const getBudgets = (state: AppState) => state.budget.budgets;
