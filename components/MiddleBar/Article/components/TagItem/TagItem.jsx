import React, {useState} from "react";
import { connect } from "react-redux";
import { updateCurrentArticle } from "../../../../../store/actions";

function TagItem({tagName, updateCurrentArticle,articleList}) {
  const [displayDropDown, setDisplayDropDown] = useState(false)

  return (
    <li>
      <div className="hover_action">
        <button type="button" className="btn btn-link text-info">
          <i className="zmdi zmdi-eye"></i>
        </button>
        <button type="button" className="btn btn-link text-warning">
          <i className="zmdi zmdi-star"></i>
        </button>
        <button type="button" className="btn btn-link text-danger">
          <i className="zmdi zmdi-delete"></i>
        </button>
      </div>
    <div className="form-select w-100" onClick={()=>{setDisplayDropDown((sta)=>!sta)}}>
    {tagName}
    </div>
      {displayDropDown && articleList.filter((article)=>article.tag===tagName).map((article)=> <div className="w-100" onClick={()=>updateCurrentArticle(article)}> {article.title
      }</div>)}
    </li>
  );
}

const mapStateToProps = (state) => {
  return {
    articleList: state.articleList,
  };
};

const mapDispatchToProps = {
  updateCurrentArticle,
};

export default connect(mapStateToProps, mapDispatchToProps)(TagItem);
