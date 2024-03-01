import TicketFlightHome from "./_components/ticket-flight";

export default function Home() {
  return (
    <div className="relative h-[100vh]">
      <div className="absolute overflow-hidden bg-transparent w-full h-[85vh]">
        <div className="absolute w-full bg-cover bg-center h-[150vh] -z-10 bg-no-repeat bg-[url('https://s3-alpha-sig.figma.com/img/570a/f726/c2fa278c6c35ad972b7596c7e5d4169c?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PWv~qObMTq4zT4wRkTyQ~FLMs-lhBw4U-SSYfIV79LkdiOIxt~dtyvo-4Msc0kaE3FWs4GRS8OEK6K90idIueMI9WIvdgUv-bdfqd3RmBOMrYJlHV3oIDa8RhDHM561XkuMN~0XxrHuxaZxYzpf1ay~uuWs-qF40CPbjlRjTEEA~sc1IUuX-5oKOrnmXvAEJffD-ACbEy74y2k5WT~5I87-WHn9tezkZyaFc~c3JJT2wXgn62vFvvZyn~JD3UpVIgm8gdr4kSLsaTkpqWQbCkbfuAH1g7AVChfpNDkZNx~IOf-1omh4dctITajEjswPqAMVXHy9MnOKJqUVTx45acg__')]"></div>
      </div>
      <div className="container flex items-end justify-start h-[95vh] flex-wrap w-full">
        <div className="text-7xl basis-full text-black/80">
          <h2 className="font-light">Hello!</h2>
          <h2 className="font-light">Where are</h2>
          <h2 className="font-light">
            you <span className="text-main font-semibold">flying</span> to
          </h2>
        </div>
        <div className="w-full ">
          <TicketFlightHome />
        </div>
      </div>
    </div>
  );
}
