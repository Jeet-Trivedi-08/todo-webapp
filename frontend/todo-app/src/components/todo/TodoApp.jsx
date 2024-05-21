import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LogoutComponent from './LogoutComponent';
import HeaderComponent from './HeaderComponent';
import ListTodosComponent from './ListTodosComponent';
import ErrorComponent from './ErrorComponent';
import WelcomeComponent from './WelcomeComponent';
import LoginComponent from './LoginComponent';
import AuthProvider, { useAuth } from './security/AuthContext';
import TodoComponent from './TodoComponent';

import './TodoApp.css'

function AuthenticationRoute({ children }) {
    const authContext = useAuth();

    if (authContext.isAuthenticated) {
        return children;
    }

    return <Navigate to="/"></Navigate>
}

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent></HeaderComponent>

                    <Routes>
                        <Route path="/" element={<LoginComponent></LoginComponent>}></Route>
                        <Route path="/login" element={<LoginComponent></LoginComponent>}></Route>

                        <Route path="/welcome/:username" element={
                            <AuthenticationRoute>
                                <WelcomeComponent></WelcomeComponent>
                            </AuthenticationRoute>}></Route>

                        <Route path="/todos" element={
                            <AuthenticationRoute>
                                <ListTodosComponent></ListTodosComponent>
                            </AuthenticationRoute>}></Route>

                        <Route path="/todos/:id" element={
                            <AuthenticationRoute>
                                <TodoComponent></TodoComponent>
                            </AuthenticationRoute>}></Route>

                        <Route path="/logout" element={
                            <AuthenticationRoute>
                                <LogoutComponent></LogoutComponent>
                            </AuthenticationRoute>}></Route>

                        <Route path="*" element={<ErrorComponent></ErrorComponent>}></Route>
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </div>
    )
}