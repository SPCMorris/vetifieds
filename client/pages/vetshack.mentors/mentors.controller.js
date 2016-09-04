const MentorsController = function(Mentors, $state) {
  const vm = this;

  const tester = (Mentors.fetchLocalMentors("SantaMonicaCA"));

  console.log(tester);

  vm.getMentors = Mentors.test;

  vm.getFilters = Mentors.testFilter;

  vm.onClickMentor = (mentorId) => {
    console.log("Mentors ID: ", mentorId);
    // once routing is complete pass in mentorId
    // i.e.: /mentores/:mentorId
    $state.go('home');
  };

};

MentorsController.$inject = ['Mentors', '$state'];

export default MentorsController;
