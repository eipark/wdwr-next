import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import CityPicker from '../../cityPicker'
import Hero from '../../hero'

//export async function generateStaticParams() {
//  const supabase = createServerComponentClient({ cookies })
//  let { data: cities }  = await supabase.from('cities').select('*');
//  return cities?.map(({id}) => ({
//    id,
//  }));
//}

export default async function City(
  { params } :
  { params: { city : string}}) {

  const supabase = createServerComponentClient({ cookies })
  let { data: cities  }  = await supabase.from('cities').select('*');
  let { data: companies }  = await supabase.from('companies').select('*');


  const currentCity = cities.find((city) => city.abbreviation == params.city.toUpperCase());

  const currentCompanies = companies.filter((comp) =>
    comp.primary_city_id == currentCity.id
  );

  return (
    <div className="flex-1 flex flex-col mt-24 container">
      <Hero />
      <CityPicker cities={cities} />

      <h3 className="mt-8">Companies in {currentCity.name}</h3>
      <ul>
        {currentCompanies?.map((comp) => (
          <li className='' key={comp.id}>{comp.name} {comp.website_url}</li>
        ))}
      </ul>
    </div>
  )
}
