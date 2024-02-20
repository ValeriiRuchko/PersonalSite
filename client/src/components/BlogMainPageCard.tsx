import { useEffect, useState } from "react";
import { Blog } from "../@types/common_types";
import { Link } from "react-router-dom";

function BlogMainPageCard() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    fetch("http://localhost:3002/blogs")
      .then((res) => res.json())
      .then((data: Blog[]) => {
        setBlogs(data.slice(0, 3));
      })
      .catch((err) => {
        console.log("FETCH ERROR: ", err);
      });
  }, []);

  return blogs.map((blog) => {
    return (
      <Link key={blog.title} to={`blogs/${blog.title}`}>
        <div className="blogs_section__small_card">
          <img
            className="blogs_section__image"
            // src={blog.title_image_path}
            src="/cute-plant-4.svg"
            alt="Blog image"
          />
          <div className="blogs_section__text">
            <p>
              Published: {new Date(blog.date_of_creation).toLocaleDateString()}
            </p>
            <h4>{blog.title}</h4>
          </div>
        </div>
      </Link>
    );
  });
}

export default BlogMainPageCard;
