import React from 'react'

/* descrevendo quais props o meu componente precisa receber */
interface iCardPersonProps{
    name: string;
    age: number;
    hasPet?: boolean;
}

const CardPerson = ({ name, age, hasPet }: iCardPersonProps) => {
  return (
    <div>
        <h1>{name}</h1>
        <p>{age}</p>
        {hasPet && <p>{name} tem um pet!</p>}
    </div>
  )
}

export default CardPerson