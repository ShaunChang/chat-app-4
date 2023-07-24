import ContactItem from "./components/ContactItem";
import { connect } from "react-redux";
import { updateCurrentChatCharacter } from "../../../store/actions";

const Contact = ({ currentCharacterList }) => {

  return (
    <div className="sidebar border-end py-xl-4 py-3 px-xl-4 px-3">
      <div className="tab-content">
        <div
          className="tab-pane fade show active"
          id="nav-tab-contact"
          role="tabpanel"
        >
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className="mb-0 text-primary">Contact</h3>
            <div>
              <button
                className="btn btn-dark"
                type="button"
                data-toggle="modal"
                data-target="#InviteFriends"
              >
                Invite Friends
              </button>
            </div>
          </div>

          <div className="form-group input-group-lg search mb-3">
            <i className="zmdi zmdi-search"></i>
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
            />
          </div>

          <ul className="chat-list">
            {currentCharacterList.map((currentCha) => (
              <ContactItem
                key={currentCha.id}
                currentCharacter={currentCha}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentCharacterList: state.currentCharacterList,
  };
};

const mapDispatchToProps = {
  updateCurrentChatCharacter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
