import {configureStore} from '@reduxjs/toolkit'
import authSlices from './slices/authSlices'
import cryptoSlices from './slices/cryptoSlices'
import groupSlices from './slices/groupSlices'
// import companySlices from './slices/companySlices'
// import jobApplicationSlices from './slices/jobApplicationSlices'
// import reviewsSlices from './slices/reviewsSlices'
// import userCompanySlices from './slices/userCompanySlices'
import userSlices from './slices/userSlices'
// import vacancySlices from './slices/vacancySlices'
// import whitelistSlices from './slices/whitelistSlice'

const roorReducer = {
  auth: authSlices,
  user: userSlices,
  crypto: cryptoSlices,
  group: groupSlices,
  // whitelist: whitelistSlices,
  // company: companySlices,
  // reviews: reviewsSlices,
  // vacancy: vacancySlices,
  // jobApplication: jobApplicationSlices,
  // userCompany: userCompanySlices,
}

export const store = configureStore({
  reducer: roorReducer,
})
