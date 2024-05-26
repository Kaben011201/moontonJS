import FlashMessage from "@/Components/FlashMessage";
import PrimaryButton from "@/Components/PrimaryButton";
import Authenticated from "@/Layouts/Authenticated/Index";
import { Head, Link } from "@inertiajs/react";
import React from "react";

export default function Index({ auth, flashMessage }) {
    return (
        <>
            <Head title="Admin" />
            <Authenticated auth={auth}>
                <Link href={route("admin.dashboard.movie.create")}>
                    <PrimaryButton className="w-40 mb-8" type="button">
                        Insert New Movie
                    </PrimaryButton>
                </Link>
                {flashMessage?.message && (
                    <FlashMessage message={flashMessage.message} />
                )}
                
            </Authenticated>
        </>
    );
}
