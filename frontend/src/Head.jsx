import React,{useState} from "react";
// import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
export default function Head(){
    const [overservices,setoverservices]=useState(false);
    const [gallery,setgallery]=useState(false);
    return (
        <div className="subheader">
            <div className="menuheader">
            <div className="image">
                <img src="http://www.drsrujalshah.com/assets/images/logo/logo1.png"
                width="100%"
                height="100%"
                alt="logo"/>
            </div>
            <div className="menu">
            <ul>
                <li>
                    HOME
                </li>
                <li>
                    ABOUT US
                </li>
                <li  onMouseOver={()=>setoverservices(true)} onMouseOut={()=>setoverservices(false)}>
                    VASCULAR SERVICES
                <span>
                {overservices?<i className="material-icons icon" >keyboard_arrow_up</i>:
                <i className="material-icons icon" >keyboard_arrow_down</i>
                }
                </span>
                </li>
                <li onMouseOver={()=>setgallery(true)} onMouseOut={()=>setgallery(false)}>
                    GALLERY
                    <span >
                {
                        gallery?<i className="material-icons icon" >keyboard_arrow_up</i>:
                        <i className="material-icons icon" >keyboard_arrow_down</i>
                    }
                    </span>
               </li>
                <li>
                    TESTIMONIALS
                </li>
                <li>
                    CONTACT
                </li>
            </ul>
            </div>
            </div>
        </div>
    )
}