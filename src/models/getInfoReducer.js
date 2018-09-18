const initialState = {
  formData: [],
  reload: false
}
export default function (state = initialState, action={}) {
  switch (action.type) {		
    case `ADD_FORM_LOADING`:
      return {
          isLoading: true
      }
    case `ADD_FORM_SUCCESS`:
      return {
          success: true,
          reload: true
      };
    case `ADD_FORM_ERROR`:
      return {
          error: true
      }
    case `GET_FORM_LOADING`:
      return {
          isLoading: true
      }
    case `GET_FORM_SUCCESS`:
    const formData = [];
    for(let key in action.payload.data){
        formData.push({
            ...action.payload.data[key],
            id: key,
        });
    } 
      return {
          ...state,
          formData: formData,
          success: true,
          reload: false
      };
    case `GET_FORM_ERROR`:
      return {
          error: true
      }
  default:
    return {
      ...state,
    };
}
}