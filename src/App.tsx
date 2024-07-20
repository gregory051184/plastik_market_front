import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {AllUrls} from "./urls/all.urls";
import {UserUpdateFrom} from "./components/forms/user/userUpdate.from";
import {
    AdvertisementCreateForm,
    AdvertisementUpdateForm,
    CategoryCreateForm,
    CategoryUpdateForm,
    CityCreateForm,
    CityUpdateForm,
    ItemCreateForm, ItemUpdateForm,
    SubCategoryCreateForm,
    SubCategoryUpdateForm,
    SubscribeCreateForm,
    SubscribeUpdateForm,
    ItemsFilter
} from "./components";

function App() {
    return (
        <div>
            <Routes>
                <Route path={AllUrls.USER_UPDATE_FORM + '/:id' + '/:chatId'} element={<UserUpdateFrom></UserUpdateFrom>}></Route>

                <Route path={AllUrls.ADVERTISEMENT_CREATE_FORM + '/:chatId'}
                       element={<AdvertisementCreateForm></AdvertisementCreateForm>}></Route>
                <Route path={AllUrls.ADVERTISEMENT_UPDATE_FORM + '/:id' + '/:chatId'}
                       element={<AdvertisementUpdateForm></AdvertisementUpdateForm>}></Route>

                <Route path={AllUrls.CITY_CREATE_FORM + '/:chatId'} element={<CityCreateForm></CityCreateForm>}></Route>
                <Route path={AllUrls.CITY_UPDATE_FORM + '/:id' + '/:chatId'} element={<CityUpdateForm></CityUpdateForm>}></Route>

                <Route path={AllUrls.CATEGORY_CREATE_FORM + '/:chatId'} element={<CategoryCreateForm></CategoryCreateForm>}></Route>
                <Route path={AllUrls.CATEGORY_UPDATE_FORM + '/:id' + '/:chatId'}
                       element={<CategoryUpdateForm></CategoryUpdateForm>}></Route>


                <Route path={AllUrls.SUBCATEGORY_CREATE_FORM + '/:chatId'}
                       element={<SubCategoryCreateForm></SubCategoryCreateForm>}></Route>
                <Route path={AllUrls.SUBCATEGORY_UPDATE_FORM + '/:id' + '/:chatId'}
                       element={<SubCategoryUpdateForm></SubCategoryUpdateForm>}></Route>


                <Route path={AllUrls.SUBSCRIBE_CREATE_FORM + '/:chatId'}
                       element={<SubscribeCreateForm></SubscribeCreateForm>}></Route>
                <Route path={AllUrls.SUBSCRIBE_UPDATE_FORM + '/:id' + '/:chatId'}
                       element={<SubscribeUpdateForm></SubscribeUpdateForm>}></Route>

                <Route path={AllUrls.FILTER_ITEMS + '/:chatId'} element={<ItemsFilter></ItemsFilter>}></Route>
                <Route path={AllUrls.ITEM_CREATE_FORM + '/:chatId'} element={<ItemCreateForm></ItemCreateForm>}></Route>
                <Route path={AllUrls.ITEM_UPDATE_FORM + '/:id' + '/:chatId'} element={<ItemUpdateForm></ItemUpdateForm>}></Route>

            </Routes>
        </div>
    );
}

export default App;
