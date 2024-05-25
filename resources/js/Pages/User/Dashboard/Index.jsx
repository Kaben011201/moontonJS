import FeaturedMovie from "@/Components/FeaturedMovie";
import Authenticated from "@/Layouts/Authenticated/Index";
import { Head } from "@inertiajs/react";
import { React, useState, useEffect } from "react";
import Flickity from "react-flickity-component";
// import featured1 from "/public/images/featured-1.png";
// import featured2 from "/public/images/featured-2.png";
// import featured3 from "/public/images/featured-3.png";
// import movie1 from "/public/images/browse-1.png";
// import movie2 from "/public/images/browse-2.png";
// import movie3 from "/public/images/browse-3.png";
// import movie4 from "/public/images/browse-4.png";
// import movie5 from "/public/images/browse-5.png";
// import movie6 from "/public/images/browse-6.png";
// import movie7 from "/public/images/browse-7.png";
// import movie8 from "/public/images/browse-8.png";
import MovieCard from "@/Components/MovieCard";

// const FeaturedList = [
//     {
//         thumbnail: featured1,
//         name: "The Batman in Love",
//         category: "Action • Horor",
//         rating: 4.5,
//         slug: "the-batman-in-love",
//     },
//     {
//         thumbnail: featured2,
//         name: "Despicable Me 2",
//         category: "Action • Adventure",
//         rating: 4.2,
//         slug: "despicable-me-2",
//     },
//     {
//         thumbnail: featured3,
//         name: "Train Dragons II",
//         category: "Love • Adventure",
//         rating: 4.9,
//         slug: "train-dragons-ii",
//     },
//     {
//         thumbnail: featured1,
//         name: "The Batman in Love",
//         category: "Action • Horor",
//         rating: 4.5,
//         slug: "the-batman-in-love",
//     },
//     {
//         thumbnail: featured2,
//         name: "Despicable Me 2",
//         category: "Action • Adventure",
//         rating: 4.2,
//         slug: "despicable-me-2",
//     },
//     {
//         thumbnail: featured3,
//         name: "Train Dragons II",
//         category: "Love • Adventure",
//         rating: 4.9,
//         slug: "train-dragons-ii",
//     },
// ];

// const MoviesList = [
//     {
//         thumbnail: movie1,
//         name: "Meong Golden",
//         slug: "meong-golden",
//         info: "Horor • Love",
//     },
//     {
//         thumbnail: movie2,
//         name: "Strange",
//         slug: "strange",
//         info: "2022",
//     },
//     {
//         thumbnail: movie3,
//         name: "Fornite",
//         slug: "fornite",
//         info: "2022",
//     },
//     {
//         thumbnail: movie4,
//         name: "King's Queen",
//         slug: "king's-queen",
//         info: "2022",
//     },
//     {
//         thumbnail: movie5,
//         name: "Morbius",
//         slug: "morbius",
//         info: "2022",
//     },
//     {
//         thumbnail: movie6,
//         name: "Batman Adventure",
//         slug: "batman-adventure",
//         info: "2024",
//     },
//     {
//         thumbnail: movie7,
//         name: "The Spoiled Spiderman",
//         slug: "the-spoiled-spiderman",
//         info: "2024",
//     },
//     {
//         thumbnail: movie8,
//         name: "Leo's Journey",
//         slug: "leo's journey",
//         info: "2021",
//     },
// ];

export default function Dashboard({ auth, featuredMovies, movies }) {
    const [loading, setLoading] = useState(true);
    const featuredFlickity = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        draggable: ">1",
        pageDots: false,
        prevNextButtons: false,
        // autoPlay: true,
        // selectedAttraction: 0.01,
        // friction: 0.15,
    };

    const moviesFlickity = {
        cellAlign: "left",
        contain: true,
        pageDots: false,
        prevNextButtons: false,
        // autoPlay: true,
        // freeSroll: true,
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Authenticated auth={auth}>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                />
                <title>Dashboard</title>
            </Head>

            {/* Start Featured */}
            <div>
                <div className="font-semibold text-[22px] text-black mb-4">
                    Featured Movies
                </div>
                <Flickity className="gap-[30px]" options={featuredFlickity}>
                    {loading
                        ? [1, 2, 3].map((_, index) => (
                              <div key={index} className="mr-[30px]">
                                  <div className="rounded-[30px] w-[520px] h-[340px] bg-slate-200"></div>
                              </div>
                          ))
                        : featuredMovies?.map((featured) => (
                              <FeaturedMovie
                                  key={featured.id}
                                  slug={featured.slug}
                                  thumbnail={featured.thumbnail}
                                  category={featured.category}
                                  rating={featured.rating}
                                  name={featured.name}
                              />
                          ))}
                </Flickity>
            </div>
            {/* End Featured */}

            {/* Start Movie */}
            <div>
                <div className="font-semibold text-[22px] text-black mb-4">
                    Browse
                </div>
                <Flickity className="gap-[30px]" options={moviesFlickity}>
                    {loading
                        ? [1, 2, 3, 4, 5, 6].map((_, index) => (
                              <div className="mr-[30px]" key={index}>
                                  <div className="rounded-[30px] h-[340px] w-[250px] bg-slate-200"></div>
                              </div>
                          ))
                        : movies?.map((movie) => (
                              <MovieCard
                                  key={movie.id}
                                  name={movie.name}
                                  category={movie.category}
                                  thumbnail={movie.thumbnail}
                                  slug={movie.slug}
                              />
                          ))}
                </Flickity>
            </div>
            {/* End Featured */}
        </Authenticated>
    );
}
