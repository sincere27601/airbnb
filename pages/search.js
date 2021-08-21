import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/dist/client/router";
import { format } from "date-fns";

function Search() {
    const router = useRouter();
    const { location, startDate, endDate, 
    noOfGuests} = router.query;

    console.log(router.query);
    console.log("startDate in search file", startDate);
    console.log("endDate in search file", endDate);

    
    
    const formattedStartDate = format(new Date(), "dd MMMM yy");
    const formattedEndDate = format(new Date(), "dd MMMM yy");

    const range = `${formattedStartDate} - ${formattedEndDate}`;
    
    console.log(">>>> ", formattedStartDate);
    console.log("startDate in search file-1", startDate);
    console.log("endDate in search file-1", startDate);

    


    return (
        <div>
            <Header placeholder={ `${location} | ${range} | ${noOfGuests} guests`}/>

            <main className="flex">
            <section className='flex-grow pt-14 px-6'>

             <p className='text-xs'> 300+ stays - { range } - for {noOfGuests} guests
             </p>

             <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>
             <div className="hidden lg:inline-flex mb-5 space-x-3 
             text-gray-800 whitespace-nowrap"> 
             <p className= "button">Cancellation Flexibility</p>
             <p className= "button">Price</p>
             <p className= "button">Rooms and beds</p>
             <p className= "button">More filters</p>
             <p className= "button">Type of Places</p>
    
             </div>
            </section>
            
            </main>

            <Footer />
        </div>
    );
}

export default Search;
