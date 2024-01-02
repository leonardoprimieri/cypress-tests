"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { NewsletterInput } from "./components/newsletter-input/newsletter-input";

const createUserSchema = z.object({
  name: z.string().min(3).max(20),
  age: z.string().min(1).max(3),
  newsletter: z.boolean().optional(),
});

type CreateUserFormData = z.infer<typeof createUserSchema>;

export const CreateUserForm = () => {
  const methods = useForm({
    resolver: zodResolver(createUserSchema),
  });

  const onSubmit = async (data: CreateUserFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  };

  return (
    <div className="flex justify-center items-center">
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit as any)}
          className="flex flex-col gap-3 mt-12 w-96"
        >
          <h1 className="text-3xl text-center mb-3 font-semibold text-blue-600 ">
            Create User Form
          </h1>
          <input
            {...methods.register("name")}
            className="px-1 py-2 border border-blue-800 rounded-lg"
          />
          <input
            {...methods.register("age")}
            className="px-1 py-2 border border-blue-800 rounded-lg"
          />

          <NewsletterInput />

          <button
            className="bg-blue-500 text-white cursor-pointer disabled:bg-slate-300 rounded-lg px-1 py-2"
            type="submit"
            disabled={!methods.formState.isValid}
          >
            {methods.formState.isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </FormProvider>
    </div>
  );
};
