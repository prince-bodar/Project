import rootReducer from "./rootReducer"
import productSaga from "./productRedux/productSaga";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'


const sagaMiddleware = createSagaMiddleware()
const Store = configureStore({
    reducer:rootReducer,
    middleware:() => [sagaMiddleware]

})

sagaMiddleware.run(productSaga)


export default Store