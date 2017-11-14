function IcebreakerResponse(email){
  this.email = email

  User.BatchCreate = function(data){
  return data.map(function(ibrData){
    return new IcebreakerResponse(userData[0], userData[1])
  })
}
}

