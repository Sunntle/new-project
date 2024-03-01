import {GraphQLClient, gql} from "graphql-request"
import { IListFlights } from "./type";

const URL = "https://vapi.vnappmob.com/api";
const endpoint = "https://api-erp.monamedia.net/graphql"

interface IProvince {
  province_id: string;
  province_name: string;
  province_type: string;
}
interface IDistrict {
  province_id: string;
  district_name: string;
  district_type: string;
  district_id: string;
  lat: null;
  lng: null;
}
interface Iward {
  district_id: string;
  ward_id: string;
  ward_name: string;
  ward_type: string;
}

const FlightQuery = gql`
query getFlights($currentPage: Int, $pageSize: Int) {
  Flights(currentPage: $currentPage, pageSize: $pageSize) {
    currentPage
    count
    items {
      AirlineCode
      Carryon
      ChargeAdult
      ChargeChild
      ChargeInfant
      CompareMode
      DayChange
      Duration
      EndDate
      EndPoint
      FareBasis
      FareClass
      FareRule
      FareType
      FeeAdult
      FeeChild
      FeeInfant
      FlightId
      FlightNumber
      Freebag
      GroupClass
      HasChangedClass
      HasDownStop
      MarketingAirline
      NoRefund
      OperatingAirline
      Plane
      PriceAdult
      PriceChild
      PriceInfant
      Promo
      RelatedFlights {
        AirlineCode
        Carryon
        Duration
        EndPoint
        EndTime
        FlightNumber
        Freebag
        Index
        Plane
        SeatClass
        StartPoint
        StartTime
      }
      ReturnFlight
      SeatRemain
      SessionId
      StartDate
      StartPoint
      StopOvernight
      Stops
      TaxAdult
      TaxChild
      TaxInfant
    }
    pageSize
    total
  }
}`
async function getListProvince(path: string) {
  try {
    const response = await fetch(`${URL}/${path}`);
    const data: { results: IProvince[] } = await response.json();
    return data;
  } catch (error: any) {
    console.log("Something went wrong");
  }
}
async function getListDistrict(path: string) {
  try {
    const response = await fetch(`${URL}/${path}`);
    const data: { results: IDistrict[] } = await response.json();
    return data;
  } catch (error: any) {
    console.log("Something went wrong");
  }
}
async function getListWard(path: string) {
  try {
    const response = await fetch(`${URL}/${path}`);
    const data: { results: Iward[] } = await response.json();
    return data;
  } catch (error: any) {
    console.log("Something went wrong");
  }
}

const graphqlClient = new GraphQLClient(endpoint)

async function getListFlight({page, pageSize}: {page: number, pageSize: number}):  Promise<{Flights: IListFlights}>{
  return await graphqlClient.request(FlightQuery, {
    currentPage: page,
    pageSize: pageSize
  })

}
export { getListProvince, getListDistrict, getListWard, getListFlight };
export type { IProvince };
