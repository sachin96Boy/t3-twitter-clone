import { SignIn, useUser } from "@clerk/nextjs";
 
export default function Page() {
  const { isLoaded, isSignedIn, user } = useUser();
  return <SignIn />;
}