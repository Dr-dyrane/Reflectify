import React from "react";
import { useAuth } from "../auth/AuthContext";
import { addNewEntry } from "../api/entryApi";
import EntryForm from "../components/Entry/EntryForm";

const AddEntry = () => {
    const { user } = useAuth();

    const saveEntry = (entryData) => {
        addNewEntry(user.id, entryData);
    };

    return <EntryForm saveEntry={saveEntry} />;
};

export default AddEntry;
