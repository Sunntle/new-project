"use server"
import { FormAddInformationSchema } from "@/schemas";
import { redirect } from "next/navigation";
import { z } from "zod";

export async function SaveInfoAction(values: z.infer<typeof FormAddInformationSchema>, ) {
    
    return redirect(`/information/show`)
}
