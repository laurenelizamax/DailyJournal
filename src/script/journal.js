
import API from "./data.js";
import makeJournal from "./entryComponent.js";

API.getJournalEntries().then(renderJournalEntries)

