import { Client } from "pg";
const client = new Client({
  user: "postgres",
  password: "carlosandres27",
  port: 5460,
  host: "localhost",
});

export const connectionClient = client;
