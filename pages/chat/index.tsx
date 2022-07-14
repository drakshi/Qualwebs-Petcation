import React, {useEffect,useState} from "react";
import ChatBooking from "../../components/chat/ChatBooking";
import ChatBox from "../../components/chat/ChatBox";
import ChatParticipants from "../../components/chat/ChatParticipants";
import { I_CHAT_PARTICIPANTS } from "../../models/chat.interface";
import {useRouter} from "next/router";

const Chat: React.FC<{}> = () => {
  const [participants, setParticipants] = useState<I_CHAT_PARTICIPANTS>(null);
  const [active, setActive] = useState<I_CHAT_PARTICIPANTS>(null);
  const updateParticipant = (value: I_CHAT_PARTICIPANTS) => {
    setParticipants(value);
  };

  const router = useRouter();

  // useEffect(()=>{
  //   if(router.query.id){
  //     if(participants) {
  //       updateParticipant(participants.find((val)=> val.sender_id == router.query.id))
  //     }
  //   }
  // },[router.query, participants])

  return (
    <div className="main-wrapper my-3">
      <div className="container-fluid">
        <div className="row">
          <ChatParticipants
            active={active}
            setActive={setActive}
            updateParticipant={updateParticipant}
          />
          {participants ? (
            <>
              <ChatBox participants={participants} />
              <ChatBooking participants={participants} />
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Chat;
