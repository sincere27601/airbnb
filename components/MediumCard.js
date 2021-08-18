import Image from "next/image";

function MediumCard({ img, title }) {
    return (
        <div>
           <div className="relative h-80 w-80">
           <Image src={img} layout="fill" />
           </div> 
           <h3>{title}</h3>
        </div>
    );
}

export default MediumCard;
