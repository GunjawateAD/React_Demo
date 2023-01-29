import React from "react";
import { Link, useParams } from "react-router-dom";

function Post() {
  let allPost = [
    { id: 1, title: "React" },
    { id: 2, title: "Angular" },
    { id: 3, title: "Node" },
  ];

  const { id, name } = useParams();
  console.log(id, name);
  console.log(id, "received");
  return (
    <div>
      <h1>Printing Post</h1>
      <nav>
        <ul>
          {allPost.map((item) => (
            <li key={item.id}>
              {item.id == id ? (
                <Link to={`blog/${item.id}`}>{item.title}</Link>
              ) : (
                " "
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Post;
