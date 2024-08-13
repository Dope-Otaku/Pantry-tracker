"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Firestore } from "@firebase/firestore";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

export default function Home() {
  const [inventory, setInventory] = useState([]);
  const [open, setOpen] = useState([]);
  const [itemName, setItemName] = "";

  return (
    <Box>
      <Typography variant="h1">Inventory Management</Typography>
    </Box>
  );
}
