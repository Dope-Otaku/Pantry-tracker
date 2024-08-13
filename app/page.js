"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  collection,
  Firestore,
  getDoc,
  getDocs,
  query,
} from "@firebase/firestore";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { firestore } from "@/firebase";

export default function Home() {
  const [inventory, setInventory] = useState([]);
  const [open, setOpen] = useState([]);
  const [itemName, setItemName] = "";

  const updateInventory = async () => {
    const snapshot = query(collection(firestore, "inventory"));
    const docs = await getDocs(snapshot);
    const inventoryList = [];
    docs.forEach((doc) => {
      inventoryList.push({
        name: doc.id,
        ...doc.data(),
      });
    });
    setInventory(inventoryList);
    // console.log(inventory);
  };

  const removeItem = async (item) => {
    const docRef = doc(collection(firestore, "inventory"), item);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const { quantity } = docSnap.data();
    }
  };

  useEffect(() => {
    updateInventory();
  }, []);
  // console.log(updateInventory);

  return (
    <Box>
      <Typography variant="h1">Inventory Management</Typography>
      {inventory.forEach((item) => {
        return (
          <>
            {item.name}
            {item.count}
          </>
        );
      })}
      {inventory.map((item) => item.name)}
    </Box>
  );
}
