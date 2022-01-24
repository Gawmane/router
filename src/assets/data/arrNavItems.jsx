
//Routes
import {Home} from '../../component/Pages/Home/Home';
import {AboutRouter} from '../../component/Pages/About/About';
import {Jobs} from '../../component/Pages/Jobs/Jobs';
import {Products} from '../../component/Pages/Products/Products';
import {ContactRouter} from '../../component/Pages/Contact/Contact';
 import {NotFound} from '../../component/Pages/Error/Error';


//Array til vores navigation - router
const arrNavItems = [
    {
        title: 'Home',
        path: '/',
        element: <Home/>,
        display: true
    },
    {
        title: 'About',
        path: '/about',
        element: <AboutRouter/>,
        display: true
    },  {
        title: 'Jobs',
        path: '/jobs',
        element: <Jobs/>,
        display: true
    },  {
        title: 'products',
        path: '/products',
        element: <Products/>,
        display: true
    },
    {
        title: 'Contact',
        path: '/contact',
        element: <ContactRouter/>,
        display: true
    }, 
    // Display false ved notfound for ikke at få den vist vi vores navigation 
    {
        title: 'NotFound',
        path: '*',
        element: <NotFound/>,
        display: false
    },
    // {
    //     title: 'Verdensmål',
    //     path: '/goals',
    //     element: <Products/>,
    //     display: true
    // },
]

export default arrNavItems