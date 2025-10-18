
import express from "express";
import axios from "axios";
import cors from "cors";


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());


app.get("/me", async (req, res) => {
  try {
   
    const response = await axios.get("https://catfact.ninja/fact", { timeout: 5000 });
    const catFact = response.data.fact || "No cat fact available.";
    
    const data = {
      status: "success",
      user: {
        email: "abiolamoshooda71@gmail.com",
        name: "Banusola Abiola",
        stack: "Node.js/Express"
      },
      timestamp: new Date().toISOString(),
      fact: catFact
    };

    res.status(200).json(data);
  } catch (error) {
    
    res.status(500).json({
      status: "success",
      user: {
         email: "abiolamoshooda71@gmail.com",
        name: "Banusola Abiola ",
        stack: "Node.js/Express"
      },
      timestamp: new Date().toISOString(),
      fact: "Cat fact service unavailable. Try again later."
    });
  }
});


app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}/me`);
});
