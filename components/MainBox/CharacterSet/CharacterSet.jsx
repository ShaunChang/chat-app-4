import axios from "axios";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import {
  deleteCharacter,
  updateCurrentChatCharacter,
} from "../../../store/actions";

function CharacterSet({
  currentChatCharacter,
  updateCurrentChatCharacter,
  deleteCharacter,
}) {
  const { characterId } = currentChatCharacter;
  const [name, setName] = useState();
  const [uploadAvatar, setUploadAvatar] = useState();
  const [api, setApi] = useState();
  const [introduction, setIntroduction] = useState();
  const [uploadDataset, setUploadDataset] = useState();
  const [avatarImg, setAvatarImg] = useState();
  const fileInputRef = useRef(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/v1/character?id=${characterId}`)
      .then((response) => {
        const character = response.data;
        setName(character.name);
        setApi(character.api);
        setIntroduction(character.introduction);
        setUploadDataset(character.dataset);
        const imageBase64 = "data:image/png;base64," + character.avatar;
        setAvatarImg(imageBase64);
      });
  }, [currentChatCharacter]);

  const submitHandler = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("api", api);
    formData.append("introduction", introduction);
    if (uploadAvatar) {
      formData.append("avatar", uploadAvatar);
    }
    if (uploadDataset) {
      formData.append("dataset", uploadDataset);
    }
    axios
      .put(`http://localhost:8080/api/v1/character/${characterId}`, formData)
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
  };

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const apiChangeHandler = (event) => {
    setApi(event.target.value);
  };

  const introductionChangeHandler = (event) => {
    setIntroduction(event.target.value);
  };

  const avatarChangeHandler = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setUploadAvatar(file);
      setAvatarImg(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const dataSetChangeHandler = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setUploadDataset(file);
    };
    reader.readAsDataURL(file);
  };

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const deleteHandler = ()=>{
    axios.delete(`http://localhost:8080/api/v1/character/characterId=${characterId}`)
    deleteCharacter(characterId);
    updateCurrentChatCharacter(undefined);
  }
  return (
    <div className="main px-xl-5 px-lg-4 px-3">
      <div className="body-page d-flex py-xl-3 py-2">
        <div className="container px-0">
          <div className="tab-content">
            <div
              className="tab-pane fade show active"
              id="setting-general"
              role="tabpanel"
            >
              <div className="row">
                <div className="col-12">
                  <div className="card mb-4">
                    <div className="card-header">
                      <h6 className="card-title mb-0">Character Setting</h6>
                      <span className="text-muted small">
                        Update character details
                      </span>

                      <div class="card border-0 text-center pt-3 mb-4">
                        <div class="card-body">
                          <div class="card-user-avatar">
                            <input
                              type="file"
                              style={{ display: "none" }}
                              ref={fileInputRef}
                              onChange={avatarChangeHandler}
                            />
                            <img
                              src={avatarImg}
                              alt="ss"
                              style={{ width: "100%", height: "100%" }}
                            />
                            <button
                              type="button"
                              class="btn btn-secondary btn-sm"
                              onClick={handleIconClick}
                            >
                              <i class="zmdi zmdi-edit"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <form class="row" onSubmit={submitHandler}>
                        <div class="col-lg-6 col-md-12">
                          <div class="form-group mb-3">
                            <label>Name</label>
                            <input
                              type="text"
                              class="form-control"
                              value={name}
                              onChange={nameChangeHandler}
                            />
                          </div>
                          <div class="form-group mb-3">
                            <label>Api</label>
                            <input
                              type="text"
                              class="form-control"
                              value={api}
                              onChange={apiChangeHandler}
                            />
                          </div>
                          <div class="form-group mb-3">
                            <label>Introduction</label>
                            <textarea
                              rows="4"
                              className="form-control"
                              value={introduction}
                              onChange={introductionChangeHandler}
                            ></textarea>
                          </div>

                          <button type="submit" className="btn btn-primary">
                            Update Details
                          </button>
                          <button type="button" class="btn btn-link">
                            Cancel
                          </button>
                        </div>
                        <div class="col-lg-6 col-md-12">
                          <div class="card-body">
                            <br />
                            <div className="col-12">
                              <div className="form-group">
                                <label>Dataset</label>
                                <br />
                                <input
                                  type="file"
                                  className="form-control-file"
                                  onChange={dataSetChangeHandler}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-between mt-4">
                <div className="col-12 col-md-6">
                  <h5>Delete character</h5>
                  <p className="text-muted mb-md-0">
                    Please note, this is a permanent action and will no be
                    recoverable once completed.
                  </p>
                </div>
                <div className="col-auto">
                  <button
                    className="btn btn-danger"
                    onClick={deleteHandler}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {
  deleteCharacter,
  updateCurrentChatCharacter,
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterSet);
