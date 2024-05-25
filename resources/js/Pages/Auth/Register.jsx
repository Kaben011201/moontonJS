import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SideImage from "@/Components/SideImage";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import React from "react";
import { useEffect } from "react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <>
            <Head title="Sign Up" />
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
                                <InputLabel value="Name" forinput="name" />
                                <TextInput
                                    name="name"
                                    id="fullName"
                                    type="text"
                                    value={data.name}
                                    placeholder="Your fullname..."
                                    required
                                    isFocused={true}
                                    handleChange={onHandleChange}
                                    autoComplete="name"
                                />
                                <InputError message={errors.name} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel
                                    value="Email Address"
                                    forinput="email"
                                />
                                <TextInput
                                    name="email"
                                    id="email"
                                    type="email"
                                    placeholder="Your Email Address"
                                    required
                                    handleChange={onHandleChange}
                                    value={data.email}
                                    autoComplete="email"
                                />
                                <InputError message={errors.email} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel
                                    value="Password"
                                    forinput="password"
                                />
                                <TextInput
                                    name="password"
                                    id="password"
                                    type="password"
                                    placeholder="Password"
                                    required
                                    handleChange={onHandleChange}
                                    value={data.password}
                                    autoComplete="password"
                                />
                                <InputError message={errors.password} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel
                                    value="Confirm Password"
                                    forinput="password"
                                />
                                <TextInput
                                    name="password_confirmation"
                                    id="password_confirmation"
                                    type="password"
                                    placeholder="Confirm Password"
                                    required
                                    handleChange={onHandleChange}
                                    value={data.password_confirmation}
                                    autoComplete="password_confirmation"
                                />
                                <InputError message={errors.password_confirmation} className="mt-2" />
                            </div>
                        </div>

                        <div className="grid space-y-[14px] mt-[30px] w-[70%]">
                            <PrimaryButton processing={processing}>
                                <span className="text-base font-semibold">
                                    Sign Up
                                </span>
                            </PrimaryButton>

                            <Link href={route("login")}>
                                <PrimaryButton
                                    type="button"
                                    variant="light-outline"
                                >
                                    <span className="text-base text-white">
                                        Sign In to My Account
                                    </span>
                                </PrimaryButton>
                            </Link>
                        </div>

                        {/* <div className="grid space-y-[14px] mt-[30px]">
                        <a
                            href="/"
                            className="rounded-2xl bg-alerange py-[13px] text-center"
                        >
                            <span className="text-base font-semibold">Sign Up</span>
                        </a>
                        <a
                            href="sign_in.html"
                            className="rounded-2xl border border-white py-[13px] text-center"
                        >
                            <span className="text-base text-white">
                                Sign In to My Account
                            </span>
                        </a>
                    </div> */}
                    </form>
                </section>
            </div>
        </>
    );
}
