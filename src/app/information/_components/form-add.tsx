"use client";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { getListProvince, getListDistrict, getListWard } from "@/lib/api";
import { cn } from "@/lib/utils";
import { FormAddInformationSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import {  useTransition } from "react";
import { useForm } from "react-hook-form";
import { BeatLoader } from "react-spinners";
import { z } from "zod";
import CardWrapper from "./card-wrapper";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAppState } from "@/contexts/store";
import { useRouter } from "next/navigation";

const FormAddInformation = () => {
  const [isPending, startTransition] = useTransition();
    const  appState = useAppState()
    const { push } = useRouter();
  const provinceList = useQuery({
    queryKey: ["province"],
    queryFn: () => getListProvince("province"),
  });

  const form = useForm<z.infer<typeof FormAddInformationSchema>>({
    resolver: zodResolver(FormAddInformationSchema),
    defaultValues: {
      name: "",
      birthday: new Date(),
      email: "",
      phone: "",
      gender: "male",
      address: "",
      ward: "",
      district: "",
      province: "",
    },
  });

  const watchProvinceValue = form.watch("province");
  const watchDistrictValue = form.watch("district");

  const districtValue = useQuery({
    queryKey: ["district", watchProvinceValue],
    queryFn: () => getListDistrict(`province/district/${watchProvinceValue}`),
    enabled: !!watchProvinceValue,
  });

  const wardValue = useQuery({
    queryKey: ["ward", watchProvinceValue, watchDistrictValue],
    queryFn: () => getListWard(`province/ward/${watchDistrictValue}`),
    enabled: !!watchDistrictValue,
  });

  const handleSubmit = (values: z.infer<typeof FormAddInformationSchema>) => {
    startTransition(() => {
        appState.handleSetData(values)
        push("/information/show")
    });
  };

  const onSubmit = (values: z.infer<typeof FormAddInformationSchema>) => {
    handleSubmit(values);
  };

  return (
    <CardWrapper
      headerLabel="Form thêm thông tin cá nhân"
      backButton={{ label: "Quay lại", href: "/" }}
      title="Thông tin cá nhân"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Họ tên</FormLabel>
                <FormControl>
                  <Input
                    disabled={isPending}
                    placeholder="Nguyễn Văn A"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="birthday"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Ngày sinh</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription>
                  Your date of birth is used to calculate your age.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input disabled={isPending} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Số điện thoại</FormLabel>
                <FormControl>
                  <Input disabled={isPending} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Chọn giới tính của bạn:</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="male" />
                      </FormControl>
                      <FormLabel className="font-normal">Nam</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="female" />
                      </FormControl>
                      <FormLabel className="font-normal">Nữ</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="other" />
                      </FormControl>
                      <FormLabel className="font-normal">Khác</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="province"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tỉnh</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Vui lòng chọn tỉnh" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {provinceList &&
                      provinceList.data?.results.map((item, index) => (
                        <SelectItem
                          key={item.province_id + index}
                          value={item.province_id}
                        >
                          {item.province_name}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="district"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Quận/Huyện</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Vui lòng chọn quận/huyện" />
                    </SelectTrigger>
                  </FormControl>

                  {!!watchProvinceValue && (
                    <SelectContent>
                      {districtValue.data?.results.map((item, index) => (
                        <SelectItem
                          key={item.district_id + index}
                          value={item.district_id}
                        >
                          {item.district_name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  )}
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="ward"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Xã</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Vui lòng chọn xã" />
                    </SelectTrigger>
                  </FormControl>
                  {!!watchDistrictValue && (
                    <SelectContent>
                      {wardValue.data?.results.map((item, index) => (
                        <SelectItem
                          key={item.ward_id + index}
                          value={item.ward_id}
                        >
                          {item.ward_name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  )}
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tên đường</FormLabel>
                <FormControl>
                  <Input disabled={isPending} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? <BeatLoader /> : "Xác nhận"}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default FormAddInformation;
