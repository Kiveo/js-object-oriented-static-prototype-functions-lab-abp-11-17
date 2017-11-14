function IcebreakerResponse(email){
  this.email = email


}


IcebreakerResponse.BatchCreate = function(data){
  return data.map(function(ibrData){
    debugger;
    return new IcebreakerResponse(ibrData[0])
  })
}

let icebreakerResponses = IcebreakerResponse.BatchCreate(data);
