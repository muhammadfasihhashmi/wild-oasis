import { supabase } from "@/lib/supabaseClient";

export async function getBookings() {
  try {
    const { data, error } = await supabase
      .from("bookings")
      .select("*, cabins(name), guests(fullName,email)");

    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("Error while getting bookings");
    }
  }
}
