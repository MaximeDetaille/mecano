import {
  LOGIN_SUCCESS,
  MECANO_REGISTRATION_ERROR,
  REGISTERED_MECANO,
  REGISTERED_DOMAINS,
  UPDATED_MECANO,
  UPDATED_TECHNICAL_DOMAINS,
  UPDATED_CAR_DOMAINS,
  LOGOUT_SUCCESS,
  // GOT_MECANO
} from '../actions/types';

const INITIAL_STATE = {
    id: null,
    display_name: "",
    pro: null,
    price: null,
    city: "",
    country: "",
    radius: null,
    mobile: null,
    all_vehicles: null,
    rating: null,
    company_name: "",
    full_address: "",
    description: "",
    technical_skills: [],
    car_makes: [],
    errors: {}
  };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGOUT_SUCCESS:
      return INITIAL_STATE;
    case LOGIN_SUCCESS:{
      if(action.user.mecano_profile){
        const car_makes = state.car_makes;
        const technical_skills = state.technical_skills;
        action.user.mecano_profile.domains.map((domain) =>{
          if(domain.kind === 'car_make'){
            if(!car_makes.includes(domain.value)){car_makes.push(domain.value)};
          }else{
            if(!technical_skills.includes(domain.value)){technical_skills.push(domain.value)};
          }
        })
        const { id, display_name, pro, price, city, country, mobile, all_vehicles, radius, rating, full_address, company_name, description } = action.user.mecano_profile;
        return { ...state, id, display_name, pro, price, city, country, mobile, all_vehicles, radius, rating, full_address, company_name, description }
      }else{
        return state
      }
    }
    case MECANO_REGISTRATION_ERROR:
      const new_errors = Object.assign({}, state.errors, action.error);
      return { ...state, errors: new_errors }
    case REGISTERED_MECANO:{
      const { id, display_name, pro, price, city, country, mobile, all_vehicles, radius, rating, full_address, company_name, description } = action.mecano_profile;
      return { ...state, id, display_name, pro, price, city, country, mobile, all_vehicles, radius, rating, full_address, company_name, description }
    }
    case UPDATED_MECANO:{
      const { id, display_name, pro, price, city, country, mobile, all_vehicles, radius, rating, full_address, company_name, description } = action.mecano_profile;
      return { ...state, id, display_name, pro, price, city, country, mobile, all_vehicles, radius, rating, full_address, company_name, description }
    }
    case REGISTERED_DOMAINS:
      const new_car_makes = state.car_makes;
      const new_technical_skills = state.technical_skills;
      action.domains.map((domain) =>{
        if(domain.kind === 'car_make'){
          if(!new_car_makes.includes(domain.value)){new_car_makes.push(domain.value)};
        }else{
          if(!new_technical_skills.includes(domain.value)){new_technical_skills.push(domain.value)};
        }
      })
      return { ...state, technical_skills: new_technical_skills, car_makes: new_car_makes }
    case UPDATED_TECHNICAL_DOMAINS:
      const updated_technical_skills = [];
      action.domains.map((domain) =>{
        if(!updated_technical_skills.includes(domain.value)){updated_technical_skills.push(domain.value)};
      })
      return { ...state, technical_skills: updated_technical_skills }
    case UPDATED_CAR_DOMAINS:
      const updated_car_makes = [];
      action.domains.map((domain) =>{
        if(!updated_car_makes.includes(domain.value)){updated_car_makes.push(domain.value)};
      })
      return { ...state, car_makes: updated_car_makes }
    default:
      return state;
  }
}
