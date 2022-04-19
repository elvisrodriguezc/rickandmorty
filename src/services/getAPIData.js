import Axios from "axios"

const getAPIData = async (URL) => {
  const response = await Axios({
    url: URL,
    method: 'GET',
  })
  return response
}

export { getAPIData }