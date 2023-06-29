'use client'
import Link from 'next/link'

export default function CityPicker({ cities }) {
  return (
    <div className="container sm:columns-1 md:columns-3 text-white">
      <ul>
      {cities?.map((city) => (
        <div key={city.id} className="w-full gap-8 mb-5 p-3 bg-black border-solid border-zinc-200 border-2">
          <Link href={`/cities/${city.abbreviation.toLowerCase()}`}>{city.name}
          </Link>
        </div>
      ))}
      </ul>
    </div>
  );
};

