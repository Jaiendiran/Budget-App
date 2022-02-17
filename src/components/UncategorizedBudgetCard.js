import { UNCATEGORIZED_BUDGET_ID, useBudgets } from '../context/BudgetContext';
import BudgetCard from '../components/Budget-card';

export default function UncategorizedBudgetCard(props) {
    const { getBudgetExpenes } = useBudgets();
    const amount = getBudgetExpenes(UNCATEGORIZED_BUDGET_ID).reduce((total, expense) => total + expense.amount, 0);

    if(amount === 0) return null;

    return (
        <BudgetCard 
            amount={amount} 
            gray 
            name='uncategorized' 
            {...props} 
        />
    )
}
