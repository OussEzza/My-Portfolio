import { Button, Input, Textarea, Stack } from "@chakra-ui/react";
import { Field } from "./ui/field";
import { useForm } from "react-hook-form";

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <div className="flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32 xl:px-30 py-12 md:py-16">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-2">
        CONTACT ME
      </h1>
      <div className="w-16 sm:w-20 h-2 bg-sky-500 mb-6"></div>
      <p className="text-md sm:text-lg md:text-xl w-full sm:w-3/4 md:w-1/2 text-center leading-relaxed">
        Feel free to contact me by submitting the form below or a direct message
        in my mail and I will get back to you as soon as possible.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 md:gap-12 p-6 md:p-8 rounded-lg w-full max-w-full mt-6">
        {/* Left Column - Contact Form */}
        <div className="flex flex-col items-center md:items-start p-4 md:p-8 shadow-lg w-full">
          <h2 className="text-2xl sm:text-3xl font-bold text-center md:text-left mb-4 text-blue-400">
            Send a Message!
          </h2>
          <form onSubmit={onSubmit} className="w-full">
            <Stack gap="4" align="flex-center" className="w-full md:w-full">
              <Field
                label="Full Name"
                invalid={!!errors.fullname}
                errorText={errors.fullname?.message}
              >
                <Input
                  placeholder="Enter your full name"
                  {...register("fullname", {
                    required: "Full name is required",
                  })}
                />
              </Field>

              <Field
                label="Email"
                invalid={!!errors.email}
                errorText={errors.email?.message}
              >
                <Input
                  placeholder="Enter your email"
                  {...register("email", {
                    required: "Email is required",
                  })}
                />
              </Field>

              <Field
                label="Message"
                invalid={!!errors.message}
                errorText={errors.message?.message}
              >
                <Textarea
                  placeholder="Write your message"
                  {...register("message", {
                    required: "Message is required",
                  })}
                />
              </Field>

              <Button colorScheme="blue" size="md" type="submit">
                Submit
              </Button>
            </Stack>
          </form>
        </div>

        {/* Right Column - Contact Info */}
        <div className="flex flex-col items-start md:items-start p-6 md:p-8 rounded-lg shadow-lg w-full">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-blue-400">
            My Information
          </h2>

          <div className="text-md sm:text-lg md:text-xl space-y-4">
            <div>
              <p className="font-semibold text-blue-500">Name:</p>
              <p className="">Oussama EZZAHRI</p>
            </div>

            <div>
              <p className="font-semibold text-blue-500">Email:</p>
              <p className="">ezzahri.o021@ucd.ac.ma</p>
            </div>

            <div>
              <p className="font-semibold text-blue-500">Phone:</p>
              <p className="">+212655090407</p>
            </div>

            <div>
              <p className="font-semibold text-blue-500">Location:</p>
              <p className="">El Jadida, Morocco</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
