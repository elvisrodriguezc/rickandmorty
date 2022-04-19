import React, { useContext, useEffect, useRef } from "react"
import { LocationContainer } from "./components/LocationContainer"
import { LocationInfo } from "./components/LocationInfo"
import Pagination from "./components/Pagination"
import { AppContext } from "./context/AppContext"

const AppUI = () => {
  const { dataCont, getLocaltions, getLocaltion, getCharacters, handlePageChange } = useContext(AppContext)
  const form = useRef(null)
  const handleButton = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    getLocaltions("https://rickandmortyapi.com/api/location?name=" + e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(form.current)
    const locationToFind = formData.get("location")
    if (locationToFind !== "") {
      const filter = dataCont.locations.filter(item => item.name === locationToFind)
      getLocaltion("https://rickandmortyapi.com/api/location/" + filter[0].id)
      let arrayResidents = []
      filter[0].residents.forEach(item => {
        arrayResidents.push(item.slice(item.lastIndexOf("/") + 1))
      })
      getCharacters("https://rickandmortyapi.com/api/character/" + arrayResidents.toString())
      handlePageChange(1)
    }
  }
  const handleFocus = (event) => event.target.select()
  return (
    <React.Fragment>
      <div className="container">
        <h1>RICK & MORTY</h1>
        <div className="row justify-content-center">
          <div className="col-4">
            <form action="" onSubmit={handleSubmit} ref={form}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  name="location"
                  id="location"
                  className="form-control"
                  placeholder="Locación"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                  list="data"
                  onFocus={handleFocus}
                  onChange={handleButton} />
                <datalist id="data">
                  {dataCont.locations.map((item, key) =>
                    <option key={key} value={item.name} />
                  )}
                </datalist>
                <button className="btn btn-outline-primary" type="submit" id="button-addon2">Buscar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <LocationContainer>
        <div className="container">
          <div className="row">
            <div className="col">
              {dataCont.isLoading ? <div>Busque una Locacion</div> : <LocationInfo location={dataCont.location} characters={dataCont.characters}></LocationInfo>}
            </div>
          </div>
        </div>
      </LocationContainer>
      <div className="container">
        {!dataCont.isLoading && <Pagination />}
      </div>
    </React.Fragment>
  )
}

export { AppUI }