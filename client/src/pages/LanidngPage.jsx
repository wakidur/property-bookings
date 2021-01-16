import React, { useState } from 'react';

import { propertyBank } from '../utilities/dataStore';
import HomeSearchImg from '../assets/images/search-home.jpeg';
import DummyProperty from '../assets/images/property/dummy_property.jpeg';
import Rating from '../components/Rating/Rating';

const LanidngPage = () => {
  const [properties, setProperties] = useState(propertyBank);
  return (
    <>
      <section className='row'>
        <div className=' col-12'>
          <div
            class='card bg-dark text-white rounded-0'
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
                    <div class='input-group mb-3'>
                      <span class='input-group-text bg-white rounded-0 border border-4 border-end-0 border-warning'>
                        <i class='bi bi-geo-fill' />
                      </span>
                      <input
                        class='form-control rounded-0 border border-4 border-warning border-end-0 form-control-lg'
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
                  <div class='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-9 col-xxl-3'>
                    <div class='input-group mb-3'>
                      <span class='input-group-text rounded-0 bg-white border border-4  border-end-0 border-warning'>
                        <i class='bi bi-calendar3' />
                      </span>
                      <label
                        htmlFor='date calendar'
                        className='form-control rounded-0 form-control-lg border border-end-0 border-4 border-warning'
                      >
                        <span>Check-in</span>
                        <span>
                          <i class='bi bi-dash' />
                        </span>
                        <span>Check-out</span>
                      </label>
                    </div>
                  </div>
                  <div class='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-9 col-xxl-3'>
                    <div class='input-group mb-3'>
                      <span class='input-group-text rounded-0 border border-4 border-warning border-end-0 bg-white'>
                        <i class='bi bi-person-fill' />
                      </span>
                      <label
                        htmlFor='Rooms and occupancy'
                        className='form-control rounded-0 border border-end-0 border-4 border-warning form-control-lg'
                      >
                        <span>2 adults</span>
                        <span>
                          <i class='bi bi-dot' />
                        </span>
                        <span>1 child</span>
                        <span>
                          <i class='bi bi-dot' />
                        </span>
                        <span>2 rooms</span>
                      </label>
                    </div>
                  </div>
                  <div class='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-9 col-xxl-1'>
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
      <div className='row'>
        {properties && properties.length > 0 ? (
          properties.map((item, i) => (
            <div
              key={i + 1}
              class='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4'
            >
              <div class='card border-0 my-4'>
                <img
                  src={item.image ? item.image : DummyProperty}
                  class='card-img-top rounded'
                  alt='Propety'
                />
                <div class='card-body'>
                  <Rating value={item.rating} />
                  <p class='card-text mt-3'>{item.comments}</p>
                  <div className='d-flex '>
                    <img
                      src={item.avatar ? item.avatar : DummyProperty}
                      className=' flex-shrink-0 me-3 rounded-circle'
                      width='50'
                      height='50'
                      alt='user'
                    />
                    <p class='pb-3 mb-0 small lh-md '>
                      <strong class='d-block text-gray-dark'>
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
      </div>
    </>
  );
};

export default LanidngPage;
