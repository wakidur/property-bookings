import React, { useState } from 'react';
import { propertyBank } from '../utilities/dataStore';
import DummyProperty from '../assets/images/property/dummy_property.jpeg';
const ManageProperty = () => {
  const [properties, setProperties] = useState(propertyBank);
  return (
    <div className>
      <div className="d-flex justify-content-between mb-3"> 
        <h4> ManageProperty </h4>
        {/* Button trigger modal */}
        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#AddPropertyModal"> Add Property </button>
      </div>
      <div class="table-responsive">
        <table className="table table-striped table-hover align-middle">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Image</th>
              <th scope="col">Title</th>
              <th scope="col">Price</th>
              <th scope="col">Type</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
          {properties && properties.length > 0 ? (
            properties.map((item, i) => (
              <tr key={i+1}>
                <td>{i+1}</td>
                <td>
                  <img width='50' height='50' src={item.image ? item.image : DummyProperty} alt="Property"/>
                </td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.type}</td>
                <td>
                  <button data-bs-toggle='modal' data-bs-target='#UpdatePropertyModal' className='btn text-warning'  >
                    <i className='bi bi-pencil-square'></i>
                  </button>
                  <button className='btn text-danger'>
                    <i className='bi bi-trash-fill'></i>
                  </button>
                </td>
              </tr>
            ))) : ( <tr>
              <td>Not found </td>
            </tr>)}
          </tbody>
      </table>
      </div>

        {/* Add Property  Vertically centered scrollable Modal  */}
        <div className="modal fade" id="AddPropertyModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="AddPropertyLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <form>
                <div className="modal-header">
                  <h5 className="modal-title" id="AddPropertyLabel">Add Property</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  ...
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="submit" className="btn btn-primary">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Update Property  Vertically centered scrollable Modal  */}
        <div className="modal fade" id="UpdatePropertyModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="UpdatePropertyLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <form>
                <div className="modal-header">
                  <h5 className="modal-title" id="UpdatePropertyLabel">Update Property</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  ...
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="submit" className="btn btn-primary">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ManageProperty
