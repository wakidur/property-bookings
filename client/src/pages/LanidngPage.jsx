import React, { useState } from 'react';

import { propertyBank } from '../utilities/dataStore';
import HomeSearchImg from '../assets/images/search-home.jpeg';
import DummyProperty from '../assets/images/property/dummy_property.jpeg';
import Rating from '../components/Rating/Rating';

const LanidngPage = () => {
  const [properties, setProperties] = useState(propertyBank);
  console.log(properties);
  return (
    <>
      {/* search form section start */}
      <section className='row'>
        <div className=' col-12'>
          <div
            className='card bg-dark text-white rounded-0'
            style={{ height: 180, overflow: 'hidden' }}
          >
            <img
              src={HomeSearchImg}
              className='card-img'
              alt='Home Search Img'
            />
            <div
              className='card-img-overlay'
              style={{ background: '#000d15cc' }}
            >
              <h3 className='card-title'>
                Find deals on hotels, homes and much more...
              </h3>
              <p className='card-text'>
                From cosy country homes to funky city flats
              </p>
              <form>
                <div className='row g-0'>
                  <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-9 col-xxl-5'>
                    <div className='input-group mb-3'>
                      <span className='input-group-text bg-white rounded-0 border border-4 border-end-0 border-warning'>
                        <i className='bi bi-geo-fill' />
                      </span>
                      <input
                        className='form-control rounded-0 border border-4 border-warning border-end-0 form-control-lg'
                        list='datalistOptions'
                        id='exampleDataList'
                        autoComplete='off'
                        placeholder='Where are you going?'
                      />
                      <datalist id='datalistOptions'>
                        <option value='San Francisco' />
                        <option value='New York' />
                        <option value='Seattle' />
                        <option value='Los Angeles' />
                        <option value='Chicago' />
                      </datalist>
                    </div>
                  </div>
                  <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-9 col-xxl-3'>
                    <div className='input-group mb-3'>
                      <span className='input-group-text rounded-0 bg-white border border-4  border-end-0 border-warning'>
                        <i className='bi bi-calendar3' />
                      </span>
                      <label
                        htmlFor='date calendar'
                        className='form-control rounded-0 form-control-lg border border-end-0 border-4 border-warning'
                      >
                        <span>Check-in</span>
                        <span>
                          <i className='bi bi-dash' />
                        </span>
                        <span>Check-out</span>
                      </label>
                    </div>
                  </div>
                  <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-9 col-xxl-3'>
                    <div className='input-group mb-3'>
                      <span className='input-group-text rounded-0 border border-4 border-warning border-end-0 bg-white'>
                        <i className='bi bi-person-fill' />
                      </span>
                      <label
                        htmlFor='Rooms and occupancy'
                        className='form-control rounded-0 border border-end-0 border-4 border-warning form-control-lg'
                      >
                        <span>2 adults</span>
                        <span>
                          <i className='bi bi-dot' />
                        </span>
                        <span>1 child</span>
                        <span>
                          <i className='bi bi-dot' />
                        </span>
                        <span>2 rooms</span>
                      </label>
                    </div>
                  </div>
                  <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-9 col-xxl-1'>
                    <button
                      type='submit'
                      className='btn btn-primary rounded-0 btn-lg w-100 border border-4 border-warning'
                    >
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* search form section start */}
      {/* search result view  section start */}
      <section className=''>
        {properties && properties.length > 0 ? (
          properties.map((item, i) => (
            <div
              key={i + 1}
              className='card border-end-0 border-start-0 border-top-0 mt-3 rounded-0 pb-3'
            >
              <div className='row g-0 '>
                <div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4'>
                  <img
                    src={item.image ? item.image : DummyProperty}
                    className='card-img-top rounded'
                    alt='Propety'
                  />
                </div>
                <div className='col-12 col-sm-12 col-md-6 col-lg-8 col-xl-8 col-xxl-8'>
                  <div className='card-header bg-transparent border-0'>
                    <div className='d-flex justify-content-between'>
                      <h5 className='mb-0 text-muted'>
                        {item.type && item.type === 'single'
                          ? 'Private Room'
                          : 'Public'}{' '}
                      </h5>
                      <p className='mb-0'>
                        <i className='bi bi-star-fill text-danger me-2' />
                        <span>( {item.numReviews} )</span>
                      </p>
                    </div>
                  </div>

                  <div className='card-body'>
                    <h5 class='card-title'>{item.title}</h5>
                    <p class='card-text'>{item.description}</p>
                  </div>

                  <div className='card-footer bg-transparent border-0'>
                   <button type="button" className=' btn btn-light text-black-50 float-start'> <i class="bi bi-gem"/> Rare find </button>
                   <h4 className="float-end">
                     <span className="fs-5">${item.price} / night</span>
                     <br/>
                     <span className='text-muted fs-6'>${item.price}total <i class="bi bi-question-circle"/></span>
                   </h4>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p> Not found </p>
        )}
      </section>
      {/* search result view section end */}

      {/* home page card view section start */}
      <section className='row'>
        {properties && properties.length > 0 ? (
          properties.map((item, i) => (
            <div
              key={i + 1}
              className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4'
            >
              <div className='card border-0 my-4'>
                <img
                  src={item.image ? item.image : DummyProperty}
                  className='card-img-top rounded'
                  alt='Propety'
                />
                <div className='card-body'>
                  <Rating value={item.rating} />
                  <p className='card-text mt-3'>{item.comments}</p>
                  <div className='d-flex '>
                    <img
                      src={item.avatar ? item.avatar : DummyProperty}
                      className=' flex-shrink-0 me-3 rounded-circle'
                      width='50'
                      height='50'
                      alt='user'
                    />
                    <p className='pb-3 mb-0 small lh-md '>
                      <strong className='d-block text-gray-dark'>
                        {item.username}
                      </strong>
                      <span> {item.country}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p> Not found </p>
        )}
      </section>
      {/* home page card view section end */}
    </>
  );
};

export default LanidngPage;
