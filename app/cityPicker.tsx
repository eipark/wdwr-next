'use client'
import Link from 'next/link'

export default function CityPicker({ cities }) {
  console.log(cities)
  return (
    <div>
      <h3>Select a city</h3>
      <ul>
      {cities?.map((city) => (
        <li key={city.id}><Link href={`/cities/${city.abbreviation.toLowerCase()}`}>{city.name}</Link></li>
      ))}
      </ul>
    </div>
  );
}
