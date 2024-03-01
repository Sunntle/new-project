import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IFlight } from "@/lib/type";
import { formatPrice, minutesToHoursAndMinutes } from "@/lib/utils";
import { format } from "date-fns";
import { Briefcase } from "lucide-react";
import Image from "next/image";
interface ITicket {
  item: IFlight;
}
const Ticket = ({ item }: ITicket) => {
  return (
    <div className="container bg-white rounded-lg p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-4 text-sm py-3">
          <div className="w-[30px] h-[30px] relative">
            <Image
              fill
              alt=""
              className="rounded-lg border border-gray-200"
              src={
                "https://s3-alpha-sig.figma.com/img/6a06/f7d1/e070b95ff39aa63ace8eb3f9fe21c533?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eYq2pED~-~cMB-JXu09Hwk5j-D2FCxZgk0vn~Q~Bv3~AGR7OyDn7RIwDH0-kZA5VwGG5apOABX5ilkeP~NoYrtM1rcqJKFRZG6heT87VcWykpL9~qo1r16ErONsalyfClhfjd6lRt1GlBuyX03m40LcYDRqn2XlrRDkuOqNse69xO-ITFf3gULSdFXO8Pdja--jFmn9guB832kL9SWeGiQqFCiuXXf1vku0W8iUjHna~HdRwUOa1-CCN3K7TTI5Fww2p9JSylEzkjOz92tIed4GshhFPyIL73lSO7zt73fsIC6ajZ4EKtgHWx7us~f9pHEX8KYom6PpR6pHqTD7-YA__"
              }
            />
          </div>
          <h3 className="font-semibold">{item.AirlineCode}</h3>
        </div>
        <div className="flex items-center text-sm min-w-[25%]">
          <div className="text-center font-semibold">
            <p>{format(new Date(item.StartDate), "HH:mm")}</p>
            <p className="bg-gray-200 rounded-xl text-[10px]">
              {item.StartPoint}
            </p>
          </div>
          <div className="flex-1 text-center px-5">
            <p>{minutesToHoursAndMinutes(item.Duration)}</p>
            <div className="text-main relative h-[1px] w-full bg-main before:content-[''] before:w-[10px] before:h-[10px] before:border-main before:border-2 before:rounded-full before:absolute before:bg-white before:-translate-y-2/4 before:left-0 after:content-[''] after:w-[10px] after:h-[10px] after:rounded-full after:absolute after:bg-main after:-translate-y-2/4 after:right-0" />
            <p>Direct</p>
          </div>
          <div className="text-center font-semibold">
            <p>{format(new Date(item.EndDate), "HH:mm")}</p>
            <p className="bg-gray-200 rounded-xl text-[10px]">
              {item.EndPoint}
            </p>
          </div>
        </div>
        <div>
          <div className="flex gap-x-2">
            <Briefcase strokeWidth={1} />
            Baggage{" "}
            <span className="text-main font-semibold">
              {item.Carryon + item.Freebag}
            </span>
          </div>
          <div className="flex gap-x-2">
            <Briefcase strokeWidth={1} />
            In-flight <span className="text-main font-semibold">Meal</span>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="line-through text-gray-500">
            {formatPrice(item.PriceAdult + item.FeeAdult + item.TaxAdult)}
          </span>
          <span className="text-sub">{formatPrice(item.PriceAdult)}</span>
        </div>
        <Button className="bg-orange-500/10 text-sub hover:bg-sub hover:text-white rounded-xl font-semibold">
          Choose
        </Button>
      </div>
      <Tabs defaultValue="detail">
          <TabsList className="p-0">
            <TabsTrigger value="detail" className="uppercase ps-0  pe-10">
              flight detail
            </TabsTrigger>
            <TabsTrigger value="info" className="uppercase  ps-0 pe-10">
              fare info
            </TabsTrigger>
          </TabsList>
          <TabsContent value="detail" className="my-5">
            <div className="flex">
              <div className="flex flex-1">
                <div className="grid w-full h-full grid-rows-3 gap-2 basis-1/3 relative">
                  <div>
                    <p className="font-semibold text-sm">
                      {format(new Date(item.StartDate), "HH:mm")}
                    </p>
                    <p className="text-xs">{format(new Date(item.StartDate), "dd, MMM")}</p>
                  </div>
                  <div className="text-sm flex justify-start items-center">
                    {minutesToHoursAndMinutes(item.Duration)}
                  </div>
                  <div className="flex items-end">
                    <div>
                      <p className="font-semibold text-sm">
                        {format(new Date(item.EndDate), "HH:mm")}
                      </p>
                      <p className="text-xs">{format(new Date(item.StartDate), "dd, MMM")}</p>
                    </div>
                  </div>
                  <div className="absolute top-0 right-1/4 h-full w-[1px] bg-main before:right-0 after:right-0 before:content-[''] before:w-[10px] before:h-[10px] before:border-main before:border-2 before:rounded-full before:absolute before:bg-white before:translate-x-2/4 before:top-0 after:content-[''] after:w-[10px] after:h-[10px] after:rounded-full after:absolute after:bg-main after:translate-x-2/4 after:bottom-0" />
                </div>
                <div className="basis-2/4 grid w-full h-full grid-rows-1 gap-2">
                  <div>
                    <h3 className="font-semibold text-sm">
                      Da Nang ({item.StartPoint})
                    </h3>
                    <p className="text-xs">Da Nang Airport</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">
                      Da Nang ({item.EndPoint})
                    </h3>
                    <p className="text-xs">Da Nang Airport</p>
                  </div>
                </div>
              </div>
              <div className="basis-3/5 mb-5">
                <div className="flex items-center gap-x-4 text-sm pb-4">
                  <div className="w-[30px] h-[30px] relative ">
                    <Image
                      fill
                      alt=""
                      className="rounded-lg border border-gray-200"
                      src={
                        "https://s3-alpha-sig.figma.com/img/6a06/f7d1/e070b95ff39aa63ace8eb3f9fe21c533?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eYq2pED~-~cMB-JXu09Hwk5j-D2FCxZgk0vn~Q~Bv3~AGR7OyDn7RIwDH0-kZA5VwGG5apOABX5ilkeP~NoYrtM1rcqJKFRZG6heT87VcWykpL9~qo1r16ErONsalyfClhfjd6lRt1GlBuyX03m40LcYDRqn2XlrRDkuOqNse69xO-ITFf3gULSdFXO8Pdja--jFmn9guB832kL9SWeGiQqFCiuXXf1vku0W8iUjHna~HdRwUOa1-CCN3K7TTI5Fww2p9JSylEzkjOz92tIed4GshhFPyIL73lSO7zt73fsIC6ajZ4EKtgHWx7us~f9pHEX8KYom6PpR6pHqTD7-YA__"
                      }
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm whitespace-nowrap uppercase">
                      {item.AirlineCode}
                    </h3>
                    <p className="text-xs"> {item.FlightNumber}</p>
                  </div>
                </div>
                <div className="columns-2 rounded-lg bg-[#F4F2F9] p-3">
                  <div className="my-1">
                    Baggage
                    <span className="text-main font-semibold ms-1">
                      {item.Carryon + item.Freebag}
                    </span>
                  </div>
                  <div className="my-1">
                    In-flight
                    <span className="text-main font-semibold ms-1">Meal</span>
                  </div>
                  <div className="my-1">
                    In-flight
                    <span className="text-main font-semibold ms-1">
                      Entertainment
                    </span>
                  </div>
                  <div className="my-1">
                    Aircraft
                    <span className="text-main font-semibold ms-1">
                      {item.FlightNumber}
                    </span>
                  </div>
                  <div className="my-1">
                    Seat layout
                    <span className="text-main font-semibold ms-1">3 - 3</span>
                  </div>
                  <div className="my-1">
                    Seat pitch
                    <span className="text-main font-semibold ms-1">
                      29 inches (standard)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="info">
            <div className="flex">
              <div className="flex-1">
                <h4 className="uppercase font-semibold">conditions</h4>
                <div>
                  <div className="flex items-center gap-x-4 text-sm py-3">
                    <div className="w-[30px] h-[30px] relative ">
                      <Image
                        fill
                        alt=""
                        className="rounded-lg border border-gray-200"
                        src={
                          "https://s3-alpha-sig.figma.com/img/6a06/f7d1/e070b95ff39aa63ace8eb3f9fe21c533?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eYq2pED~-~cMB-JXu09Hwk5j-D2FCxZgk0vn~Q~Bv3~AGR7OyDn7RIwDH0-kZA5VwGG5apOABX5ilkeP~NoYrtM1rcqJKFRZG6heT87VcWykpL9~qo1r16ErONsalyfClhfjd6lRt1GlBuyX03m40LcYDRqn2XlrRDkuOqNse69xO-ITFf3gULSdFXO8Pdja--jFmn9guB832kL9SWeGiQqFCiuXXf1vku0W8iUjHna~HdRwUOa1-CCN3K7TTI5Fww2p9JSylEzkjOz92tIed4GshhFPyIL73lSO7zt73fsIC6ajZ4EKtgHWx7us~f9pHEX8KYom6PpR6pHqTD7-YA__"
                        }
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm whitespace-nowrap uppercase">
                        {item.AirlineCode}
                      </h3>
                      <p className="text-xs"> {item.FlightNumber}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-sm max-w-[80%]">
                    <div className="text-center">Da Nang</div>
                    <div className="flex-1 text-center px-5">
                      <p>{minutesToHoursAndMinutes(item.Duration)}</p>
                      <div className="text-main relative h-[1px] w-full bg-main before:content-[''] before:w-[10px] before:h-[10px] before:border-main before:border-2 before:rounded-full before:absolute before:bg-white before:-translate-y-2/4 before:left-0 after:content-[''] after:w-[10px] after:h-[10px] after:rounded-full after:absolute after:bg-main after:-translate-y-2/4 after:right-0" />
                      <p>Direct</p>
                    </div>
                    <div className="text-center font-semibold">
                      Ho Chi Minh City
                    </div>
                  </div>
                  <p className="text-main mb-5">Economy</p>
                  <p>Non -Refundable</p>
                </div>
              </div>
              <div className="basis-3/5 mb-5">
                <h4 className="uppercase font-semibold mb-5">price details</h4>
                <div className="flex border-b border-gray-200">
                  <div className="basis-2/4 grid gap-y-1">
                    <p>Adult Basic Fare(x1)</p>
                    <p>Tax</p>
                    <p>Regular Total Price</p>
                    <p className="text-sub mb-2">Save</p>
                  </div>
                  <div className="grid gap-y-1">
                    <p className="font-semibold">{formatPrice(item.PriceAdult)}</p>
                    <p>
                      {item.TaxAdult && item.TaxAdult > 0
                        ? formatPrice(item.TaxAdult)
                        : "included"}
                    </p>
                    <p>{formatPrice(item.PriceAdult + item.TaxAdult)}</p>
                    <p>{formatPrice(-4000)}</p>
                  </div>
                </div>
                <div className="flex mt-2">
                  <p className="basis-2/4">You pay</p>
                  <p className="text-sub font-semibold">{formatPrice(item.PriceAdult + item.TaxAdult -4000)}</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
    </div>
  );
};

export default Ticket;
