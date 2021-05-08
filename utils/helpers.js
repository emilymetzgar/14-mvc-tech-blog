
module.exports = {
  formatDate: (date) =>{
  // Format the date to be MM/DD/YYYY HH:MM:SS
  let formatted = date.getMonth()+1
    +"/"+date.getDate()
    +"/"+date.getFullYear()
    +" "+date.getHours()+":";
  if(date.getMinutes() < 10){
      formatted += "0";
  }
  formatted += date.getMinutes()+":";
  if(date.getSeconds() < 10){
      formatted += "0";
  }
  formatted +=date.getSeconds();
  return formatted;  
},
isAuthor: (myId, authorId)=>{
  return myId === authorId;
}
};