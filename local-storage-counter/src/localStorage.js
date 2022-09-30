export funktion saveToLocal(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export funtion loadFromLocal(key) {
    try {
        return JSON.parse(localStorage.getItem(key)
    } catch (error) {
        console.error(error.message);
    }
}