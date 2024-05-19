import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SideImage from "@/Components/SideImage";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import React from "react";
import { useEffect } from "react";

export default function Login() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <>
            <Head title="Login " />
            <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
                <section className="w-[58%] overflow-hidden fixed">
                    <SideImage />
                </section>

                <section className="py-24 ml-[65%]">
                    <div className="mb-16">
                        <img
                            className="mb-10"
                            src={"/images/moonton-white.svg"}
                            alt="Logo Moonton"
                        />
                        <div>
                            <h2 className="font-semibold text-2xl mb-5">
                                Welcome Back
                            </h2>
                            <p className="opacity-[0.5] w-[55%] leading-7">
                                Explore our new movie and get the better insight
                                for your life
                            </p>
                        </div>
                    </div>

                    <form className="flex flex-col gap-8" onSubmit={submit}>
                        <div className="inline-flex flex-col w-[70%] gap-6">
                            <div>
                                <InputLabel value="Email Address" />
                                <TextInput
                                    name="email"
                                    id="email"
                                    type="email"
                                    placeholder="Email Address"
                                    required
                                    autoComplete="username"
                                    value={data.email}
                                    handleChange={onHandleChange}
                                />
                                <InputError message={errors.email} />
                            </div>

                            <div>
                                <InputLabel value="Password" />
                                <TextInput
                                    name="password"
                                    id="password"
                                    type="password"
                                    placeholder="Password"
                                    required
                                    autoComplete="password"
                                    value={data.password}
                                    handleChange={onHandleChange}
                                />
                                <InputError message={errors.password} />
                            </div>
                            {/* <div className="block mt-4">
                                <label className="flex items-center">
                                    <Checkbox
                                        name="remember"
                                        checked={data.remember}
                                        onChange={(e) =>
                                            setData(
                                                "remember",
                                                e.target.checked
                                            )
                                        }
                                    />
                                    <span className="ms-2 text-sm text-white">
                                        Remember me
                                    </span>
                                </label>
                            </div> */}
                        </div>

                        <div className="grid space-y-[14px] mt-[30px] w-[70%]">
                            <PrimaryButton processing={processing}>
                                <span className="text-base font-semibold">
                                    Start Watching
                                </span>
                            </PrimaryButton>

                            <Link href={route("register")}>
                                <PrimaryButton
                                    type="button"
                                    variant="light-outline"
                                >
                                    <span className="text-base text-white">
                                        Create New Account
                                    </span>
                                </PrimaryButton>
                            </Link>
                        </div>
                    </form>
                </section>
            </div>
        </>
    );
}
