import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import CityPicker from '../../cityPicker'
import Hero from '../../hero'

export default async function City(
  { params, companies } :
  { params: { city : string},
    props:  { companies : array }
  }) {

  const supabase = createServerComponentClient({ cookies })
  let { data: cities  }  = await supabase.from('cities').select('*');

  console.log(params.city);
  console.log(companies);

  return (
    <div className="flex-1 flex flex-col mt-24">
      <Hero />
      <CityPicker cities={cities} />
      City page {params.city}
      <ul>
        {companies?.map((comp) => (
          <li className='' key={comp.id}>{comp.name} {comp.website_url}</li>
        ))}
      </ul>
    </div>
  )
}
