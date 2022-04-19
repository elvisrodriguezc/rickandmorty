import React, { useContext } from 'react'
import { ResidentContainer } from './ResidentContainer'
import { ResidentInfo } from './ResidentInfo'
import { AppContext } from '../context/AppContext'

const LocationInfo = (props) => {
  const { dataCont } = useContext(AppContext)
  console.log(dataCont)
  return (
    <div className="container">
      <div className="card text-center">
        <div className="card-body">
          <h2 className="card-title">{props.location.name}</h2>
          <div className="row align-items-center">
            <div className="col">
              Tipo <strong>{props.location.type}</strong>
            </div>
            <div className="col">
              Dimensión <strong>{props.location.dimension}</strong>
            </div>
            <div className="col">
              Cantidad de residentes <strong>{props.location.residents.length}</strong>
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer text-muted">
        <ResidentContainer>
          <div className="content">
            <div className="row justify-content-around">
              {dataCont.pageCharacters.map((character, index) => {
                return <ResidentInfo key={index} character={character} />
              })}
            </div>
          </div>
        </ResidentContainer>
      </div>
    </div>
  )
}
export { LocationInfo }