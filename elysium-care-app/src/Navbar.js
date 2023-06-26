export default function Navbar(){
    return <nav className="nav">
        <a href="/" className= "site-title">Elysium Care App</a>
        <ul>
            
            <li><a href="/about">About</a></li>
            <li><a href="/findWhatYouNeed">Find What You Need</a></li> 
            <li><a href="/getInvolved">Get Involved</a></li>
            <li><a href="/referrals">Referrals</a></li>
            <li><a href="/donate">Donate</a></li>
            <li><a href="/search">Search</a></li>
            
        </ul>
    </nav>
}