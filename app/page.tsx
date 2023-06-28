import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'
import LogoutButton from './logout-button'
import Hero from './hero';

export default async function Index() {
  const supabase = createServerComponentClient({ cookies })

  let {
    data: { user },
  } = await supabase.auth.getUser()

  let { data: companies }  = await supabase.from('companies').select('*');
  let { data: cities  }  = await supabase.from('cities').select('*');

  return (
    <div className="flex-1 flex flex-col mt-24">
      <Hero />
      <div className="container">
        <h3>Select your city</h3>
        <ul>
          {cities?.map((city) => (
            <li className='' key={city.id}>{city.name} ({city.abbreviation})</li>
          ))}
        </ul>
        <hr />
        <ul>
          {companies?.map((comp) => (
            <li className='' key={comp.id}>{comp.name} {comp.website_url}</li>
          ))}
        </ul>

        <div className="flex border-b py-3 text-sm">
          <span className="ml-auto">
            {user ? (
              <span className="flex gap-4">
                Hey, {user.email}! <span className="border-r"></span>{' '}
                <LogoutButton />
              </span>
            ) : (
              <Link href="/login" className="hover:underline">
                Login
              </Link>
            )}
          </span>
        </div>
      </div>

    </div>
  )
}
