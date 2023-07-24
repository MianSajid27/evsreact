import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import "./App.css";
import Face from "./images/Face.jpg";
import Add from "./Add";
import Comment from "./Comment";


function App() {
  const [show, setshow] = useState(false);
  const [data, setData] = useState();
  const [posts, setposts] = useState([]);
  const deletePost = (e) => {
    setposts(posts.concat(<Data index={posts.splice(e,0)} data={data} />));
    console.log(e, "e");
    console.log(posts, "statre");
     
    // const arr=posts.filter((item,i)=>{
    //   if(i!=e){
    //     return item
    //   }
    // })

      // setposts(posts.splice(e,0))

    // setData("");
  };

  const Data = (props) => {
    return (
 
      <div>
        <div id="2" className=" card flex ">
          <div>
            {/* <Delete/> */}
            <button
              style={{
                marginLeft: "410px",
                marginTop: "10px",
                border: "none",
                background: "red",
                color: "white",
              }}
              onClick={() => {
                deletePost(props.index);
              }}
            >
              {" "}
              Delete
            </button>{" "}

            <br />
           
            
         
            <div>
              <img className="face1 " src={Face} />
              <p className="">
                <label className="sho">Patrick Shoff</label> <br />
                <label className="oh">OH, USA </label> <br />
                <label className="go"> 12 minute ago </label>
              </p>
            </div>
            <p className="test"> {props.data}</p>
            <p className="tes">1 Likes 1 comment</p>
            <div className=" flex">
              <hr />
              <div className="">
                <label className="like">
                  <Add />
                </label>
                <label className="com">
                  <Comment />
                </label>
              </div>
            </div>
           
          </div>
          
         
         
     
        
          
        </div>
      </div>
     
    );
  };
  <br />;
  const onaddbtn = () => {
    setposts(posts.concat(<Data index={posts.length} data={data} />));
    console.log(posts,'posts')
    setData("");
  };

  return (
    <>
      <div className="back">
        <div className=" card flex ">
          <div>
            <img className="face " src={Face} />
            <input
              className="what"
              value={data}
              onChange={(e) => {
                setData(e.target.value);
              }}
              placeholder="What is your mind"
            />
          </div>
          <br></br>
          <hr />
          <div className="flex">
            <button className="photo">Photos/Videos</button>
            <button className="post" onClick={onaddbtn}>
              Post It
            </button>{" "}
            <br /> <br />
            {posts}
          </div>
        </div>
        <br />
      </div>
    </>
  );
}
export default App;
