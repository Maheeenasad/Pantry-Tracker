// components/PantryForm.js
import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, addDoc, updateDoc, doc, deleteDoc, onSnapshot } from "firebase/firestore";
import { Box, TextField, Button, Typography, Stack } from "@mui/material";

const PantryForm = ({ selectedPantryItem, setSelectedPantryItem }) => {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");

    useEffect(() => {
        if (selectedPantryItem) {
            setName(selectedPantryItem.name);
            setQuantity(selectedPantryItem.quantity);
        }
    }, [selectedPantryItem]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (selectedPantryItem) {
            const pantryRef = doc(db, "pantryItems", selectedPantryItem.id);
            await updateDoc(pantryRef, { name, quantity });
            setSelectedPantryItem(null);
        } else {
            await addDoc(collection(db, "pantryItems"), { name, quantity });
        }
        setName("");
        setQuantity("");
    };

    const handleDelete = async () => {
        const pantryRef = doc(db, "pantryItems", selectedPantryItem.id);
        await deleteDoc(pantryRef);
        setSelectedPantryItem(null);
        setName("");
        setQuantity("");
    };

    return (
        <Box>
            <form onSubmit={handleSubmit}>
                <Stack spacing={2}>
                    <TextField
                        label="Item Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <TextField
                        label="Quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        required
                    />
                    <Button type="submit" variant="contained" color="primary">
                        {selectedPantryItem ? "Update Item" : "Add Item"}
                    </Button>
                    {selectedPantryItem && (
                        <Button variant="contained" color="secondary" onClick={handleDelete}>
                            Delete Item
                        </Button>
                    )}
                </Stack>
            </form>
        </Box>
    );
};

export default PantryForm;
