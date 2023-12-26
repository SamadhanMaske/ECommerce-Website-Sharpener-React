import React, { Fragment } from 'react'
import { PRODUCTS } from './Products'
import { Link } from 'react-router-dom'

function FeaturedProducts() {
  return (
    <Fragment>
      <div className='card'>
        {
          PRODUCTS.slice(2, 6).map((product) => (
            <div className="col mb-5">
              <div key={product.id} className="card h-100 m-auto">
                <img src={product.image} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                  <p className="card-text mb-2">{product.brand}</p>
                  <h5 className='mb-3'>{product.name} </h5>
                  <div className="card-footer m-auto text-center">
                    <p className='text-danger fs-4'>{product.status}</p>
                    <p className="price"><span className="red"></span> <strike>${product.rate} </strike></p>
                  </div>
                  <div className="card-footer d-md-none">
                    <div className="d-flex justify-content-between align-items-center">
                      <Link to='shop' className='m-auto'>View products</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </Fragment>
  )
}

export default FeaturedProducts