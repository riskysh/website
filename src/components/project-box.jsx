import Link from "next/link"

export default function ProjectBox({title, description, link}) {
    return (
      <div className="w-fit grid gap-2 text-white border border-[#1e1e1e] rounded-lg p-4 hover:bg-[#1e1e1e] duration-300">
          <Link href={link} target="_blank">
              <h1 className="text-2xl font-semibold underline underline-offset-4 decoration-1">{title}</h1>
          </Link>
          <p className="font-medium">{description}</p>
      </div>
    )
  }