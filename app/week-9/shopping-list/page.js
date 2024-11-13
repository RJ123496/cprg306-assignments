import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/router";
import { useEffect } from "react";

const ShoppingListPage = () => {
  const { user } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/week-9"); // Redirect to landing page if not logged in
    }
  }, [user, router]);

  if (!user) {
    return <p>Loading...</p>; // Optional loading state
  }

  return (
    <div>
      <h1>Your Shopping List</h1>
      {/* Render the shopping list here */}
    </div>
  );
};

export default ShoppingListPage;