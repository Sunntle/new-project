import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const TicketRight = () => {
  return (
    <div className="bg-white rounded-lg">
      <div className="border-b border-x-gray-300 px-3 py-4">
        <h3 className="uppercase font-semibold text-sm tracking-widest">
          your flights
        </h3>
      </div>
      <div>
        <div className="py-2 px-4">
          <div className="flex items-center gap-x-4 text-sm my-3">
            <div className="w-[30px] h-[30px] bg-gray-400 rounded-full flex items-center justify-center text-white font-semibold text-sm">
              01
            </div>
            <div>
              <p>Fri, 11 Feb, 2022</p>
              <h3 className="font-semibold">Da Nang - Ho Chi Minh</h3>
            </div>
          </div>
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
              <h3 className="font-semibold">BAMBOO AIRWAYS</h3>
              <Link
                href="/"
                className="underline text-main font-semibold text-xs"
              >
                Details
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <div className="text-center font-semibold">
              <p>21:40</p> <p>DAD</p>
            </div>
            <div className="flex-1 text-center px-5">
              <p>1:30</p>
              <div className="text-main relative h-[1px] w-full bg-main before:content-[''] before:w-[10px] before:h-[10px] before:border-main before:border-2 before:rounded-full before:absolute before:bg-white before:-translate-y-2/4 before:left-0 after:content-[''] after:w-[10px] after:h-[10px] after:rounded-full after:absolute after:bg-main after:-translate-y-2/4 after:right-0" />
              <p>Direct</p>
            </div>
            <div className="text-center font-semibold">
              <p>21:40</p> <p>DAD</p>
            </div>
          </div>
          <div className="border-b border-x-gray-300">
            <Button className="text-main bg-blue-500/10 w-full rounded-xl font-semibold text-xs hover:bg-gray-100 my-4 ">
              Change departure flight
            </Button>
          </div>
          <div className="flex items-center gap-x-4 text-sm my-3">
            <div className="w-[30px] h-[30px] bg-gray-400 rounded-full flex items-center justify-center text-white font-semibold text-sm">
              02
            </div>
            <div>
              <p>Fri, 11 Feb, 2022</p>
              <h3 className="font-semibold">Da Nang - Ho Chi Minh</h3>
            </div>
          </div>
        </div>
        <div className="bg-[#F8F8F8] py-2 px-4 rounded-b-lg">
          <p>Subtotal:</p>
          <p className="text-sub font-semibold">{formatPrice(1322000)}</p>
        </div>
      </div>
    </div>
  );
};

export default TicketRight;
