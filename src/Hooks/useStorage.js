import react from "react";
import { useState } from "react";

export function useLocalStorage(key, defaultValue) {
    return useStorage(key, defaultValue, window.localStorage);
}

function useStorage(key, defaultValue, storageObject) {
    const [value, setValue] = react.useState(() => {
        const jsonValue = storageObject.getItem(key);
        return jsonValue != null
            ? JSON.parse(jsonValue)
            : typeof defaultValue === "function"
                ? defaultValue()
                : defaultValue;
    });

    react.useEffect(() => {
        if (value === undefined)
            return storageObject.removeItem(key);
        storageObject.setItem(key, JSON.stringify(value));
    }, [key, value, storageObject]);
    const remove = react.useCallback(() => {
        setValue(undefined);
    }, []);
    return [value, setValue, remove];
}
