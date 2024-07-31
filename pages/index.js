// pages/index.js
import { useState } from "react";
import PantryForm from "../components/PantryForm";
import PantryList from "../components/PantryList";
import { Box, Typography, Container } from "@mui/material";

export default function Home() {
    const [selectedPantryItem, setSelectedPantryItem] = useState(null);

    return (
      
      
        <Container >
            <Box textAlign="center" my={4}>
                <Typography variant="h2">Pantry Tracker</Typography>
            </Box>
            <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} justifyContent="space-between" mb={4}>
                <Box width={{ xs: '100%', md: '45%' }} mb={{ xs: 4, md: 0 }}>
                    <Typography variant="h4" mb={2}>Add / Update Item</Typography>
                    <PantryForm
                        selectedPantryItem={selectedPantryItem}
                        setSelectedPantryItem={setSelectedPantryItem}
                    />
                </Box>
                <Box width={{ xs: '100%', md: '45%' }}>
                    <Typography variant="h4" >Pantry Items</Typography>
                    <PantryList setSelectedPantryItem={setSelectedPantryItem} />
                </Box>
            </Box>
        </Container>
    );
}
