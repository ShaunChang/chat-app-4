import TagItem from "./components/TagItem";
import { connect } from "react-redux";
import { updateCurrentArticle } from "../../../store/actions";
import { addArticleList } from "../../../store/actions";
import { useState } from "react";
import { ButtonGroup, Button } from 'react-bootstrap';

const Article = ({currentArticle,updateCurrentArticle,addArticleList}) => {
  const [articleLink, setArticleLink] = useState("")
  const [tag,setTag] = useState("")
  const [content,setContent] = useState('')
  const [title, setTitle] = useState('')

  const handleChange = (event)=>{
    setArticleLink(event.target.value)
  }

  const handleAddArticle = ()=>{
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    var urlencoded = new URLSearchParams();
    urlencoded.append("appkey", "XYS8X5K5CZ3D53STDPDM2CQJZS6VR3JP");
    urlencoded.append("url", articleLink);
    urlencoded.append("contentwithhtml", "false");
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };
    fetch("https://api.gugudata.com/news/fetchcontent", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        const resultObject = JSON.parse(result)
        const article = {
          id:1,
          title:resultObject.Data.Title,
          content:resultObject.Data.Content,
          tag:tag,
          link:articleLink
        }
        updateCurrentArticle(article)    
        addArticleList(article)
      })
      .catch((error) => {
        const article = {
        id:231321,
        title:"please input valid link",
        content: "invalid link",
        tag:tag,
        link:articleLink 
      }
      updateCurrentArticle(article)
      addArticleList(article)
    } 
      );
    setArticleLink("")
    setTag("")
  }

  return (
    <div className="sidebar border-end py-xl-4 py-3 px-xl-4 px-3">
      <div className="tab-content">
        <div
          className="tab-pane fade show active"
          id="nav-tab-contact"
          role="tabpanel"
        >
          <div className="justify-content-between align-items-center mb-4">
            <h4 className="mb-0 text-primary">Article Management</h4>
          </div>

          <div className="d-flex form-group input-group-lg search mb-3">
            <div className="col-8" style={{marginRight: '1rem'}}>
              <i className="zmdi zmdi-search"></i>
              <input
                type="text"
                className="form-control"
                placeholder="please input article link..."
                onChange={(e)=>handleChange(e)}
                value={articleLink}
              />
            </div>

            <div className="col-4">
              <button
                className="btn btn-dark"
                type="button"
                data-toggle="modal"
                data-target="#InviteFriends"
                onClick={handleAddArticle}
              >
                Add Article
              </button>
            </div>
          </div>

          <div className="dropdown">
                <a
                  className="btn btn-link px-1 py-0 border-0 text-muted dropdown-toggle"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                ></a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </div>

          <ButtonGroup className="mb-3 gap-3 w-50"  style={{ width: "100%", height: "100%"}}>
            <Button className="rounded" onClick={()=>setTag('tech')}>tech</Button>
            <Button className="rounded" onClick={()=>setTag('news')}>news</Button>
            <Button className="rounded" onClick={()=>setTag('AI')}>AI</Button>
            <Button className="rounded" onClick={()=>setTag('finance')}>finance</Button>
            <Button className="rounded" onClick={()=>setTag('finance')}>+</Button>
          </ButtonGroup>

          <ul className="chat-list">
            <TagItem tagName={"tech"} />
            <TagItem tagName={"news"} />
            <TagItem tagName={"AI"} />
            <TagItem tagName={"finance"} />
          </ul>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentArticle: state.currentArticle,
  };
};

const mapDispatchToProps = {
  updateCurrentArticle,
  addArticleList,
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);
