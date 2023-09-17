import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.png'
import { useState } from 'react';
import { BiSearch } from "react-icons/bi";



const NavigationBar = () =>{
    const[search,setSearch] = useState("")

    const navigate = useNavigate()
    return(
        <div className='navigationContainer'>
            <div style={{fontSize:"40px", fontWeight:"1000",display:"flex"}}>
                <img src={logo} alt="logo" height="37px" width="37px" style={{marginRight:"14px", position:'relative', top:"6px"}}/>
                <div style={{cursor:"pointer"}} onClick={() => {
                    navigate("/")
                }}>
                    MARKETWATCH | PRICE
                </div>
            </div> 
            
            <div className='searchBar'>
                <input type="text" placeholder='Search' onChange={(e) => {
                    setSearch(e.target.value)
                }} value={search}/>
                <a href={`/searchResults?searchQuery=${search}`}>
                    <button onClick={() => {
                        console.log(search)
                        navigate()
                    }}><BiSearch/> </button> 
                </a>
                   
            </div>
        </div>

       
    )
}

export default NavigationBar;

