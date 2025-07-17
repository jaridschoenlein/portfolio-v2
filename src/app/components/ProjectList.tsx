import Link from "next/link";

export default function ProjectLinks() {
  return (

      <div className="pt-12">
        <h2 className="text-3xl pb-4">Projects</h2>
        <Link className="block" href="#">DH Design System</Link>
        <Link className="" href="https://vehicle-description.vercel.app/">Vehicle Description Generator</Link>
        <Link className="block" href="https://vehicle-description.vercel.app/">Animation Exploration</Link>
        <Link className="block" href="https://dtc-wsuv.org/projects/vanparksvision/index.html">VanParks Vision</Link>

        
      </div>

  );
}