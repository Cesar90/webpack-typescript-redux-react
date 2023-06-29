import {lazy} from "react"

// export const MainPageAsync = lazy(() => import('./MainPage'))
export const MainPageAsync = lazy(() => new Promise(resolve => {
  //@ts-ignore
  //DO NOT DO THIS IN REAL PROJECTS!!!!! WE DO FOR THE COURSE!
  setTimeout(() => resolve(import('./MainPage')), 1500)
}))