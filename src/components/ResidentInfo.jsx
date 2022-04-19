import React from 'react'
const ResidentInfo = (props) => {
  const character = props.character

  let arrayEpisodes = []
  character.episode.forEach(item => {
    arrayEpisodes.push(item.slice(item.lastIndexOf("/") + 1))
  })
  return (
    <div className="col-6">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={character.image} className="img-fluid rounded-start" alt="" style={{ height: '100%' }} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{character.name}</h5>
              <div className="card-text">
                <div>
                  {character.status} - {character.species}
                </div>
                <div>
                  <small className="text-muted">Origin {character.location.name}</small>
                  <div>
                    <small className="text-muted">Episodios {arrayEpisodes.toString()}</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { ResidentInfo }