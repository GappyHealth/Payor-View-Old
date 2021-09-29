export function getFullPatientList() {

  var practices = [];
  var patients = [];

  // Fetch List of User Accessable Practices
  var json = request();

  // for(let i = 0; i < practices.length; i++){
  //   patients.concat(getPracticePatients(practices[i].id));
  // } 

  console.log(json);
}

export function getPracticePatients(practiceID) {

  // Fetch Patients of Requested Practice
  fetch("https://gappyapi.ait-network.com/v1/practices/" + practiceID + "/patients/")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      return data;
    })
    .catch(console.log);
}

const request = async () => {

  const response = await fetch("https://gappyapi.ait-network.com/v1/practices/");
  
}