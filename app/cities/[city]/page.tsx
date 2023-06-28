

export default function City({ params } : { params: { city : string} }) {

  console.log(params.city);

  return (
    <div>
      City page {params.city}
    </div>
  )
}
