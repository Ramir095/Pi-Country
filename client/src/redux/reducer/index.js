import {
    GET_ALL_COUNTRIES,
    GET_COUNTRY,
    GET_COUNTRY_DETAIL,
    START_LOADING,
    STOP_LOADING,
    FILTER_BY_CONTINENT,
    ORDER_BY_NAME,
    ORDER_BY_POPULATION,
    
    CREATE_ACTIVITY,
    GET_ALL_ACTIVITIES,

    LOGIN,
    LOGOUT
} from "../actions/action-types";

const initialState = {
    activities: [],
    allCountries: [],
    countries: [],
    countryDetail: {},
    loaded: false,
    user: {},
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload,
                loaded: true,
            } 
        case GET_COUNTRY:
            return {
                ...state,
                countries: action.payload,
                loaded: true,
            }
        case GET_COUNTRY_DETAIL:
            return {
                ...state,
                countryDetail: action.payload,
                loaded: true,
            }
        case START_LOADING:
            return {
                ...state,
                loaded: false,
            }
        case STOP_LOADING:
        return {
            ...state,
            loaded: true,
        }
        case FILTER_BY_CONTINENT:
            const allCountries = state.allCountries
            const continentFilter = action.payload === "All" ? allCountries : allCountries.filter(e => e.continent === action.payload)
            console.log(continentFilter);
            return {
                ...state,
                countries: continentFilter,
            }

        case ORDER_BY_NAME:
            let sortedArr = action.payload === 'A-Z' ? state.countries.sort(function (a, b){
                if(a.name > b.name){
                    return 1;
                }
                if(b.name > a.name){
                    return -1;
                }
                return 0;
            }) :
            state.countries.sort(function(a, b) {
                if(a.name > b.name) {
                    return -1;
                }
                if(b.name > a.name) {
                    return 1;
                }
                return 0;
            })
            return {
                ...state,
                countries: sortedArr
            }

        case ORDER_BY_POPULATION:
            let sortArr = action.payload === 'Asc' ? state.countries.sort(function (a, b){
                if(a.population > b.population){
                    return 1;
                }
                if(b.population > a.population){
                    return -1;
                }
                return 0;
            }) :
            state.countries.sort(function(a, b) {
                if(a.population > b.population) {
                    return -1;
                }
                if(b.population > a.population) {
                    return 1;
                }
                return 0;
            })
            return {
                ...state,
                countries: sortArr
            }
 //-----------------------------------------------------------------------           
        case CREATE_ACTIVITY:
            return {
                ...state,
                loaded: true,
            }
        case GET_ALL_ACTIVITIES:
            return {
                ...state,
                activities: action.payload
            }

        case LOGIN:
            return {
                ...state,
                user: action.payload
            }
        case LOGOUT:
            return {
                ...state,
                user: {}
            }

        default:
            return {...state}
    }
}

export default rootReducer;