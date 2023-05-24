// Please do not change the name of this function
function updateRemoteStudents (arrOfObj) {
  return arrOfObj.map((object) => ({...object})).map((object) => {
    if(!object.hasOwnProperty("location")){
      object.location = "remote"
  }
  return object;
});
}
module.exports = updateRemoteStudents;
