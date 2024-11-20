import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/router";
import { useEffect } from "react";

const ShoppingListPage = () => {
  const { user } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/week-9"); 
    }
  }, [user, router]);

  if (!user) {
    return <p>Loading...</p>; 
  }

  return (
    <div>
      <h1>Your Shopping List</h1>
      {/* Render the shopping list here */}
    </div>
  );
};

export default ShoppingListPage;