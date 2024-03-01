// export default function Home() {
//   return (
//     <main className="text-center pt-20 px-5">
//       <h1 className="text-4xl md:text-5xl font-bold mb-5">
//         Welcome to my blog
//       </h1>
//       <p className="max-w-[750px] mx-auto leading-8 text-gray-800">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//       </p>
//     </main>
//   );
// }


import { options } from "./api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import UserCard from "./components/UserCard"

export default async function Home() {
  const session = await getServerSession(options)

  return (
    <>
      {session ? (
        <UserCard user={session?.user} pagetype={"Home"} />
      ) : (
        <h1 className="text-5xl">You Shall Not Pass!</h1>
      )}
    </>
  )
}