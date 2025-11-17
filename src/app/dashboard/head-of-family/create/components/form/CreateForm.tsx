import { CustomInputGroup } from '@/components/CustomInputGroup';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { cn } from '@/lib/utils';
import { type TypeCreateHeadOfFamilySchema } from '@/lib/validation/headOfFamily.validation';
import type { AuthFormSubmissingProps } from '@/types/auth/auth.types';
import { BriefcaseBusiness, CalendarDays, Keyboard, Loader, Mail, Mars, Phone, User, User2, Users, Venus } from 'lucide-react';
import { Link } from 'react-router';

export const CreateForm = (props: AuthFormSubmissingProps<TypeCreateHeadOfFamilySchema>) => {
	const { formMethods, handleForm, isPending } = props;

	return (
		<Form {...formMethods}>
			<form onSubmit={handleForm} className="space-y-6 divide-y">
				<div className="divide-y">
					<FormField
						control={formMethods.control}
						name="name"
						render={({ field }) => (
							<FormItem className="grid grid-cols-2 py-6">
								<FormLabel className="text-base font-semibold text-village-secondary">Nama Kepala Rumah</FormLabel>
								<FormControl>
									<div className="space-y-1">
										<CustomInputGroup type="text" field={field} icon={User2} placeholder="Masukan nama lengkap" />
										<FormMessage />
									</div>
								</FormControl>
							</FormItem>
						)}
					/>

					<FormField
						control={formMethods.control}
						name="identity_number"
						render={({ field }) => (
							<FormItem className="grid grid-cols-2 py-6">
								<FormLabel className="text-base font-semibold text-village-secondary">Nomor Induk Kependudukan</FormLabel>
								<FormControl>
									<div className="space-y-1">
										<CustomInputGroup type="text" field={field} icon={Keyboard} maxLength={16} placeholder="Ketik NIK" />
										<FormMessage />
									</div>
								</FormControl>
							</FormItem>
						)}
					/>

					<FormField
						control={formMethods.control}
						name="phone_number"
						render={({ field }) => (
							<FormItem className="grid grid-cols-2 py-6">
								<FormLabel className="text-base font-semibold text-village-secondary">Nomor Handphone</FormLabel>
								<FormControl>
									<div className="space-y-1">
										<CustomInputGroup type="text" field={field} icon={Phone} placeholder="Masukan No. HP yang aktif" />
										<FormMessage />
									</div>
								</FormControl>
							</FormItem>
						)}
					/>

					<FormField
						control={formMethods.control}
						name="occupation"
						render={({ field }) => (
							<FormItem className="grid grid-cols-2 py-6">
								<FormLabel className="text-base font-semibold text-village-secondary">Pekerjaan <span className='font-normal'>(Opsional)</span></FormLabel>
								<FormControl>
									<div className="space-y-1">
										<CustomInputGroup type="text" field={field} icon={BriefcaseBusiness} placeholder="Masukan nama pekerjaan" />
										<FormMessage />
									</div>
								</FormControl>
							</FormItem>
						)}
					/>

					<FormField
						control={formMethods.control}
						name="date_of_birth"
						render={({ field }) => (
							<FormItem className="grid grid-cols-2 py-6">
								<FormLabel className="text-base font-semibold text-village-secondary">Tanggal Lahir <span className='font-normal'>(Opsional)</span></FormLabel>
								<FormControl>
									<div className="space-y-1">
										<CustomInputGroup type="date" field={field} icon={CalendarDays} placeholder="Masukan nama pekerjaan" />
										<FormMessage />
									</div>
								</FormControl>
							</FormItem>
						)}
					/>

					<FormField
						control={formMethods.control}
						name="gender"
						render={({ field }) => {
							const isMale = field.value === 'MALE';
							const isFemale = field.value === 'FEMALE';
							return (
								<FormItem className="grid grid-cols-2 py-6">
									<FormLabel className="text-base font-semibold text-village-secondary">Jenis Kelamin</FormLabel>
									<FormControl>
										<div className="space-y-1">
											<RadioGroup onValueChange={(value) => field.onChange(value)} className="grid grid-cols-2">
												<Label htmlFor="MALE" className={cn(isMale ? 'ring-[0.5px] border-[1.5px] border-village-dark-green/80' : 'border', 'flex items-center justify-between cursor-pointer rounded-xl p-4')}>
													<div className="flex items-center gap-2">
														<RadioGroupItem id="MALE" value="MALE" />
														<span>Pria</span>
													</div>
													<Mars className={cn(isMale && 'text-village-dark-green')} />
												</Label>
												<Label htmlFor="FEMALE" className={cn(isFemale ? 'ring-[0.5px] border-[1.5px] border-village-dark-green/80' : 'border', 'flex items-center justify-between cursor-pointer rounded-xl p-4')}>
													<div className="flex items-center gap-2">
														<RadioGroupItem id="FEMALE" value="FEMALE" />
														<span>Wanita</span>
													</div>
													<Venus className={cn(isFemale && 'text-village-dark-green')} />
												</Label>
											</RadioGroup>
											<FormMessage />
										</div>
									</FormControl>
								</FormItem>
							);
						}}
					/>

					<FormField
						control={formMethods.control}
						name="marital_status"
						render={({ field }) => {
							const isSingle = field.value === 'SINGLE';
							const isMarried = field.value === 'MARRIED';
							return (
								<FormItem className="grid grid-cols-2 py-6">
									<FormLabel className="text-base font-semibold text-village-secondary">Status</FormLabel>
									<FormControl>
										<div className="space-y-1">
											<RadioGroup onValueChange={(value) => field.onChange(value)} className="grid grid-cols-2">
												<Label htmlFor="SINGLE" className={cn(isSingle ? 'ring-[0.5px] border-[1.5px] border-village-dark-green/80' : 'border', 'flex items-center justify-between cursor-pointer rounded-xl p-4')}>
													<div className="flex items-center gap-2">
														<RadioGroupItem className="" id="SINGLE" value="SINGLE" />
														<span>Belum Menikah</span>
													</div>
													<User className={cn(isSingle && 'text-village-dark-green')} />
												</Label>
												<Label htmlFor="MARRIED" className={cn(isMarried ? 'ring-[0.5px] border-[1.5px] border-village-dark-green/80' : 'border', 'flex items-center justify-between cursor-pointer rounded-xl p-4')}>
													<div className="flex items-center gap-2">
														<RadioGroupItem id="MARRIED" value="MARRIED" />
														<span>Sudah Menikah</span>
													</div>
													<Users className={cn(isMarried && 'text-village-dark-green')} />
												</Label>
											</RadioGroup>
											<FormMessage />
										</div>
									</FormControl>
								</FormItem>
							);
						}}
					/>

					<FormField
						control={formMethods.control}
						name="email"
						render={({ field }) => (
							<FormItem className="grid grid-cols-2 py-6">
								<FormLabel className="text-base font-semibold text-village-secondary">Email Address</FormLabel>
								<FormControl>
									<div className='space-y-1'>
										<CustomInputGroup type="email" field={field} icon={Mail} placeholder="Masukan Email" />
										<FormMessage />
									</div>
								</FormControl>
							</FormItem>
						)}
					/>
				</div>

				<div className="flex items-center justify-end gap-4">
					<Button type="button" className="text-base bg-village-red hover:bg-village-red/80 p-6 rounded-xl cursor-pointer" asChild>
						<Link to={'/dashboard/head-of-family?page=1&limit=5'}>Batal, Tidak Jadi</Link>
					</Button>

					<Button type="submit" className="text-base bg-village-dark-green hover:bg-village-dark-green/80 p-6 rounded-xl cursor-pointer" disabled={isPending}>
						{isPending ? <Loader className='animate-spin' />: "Create Now"}
					</Button>
				</div>
			</form>
		</Form>
	);
};
