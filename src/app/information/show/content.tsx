"use client";

import { useAppState } from "@/contexts/store";
import { getListDistrict, getListProvince, getListWard } from "@/lib/api";
import { GENDER } from "@/lib/const";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";

const ContentDetail = () => {
  const { data } = useAppState();
  const isDataEmpty = !(Object.keys(data).length > 0);
  const provinceList = useQuery({
    queryKey: ["province"],
    queryFn: () => getListProvince("province"),
    enabled: !isDataEmpty,
  });
  const {
    name,
    birthday,
    email,
    phone,
    gender,
    province,
    ward,
    district,
    address,
  } = data;
  const districtList = useQuery({
    queryKey: ["district", province],
    queryFn: () => getListDistrict(`province/district/${province}`),
    enabled: !!province,
  });

  const wardList = useQuery({
    queryKey: ["ward", province, district],
    queryFn: () => getListWard(`province/ward/${district}`),
    enabled: !!district,
  });


  if (isDataEmpty) return <p className="text-center">Không có thông tin hiển thị</p>;
  
  return (
    <div>
      <p>Họ và tên: {name}</p>
      <p>Ngày sinh: {format(new Date(birthday), "dd/MM/yyyy")}</p>
      <p>Email: {email}</p>
      <p>Điện thoại: {phone}</p>
      <p>Giới tính: {GENDER.find(item => item.value == gender)?.name}</p>
      <p>
        Địa chỉ: {address && `${address},`}{" "}
        {
          wardList?.data?.results.find((item) => item.ward_id == ward)
            ?.ward_name
        }
        ,{" "}
        {
          districtList?.data?.results.find(
            (item) => item.district_id == district
          )?.district_name
        }
        ,
        {
          provinceList?.data?.results.find(
            (item) => item.province_id == province
          )?.province_name
        }
      </p>
    </div>
  );
};

export default ContentDetail;
