import { jwtClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL,
  plugins: [
    jwtClient()
  ]
});
console.log(authClient);
console.log(authClient.getAccessToken);
console.log(authClient.jwt);
export const {
  signIn,
  signUp,
  useSession,
} = authClient;