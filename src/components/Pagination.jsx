import React, { useContext } from 'react'
import { PaginationItem } from './PaginationItem'
import { AppContext } from '../context/AppContext'
const Pagination = () => {
  const { pagination, handlePageChange,
    handlePagePrev,
    handlePageNext,
  } = useContext(AppContext)
  let arrButtons = []
  for (let i = 1; i <= pagination.totalPages; i++) {
    arrButtons.push(i)
  }
  return (
    <React.Fragment>
      <div className="container">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-end">
            <li className={pagination.curPage === 1 ? "page-item disabled" : "page-item"}>
              <button className="page-link" tabIndex="-1" aria-disabled="true" onClick={handlePagePrev}>Previous</button>
            </li>
            {arrButtons.map(item => {
              return <PaginationItem key={item} page={item} handlePageChange={() => handlePageChange(item)} curPage={pagination.curPage} />
            })}
            <li className={pagination.curPage === pagination.totalPages ? "page-item disabled" : "page-item"}>
              <button className="page-link" href="#" onClick={handlePageNext}>Next</button>
            </li>
          </ul>
        </nav>
      </div>
    </React.Fragment>
  )
}

export default Pagination