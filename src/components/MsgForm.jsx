import { useState } from "react";
import { SendOutlined, PictureOutLined } from "@ant-design/icons";
import { sendMessage, isTyping } from "react-chat-engine";

const MyForm = (props) => {
    const [value, setvalue] = useState('');
    const{chatId,creds} =props;
    const handleChange = (event) =>{
        setValue(event.target.value);
        isTyping(props,chatId);
    };
    const handleSubmit =(event) =>{
        event.preventDefualt();
        const text =value.trim();
        if(text.length >0){
            sendMessage(creds,chatId,{text});
        }
        setValue('');
    };

    const handleUpload = (event) =>{
        sendMessage(creds, chatId, {file: event.target.file,text:""});
    }
    return(
        <form className="message-form" onSubmit={handleSubmit}>
            <input
                className="message-input"
                placeholder="Send a message..."
                value={value}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
            <label htmlFor="upload-button">
                <span className="image-button">
                    < PictureOutLined className="picture-icon"></PictureOutLined>
                </span>

            </label>
            <input
                type="file"
                multiple={false}
                id = "upload-button"
                style={{display: 'none'}}
                onChange={handleUpload.bind(this)}
            />
            <button type="submit" className="send-button">
                <SendOutlined classID="send-icon"/>
            </button>
        </form>
        )
}

export default MyForm;