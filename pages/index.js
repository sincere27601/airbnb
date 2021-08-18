
import Header from '../components/Header';
import Head from "next/head";
import Banner from '../components/Banner';
export default function Home() {
  return (
    <div className="">
      <Head>
        <title>AirBNB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <Header />
     <Banner />

     <main className="max-w-7x1 px-8 sm:px-16">
     <section className="pt-6">
     <h2 className="text-4xl font-semibold pb-5">Explore Nearby
     </h2>

     {/*Pull Data from server API END*/}
     </section>
     </main>
     
    </div>
  );
}
