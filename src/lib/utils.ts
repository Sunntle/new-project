import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function formatPrice(props:number){
  return props.toLocaleString('it-IT', {style : 'currency', currency : 'vnd'});
}
export function getHoursAndMinutes(props:string){
  new Date
}

export function minutesToHoursAndMinutes(minutes:number) {
  if (minutes < 0) {
    throw new Error("Input minutes cannot be negative.");
  }

  const days = Math.floor(minutes / (24 * 60)); // Days calculation
  minutes %= 24 * 60; // Remaining minutes after removing days

  const hours = Math.floor(minutes / 60); // Hours calculation
  minutes %= 60; // Remaining minutes after removing hours
  if(days == 0) return `${hours.toString()}h${minutes.toString().padStart(2, "0")}m`
  return  `${days}d${hours.toString().padStart(2, "0")}h${minutes.toString().padStart(2, "0")}m`;
}