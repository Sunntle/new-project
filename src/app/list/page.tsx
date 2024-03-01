"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeftRight, Search } from "lucide-react";
import Ticket from "./_components/ticket";
import TicketRight from "./_components/ticket-right";
import { useQuery } from "@tanstack/react-query";
import { getListFlight } from "@/lib/api";
import Filter from "./_components/filter";

const ListFlight = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["list-flight"],
    queryFn: () => getListFlight({ page: 1, pageSize: 6 }),
  });
  if (isLoading) return <p className="text-center h-[100vh]">Loading....</p>;
  return (
    <div className="bg-white">
      <section className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-x-12">
          <div>
            <h3 className="text-custom">Da Nang (DAD)</h3>
            <p>Fri, 22 Mar, 2022</p>
          </div>
          <ArrowLeftRight className="text-gray-400" />
          <div>
            <h3 className="text-custom">Ho Chi Minh (SGN)</h3>
            <p>Fri, 22 Mar, 2022</p>
          </div>
        </div>
        <div className="flex gap-x-5">
          <p className="font-semibold">Round-trip</p>
          <p className="font-semibold">
            <span className="text-custom">02</span> Adult,{" "}
            <span className="text-custom">01</span> Children
          </p>
          <p className="font-semibold">Bussiness Class</p>
        </div>
        <Button className="rounded-xl bg-sub">
          Change Flights <Search className="ms-2 h-4 w-4" />
        </Button>
      </section>
      <section className="bg-gray-100 py-6">
        <div className="flex container gap-x-2">
          <div className="basis-4/5 grid gap-2">
            <div className="text-end"><Filter/></div>
            {data?.Flights.items.map((item, index) => {
              return <Ticket key={index} item={item}/>;
            })}
          </div>
          <div className="basis-1/5">
            <TicketRight />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ListFlight;
