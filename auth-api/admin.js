// Run this in a Node.js script or REPL
const bcrypt = require("bcryptjs");

async function createAdminPassword() {
  const password = "admin123"; // your admin password
  const hashed = await bcrypt.hash(password, 10);
  console.log(hashed);
}

createAdminPassword();
