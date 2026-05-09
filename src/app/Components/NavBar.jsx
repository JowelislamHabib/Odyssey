import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/destinations"}>Destinations</Link>
          </li>
          <li>
            <Link href={"/my-bookings"}>My Bookings</Link>
          </li>
          <div>
            <Image
              src={"/assets/Wanderlast.png"}
              width={120}
              height={40}
              alt="logo"
            ></Image>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
