// import { Link, useMatch, useResolvedPath } from "react-router-dom"

// export default function Navbar() {
   
//     return (
//     <nav className="nav">
//         <Link to="/" className= "site-title">
//             Elysium Care App
//         </Link>
       
//         <ul>
            
//             <CustomLink to="/about">About</CustomLink>
//             <CustomLink to="/need">Find What You Need</CustomLink>
//             <CustomLink to="/involved">Get Involved</CustomLink>
//             <CustomLink to="/referrals">Referrals</CustomLink>
//             <CustomLink to="/donate">Donate</CustomLink>
//             <CustomLink to="/search">Search</CustomLink>
     
          
            
//         </ul>
//     </nav>
//     )
// }


// function CustomLink({ to, children, ...props }){
//     const resolvedPath = useResolvedPath(to)
//     const isActive = useMatch({ path: resolvedPath.pathname, end: true})
//     return(
//         <li clasName={isActive ? "active" : ""}>
//             <Link href={to}{...props}>
//                 {children}
//                 </Link>
//                 </li>
//     )
// }

import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Elysium Care App
      </Link>
      <ul>
            <CustomLink to="/about">About</CustomLink>
            {/* <CustomLink to="/need">Registration</CustomLink> */}
            <CustomLink to="/involved">Log In</CustomLink>
            <CustomLink to="/referrals">Services</CustomLink>
            <CustomLink to="/donate">Donate</CustomLink>
            <CustomLink to="/search">Search</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}