import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { routerContainer } from './configs/Router'
import './index.css'
import React from 'react'
import { SimpleLoading } from './components/simple_loading/SimpleLoading'

const App = () => {
    return (
        <Router>
            <React.Suspense fallback={<SimpleLoading />}>
                <Routes>
                    {routerContainer.map((route, idx) =>
                        route.component ? (
                            <Route
                                key={idx}
                                path={route.path}
                                element={<route.component />}
                            />
                        ) : null
                    )}
                </Routes>
            </React.Suspense>
        </Router>
    )
}

export default App;