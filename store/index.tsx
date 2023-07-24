import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  currentChatCharacter: "",
  currentMiddleBar: "",
  currentMainBox: "",
  currentCharacterList: [
    {
      characterId: 1,
      name: "Elon Musk",
      time: "last 6 seconds",
      avatar:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU2JRbbl3LBOm_an3eI5iplFhOoLESyBwUfmWDO49BS1EYuGUE",
    },
    {
      characterId: "2",
      name: "xiangcheng",
      time: "last 6 seconds",
      avatar:
        "https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRNug2nY7GDEG23c7HpAX6pWLWp3dfcQmTxGz50nGt_kAqGyAxoVPLw21v137iB7iAW",
    },
  ],
  history: [],
  currentArticle: {
    id: "",
    title: "",
    content: "",
    tag: []
  },
  articleList :[
    {id: 1, title: "一文带你读懂ChatGPT", content: "chatGPT是发发发发散发的发烧发顺丰的方法啊短发打分 啊的身份暗示法啊发a", tag:"tech", link:"www"},
    {id: 2, title: "什么是Transform模型?", content: "transfom法师打发发烧发烧发烧发顺丰", tag:"tech", link:"www"},
    {id: 3, title: "雷军发布小米汽车", content: "近日，小米集团总裁雷军发布消息称fadfadsfasfasfs", tag:"news", link:"www"},
    {id: 4, title: "iphone20预览", content: "iphone20预览啊沙发沙发上", tag:"news", link:"www"},
  ]
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "UPDATE_CURRENT_CHAT_CHARACTER":
      return {
        ...state,
        currentChatCharacter: action.payload,
      };
    case "UPDATE_CURRENT_MIDDLEBAR":
      return {
        ...state,
        currentMiddleBar: action.payload,
      };
    case "UPDATE_CURRENT_MAINBOX":
      return {
        ...state,
        currentMainBox: action.payload,
      };
    case "UPDATE_HISTORY":
      return {
        ...state,
        history: action.payload,
      };
    case "DELETE_CHARACTER":
      return {
        ...state,
        currentCharacterList: state.currentCharacterList.filter(currentCharacter => currentCharacter.characterId !== action.payload)
      };
    case "SET_CURRENT_ARTICLE":
      return {
        ...state,
        currentArticle: action.currentArticle
      }
    case "SET_ARTICLE_LIST":
      return {
        ...state,
        articleList: action.articleList
      }
    case "ADD_ARTICLE":
      return {
        ...state,
        articleList: [...state.articleList,action.article]
      }
    default:
      return state;
  }
};

const store = configureStore({
  reducer: reducer,
});

export default store;
