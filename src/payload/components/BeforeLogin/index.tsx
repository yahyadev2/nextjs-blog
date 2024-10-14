import React from 'react'

const BeforeLogin: React.FC = () => {
  return (
    <div>
      <p>
        <b>Bienvenue sur votre Dashboard!</b>
        {' Connectez vous ici pour gérér votre site web '}
        <a href={`${process.env.PAYLOAD_PUBLIC_SERVER_URL}/login`}></a>
        {' '}
      </p>
    </div>
  )
}

export default BeforeLogin
