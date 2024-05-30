import React, { useState } from "react";
import axios from "axios";

function Transfer() {
  const [fromUser, setFromUser] = useState("");
  const [toUser, setToUser] = useState("");
  const [amount, setAmount] = useState("");
  const [pin, setPin] = useState("");

  const handleTransfer = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/transfer", {
        fromUser,
        toUser,
        amount,
        pin,
      });
      alert(response.data.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Transfer Money</h2>
      <form onSubmit={handleTransfer}>
        <input
          type="text"
          placeholder="From Username"
          value={fromUser}
          onChange={(e) => setFromUser(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="To Username"
          value={toUser}
          onChange={(e) => setToUser(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="PIN"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          required
        />
        <button type="submit">Transfer</button>
      </form>
    </div>
  );
}

export default Transfer;
