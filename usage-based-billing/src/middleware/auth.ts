import { createMiddleware } from "hono/factory";
import { getUser } from "../utils/db";

export const authMiddleware = createMiddleware(async (c, next) => {
  const api_key = c.req.header("Authorization");

  if (!api_key)
    return c.json(
      {
        success: false,
        error: "Not authorized",
      },
      401,
    );

  const user = getUser(api_key);

  if (!user)
    return c.json(
      {
        success: false,
        error: "Not authorized",
      },
      401,
    );

  c.set("user", user);

  await next();
});
