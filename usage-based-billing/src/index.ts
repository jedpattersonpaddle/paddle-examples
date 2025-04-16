import { Hono } from "hono";
import type { User } from "./utils/db";
import { authMiddleware } from "./middleware/auth";
import { updateSubscription } from "./utils/update-subscription";

const app = new Hono<{ Variables: { user: User } }>();

app.use(authMiddleware);

app.get("/", async (c) => {
  const user = c.get("user");

  await updateSubscription(user.subscription_id);

  return c.json({
    success: true,
  });
});

export default app;
