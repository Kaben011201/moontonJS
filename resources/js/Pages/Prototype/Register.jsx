import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SideImage from "@/Components/SideImage";
import TextInput from "@/Components/TextInput";
import { Head, Link } from "@inertiajs/react";
import React from "react";

export default function Register() {
    return (
        <>
            <Head title="Sign Up" />
            <div class="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
                <section className="w-[58%] overflow-hidden fixed">
                    <SideImage />
                </section>

                <section class="py-24 ml-[65%]">
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
                    <form class="flex flex-col gap-8">
                        <div className="inline-flex flex-col w-[70%] gap-6">
                            <div>
                                <InputLabel value="Full Name" />
                                <TextInput
                                    name="fullName"
                                    id="fullName"
                                    type="text"
                                    placeholder="Your fullname..."
                                    required="required"
                                    autoComplete="off"
                                    value="Angga React"
                                />
                            </div>

                            <div>
                                <InputLabel value="Email Address" />
                                <TextInput
                                    name="email"
                                    id="email"
                                    type="email"
                                    placeholder="Your Email Address"
                                    required="required"
                                    autoComplete="off"
                                    value="anggaforreact@fb.com"
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
                                    value="bendry123"
                                />
                            </div>
                        </div>

                        <div className="grid space-y-[14px] mt-[30px] w-[70%]">
                            <PrimaryButton type="button" variant="primary">
                                <span className="text-base font-semibold">
                                    Sign Up
                                </span>
                            </PrimaryButton>

                            <Link href={route("prototype.register")}>
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

                        {/* <div class="grid space-y-[14px] mt-[30px]">
                        <a
                            href="/"
                            class="rounded-2xl bg-alerange py-[13px] text-center"
                        >
                            <span class="text-base font-semibold">Sign Up</span>
                        </a>
                        <a
                            href="sign_in.html"
                            class="rounded-2xl border border-white py-[13px] text-center"
                        >
                            <span class="text-base text-white">
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
