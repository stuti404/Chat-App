import MyMsg from "./MyMsg";
import TheirMsg from "./TheirMsg";
import MsgForm from "./MsgForm"

const ChatFeed =(props) => {
    const{ chats , activeChat, userName, message} = props;
    const chat = chats && chats[activeChat];
    const renderReadReciepts= (message ,isMyMessage) => chat.people.map((person,index) =>person.last_read=== message.id &&(
        <div>
            key = {`read_${index}`}
            className ="read-receipts"
            style={{
                float: isMyMessage? 'right':'left',
                backgroundImage :person.person.avatar &&   `url(${person.person.avatar})`,
            }}
        </div>
    ))
    const rendermessage = () =>{
        const keys = Object.keys(messages);
        return keys.map((key,index)=>{
            const message = message[key];
            const lastMessagekey = index === 0 ?null :keys[index-1];
            const isMyMessage = userName  === message.sender.userName;

            return(
                <div key={`msg_${index}`} style={{width :"100%"}}>
                        <div className="msg-block">
                            {
                                isMyMessage
                                ? <MyMsg message= {message}/>
                                :<TheirMsg message= {message} lastMessage={message[lastMessagekey]}/>
                            }
                         </div>
                        <div className="read-reciepts" style={{marginRight: isMyMsg ? '18px': "0px", marginLeft: MyMsg? '0px':'68px'}}>{renderReadReciepts(message, isMyMessage)}</div>   

                </div>
            );
        });
    };
    return(
        <div className="chat-feed ">
             <div className="chat-title-container">
                <div className="chat-title">{chat?.title}</div>
                <div className="chat-subtitle">

                </div>
                {rendermessage()}
                <div style={{height:'100px'}}/>
                <div className="message-form-container">
                    <MsgForm{...props} chatId={activeChat}/>
                </div>
             </div>
        </div>
    )
}

export default ChatFeed;