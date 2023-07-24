export const updateCurrentChatCharacter = (currentChatCharacter) => {
  return {
    type: "UPDATE_CURRENT_CHAT_CHARACTER",
    payload: currentChatCharacter,
  };
};

export const updateCurrentMiddleBar = (currentMiddleBar) => {
  return {
    type: "UPDATE_CURRENT_MIDDLEBAR",
    payload: currentMiddleBar,
  };
};

export const updateCurrentMainBox = (currentMainBox) => {
  return {
    type: "UPDATE_CURRENT_MAINBOX",
    payload: currentMainBox,
  };
};


export const updateHistory = (history) => {
  return {
    type: "UPDATE_HISTORY",
    payload: history,
  };
};

export const deleteCharacter = (characterId) => {
  return {
    type: "DELETE_CHARACTER",
    payload: characterId,
  };
};

export const updateCurrentArticle = (currentArticle)=>{
  return {
    type: "SET_CURRENT_ARTICLE",
    currentArticle: currentArticle
  }
}

export const updateArticleList = ((articleList)=>{
  return {
    type: "SET_ARTICLE_LIST",
    articleList: articleList
  }
})

export const addArticleList = ((article)=>{
  return {
    type: "ADD_ARTICLE",
    article: article
  }
})