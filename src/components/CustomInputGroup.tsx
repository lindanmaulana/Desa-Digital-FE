import { cn } from '@/lib/utils';
import { Check, X, type LucideIcon } from 'lucide-react';
import type { ControllerRenderProps, FieldValues } from 'react-hook-form';
import { useFormField } from './ui/form';
import { InputGroup, InputGroupAddon, InputGroupInput } from './ui/input-group';
import type { HTMLInputTypeAttribute } from 'react';

interface CustomInputGroupProps<TFieldValues extends FieldValues = FieldValues> {
	field: ControllerRenderProps<TFieldValues>;
	icon: LucideIcon;
	placeholder?: string;
	minLength?: number;
	maxLength?: number;
	type: HTMLInputTypeAttribute;
}

export const CustomInputGroup = <TFielsValues extends FieldValues = FieldValues>(props: CustomInputGroupProps<TFielsValues>) => {
	const {field, type, maxLength, minLength, placeholder} = props
	const { error, formMessageId } = useFormField();
	const body = error && String(error.message ?? '');

	return (
		<InputGroup key={formMessageId} className={cn(body && "!border-village-red", "border h-14 ring-village-dark-green rounded-2xl")}>
			<InputGroupInput {...field} type={type} placeholder={placeholder} className={cn(body ? "placeholder:text-village-red" : "placeholder:text-village-secondary","bg-transparent !text-base placeholder:text-base  placeholder:font-medium")} minLength={minLength} maxLength={maxLength} />
			<InputGroupAddon>
				<props.icon className={cn((field.value && !body) && 'text-village-dark-green', body && "text-village-red", 'size-6')} />
			</InputGroupAddon>

			{field.value && !body && (
				<InputGroupAddon key={formMessageId} align={'inline-end'} className={cn(field.name === 'name' && 'hidden')}>
					<Check className="bg-village-dark-green rounded-full p-1 text-white" />
				</InputGroupAddon>
			)}

			{body && (
				<InputGroupAddon key={formMessageId} align={'inline-end'} className={cn(field.name === 'name' && 'hidden')}>
					<X className="bg-village-red rounded-full p-1 text-white" />
				</InputGroupAddon>
			)}
		</InputGroup>
	);
};
