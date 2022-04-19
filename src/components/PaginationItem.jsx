import React from 'react'

const PaginationItem = (props) => {
  return (
    <div>
      <li className={props.curPage === props.page ? "page-item active" : "page-item"}><a className="page-link" onClick={props.handlePageChange}>{props.page}</a></li>
    </div>
  )
}

export { PaginationItem }