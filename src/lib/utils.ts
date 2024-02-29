import { twMerge } from "tailwind-merge"
import clsx, { ClassValue } from "clsx"

export function cn(...inputes: ClassValue[]) { 
    return twMerge(clsx(inputes))
}
