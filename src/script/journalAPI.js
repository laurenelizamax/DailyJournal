/*fetch calls to local host*/
const API = {
    getJournalEntries: () => {
        return fetch("http://localhost:3000/entries")
            .then(response => response.json())
    },
    createEntry: (newEntry) => {
        return fetch("http://localhost:3000/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEntry)
        })
    },
    deleteJournalEntries: (id) => {
        return fetch(`http://localhost:3000/entries/${id}`, {
            method: "DELETE"
        }).then(response => response.json())
    },
    editJournalEntries: (id) => {
        return fetch(`http://localhost:3000/entries/${id}`, {
            method: "PATCH"
        }).then(response => response.json())
    }
}
export default API
