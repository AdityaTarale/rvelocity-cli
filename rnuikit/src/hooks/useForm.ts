import {
  UseFormReturn,
  useForm as useReactHookForm,
  DefaultValues,
} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {ZodSchema, TypeOf} from 'zod';

export const useForm = <T extends ZodSchema>(
  schema: T,
  defaultValues: DefaultValues<TypeOf<T>>,
): UseFormReturn<TypeOf<T>> => {
  const formMethods = useReactHookForm<TypeOf<T>>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  return formMethods;
};

/**
 * Custom hook for form handling with Zod validation.
 *
 * @param schema - Zod schema for form validation.
 * @param defaultValues - Optional default values for form fields.
 * @returns Form methods and utilities from `useForm` hook.
 *
 * @example
 * Zod schema
 * const schema = z.object({
 *   email: z.string().email('Invalid email address'),
 *   password: z.string().min(6, 'Password must be at least 6 characters long'),
 * });
 *
 * In your form component
 * const { control, handleSubmit, formState: { errors } } = useForm(schema);
 *
 * <FormInput name="email" control={control} label="Email" />
 * <FormInput name="password" control={control} label="Password" secureTextEntry />
 * <Button onPress={handleSubmit(onSubmit)}>Submit</Button>
 *
 */
