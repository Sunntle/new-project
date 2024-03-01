interface IInfo {
    name: string,
      birthday: string,
      email: string,
      phone: string,
      gender: string,
      address: string,
      ward: string,
      district: string,
      province: string,
}

interface IRelatedFlight {
  AirlineCode:string
  Carryon:string
  Duration: number
  EndPoint: string
  EndTime: string
  FlightNumber: string
  Freebag: string
  Index: number
  Plane: string
  SeatClass: string
  StartPoint: string
  StartTime: string
}
interface IFlight{
  AirlineCode:string
      Carryon:string
      ChargeAdult:number
      ChargeChild:number
      ChargeInfant:number
      CompareMode: number |null
      DayChange: boolean
      Duration:number
      EndDate:string
      EndPoint:string
      FareBasis:string
      FareClass:string
      FareRule: string |null
      FareType: string
      FeeAdult:number
      FeeChild:number
      FeeInfant:number
      FlightId:number
      FlightNumber:string
      Freebag:string
      GroupClass:string
      HasChangedClass: boolean
      HasDownStop: boolean
      MarketingAirline:string
      NoRefund: boolean
      OperatingAirline:string
      Plane: string | null
      PriceAdult: number
      PriceChild: number
      PriceInfant: number
      Promo: boolean
      RelatedFlights: IRelatedFlight
      ReturnFlight: boolean
      SeatRemain: number
      SessionId: number
      StartDate:string 
      StartPoint:string 
      StopOvernight: boolean
      Stops: number
      TaxAdult: number
      TaxChild: number
      TaxInfant: number
}
interface IListFlights {
  count: number;
  currentPage: number;
  items: IFlight[];
  pageSize: number;
  total: number;
}

export type{IInfo, IFlight, IRelatedFlight, IListFlights}