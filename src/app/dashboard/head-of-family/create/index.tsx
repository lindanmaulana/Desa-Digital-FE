import { customToastError, customToastSuccess } from '@/components/custom-toast';
import { errorHandler } from '@/lib/helpers';
import { headOfFamilyKeys } from '@/lib/queries/head-of-family/queryKeys';
import { AppRoutes } from '@/lib/route';
import { headOfFamilyService } from '@/lib/services/head-of-family/headOfFamily.service';
import { HeadOfFamilySchema, type TypeCreateHeadOfFamilySchema } from '@/lib/validation/headOfFamily.validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { CreateForm } from './components/form/CreateForm';


const CreateHeadOfFamilyPage = () => {
	const queryClient = useQueryClient()
	const router = useNavigate()
	const form = useForm<TypeCreateHeadOfFamilySchema>({
		resolver: zodResolver(HeadOfFamilySchema.create),
		defaultValues: {
			name: '',
			email: '',
			identity_number: "",
			phone_number: "",
			occupation: "",
			date_of_birth: "",
		},
	});

	const {mutate, isPending, reset: formReset} = useMutation({
		mutationKey: headOfFamilyKeys.create(),
		mutationFn: (req: TypeCreateHeadOfFamilySchema) => headOfFamilyService.create(req)
	})

	const handleForm = form.handleSubmit((value) => {
		mutate(value, {
			onSuccess: (data) => {
				customToastSuccess(data.message)
				formReset()

				queryClient.invalidateQueries({queryKey: headOfFamilyKeys.lists()})
				router(AppRoutes.head_of_family)
			},

			onError: (err) => {
				const errorMessage = errorHandler(err)
				customToastError(errorMessage)
			}
		})
	})

	return (
		<div className="p-6 space-y-8">
			<div className="space-y-2">
				<div className="text-village-secondary">
					<span>Kepala Rumah</span> / <span className="text-village-dark-green font-semibold">Tambah Kepala Rumah</span>
				</div>
				<h3 className="text-2xl font-semibold">Tambah Kepala Rumah Baru</h3>
			</div>

			<div className="bg-white p-4 rounded-xl">
				<CreateForm formMethods={form} handleForm={handleForm} isPending={isPending}  />
			</div>
		</div>
	);
};

export default CreateHeadOfFamilyPage;
