import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddItem() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      //replace with your api url
      const response = await axios.post("/your-api-endpoint", {
        firstName,
        // Add fields according to the provided inputs.
      });

      // Handle successful addition (e.g., update items in App state, redirect, etc.)
      console.log("Item added:", response.data);
      navigate("/"); // Redirect to the item list
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  return (
    <div>
      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">FirstName:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        {/* Add inputs as per your requirement*/}

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddItem;
