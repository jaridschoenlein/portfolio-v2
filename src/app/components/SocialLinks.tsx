import Link from "next/link";
import { ArrowUpRight } from "@deemlol/next-icons";


export default function SocialLinks() {
  return (

      <div className="flex flex-row gap-4 justify-start transition duration-300">
         {/* <Link className="flex flex-row gap-1" href="https://www.dickhannah.com/" target="_blank">Bluesky <ArrowUpRight size={22} color="#FFFFFF" /></Link> */}
         <p>
        <Link className="flex flex-row gap-1 font-bold border rounded-full p-3 transition duration-300 hover:bg-sky-50 hover:text-black" href="https://github.com/jaridschoenlein" target="_blank">Github <ArrowUpRight className="hover:text-black" size={22} /></Link>
        <Link className="flex flex-row gap-1 font-bold border rounded-full p-3 transition duration-300 hover:bg-sky-50 hover:text-black" href="mailto:jrschoenlein@gmail.com" target="_blank">Email <ArrowUpRight className="hover:text-black" size={22} /></Link>
        </p>
      </div>

  );
}
