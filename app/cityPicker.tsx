'use client'
import Link from 'next/link'

export default function CityPicker({ cities }) {
  return (
    <div className="container sm:columns-1 md:columns-3 text-white">
      <ul>
      {cities?.map((city) => (
        <Link href={`/cities/${city.abbreviation.toLowerCase()}`}>
          <div key={city.id}
          className="w-full gap-8 mb-5 p-8 bg-black border-solid text-center border-zinc-200 border-2 rounded-xl">
            {city.name}
          </div>
        </Link>
      ))}
      </ul>
    </div>
  );
};

