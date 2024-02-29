const URL = "https://vapi.vnappmob.com/api";
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
    district_id: string,
    ward_id: string,
    ward_name: string,
    ward_type: string
}
async function getListProvince(path: string) {
  try {
    const response = await fetch(`${URL}/${path}`);
    const data: { results: IProvince[]  } = await response.json();
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
  
export { getListProvince, getListDistrict, getListWard };
export type { IProvince };
