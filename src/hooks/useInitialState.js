import { useState, useEffect } from 'react'
import { getAPIData } from '../services/getAPIData'

const initialState = {
  isLoading: true,
  locations: [],
  location: {},
  characters: [],
  pageCharacters: [],
  episodes: [],
}

const useInitialState = () => {
  const [dataCont, setDataCont] = useState(initialState);
  const getLocaltions = async (URL) => {
    setDataCont(dataCont => ({
      ...dataCont,
      isLoading: true
    }))
    const locations = await getAPIData(URL);
    setDataCont(dataCont => ({
      ...dataCont,
      locations: locations.data.results
    }))
  }

  const getLocaltion = async (URL) => {
    setDataCont(dataCont => ({
      ...dataCont,
      isLoading: true
    }))
    const location = await getAPIData(URL);
    setDataCont(dataCont => ({
      ...dataCont,
      isLoading: false,
      location: location.data
    }))
  }

  const getCharacters = async (URL) => {
    setDataCont(dataCont => ({
      ...dataCont,
      isLoading: true
    }))
    const characters = await getAPIData(URL);
    setDataCont(dataCont => ({
      ...dataCont,
      characters: characters.data
    }))
  }
  const [pagination, setPagination] = useState({
    curPage: 1,
    perPage: 10,
    totalPages: Math.ceil(dataCont.characters.length / 10),
  })

  const handlePageChange = (page) => {
    setPagination(pagination => ({
      ...pagination,
      curPage: page
    }))
  }
  useEffect(() => {
    setDataCont(dataCont => ({
      ...dataCont,
      pageCharacters: dataCont.characters.slice((pagination.curPage - 1) * pagination.perPage, pagination.curPage * pagination.perPage)
    }))
    setPagination(pagination => ({
      ...pagination,
      totalPages: Math.ceil(dataCont.characters.length / pagination.perPage)
    }))
  }, [pagination.curPage, dataCont.characters])

  const handlePageLast = () => {
    setPagination(pagination => ({
      ...pagination,
      curPage: pagination.totalPages
    }))
  }
  const handlePageFirst = () => {
    setPagination(pagination => ({
      ...pagination,
      curPage: 1
    }))
  }
  const handlePagePrev = () => {
    setPagination(pagination => ({
      ...pagination,
      curPage: pagination.curPage - 1
    }))
  }
  const handlePageNext = () => {
    setPagination(pagination => ({
      ...pagination,
      curPage: pagination.curPage + 1
    }))
  }

  return {
    dataCont,
    getLocaltions,
    getLocaltion,
    getCharacters,
    pagination,
    handlePageChange,
    handlePageLast,
    handlePageFirst,
    handlePagePrev,
    handlePageNext,

  }
}
export { useInitialState }