
import API from "./data.js";
import renderJournalEntries from "./entriesDOM";

API.getJournalEntries().then(renderJournalEntries)
