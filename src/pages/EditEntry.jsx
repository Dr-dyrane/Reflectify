import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { updateExistingEntry, getEntryById } from "../api/entryApi";
import EntryForm from "../components/Entry/EntryForm";

const EditEntry = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const { id } = useParams();

    const fetchEntryById = (entryId) => {
        return getEntryById(user?.id, entryId);
    };

    const saveEntry = (entryData) => {
        updateExistingEntry(user.id, id, entryData);
    };

    return <EntryForm entryId={id} fetchEntryById={fetchEntryById} saveEntry={saveEntry} />;
};

export default EditEntry;
