export type BudgetSchema = {
    listUser: User[],
    budget: {
        account: {
            cash: {
                amount: number,
                currency: string,
            }
        },
        replenishBudgetTransactions: ReplenishBudgetTransaction[],
        monthlyBudget: {
            currency: string,
            amount: number,
            timestampLastUpdated: string,
        },
        transactions: Transactions[],
        listTransactionsCategories: string[],
    }
}

type User = {
    name: string,
    phoneNo: string,
    email: string,
}

type ReplenishBudgetTransaction = {
    timestamp: string,
    amount: number,
    user: string,
    currency: string,
    budgetType: "monthly" | "total",
}

type Transactions = {
    expenseName: string,
    timestamp: string,
    // account: string,
    amount: number,
    currency: string,
    category: string,
    notes: string,
    user: string,
}

