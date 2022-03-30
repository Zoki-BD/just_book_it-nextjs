class APIFeatures {
   constructor(query, queryStr) {
      this.query = query;  //ova e celoto query kkao array od dobieni podatoci
      this.queryStr = queryStr; // ova e query-to sto vleguva vo requestot kkao string
   }

   search() {



      const location = this.queryStr.location ? {

         address: {
            $regex: this.queryStr.location,
            $options: 'i'
         }
      } : {}

      //console.log(location);

      this.query = this.query.find({ ...location })
      return this;
   }


   filter() {

      //Pravime kopija na request queryto za da moze preku forEach da go iscistime od location i page prebaruvanjata prvo posto tie ne se props od modelot. A koga ke prebarauvame sakame da path bide samo nekoe prop so imeto: primer
      // {{DOMAIN}}/api/rooms?category=king

      const queryCopy = { ...this.queryStr }

      // console.log(queryCopy);

      // Remove fields from query
      const removeFields = ['location', 'page']
      removeFields.forEach(el => delete queryCopy[el]);
      // console.log(queryCopy);

      // Advance filtering with gt, gte etc
      let filterQuery = {};
      const fieldsLength = Object.keys(queryCopy).length;

      for (let i = 0; i < fieldsLength; i++) {

         let queryStr = JSON.stringify(Object.keys(queryCopy)[i])
         const filterField = queryStr.substring(1, queryStr.indexOf('['))

         if (filterField.length > 1) {
            const fieldValue = Object.values(queryCopy)[0]

            const filterOperator = queryStr.substring(queryStr.indexOf('[') + 1, queryStr.indexOf(']'))

            filterQuery = { ...filterQuery, [filterField]: { [`$${filterOperator}`]: fieldValue } }

         } else {
            filterQuery = { ...filterQuery, [Object.keys(queryCopy)[i]]: Object.values(queryCopy)[i] }
         }

      }

      this.query = this.query.find(filterQuery);
      //   this.query = this.query.find(queryCopy);
      return this;
   }


   //how many on page
   pagination(resPerPage) {

      const currentPage = Number(this.queryStr.page) || 1;


      //how many to skip. If resPerPage 5,and we are on page=3: 5 *3-1 = 10. we skip 10 items
      const skip = resPerPage * (currentPage - 1);


      this.query = this.query.limit(resPerPage).skip(skip);
      return this;
   }

}

export default APIFeatures;