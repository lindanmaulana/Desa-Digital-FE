import { Button, cn } from "@heroui/react";
import type { ReactNode } from "react";

interface CustomButtonProps {
	children: ReactNode
	type: "submit" | "reset" | "button"
	className?: string
}

export const CustomButton = ({children, type, className}: CustomButtonProps) => {
	return (
		<Button type={type} className={cn("w-full font-semibold text-white bg-desa-dark-green", className)} size="lg">
			{children}
		</Button>
	);
};
