// pages/api/searchDrugs.ts
import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../firebaseconfig";
import { collection, getDocs, where, query} from 'firebase/firestore'
// Import modular Firestore functions

// Define the expected structure of the response data
type Drug = {
  name: string;
  description?: string;
  [key: string]: any;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { query: searchQuery } = req.query; // Access search query from the request
    if (!searchQuery || typeof searchQuery !== "string") {
      return res.status(400).json({ error: "Invalid query parameter" });
    }

    // Perform Firestore query with modular SDK
    const drugsCollection = collection(db, "drugs"); // Get the 'drugs' collection reference
    const q = query(drugsCollection, where("name", "==", searchQuery.toLowerCase())); // Query for drugs matching the name
    const querySnapshot = await getDocs(q); // Fetch the documents

    // If no documents were found
    if (querySnapshot.empty) {
      return res.status(404).json({ message: "No drugs found" });
    }

    // Map the Firestore documents to the desired format
    const drugs: Drug[] = querySnapshot.docs.map((doc) => doc.data() as Drug);

    // Return the results as JSON
    res.status(200).json(drugs);
  } catch (error) {
    console.error("Error fetching data from Firestore:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
