import SideBar from "../../components/SideBar";
import RecentChat from "../../components/MiddleBar/RecentChat";
import Contact from "../../components/MiddleBar/Contact";
import Article from "../../components/MiddleBar/Article";

import MainBox from "../../components/MainBox";
import DefaultChatReminder from "../../components/DefaultChatReminder";
import CharacterSet from "../../components/MainBox/CharacterSet";
import ArticlePreView from "../../components/MainBox/ArticlePreView";
import ToolColumn from "../../components/ToolColumn";
import { connect } from "react-redux";

function Home({ currentChatCharacter, currentMiddleBar, currentMainBox, currentArticle}) {
  const currentMiddleBarContent = () => {
    switch (currentMiddleBar) {
      case "Article":
        return <Article />;
      case "RecentChat":
        return <RecentChat />;
      default:
        return <Contact />;
    }
  };

  const currentMainBoxContent = () => {
    switch (currentMainBox) {
      case "RecentChat":
        return currentChatCharacter === undefined ? (
          <DefaultChatReminder />
        ) : (
          <MainBox currentChatCharacter={currentChatCharacter} />
        );
      case "Contact":
        return currentChatCharacter === undefined ? (
          <DefaultChatReminder />
        ) : (
          <CharacterSet currentChatCharacter={currentChatCharacter} />
        );
      case "Article":
        return currentArticle === '' ? (
          <DefaultChatReminder />
        ) : (
          <ArticlePreView article={currentArticle}/>
        );
      default:
        return <DefaultChatReminder />;
    }
  };

  return (
    <div className="App">
      <div id="layout" className="theme-cyan">
        <SideBar />
        {currentMiddleBarContent()}
        {currentMainBoxContent()}
        <ToolColumn />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currentChatCharacter: state.currentChatCharacter,
    currentMiddleBar: state.currentMiddleBar,
    currentMainBox: state.currentMainBox,
    currentArticle: state.currentArticle
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
