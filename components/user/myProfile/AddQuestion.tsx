import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import API from "../../../api/Api";
import { strings } from "../../../public/lang/Strings";

const api = new API();
const AddQuestions: React.FC<{}> = () => {
  const [question, setQuestion] = useState<string>("");
  const [questions, setQuestions] = useState<any>([]);

  const [skills, setSkills] = useState<any>([]);
  const [userSkills, setUserSkills] = useState<any>([]);

  useEffect(() => {
    getQuestions();
    getSkills();
    getUserSkills();
  }, []);

  const addQuestion = () => {
    if (question != "") {
      let data = JSON.stringify({
        question: question,
      });
      api
        .addQuestion(data)
        .then((res) => {
          setQuestion("");
          getQuestions();
        })
        .catch((error) => console.log(error));
    }
  };

  const getQuestions = () => {
    api
      .getQuestions()
      .then((res) => {
        setQuestions(res.data.response);
      })
      .catch((error) => console.log(error));
  };

  const getSkills = () => {
    api
      .getSkills()
      .then((res) => {
        setSkills(res.data.response);
      })
      .catch((error) => console.log(error));
  };

  const deleteQuestion = (id) => {
    api
      .deleteQuestion(id)
      .then((res) => {
        getQuestions();
      })
      .catch((error) => console.log(error));
  };

  const getUserSkills = () => {
    api
      .getUserSkills()
      .then((res) => {
        setUserSkills(res.data.response);
      })
      .catch((error) => console.log(error));
  };

  const addSkill = (id) => {
    let payload = JSON.stringify({
      skill_id: id,
    });

    api
      .addSkill(payload)
      .then((res) => {
        getUserSkills();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="pay-tabs">
        <div className="basic-info">
          <div className="row">
            <div className="col-6 col-md-12 col-lg-12 col-xl-12 my-auto">
              <div className="basic-details">
                <h5 className="font-semibold mb-0">Add questions</h5>
              </div>
            </div>
          </div>
          <hr className="d-block d-md-none d-lg-none d-xl-none" />
          <div className="row">
            <div className="col-12 col-md-8 col-lg-8 col-xl-8">
              <div className="question-add">
                <textarea
                  className="form-control"
                  placeholder="Write your question here"
                  rows={4}
                  id="add-question"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  defaultValue={""}
                />
                <button onClick={addQuestion} className="btn btn-primary my-3">
                  Submit
                </button>
              </div>
            </div>
          </div>
          <hr />

          <div className="row">
            <div className="col-12 col-md-8 col-lg-8 col-xl-8">
              <div className="question-details">
                <h5 className="font-semibold">{strings.Questions}</h5>
                {questions.map((value) => (
                  <div className="row">
                    <div className="col-9 col-md-9 col-lg-9 col-xl-9 my-auto">
                      <div>
                        <h6 className="mb-0">{value.question}</h6>
                      </div>
                    </div>
                    <div className="col-3 col-md-3 col-lg-3 col-xl-3">
                      <div className="d-flex question-icon">
                        <div
                          onClick={() => {
                            deleteQuestion(value.id);
                          }}
                          className="edit-icon"
                        >
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fal"
                            data-icon="trash-alt"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className="svg-inline--fa fa-trash-alt fa-w-14 fa-2x"
                          >
                            <path
                              fill="currentColor"
                              d="M296 432h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8zm-160 0h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8zM440 64H336l-33.6-44.8A48 48 0 0 0 264 0h-80a48 48 0 0 0-38.4 19.2L112 64H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h24v368a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V96h24a8 8 0 0 0 8-8V72a8 8 0 0 0-8-8zM171.2 38.4A16.1 16.1 0 0 1 184 32h80a16.1 16.1 0 0 1 12.8 6.4L296 64H152zM384 464a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V96h320zm-168-32h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="basic-info">
          <div className="row">
            <div className="col-6 col-md-12 col-lg-12 col-xl-12 my-auto">
              <div className="basic-details">
                <h5 className="font-semibold mb-0">{strings.Selectskills}</h5>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-8 col-lg-8 col-xl-8">
              <div className="question-details">
                <h5 className="font-semibold">Skills</h5>
                {skills.map((value: any, index: number) => (
                  <div key={index} className="custom-check mt-1">
                    <label className="check ">
                      <input
                        onChange={(e) => {
                          addSkill(value.id);
                        }}
                        checked={userSkills.some((v) => v.skill_id == value.id)}
                        type="checkbox"
                      />
                      <span className="checkmark"></span>
                      {value.skill}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddQuestions;
