import React from 'react'

const PaginationItem = (props) => {
  return (
    <div>
      <li className={props.curPage === props.page ? "page-item active" : "page-item"}><button className="page-link" onClick={props.handlePageChange}>{props.page}</button></li>
    </div>
  )
}

export { PaginationItem }