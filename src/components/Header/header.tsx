// 'use client';
// import { RiHome2Line } from "react-icons/ri";
// import Image from "next/image";
// import Link from "next/link";

// const Header = () => {
//     return (
//         <header className="flex justify-between items-center p-5 bg-green-700 shadow-md">
//             <div className="flex items-center">
//                 <Image className="bg-white" src={"/asset/msab_logo_b.png"} width={85} height={85} alt={"msab logo"} />
//             </div>
//             <nav className="flex gap-6">
//                 <Link href="#" className="relative text-lg text-white pb-1 flex items-center gap-2 group">
//                     <RiHome2Line className="text-red-700 group-hover:text-green-700 transition-colors duration-300" />
//                     <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
//                 </Link>
//                 <Link href="#" className="relative text-lg text-white pb-1 hover:text-red-700 focus:text-red-700">
//                     সেবাসমূহ
//                     <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 hover:w-full"></span>
//                 </Link>
//                 <Link href="#" className="relative text-lg text-white pb-1 hover:text-red-700 focus:text-red-700">
//                     ব্লগ
//                     <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 hover:w-full"></span>
//                 </Link>
//                 <Link href="#" className="relative text-lg text-white pb-1 hover:text-red-700 focus:text-red-700">
//                     যোগাযোগ
//                     <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 hover:w-full"></span>
//                 </Link>
//             </nav>
//             <button className="px-4 py-2.5 rounded-md text-white text-base bg-red-700 transition-colors duration-300 hover:bg-green-700">
//                 Login
//             </button>
//         </header>
//     );
// };

// export default Header;


// 

// 

// 'use client';
// import { RiHome2Line } from "react-icons/ri";
// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";

// const Header = () => {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//     const toggleMobileMenu = () => {
//         setIsMobileMenuOpen(!isMobileMenuOpen);
//     };

//     return (
//         <header className="flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 2xl:px-48 py-5 bg-green-700 shadow-md">
//             {/* Logo */}
//             <div className="flex items-center">
//                 <Image className="bg-white" src={"/asset/msab_logo_b.png"} width={75} height={75} alt={"msab logo"} />
//             </div>
            
//             {/* Mobile Menu Toggle */}
//             <button 
//                 className="lg:hidden text-white text-2xl" 
//                 onClick={toggleMobileMenu}
//             >
//                 {isMobileMenuOpen ? '✖' : '☰'}
//             </button>
            
//             {/* Sidebar Navigation for Mobile */}
//             <div 
//                 className={`lg:hidden fixed top-0 left-0 h-full bg-green-700 transition-transform duration-300 ${isMobileMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}
//             >
//                 <nav className="flex flex-col items-start gap-6 p-6">
//                     <Link href="#" className="relative text-lg text-white pb-1 flex items-center gap-2 group">
//                         <RiHome2Line className="text-red-700 transition-colors duration-300" />
//                         <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-transparent group-hover:bg-red-700 transition-all duration-300 group-hover:w-full"></span>
//                     </Link>
//                     <Link href="#" className="relative text-lg text-white pb-1 hover:text-red-700 focus:text-red-700 group">
//                         সেবাসমূহ
//                         <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-transparent group-hover:bg-red-700 transition-all duration-300 group-hover:w-full"></span>
//                     </Link>
//                     <Link href="#" className="relative text-lg text-white pb-1 hover:text-red-700 focus:text-red-700 group">
//                         ব্লগ
//                         <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-transparent group-hover:bg-red-700 transition-all duration-300 group-hover:w-full"></span>
//                     </Link>
//                     <Link href="#" className="relative text-lg text-white pb-1 hover:text-red-700 focus:text-red-700 group">
//                         যোগাযোগ
//                         <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-transparent group-hover:bg-red-700 transition-all duration-300 group-hover:w-full"></span>
//                     </Link>
//                 </nav>
//             </div>
            
//             {/* Regular Navigation for Desktop */}
//             <nav className="hidden lg:flex gap-6">
//                 <Link href="#" className="relative text-lg text-white pb-1 flex items-center gap-2 group">
//                     <RiHome2Line className="text-red-700 transition-colors duration-300" />
//                     <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-transparent group-hover:bg-red-700 transition-all duration-300 group-hover:w-full"></span>
//                 </Link>
//                 <Link href="#" className="relative text-lg text-white pb-1 hover:text-red-700 focus:text-red-700 group">
//                     সেবাসমূহ
//                     <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-transparent group-hover:bg-red-700 transition-all duration-300 group-hover:w-full"></span>
//                 </Link>
//                 <Link href="#" className="relative text-lg text-white pb-1 hover:text-red-700 focus:text-red-700 group">
//                     ব্লগ
//                     <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-transparent group-hover:bg-red-700 transition-all duration-300 group-hover:w-full"></span>
//                 </Link>
//                 <Link href="#" className="relative text-lg text-white pb-1 hover:text-red-700 focus:text-red-700 group">
//                     যোগাযোগ
//                     <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-transparent group-hover:bg-red-700 transition-all duration-300 group-hover:w-full"></span>
//                 </Link>
//             </nav>
            
//             {/* Login Button */}
//             <button className="relative px-4 py-2 rounded-md text-white text-base bg-red-700 transition-colors duration-300 hover:bg-green-700 group">
//                 Login
//                 <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-transparent group-hover:bg-red-700 transition-all duration-300 group-hover:w-full"></span>
//             </button>
//         </header>
//     );
// };

// export default Header;


'use client';
import { IoHome } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <header className="flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 2xl:px-48 py-5 bg-green-700 shadow-md">
            <div className="flex  items-center">
                <Image className="bg-white" 
                src={"/asset/msab_logo_b.png"} 
                width={75} 
                height={75} 
                alt={"msab logo"} />
            </div>
            <nav className="flex gap-6">
                <Link href="#" className="relative text-lg text-white pb-1 flex items-center gap-2 group">
                    <IoHome  className="text-red-700 transition-colors duration-300" />
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-transparent group-hover:bg-red-700 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link href="#" className="relative text-lg text-white pb-1 hover:text-red-700 focus:text-red-700 group"
                >
                সেবাসমূহ
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-transparent group-hover:bg-red-700 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                
                <Link href="#" className="relative text-lg text-white pb-1 hover:text-red-700 focus:text-red-700 group">
                ব্লগ
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-transparent group-hover:bg-red-700 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link href="#" className="relative text-lg text-white pb-1 hover:text-red-700 focus:text-red-700 group">
                যোগাযোগ
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-transparent group-hover:bg-red-700 transition-all duration-300 group-hover:w-full"></span>
                </Link>
            </nav>
            <button className="relative px-4 py-2 rounded-md text-white text-base bg-red-700 transition-colors duration-300 hover:bg-green-700 group">
                Login
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-transparent group-hover:bg-red-700 transition-all duration-300 group-hover:w-full"></span>
            </button>
        </header>
    );
};

export default Header;