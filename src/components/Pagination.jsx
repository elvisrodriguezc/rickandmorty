import { useContext } from 'react'
import { PaginationItem } from './PaginationItem'
import { AppContext } from '../context/AppContext'
const Pagination = () => {
  const { pagination, handlePageChange, handlePageLast,
    handlePagePrev,
    handlePageNext,
  } = useContext(AppContext)
  console.log(pagination)
  let arrButtons = []
  for (let i = 1; i <= pagination.totalPages; i++) {
    arrButtons.push(i)
  }
  console.log(arrButtons)
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-end">
        <li className={pagination.curPage === 1 ? "page-item disabled" : "page-item"}>
          <a className="page-link" href="#" tabIndex="-1" aria-disabled="true" onClick={handlePagePrev}>Previous</a>
        </li>
        {arrButtons.map(item => {
          return <PaginationItem key={item} page={item} handlePageChange={() => handlePageChange(item)} curPage={pagination.curPage} />
        })}
        <li className={pagination.curPage === pagination.totalPages ? "page-item disabled" : "page-item"}>
          <a className="page-link" href="#" onClick={handlePageNext}>Next</a>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination