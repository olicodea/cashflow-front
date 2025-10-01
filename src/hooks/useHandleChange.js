import { useState } from "react";

export const useHandleChange = (initialValue) => {
    const [state, setState] = useState(initialValue);

    const handleChange = (key, value) => {
        setState((prev) => ({ ...prev, [key]: value }));
    };

    const resetForm = () => {
        setState(initialValue);
    };

    return {
        state,
        resetForm,
        handleChange,
    };
};
