import MarkDownText from "./MarkDown";
import { GoDependabot } from "react-icons/go";


const ChatContainer = ({message , type})=>{

    let style = "flex flex-row";
    let styleOut = "";
    if(type == "bot"){
         style = "float-left max-w-[60vw] block relative block max-w-60 p-2";
         styleOut ="float-left w-100 relative ";
    }
    else
    {
         style = " float-right max-w-60 block bg-[#2F2F2F] rounded-lg p-2 relative";
         styleOut = "float-right w-100  relative"
    }
    return<>
    <div className={styleOut}>
    <div className={style}>
        <div>
        { type == "bot" ? <GoDependabot /> : null}
        </div>
        <div className="chat">

                <MarkDownText text= {message}/>
            
        </div>
    </div>
    </div>
    </>
}

export default ChatContainer;