function IcebreakerResponse(email){
  this.email = email


}


IcebreakerResponse.BatchCreate = function(data){
  return data.map(function(ibrData){
    return new IcebreakerResponse(ibrData[0])
    debugger;
  })
}

let icebreakerResponses = IcebreakerResponse.BatchCreate(data);
