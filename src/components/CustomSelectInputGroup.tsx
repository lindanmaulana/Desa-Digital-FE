import { cn } from '@/lib/utils';
import { Check, X, type LucideIcon } from 'lucide-react';
import type { HTMLInputTypeAttribute } from 'react';
import type { ControllerRenderProps, FieldValues } from 'react-hook-form';
import { useFormField } from './ui/form';
import { InputGroupAddon, InputGroupInput } from './ui/input-group';
import { RadioGroup } from './ui/radio-group';

interface CustomSelectInputGroupProps<TFieldValues extends FieldValues = FieldValues> {
	field: ControllerRenderProps<TFieldValues>;
	icon: LucideIcon;
	placeholder?: string;
	minLength?: number;
	maxLength?: number;
	type: HTMLInputTypeAttribute;
}

export const CustomSelectInputGroup = <TFielsValues extends FieldValues = FieldValues>(props: CustomSelectInputGroupProps<TFielsValues>) => {
	const { error, formMessageId } = useFormField();
	const body = error && String(error.message ?? '');

	return (
		<RadioGroup className="border-none h-14 ring-village-dark-green rounded-2xl">
			<InputGroupInput {...props.field} type={props.type} placeholder={props.placeholder} className="!text-base placeholder:text-base placeholder:text-village-secondary placeholder:font-medium" minLength={props.minLength} maxLength={props.maxLength} />
			<InputGroupAddon>
				<props.icon className={cn(props.field.value && 'text-village-dark-green', 'size-6')} />
			</InputGroupAddon>

			{props.field.value && !body && (
				<InputGroupAddon key={formMessageId} align={'inline-end'} className={cn(props.field.name === 'name' && 'hidden')}>
					<Check className="bg-village-dark-green rounded-full p-1 text-white" />
				</InputGroupAddon>
			)}

			{props.field.value && body && (
				<InputGroupAddon key={formMessageId} align={'inline-end'} className={cn(props.field.name === 'name' && 'hidden')}>
					<X className="bg-village-red rounded-full p-1 text-white" />
				</InputGroupAddon>
			)}
		</RadioGroup>
	);
};
