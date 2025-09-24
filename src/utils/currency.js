export const formatCurrency = (amount) =>
    amount.toLocaleString("es-AR", {
        style: "currency",
        currency: "ARS",
    });
