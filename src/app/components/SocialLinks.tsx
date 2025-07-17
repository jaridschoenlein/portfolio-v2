import Link from "next/link";
import { ArrowUpRight } from "@deemlol/next-icons";


export default function SocialLinks() {
  return (

      <div className="flex flex-row gap-4 justify-start">
         {/* <Link className="flex flex-row gap-1" href="https://www.dickhannah.com/" target="_blank">Bluesky <ArrowUpRight size={22} color="#FFFFFF" /></Link> */}
        <Link className="flex flex-row gap-1" href="https://www.dickhannah.com/" target="_blank">Github <ArrowUpRight size={22} color="#FFFFFF" /></Link>
        <Link className="flex flex-row gap-1" href="https://www.dickhannah.com/" target="_blank">Email <ArrowUpRight size={22} color="#FFFFFF" /></Link>
      </div>

  );
}
