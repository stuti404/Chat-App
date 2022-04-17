const TheirMsg = ({lastMessagekey ,message}) => {
    const isFirstMsgByUser =  !lastMessage || lastMessage.sender.username !== mesasage.sender.username;
    return(
        <div className="message-row">
            {isFirstMsgByUser &&(
                <div
                className="message-avtar"
                style={{ backgroundImage: message.sender && `url(${message.sender.avatar})`}}
                />
            )}
            {message.attactments && message.attactments.length > 0
            ?(
                <img
                    src={message.attachment[0].file}
                    alt='message-attachment'
                    className="msg-image"
                    style={{marginLeft: isFirstMsgByUser? '4px':'48px'}}
            />
            )
            :(
                <div className="message" style={{ float:'left',backgroundColor:'#CABCDC', marginLeft: isFirstMsgByUser ?'4px':'48px'}}>
            {message.text}
                </div>
            )}
        </div>
    );
};

export default TheirMsg;