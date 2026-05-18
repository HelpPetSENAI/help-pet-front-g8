import { Outlet, Navigate } from "react-router-dom";

export default function ProtectedRoutes() {
    const admin = false

    return admin ? <Outlet /> : <Navigate to="/" />
}