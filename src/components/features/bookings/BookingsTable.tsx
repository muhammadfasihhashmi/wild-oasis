import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical, Eye, Import, Trash2 } from "lucide-react";
import { Booking } from "@/types/booking.types";

const bookingColumns = ["CABIN", "GUEST", "DATES", "STATUS", "AMOUNT", ""];

function BookingsTable({ bookings }: { bookings: Booking[] }) {
  return (
    <div className="border-2 border-zinc-200 rounded-lg shadow-sm ">
      <Table>
        <TableHeader className="border-b-2 border-b-zinc-200 shadow-sm">
          <TableRow>
            {bookingColumns.map((clm) => (
              <TableHead className="text-start tex-sm font-semibold text-zinc-800">
                {clm}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookings?.map((booking) => (
            <TableRow>
              <TableCell className="text-zinc-700 font-semibold text-[1rem] pl-3">
                {booking.cabins.name}
              </TableCell>
              <TableCell>
                <div className="flex flex-col gap-1">
                  <span className="text-zinc-700 font-semibold text-md">
                    {booking.guests.fullName}
                  </span>
                  <span className="text-sm text-zinc-500 font-sans">
                    {booking.guests.email}
                  </span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-col gap-1">
                  <span className="text-md text-zinc-700 font-semibold">{`${booking.numNights} night stay`}</span>
                  <span className="text-sm text-zinc-500 font-mono">
                    {`${booking.startDate.split("T")[0]} to ${
                      booking.endDate.split("T")[0]
                    }`}
                  </span>
                </div>
              </TableCell>
              <TableCell>
                <span
                  className={`text-xs w-[100px] h-6 px-1 flex justify-center items-center rounded-full ${
                    booking.status === "confirmed"
                      ? "bg-blue-100 text-blue-700 font-semibold "
                      : "bg-red-100 text-red-600 font-semibold"
                  }`}
                >
                  {booking.status.toUpperCase()}
                </span>
              </TableCell>
              <TableCell className="font-semibold text-zinc-700">{`$${booking.totalPrice.toFixed(
                2
              )}`}</TableCell>
              <TableCell className="text-end">
                <DropdownMenu>
                  <DropdownMenuTrigger className="tramsform hover:scale-125 transition-all duration-200 ease-in-out cursor-pointer">
                    <EllipsisVertical className="h-5 text-zinc-500" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="flex flex-col gap-2 text-zinc-600">
                    <DropdownMenuItem className="cursor-pointer">
                      <Eye />
                      See details
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      <Import />
                      Check in
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      <Trash2 />
                      Delete booking
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default BookingsTable;
