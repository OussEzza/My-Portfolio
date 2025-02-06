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
    <div className="flex flex-col items-center justify-center px-6 md:px-40 py-16">
      <h1 className="text-5xl font-extrabold text-center mb-1">CONTACT ME</h1>
      <div className="w-20 h-2 bg-sky-500 mb-6"></div>
      <p className="text-lg md:text-xl w-1/2 text-center leading-relaxed">
        Feel free to contact me by submitting the form below or a direct message
        in my mail and I will get back to you as soon as possible
      </p>

      <div className="grid grid-cols-1 mt-4 md:grid-cols-2 gap-12 p-8 rounded-lg">
        {/* Left Column */}
        <div className="flex flex-col items-center md:items-start p-4 md:p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-center md:text-left mb-4 text-blue-400">
            Send a message !
          </h2>
          <form onSubmit={onSubmit}>
            <Stack gap="4" align="flex-center" maxWidth={""} className="md:w-96">
              <Field
                label="Full name"
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
        {/* Right Column */}
        <div className="flex flex-col items-start justify-center p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-6 text-blue-400">
            My Informations
          </h2>

          <div className="text-lg md:text-xl mb-4 space-y-4">
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
              <p className="">EL Jadida, Morocco</p>
            </div>

            {/* <div>
              <p className="font-semibold text-blue-500">About Me:</p>
              <p className="">
                I am a passionate software developer with a focus on web
                development, particularly using technologies like React, Vue.js,
                and Laravel. I'm constantly learning and expanding my skill set
                to stay up-to-date with the latest trends in the tech world.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
