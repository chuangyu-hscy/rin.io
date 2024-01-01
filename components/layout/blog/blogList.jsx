import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import Button from "@mui/material/Button";

export default function BlogList() {
  const [blogList, setBlogList] = useState([]);
  const [displayCount, setDisplayCount] = useState(5);

  useEffect(() => {
    fetch("/data/blog_list.json")
      .then((response) => response.json())
      .then((data) => {
        setBlogList(data.reverse());
      })
      .catch((error) => console.log(error));
  }, []);

  const handleShowMore = () => {
    // Increase the number of items displayed by 5 (or set to total count if less than 5 remaining)
    setDisplayCount((prevCount) => Math.min(prevCount + 5, blogList.length));
  };

  return (
    <div>
      <h2>Blog List</h2>
      <br />
      <div className="flex flex-col gap-8">
        {blogList &&
          blogList.slice(0, displayCount).map(
            (
              blog, // Only display a slice of the list
            ) => (
              <div key={blog.title + blog.author + blog.date}>
                <Fade triggerOnce duration={1500} direction="up">
                  <Link href={blog.link}>
                    <div key={blog.title}>
                      <h3 className="link-hover">{blog.title}</h3>
                      <div className="flex md:flex-row gap-4">
                        <p>{blog.author}</p>
                        <p className="italic">{blog.date}</p>
                      </div>
                      <p className="leading-5 text-hover">{blog.brief}</p>
                    </div>
                  </Link>
                </Fade>
              </div>
            ),
          )}
      </div>
      {blogList.length > displayCount && ( // Only show the More button if there are more items to display
        <div className="flex flex-start justify-center items-center">
          <Fade triggerOnce duration={1500}>
            <Button
              onClick={handleShowMore}
              className="mt-4"
              varient="contained"
              style={{
                backgroundColor: "black",
                color: "white",
              }}
            >
              More
            </Button>
          </Fade>
        </div>
      )}
    </div>
  );
}
