
import { NextResponse } from 'next/server';

// const apiKey = 'mGRF3PkEOfabrW6LjpuzNjwiWfx3Hwi7';
// const externalUserId = 'Phase';



async function createChatSession(apiKey, externalUserId) {
    const response = await fetch('https://api-dev.on-demand.io/chat/v1/sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': apiKey
      },
      body: JSON.stringify({
        pluginIds: ['plugin-1719929505','plugin-1721309142'],
        externalUserId: externalUserId
      })
    });

    const data = await response.json();
    return data.data.id; // Extract session ID
  }

  async function submitQuery(apiKey, sessionId, query) {
    const response = await fetch(`https://api-dev.on-demand.io/chat/v1/sessions/${sessionId}/query`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': apiKey
      },
      body: JSON.stringify({
        endpointId: 'predefined-openai-gpt4o',
        query: query,
        pluginIds: ['plugin-1719929505','plugin-1721309142'],
        responseMode: 'sync'
      })
    });

    const data = await response.json();
    return data;
  }


const POST = async(req)=>{

const apiKey = 'mGRF3PkEOfabrW6LjpuzNjwiWfx3Hwi7';
const externalUserId = 'Phase';
    const body = await req.json();
    const {query,userSessionId} = body;
    let sessionId = userSessionId;
    try {
        if(!sessionId){
            sessionId = await createChatSession(apiKey, externalUserId);
        }
        const response = await submitQuery(apiKey, sessionId, query);
        const message = response.data.answer;

        const data = {message: message, sessionId: sessionId};
        return NextResponse.json(data,{status:200});
      } catch (error) {
        console.log(error);
       return NextResponse.json("Something Went Wrong",{status:400});
      }
}

export { POST };
