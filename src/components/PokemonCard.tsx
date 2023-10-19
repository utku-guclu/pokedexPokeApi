// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface PokemonCardProps {
  name: string,
  url: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function PokemonCard({ name, url }: PokemonCardProps) {
  return (
    <div>
      <img src={url} alt="" />
      <p>{name}</p>
    </div>
  )
}

export default PokemonCard