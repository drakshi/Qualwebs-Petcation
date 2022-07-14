import { collection, getDocs } from "firebase/firestore/lite";
import React from "react";
import { useEffect } from "react";
import db from "../../service/Firebase";
import { ref, onValue } from "firebase/database";
import Cookies from "universal-cookie";
import { useState } from "react";
import { I_CHAT_PARTICIPANTS } from "../../models/chat.interface";
import { formatDistance } from "date-fns";
import API from "../../api/Api";
import Link from "next/Link";
interface I_Props {
  updateParticipant: (participant: I_CHAT_PARTICIPANTS) => void;
  active: I_CHAT_PARTICIPANTS;
  setActive: (active: I_CHAT_PARTICIPANTS) => void;
}

const cookies = new Cookies();
const api = new API();

const ChatParticipants: React.FC<I_Props> = ({
  updateParticipant,
  active,
  setActive,
}: I_Props) => {
  const [participants, setParticipants] = useState<I_CHAT_PARTICIPANTS[]>([]);
  const [searchData, setSearchData] = useState<I_CHAT_PARTICIPANTS[]>([]);
  const [searchedText, setSearchedText] = useState<string>();

  useEffect(() => {
    getParticipants();
  }, []);


  useEffect(() => {
    if(active && active.id) {
      api.updateReadStatus({thread_id: active.id}).then((res) => {
      })
    }
  }, [active]);

  const getParticipants = async () => {
    const user = cookies.get("id");
    const messagesRef = ref(db, `chat_thread/${user}`);

    onValue(messagesRef, (snapshot) => {
      var data = [];
      snapshot.forEach((element) => {
        data.push(element.val());
      });
      setActive(data[0]);
      updateParticipant(data[0]);
      setParticipants(data);
    });
  };

  const handleSearch = (e) => {
    let data = [];
    if(e.target.value) {
      setSearchedText(e.target.value)
      data = participants.filter((val) =>{
        return (val.user.firstname + " " + val.user.lastname).includes(e.target.value)}
        )
      setSearchData(data)
    }else {
      setSearchedText('')
      setSearchData([])
    }
  }

  return (
    <div className="col-md-6 col-lg-3 col-xl-3 col-sm-3 pd-right" id="search">
      <div className="bg-white main-background chat-content">
        <div className="search-sitters mb-3">
          <input
            className="form-control"
            placeholder="Search sitter"
            type="text"
            value={searchedText}
            onChange={handleSearch}
          />
        </div>
        <div className="scrollbar">
          <div className="force-overflow">
            <div className="force-overflow">
              {(searchData.length ? searchData:participants).map((value, index) => (
                  <Link href={{ pathname: "/sitter-profile/" +value.user.id  }}>
                  <div key={index} className="">
                    <a
                      onClick={() => {
                        updateParticipant(value);
                        setActive(value);
                      }}
                      className="sitters-name"
                    >
                      <div className="row">
                        <div className="col">
                          <div className="d-flex">
                            <div className="invited-img">
                              <img
                                src={value.user.profile_picture}
                                className="img-fluid"
                              />
                            </div>
                            <div className="my-auto ml-3">
                                <h6 className="font-14 mb-0 chat-titles ml-0">{value.user.firstname + " " + value.user.lastname}&nbsp;&nbsp;
                                {value.last_timestamp ? (
                                  <span className="font-10 text-muted">
                                    {formatDistance(
                                      new Date(Number(value.last_timestamp) * 1000),
                                      new Date(),
                                      {
                                        addSuffix: true,
                                      }
                                    )}
                                  </span>
                                ) : null}
                              </h6>
                              <p className="font-12 mb-0">{value.last_message ? value.last_message.includes('http') ? 'sent an attachment':value.last_message:''}</p>
                            </div>
                          </div>
                        </div>
                        {value.unread_count > 0 && active && active.id != value.id ? (
                          <div className="col-auto">
                            <div className="chat-count my-auto">
                              <h6>{value.unread_count}</h6>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </a><hr/>
                  </div>
                  </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatParticipants;
