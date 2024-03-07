export type BudgetSchema = {
    listUser: User[],
    budgets: {
        [year: string]: {
            totalBudget: TotalBudget,
            listTransactionsCategories: string[],
            months: {
                [month: string]: MonthBudget | null,
            }
        }
    }
}

type User = {
    name: string,
    phoneNo: string,
    email: string,
}

type TotalBudget = {
    // TODO: find a way to modify cash if they use currency other thay myr
    cash: {
        amount: number,
        currency: string,
    },
    replenishBudgetTransactions: ReplenishBudgetTransaction[],
}

// type Bank = {
//     name: string,
//     amount: number,
//     currency: string,
// }

type ReplenishBudgetTransaction = {
    timestamp: string,
    typeAccount: string,
    amount: number,
    user: string,
    currency: string,
}

type MonthBudget = {
    monthlyBudget: {
        currency: string,
        amount: number,
        timestampLastUpdated: string,
    },
    // TODO: also use transactions for replenish monthly budget
    transactions: MonthTransaction[]
}

type MonthTransaction = {
    timestamp: string,
    // account: string,
    amount: number,
    currency: string,
    category: string,
    notes: string,
    user: string,
}

