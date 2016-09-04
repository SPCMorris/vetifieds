const Mentors = function($http, $q) {
  const data = {};
  const url = 'localhost:1337/#/';

  const service = {
    
    fetchLocalMentors: (location) => {
      return $http({
        method: 'GET',
        url: url + '/mentor/' + location
      })
      .then((resp, err) => {
        if(err) {
          console.log(err);
          return err;
        } else {
          data = resp.data;
          return data;
        }
      })
      .catch((err) => {
        console.log("Error in fetchLocalMentors in mentors service");
        return err;
      });
    },
    test: () => {
      const mentors = [{
        id: 1,
        fullname:'Ryan',
        type: 'Vet',
        industry: 'Taco'
      },
      {
        id: 2,
        fullname:'Ryan',
        type: 'Vet',
        industry: 'Taco'
      }
      ];
      return mentors;
    },
    testFilter: () => {
      let filters = [];
      if(data) {
        for(let i = 0; i < data.length; i++) {
          filters.push(data[i].type);
        }
        return filters;
      } else {
        return filters;
      }
    }
  };

  return service;
};

Mentors.$inject = ['$http', '$q'];

export default Mentors;
