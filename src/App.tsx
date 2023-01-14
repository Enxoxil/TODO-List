import './App.css';
import Todos from "./components/Todos/Todos";
import NewTodoContainer from "./components/NewTodo/NewTodoContainer";
import _PageHeader from "./components/PageHeader/_PageHeader";
import {Route, Routes} from "react-router-dom";
import React from "react";
import Navigation from "./components/Navigation/Navigation";
import ProtectedRoute from "./Helpers/ProtectedRoute";
import Auth from "./components/Auth/Auth";
import {useRootSelector} from "./BLL/BLL_helpers/hooks";
import SignUp from "./components/Auth/SignUp/SignUp";
import SignIn from "./components/Auth/SignIn/SignIn";

const App = () => {
    const email = useRootSelector(state => state.registrationReducer.email);

    const handleLogin = () => {

    }
    const handleLogout = () => {

    }

    return (
        <>
            <Navigation email={email!} handleLogout={handleLogout} handleLogin={handleLogin}/>

            <Routes>
                <Route index element={<p style={{textAlign: 'center'}}>Тут будет компонент HOME</p>}/>
                <Route path='home' element={<p style={{textAlign: 'center'}}>Тут будет компонент HOME</p>}/>
                <Route path='auth/*' element={<Auth/>}>
                    <Route path="signup" element={<SignUp/>}/>
                    <Route path="signin" element={<SignIn/>}/>
                </Route>
                <Route path='todos' element={
                    <ProtectedRoute isAllowed={email}>
                        <_PageHeader/>
                        <NewTodoContainer/>
                        <Todos/>
                    </ProtectedRoute>
                }/>
                <Route path='admin' element={<p style={{textAlign: 'center'}}>Тут будет компонент ADMIN</p>}/>
                <Route path='*' element={'404'}/>
            </Routes>
        </>
    );
}

export default App;
