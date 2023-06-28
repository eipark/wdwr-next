'use client'
import Link from 'next/link'

export default function CityPicker({ cities }) {
  return (
    <div className="container">
      <ul>
      {cities?.map((city) => (
        <li key={city.id}><Link href={`/cities/${city.abbreviation.toLowerCase()}`}>{city.name}</Link></li>
      ))}
      </ul>
    </div>
  );
}
