/* eslint-disable no-undef */
/**
 * find
 * @param {*}
 */

function find(model, option) {
  return new Promise((resolve, reject) => {
    model
      .find(option)
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
/**
 * findOne
 * @param {*} model
 * @param {*} option
 */

function findOne(model, option) {
  return new Promise((resolve, reject) => {
    model
      .findOne(option)
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
/**
 * find, populate
 * @param {*} model
 * @param {*} option
 * @param {*} popOptions
 */

function findWithPopulate(model, option, popOptions) {
  return new Promise((resolve, reject) => {
    model
      .find(option)
      .populate(popOptions)
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
/**
 * Count Documents
 * return count number
 * @param {*} model
 * @param {*} option
 */

function countDocuments(model, option) {
  return new Promise((resolve, reject) => {
    model
      .countDocuments(option)
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

/**
 * Find by id and Populate
 *
 * @param {*} model
 * @param {*} id
 * @param {*} popOptions
 */

function findByIdAndPopulate(model, id, popOptions) {
  // support for Find by id and popOptions
  return new Promise((resolve, reject) => {
    model
      .findById(id)
      .populate(popOptions)
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

/**
 * Find by id and Populate
 *
 * @param {*} model
 * @param {*} id
 * @param {*} popOptions
 */

function findByIdAndMultiplelePopulate(model, id, popOptions) {
  // support for Find by id and popOptions
  let query = model.findById(id);
  if (popOptions && popOptions.length > 0) {
    if (popOptions.length === 1) query = query.populate(popOptions[0]);
    else if (popOptions.length === 2)
      query = query.populate(popOptions[0]).populate(popOptions[1]);
    else if (popOptions.length === 3)
      query = query
        .populate(popOptions[0])
        .populate(popOptions[1])
        .populate(popOptions[2]);
  }
  return new Promise((resolve, reject) => {
    query
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

/**
 * Find by ID
 * @param {*} model
 * @param {*} id
 * @param {*} popOptions
 */
function findById(model, id, options) {
  // Support for Find by Id
  return new Promise((resolve, reject) => {
    model
      .findById(id, options)
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

/**
 * Create model
 * @param {*} model
 * @param {*} bodyObj
 */

function create(model, bodyObj) {
  return new Promise((resolve, reject) => {
    model
      .create(bodyObj)
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

/**
 * Dynamic find One And Delete operation
 * @param {*} model
 * @param {*} id
 */
function remove(model, id) {
  return new Promise((resolve, reject) => {
    model
      .remove({
        _id: id,
      })
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

/**
 * Dynamic find One And Delete operation
 * @param {*} model
 * @param {*} id
 */
function findByIdAndDelete(model, _id) {
  return new Promise((resolve, reject) => {
    model
      .findByIdAndDelete(_id)
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

/**
 * Find by id and update
 * @param {*} model
 * @param {*} id
 * @param {*} bodyObj
 * @param {*} option
 */

function findByIdAndUpdate(model, id, bodyObj, option) {
  return new Promise((resolve, reject) => {
    model
      .findByIdAndUpdate(id, bodyObj, option)
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
/**
 * Find by id and update
 * @param {*} model
 * @param {*} id
 * @param {*} bodyObj
 * @param {*} option
 */

function findOneAndUpdate(model, id, bodyObj, option) {
  return new Promise((resolve, reject) => {
    model
      .findOneAndUpdate(id, bodyObj, option)
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

/**
 * To build up common query support for mongoose
 * Method Name
 * find, countDocuments, findById, create, remove, findByIdAndUpdate
 */

module.exports = {
  find,
  findOne,
  countDocuments,
  findWithPopulate,
  findByIdAndPopulate,
  findByIdAndMultiplelePopulate,
  findById,
  findByIdAndUpdate,
  findOneAndUpdate,
  findByIdAndDelete,
  create,
  remove,
};
