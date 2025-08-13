import SocialLinks from "../components/SocialLinks";

const Footer = () => {
    return (
        <footer className="w-full bg-black py-8">
            <div className="w-10/12 mx-auto">
                <div className="mb-4 text-center">
                    <SocialLinks />
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="font-playfair font-semibold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-500">
                        Harshaun Khehra
                    </p>

                    <p className="font-playfair text-md bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-500 mt-4 md:mt-0 md:ml-4">
                        ©2025 Khehra. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
