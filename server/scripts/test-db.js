const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const dns = require("dns");

// Load .env from the current directory
dotenv.config({ path: path.join(__dirname, ".env") });

const uri = process.env.MONGODB_URI;

if (!uri) {
  console.error("Error: MONGODB_URI is not defined in .env file.");
  process.exit(1);
}

console.log("Attempting to connect to MongoDB...");
console.log("URI (redacted):", uri.replace(/:([^@]+)@/, ":****@"));

// Diagnostic: Check if we can resolve the SRV record
try {
  const host = uri.split("@")[1].split("/")[0].split("?")[0];
  console.log(`Diagnostic: Checking DNS for ${host}...`);

  dns.resolveSrv(`_mongodb._tcp.${host}`, (err, addresses) => {
    if (err) {
      console.error("❌ DNS SRV Resolution Failed:", err.code);
      if (err.code === "ECONNREFUSED" || err.code === "ENOTFOUND") {
        console.log(
          "\n💡 This error indicates your DNS server cannot resolve MongoDB Atlas SRV records."
        );
        console.log("Possible solutions:");
        console.log(
          "1. Change your DNS to Google (8.8.8.8) or Cloudflare (1.1.1.1) in your OS settings."
        );
        console.log(
          "2. Try connecting via a different network (e.g., mobile hotspot)."
        );
      }
    } else {
      console.log("✅ DNS SRV Resolution Successful.");
    }

    connect();
  });
} catch (e) {
  console.error("Failed to parse URI for DNS check:", e.message);
  connect();
}

function connect() {
  mongoose
    .connect(uri)
    .then(() => {
      console.log("✅ Database connection successful!");
      process.exit(0);
    })
    .catch((err) => {
      console.error("❌ Database connection failed.");
      console.error("Error Details:", err);

      if (
        err.message.includes("alert number 80") ||
        err.message.includes("TLSV1_ALERT_INTERNAL_ERROR")
      ) {
        console.log("\n💡 SSL Alert 80: IP not whitelisted in MongoDB Atlas.");
      } else if (
        err.message.includes("ECONNREFUSED") ||
        err.message.includes("querySrv")
      ) {
        console.log(
          "\n💡 ECONNREFUSED/querySrv: DNS or Network restriction detected."
        );
        console.log("Try changing your network or DNS settings.");
      }

      process.exit(1);
    });
}
