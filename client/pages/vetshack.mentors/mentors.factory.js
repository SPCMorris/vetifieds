const Mentors = function($http, $q, data) {

  const service = {
    
    fetchLocalMentors: (location) => {
      return $http({
        method: 'GET',
        url: 'api/mentors/' + location
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
      const filters = [];
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
