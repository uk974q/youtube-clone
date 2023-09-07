import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import appStore from './utils/appStore';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import WatchPage from './components/WatchPage';
import Main from './components/Main';

const appRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
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
        <Header />
        <RouterProvider router={appRoutes}><Body /></RouterProvider>
      </Provider>
    </div>
  );
}


export default App;
