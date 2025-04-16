import { Environment, Paddle } from "@paddle/paddle-node-sdk";

if (!process.env.PADDLE_API_KEY) {
  throw new Error("PADDLE_API_KEY is not set");
}

export const paddle = new Paddle(process.env.PADDLE_API_KEY, {
  environment: "sandbox" as Environment,
});
