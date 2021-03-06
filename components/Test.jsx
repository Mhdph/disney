import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import { getSession, useSession } from "next-auth/react";
import Hero from "../components/Hero";
import Slider from "../components/Slider";
import Brands from "../components/Brands";
import MoviesCollection from "../components/MoviesCollection";
import SeriesCollection from "../components/SeriesCollection";

export default function Home({
  popularMovies,
  popularShows,
  top_ratedMovies,
  top_ratedShows,
}) {
  return (
    <div className="">
      <Head>
        <title>Test</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="relative min-h-screen after:bg-home after:bg-center after:bg-cover after:bg-no-repeat after:bg-fixed after:absolute after:inset-0 after:z-[-1]">
        <Slider />
        <Brands />
        <MoviesCollection results={popularMovies} title="Popular Movies" />
        <SeriesCollection results={popularShows} title="Popular Shows" />
        <MoviesCollection results={top_ratedMovies} title="Top Rated Movies" />
        <SeriesCollection results={top_ratedShows} title="Top Rated Shows" />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  const [
    popularMoviesRes,
    popularShowsRes,
    top_ratedMoviesRes,
    top_ratedShowsRes,
  ] = await Promise.all([
    fetch(`your_url?api_key=${process.env.API_KEY}&language=en-US&page=1`),
    fetch(`your_url?api_key=${process.env.API_KEY}&language=en-US&page=1`),
    fetch(`your_url?api_key=${process.env.API_KEY}&language=en-US&page=1`),
    fetch(`your_url?api_key=${process.env.API_KEY}&language=en-US&page=1`),
  ]);
  const [popularMovies, popularShows, top_ratedMovies, top_ratedShows] =
    await Promise.all([
      popularMoviesRes.json(),
      popularShowsRes.json(),
      top_ratedMoviesRes.json(),
      top_ratedShowsRes.json(),
    ]);

  return {
    props: {
      session,
      popularMovies: popularMovies.results,
      popularShows: popularShows.results,
      top_ratedMovies: top_ratedMovies.results,
      top_ratedShows: top_ratedShows.results,
    },
  };
}
