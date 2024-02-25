let student= {
    firstName:"sam",
    lastName:"Sunder",
    rollNumber: 101
};
export const handler = async (event) => {
  // TODO implement
  console.log(" >>> Inside lambda function...");
  if(event.httpMethod === 'GET')
  {
    return getStudentRecord(event);
  }
  if(event.httpMethod === 'POST'){
      return createStudentRecord(event);
    
  }
};

function getStudentRecord (event){
  
    const response = {
      statusCode: 200,
      bod: JSON.stringify({
        student_details: student
      })
    };
    return response;
}
function createStudentRecord(event,) {
    const body = JSON.parse(event.body);
    const response = {
      statusCode: 200,
      body:JSON.stringify({
        message:"succesfully created",
        details: body
      })
    };
    return response;
}



