import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { updateExistingEntry, getEntryById } from "../api/entryApi";
import EntryForm from "../components/Entry/EntryForm";

const EditEntry = () => {
	const { user } = useContext(AuthContext);
	const navigate = useNavigate();
	const { id } = useParams();

	const [entryData, setEntryData] = useState(null);

	const fetchEntryById = (entryId) => {
		return getEntryById(user.id, entryId);
	};

	useEffect(() => {
		if (user && user.id && id) {
			fetchEntryById(id)
				.then((data) => {
					if (data) {
						setEntryData(data);
					} else {
						console.log("Entry not found or data is undefined");
						// Handle the case where the entry is not found or data is undefined
						// For example, you could redirect the user to a different page or display an error message
					}
				})
				.catch((error) => {
					console.error("Error fetching entry:", error);
					// Handle the error gracefully (e.g., display an error message)
				});
		}
	}, [user, id]);

	const saveEntry = (entryData) => {
		updateExistingEntry(user.id, id, entryData);
		// Redirect to home page
		navigate("/home");
	};

	if (!entryData) {
		return <div>Loading...</div>;
	}

	return (
		<EntryForm
			entryId={id}
			entryData={entryData}
			saveEntry={saveEntry}
			fetchEntryById={fetchEntryById}
		/>
	);
};

export default EditEntry;
