import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import thunk from "redux-thunk";
import {userReducer} from "./reducers/user.reducer";
import {itemReducer} from "./reducers/item.reducer";
import {advertisementReducer} from "./reducers/advertisement.reducer";
import {cityReducer} from "./reducers/city.reducer";
import {categoryReducer} from "./reducers/category.reducer";
import {subscribeReducer} from "./reducers/subscribe.reducer";
import {subCategoryReducer} from "./reducers/subCategory.reducer";


const combinedReducers = combineReducers({
    users: userReducer,
    items: itemReducer,
    advertisements: advertisementReducer,
    cities: cityReducer,
    categories: categoryReducer,
    subscribes: subscribeReducer,
    subCategories: subCategoryReducer
})

export const store = createStore(combinedReducers, applyMiddleware(thunk))

export type RootState = ReturnType<typeof combinedReducers>