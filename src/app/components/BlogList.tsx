import Link from "next/link";

export default function BlogList() {
  return (

      <div className="pt-12 col-start-2">
        <h2 className="text-3xl pb-4">Writings</h2>
        <Link className="block" href="#">DH Design System</Link>
        <Link className="block" href="#">Vehicle Description Generator</Link>
        
      </div>

  );
}