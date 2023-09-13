import { Provider, useSelector } from 'react-redux';
import './App.css';
import Header from './components/Header';
import appStore from './utils/appStore';
import { Outlet, RouterProvider, createBrowserRouter, useLocation } from 'react-router-dom';
import WatchPage from './components/WatchPage';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

const YouTubeClone = () => {
  // const value = useSelector((store) => store.compactSlice.toggle)
  const location = useLocation()
  return (
    <>
      <Header />
      <div className="grid grid-cols-12 mr-2">
          {location.pathname == "/"  && <Sidebar />}
          <Outlet />
      </div>
    </>
  )
}

const appRoutes = createBrowserRouter([
    {
      path: "/",
      element: <YouTubeClone />,
      children: [
        {
          path: "/",
          element: <Main />
        },
        {
          path: "/video",
          element: <WatchPage />
        }
      ]
    }
])



function App() {
  return (
    <div>
      <Provider store={appStore}>
        <RouterProvider router={appRoutes}>
          <YouTubeClone />
        </RouterProvider>
      </Provider>
    </div>
  );
}


export default App;
