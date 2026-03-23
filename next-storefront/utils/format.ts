export function formatCurrency(amount: number | null) {

    const value = amount || 0;
    const formattedValue = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(value);

    return formattedValue;
}