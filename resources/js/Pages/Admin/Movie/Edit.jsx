import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/Authenticated/Index";
import { Head, useForm } from "@inertiajs/react";
import React from "react";

export default function Edit({ auth, movie }) {
    const { data, setData, put, processing, errors } = useForm({
        ...movie,
    });

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "file"
                ? event.target.files[0]
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        if (data.thumbnail === movie.thumbnail) {
            delete data.thumbnail;
        }

        put(route("admin.dashboard.movie.update", movie.id), {
            ...data,
        });
    };
    return (
        <>
            <Head title="Admin - Update Movie" />
            <Authenticated auth={auth}>
                <h1 className="text-xl">Update movie: {movie.name}</h1>
                <hr className="mb-4" />

                <form className="flex flex-col gap-5" onSubmit={submit}>
                    {/* Name */}
                    <div>
                        <InputLabel htmlFor={"name"} value={"Name"} />
                        <TextInput
                            type="text"
                            defaultValue={movie.name}
                            name="name"
                            variant="primary-outline"
                            handleChange={onHandleChange}
                            placeholder="Insert the name of movie"
                        />
                        <InputError message={errors.name} />
                    </div>

                    {/* Category */}
                    <div>
                        <InputLabel htmlFor={"category"} value={"Category"} />
                        <TextInput
                            type="text"
                            name="category"
                            defaultValue={movie.category}
                            variant="primary-outline"
                            handleChange={onHandleChange}
                            placeholder="Insert the category of movie"
                        />
                        <InputError message={errors.category} />
                    </div>

                    {/* Video URL */}
                    <div>
                        <InputLabel htmlFor={"video_url"} value={"Video URL"} />
                        <TextInput
                            type="url"
                            name="video_url"
                            defaultValue={movie.video_url}
                            variant="primary-outline"
                            handleChange={onHandleChange}
                            placeholder="Insert the video url of movie"
                        />
                        <InputError message={errors.video_url} />
                    </div>

                    {/* Thumbnail */}
                    <div>
                        <InputLabel htmlFor={"thumbnail"} value={"Thumbnail"} />
                        <img
                            src={`/storage/${movie.thumbnail}`}
                            alt={movie.name}
                            className="w-40"
                        />
                        <TextInput
                            type="file"
                            name="thumbnail"
                            variant="primary-outline"
                            handleChange={onHandleChange}
                            placeholder="Insert thumbnail of movie"
                        />
                        <InputError message={errors.thumbnail} />
                    </div>

                    {/* Rating */}
                    <div>
                        <InputLabel htmlFor={"rating"} value={"Rating"} />
                        <TextInput
                            type="number"
                            name="rating"
                            defaultValue={movie.rating}
                            variant="primary-outline"
                            handleChange={onHandleChange}
                            placeholder="Insert the rating of movie"
                        />
                        <InputError message={errors.rating} />
                    </div>

                    {/* Is Featured */}
                    <div className="inline-flex flex-row items-center gap-2">
                        <InputLabel
                            className="mt-2"
                            htmlFor={"is_featured"}
                            value={"Featured"}
                        />
                        <Checkbox
                            name="is_featured"
                            checked={movie.is_featured}
                            handleChange={(e) =>
                                setData("is_featured", e.target.checked)
                            }
                        />
                    </div>

                    <PrimaryButton processing={processing}>Save</PrimaryButton>
                </form>
            </Authenticated>
        </>
    );
}
