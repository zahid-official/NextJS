import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const links = (
    <>
      <li className="text-lg font-bold px-2.5">
        <Link href="/">Home</Link>
      </li>
      <li className="text-lg font-bold px-2.5">
        {user? <Link href="/Profile">Profile</Link> : <Link href="/api/auth/login">Profile</Link>}
      </li>
    </>
  );
  return (
    <div className="bg-base-300">
      <div className="navbar py-6 container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link href={"/"} className="btn btn-ghost text-4xl font-bold">
            Nextify
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end space-x-4">
          {user ? (
            <>
              <Link href="/api/auth/logout">
                <button className="btn text-lg font-bold">Logout</button>
              </Link>
            </>
          ) : (
            <>
              <Link href="/api/auth/login">
                <button className="btn text-lg font-bold">Login</button>
              </Link>
              <Link href="/api/auth/register">
                <button className="btn text-lg font-bold">Register</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
