"use client"
import BackBar from '@/components/BackBar';
import ChatContainer from '@/components/ChatContainer';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';

const ChatPage = ()=>{

    const [chatList,setChatList] = useState([{key: Date.now() + Math.random() ,type: "bot", message: "Here you can get recommendations of similar movies by giving the tmdb id of the movie you like and specifying the number of suggestions you want"}]);
    const [queryValue , setQueryValue] = useState("");
    const outputRef = useRef(null);
    const [isLoading,setLoading] = useState(false);
    const [sessionId,setSessionId] = useState(null);

    const getResponse = async(query,sessionId)=>{
        const res = await axios.post("http://localhost:3000/api/chatbot",{
            query: query,
            userSessionId:sessionId
        })

        return res.data;
    }

    const handleAsk = async()=>{
        const storedQuery = queryValue;
        setQueryValue("");

        setChatList((prevChatList) => [...prevChatList, {key: Date.now() + Math.random() , type:"user", message:storedQuery} ]);
        setLoading(true);
        const response = await getResponse(storedQuery,sessionId);
        const botText = response.message;
        const id = response.sessionId;
        setSessionId(id);
        setChatList((prevChatList) => [...prevChatList, {key: Date.now() + Math.random() , type:"bot", message:botText} ]);
        setLoading(false);
    }

    useEffect(() => {
        if (outputRef.current) {
          outputRef.current.scrollTop = outputRef.current.scrollHeight;
        }
      }, [chatList,isLoading]);


      const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          event.preventDefault();
          handleAsk();
        }
      };


    return <>
    <div className="h-screen w-screen flex flex-col justify-center items-center">
        <BackBar/>
        <div className='w-[80vw] h-[80vh]   lg:h-[60vh] mt-[40px] text-white relative'>
            <div className='chat-contianer w-full h-full flex flex-col overflow-scroll no-scrollbar relative' ref={outputRef}>
            {chatList.map((cc)=> (<ChatContainer  key={cc.key} message={cc.message} type={cc.type}/>))}
            { isLoading && <ChatContainer  key={-1} message={"Working..."} type={"bot"}/>}
            </div>
        </div>
        <div className=" fixed bottom-2 z-10 w-100 flex flex-row ">
            <div className="w-[60vw]"><input className="w-full h-10 rounded-tl-md rounded-bl-md px-2 bg-[#2F2F2F] text-white" type="text" placeholder='Message Recommender' value={queryValue} onChange={(event)=>setQueryValue(event.target.value)} onKeyPress={handleKeyPress}></input></div>
            <div className="w-[50px] flex items-center justify-center rounded-tr-md rounded-br-md bg-transparent" ><button className='bg-[#C1C1C1] disabled:bg-[#2F2F2F] disabled:text-white w-full h-full hover:cursor-pointer rounded-tr-md rounded-br-md' onClick={handleAsk} disabled = {isLoading || !queryValue}>ASK</button></div>
        </div>

    </div>
    </>
}

export default ChatPage;