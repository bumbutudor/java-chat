import React, {useContext, useEffect} from 'react';
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {Avatar, Button, Container, Grid, TextField} from "@mui/material";
import {useCollectionData} from "react-firebase-hooks/firestore";
import Loader from "./Loader";
import {collection, addDoc, query, orderBy, getDocs} from "firebase/firestore";
import {displayCreatedAt, filterJavaText} from "../utils/helpers";
import OnlyJavaTalk from "./OnlyJavaTalk";

const Chat = () => {

    const {auth, firestore} = useContext(Context);
    const [user] = useAuthState(auth);
    const [value, setValue] = React.useState('');

    const collectionRef = collection(firestore, 'messages');
    const [messages, loading] = useCollectionData(query(collectionRef, orderBy('createdAt')));
    // console.log(messages);
    const sendMessage = async () => {
       await addDoc(collection(firestore, 'messages'), {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: new Date()
        });

        setValue('');
        const scroll = document.getElementById('scroll');
        scroll.scrollTop = scroll.scrollHeight;

    }


    if(loading) {
        return <Loader/>;
    }

    return (
        <Container>

            <Grid
                container
                justifyContent={"center"}
                style={{height: window.innerHeight - 100}}
            >
                <div id="scroll"
                    style={{
                        width: '66%',
                        height: '66vh',
                        border: '1px solid gray',
                        overflowY: 'auto',
                        borderRadius: '3px'
                    }}>
                    {messages.map(message =>
                        <div key={message.createdAt}
                            style={{
                                margin: 10,
                                border: user.uid === message.uid ? '2px solid green' : '2px dashed red',
                                width: 'fit-content',
                                padding: 5,
                                borderRadius: '3px',
                                maxWidth: '60%',
                                marginLeft: user.uid === message.uid ? 'auto' : '10px',
                                // display: 'flex',
                            }}
                        >
                            <Grid
                                container
                                display={'flex'}
                                gap={1}
                            >
                                <Avatar
                                    style={
                                        {
                                            width: '25px',
                                            height: '25px',
                                        }
                                    }
                                    src={message
                                    .photoURL}/>
                                <div>{message.displayName}</div>
                                <div>{displayCreatedAt(message.createdAt)}</div>
                            </Grid>
                            <div
                                style={{
                                    marginLeft: '5px',
                                    marginTop: '5px',
                                    overflowWrap: 'break-word',

                                }}
                            >{filterJavaText(message.text)}</div>

                        </div>
                    )}
                </div>
                    <Grid
                        container
                        direction={"column"}
                        alignItems={"flex-end"}
                        style={{width: '66%'}}
                    >
                        <OnlyJavaTalk/>
                        <TextField
                            variant={"outlined"}
                            fullWidth
                            style={{margin: '10px 0'}}
                            value={value}
                            onChange={e => setValue(e.target.value)}
                            onKeyUp={e => e.key === 'Enter' ? sendMessage() : null}

                        />
                        <Button onClick={sendMessage} style={{textTransform: "none"}}>Trimite mesajul (Enter)</Button>
                    </Grid>

            </Grid>

        </Container>
    );
};

export default Chat;