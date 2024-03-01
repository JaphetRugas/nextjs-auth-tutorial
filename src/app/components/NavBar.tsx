// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <nav className="bg-gray-900 text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center">
//             <div className="flex-shrink-0">
//               <Link href="/" passHref>
//                 <span className="text-white font-bold cursor-pointer">
//                   Next.js Auth
//                 </span>
//               </Link>
//             </div>
//           </div>
//           <div className="flex">
//             <Link href="/" passHref>
//               <span className="text-gray-300 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
//                 Home
//               </span>
//             </Link>
//             <Link href="/sign" passHref>
//               <span className="text-gray-300 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
//                 Signin
//               </span>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="bg-blue-800 p-4">
            <ul className="flex justify-evenly text-2xl font-bold">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/api/auth/signin">Sign In</Link></li>
                <li><Link href="/api/auth/signout">Sign Out</Link></li>
                <li><Link href="/server">Server</Link></li>
                <li><Link href="/client">Client</Link></li>
                <li><Link href="/extra">Extra</Link></li>
            </ul>
        </nav>
    )
}
