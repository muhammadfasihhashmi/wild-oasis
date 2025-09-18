import { Button } from "@/components/ui/button";
interface FilterCabinsProps {
  setFilter: (filter: string) => void;
  activeFilter: string;
}

function FilterCabins({ setFilter, activeFilter }: FilterCabinsProps) {
  return (
    <div className="flex gap-1 ">
      <Button
        onClick={() => setFilter("all")}
        className={`bg-transparent cursor-pointer hover:bg-indigo-600 text-zinc-800 hover:text-white text-sm ${
          activeFilter === "all" ? "bg-indigo-600 text-white" : ""
        }`}
      >
        All
      </Button>
      <Button
        onClick={() => setFilter("no-discount")}
        className={`bg-transparent cursor-pointer hover:bg-indigo-600 text-zinc-800 hover:text-white  text-sm ${
          activeFilter === "no-discount" ? "bg-indigo-600 text-white" : ""
        }`}
      >
        No discount
      </Button>
      <Button
        onClick={() => setFilter("with-discount")}
        className={`bg-transparent cursor-pointer hover:bg-indigo-600 text-zinc-800 hover:text-white text-sm ${
          activeFilter === "with-discount" ? "bg-indigo-600 text-white" : ""
        }`}
      >
        With discount
      </Button>
    </div>
  );
}

export default FilterCabins;
