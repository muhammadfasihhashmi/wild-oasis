import BookingsTable from "@/components/features/bookings/BookingsTable";
import { DataTableSkeleton } from "@/components/my-ui/DataTableSkeleton";
import { getBookings } from "@/services/bookings.services";
import { useQuery } from "@tanstack/react-query";

function Booking() {
  const {
    data: bookings,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useQuery({
    queryFn: getBookings,
    queryKey: ["get-bookings"],
  });

  console.log(bookings);

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h1 className="font-bold text-3xl text-zinc-800 tracking-tight">
          Bookings
        </h1>
      </div>
      {isLoading && (
        <DataTableSkeleton rows={8} columns={5} showHeader={false} />
      )}
      {isError && (
        <div className="p-4 bg-red-100 text-red-700 rounded-md">
          {error?.message}
        </div>
      )}
      {isSuccess && <BookingsTable bookings={bookings} />}
    </>
  );
}

export default Booking;
