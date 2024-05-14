import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SideImage from "@/Components/SideImage";
import TextInput from "@/Components/TextInput";
import { Head, Link } from "@inertiajs/react";
import React from "react";

export default function Login2() {
    return (
        <>
        <Head title="Login"/>
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

                    <form className="flex flex-col gap-8" action="">
                        <div className="inline-flex flex-col w-[70%] gap-6">
                            <div>
                                <InputLabel value="Email Address" />
                                <TextInput
                                    name="email"
                                    id="email"
                                    type="email"
                                    placeholder="Email Address"
                                    required="required"
                                    autoComplete="off"
                                />
                            </div>

                            <div>
                                <InputLabel value="Password" />
                                <TextInput
                                    name="password"
                                    id="password"
                                    type="password"
                                    placeholder="Password"
                                    required="required"
                                    autoComplete="off"
                                />
                            </div>
                        </div>

                        <div className="grid space-y-[14px] mt-[30px] w-[70%]">
                            <PrimaryButton type="button" variant="primary">
                                <span className="text-base font-semibold">
                                    Start Watching
                                </span>
                            </PrimaryButton>

                            <Link href={route("prototype.register")}>
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
