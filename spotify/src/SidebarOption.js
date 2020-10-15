import React from 'react'
import "./sidebarOption.scss"
function SidebarOption({title,Icon}) {
    return (
        title.trim()&&<div className="sidebarOption">
            {(Icon)&& <Icon className="sidebarOption__icon"/>}
           {(Icon)?(<h4>{title}</h4>):(<p>{title}</p>)}
        </div>
    )
}

export default SidebarOption
