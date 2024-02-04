import React from 'react'
import "./styles/customers.css"
import { CustomerTable } from '../../components'
import { Link } from 'react-router-dom'
import { IoMdAdd } from 'react-icons/io'

type Props = {}

const ListCustomer = (props: Props) => {
  return (
    <div className='customers'>
      <div className="headingContainer">
        <h2>Customers</h2>
        <div className="addBtnContainer">
          <Link title="Add New User" to="/add-customer" className="btn btn-sm">
            <IoMdAdd /> Add Customer
          </Link>
        </div>
      </div>
      <div className="secContainer">
        <div className="customerContainer">
          <CustomerTable />
        </div>
      </div>
    </div>
  )
}

export default ListCustomer