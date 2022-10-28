import { createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom";

import { Default } from "./Pages/Dashboard";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route path="dt-dash" element={<Default />} />
        </Route>
    )
)