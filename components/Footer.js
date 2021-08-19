
function Footer() {
    return (
        <div className=" grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32
         py-14  bg-gray-100 text-gray-600">
           <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">About</h5>
            <p>How Airbnb works</p>
            <p>Newsroom</p>
            <p>Investors</p>
            <p>Airbnb Plus</p>
            <p>Airbnb Lux</p>
        </div>

      <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">Host</h5>
            <p>Mike The Jewelry KING</p>
            <p>Presents</p>
            <p>Mug and Stone</p>
            <p>Hudson Harbor</p>
            <p>Join Now</p>
        </div>

      <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">Support</h5>
            <p>Help Center</p>
            <p>Trust and Safety</p>
            <p>Coders Camp</p>
            <p>Winners</p>
            <p>Airbnb ninja</p>
        </div>

        </div>
        
    );
}

export default Footer;
