require('datejs');

function combineUsers (...args) {
   const combinedObject = {
      users: []
   };

   for (usersArray of args) {
     combinedObject.users = [
       ...combinedObject.users,
       ...usersArray
     ];
   }
   combinedObject.merge_date = new Date().toString("M/d/2026");
   return combinedObject;
}



module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};