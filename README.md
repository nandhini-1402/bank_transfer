# Bank Transfer Project
 

---

This project is a simple banking system implemented using React.js for the frontend, Node.js for the backend, and MySQL for the database. It allows users to sign up with individual PINs and different starting balances, and transfer money between accounts securely.

## Features

- **User Sign Up**: Users can create individual accounts with unique usernames, PINs, and starting balances.
- **Money Transfer**: Users can transfer money between accounts by providing the correct PIN. Only three attempts are allowed for each transfer.
- **Secure Transactions**: Transactions are securely handled with PIN verification.

## Technologies Used

- **Frontend**: React.js, HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **HTTP Requests**: Axios
- **Other Tools**: XAMPP for local database setup

## Installation and Usage

1. **Clone the repository**:

```bash
git clone https://github.com/nandhini-1402/bank-system.git
```

2. **Set up the MySQL database**:
   - Install XAMPP and start the Apache and MySQL servers.
   - Create a new database named `bank_system`.
   - Import the `bank_system.sql` file located in the `database` directory to set up the necessary tables.

3. **Start the backend server**:
   - Navigate to the `backend` directory.
   - Install dependencies: `npm install`.
   - Start the server: `node server.js`.

4. **Start the frontend**:
   - Navigate to the `frontend` directory.
   - Install dependencies: `npm install`.
   - Start the development server: `npm start`.

5. **Access the application**:
   - Open your web browser and go to `http://localhost:3000` to use the banking system.



---


