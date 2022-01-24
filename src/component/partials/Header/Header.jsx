import style from '../Header/Header.module.scss'
import {Nav} from '../Nav/Nav'

// Array til nav - viser path til den side man klikker ind på


const arrNav = [
    { name: 'Home', path: '/'},
    { name: 'About', path: '/about'},
    { name: 'Jobs', path: '/jobs'},
    { name: 'Products', path: '/products'},
    { name: 'Contact', path: '/contact'}

 
 
 ]

export const Header = (props) => {
	return (
        <header> 
            <div>
            <h1>The Flying Pug</h1>
            <img src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9nJTIwcG5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" />
         </div>
         <Nav navItems ={arrNav}/>
         </header>
	)
}