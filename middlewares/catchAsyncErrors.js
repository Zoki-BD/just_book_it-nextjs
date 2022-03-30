/* eslint-disable import/no-anonymous-default-export */


//we catch when fetching and calling from DB

export default func => (req, res, next) =>
   Promise.resolve(func(req, res, next))
      .catch(next)