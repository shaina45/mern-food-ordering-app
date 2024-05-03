const Footer =()=>{
    return(
    <div className="bg-black-500 py-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <span className="text-2xl text-black font-bold tracking-tight">
                @2024 FoodCorner,All rights reserved
                </span>
            <span className="text-black font-bold tracking-tight flex gap-4">
                <span>Privacy Policy</span>
                <span>Terms of Service</span>
            </span>
        </div>
    </div>
    );
};

export default Footer;