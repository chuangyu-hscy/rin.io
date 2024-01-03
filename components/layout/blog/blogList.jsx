import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import Button from "@mui/material/Button";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineContent,
  TimelineConnector,
} from "@mui/lab";
import { timelineItemClasses } from "@mui/lab/TimelineItem";
import TextField from "@mui/material/TextField";

export default function BlogList() {
  const [blogList, setBlogList] = useState([]);
  const [displayCount, setDisplayCount] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("/data/blog_list.json")
      .then((response) => response.json())
      .then((data) => {
        setBlogList(data.reverse());
      })
      .catch((error) => console.log(error));
  }, []);

  // Filtered blog list based on search query
  const filteredBlogs = blogList.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.date.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (blog.tags &&
        blog.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase()),
        )),
  );

  return (
    <div>
      <div className="flex justify-between items-center">
        <h2>Blog List</h2>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
      <br />

      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
        className="flex flex-col gap-4"
      >
        {filteredBlogs.slice(0, displayCount).map((blog) => (
          <TimelineItem key={blog.title + blog.author + blog.date}>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Fade triggerOnce duration={1500} direction="up">
                <Link href={blog.link}>
                  <div key={blog.title}>
                    <h3 className="link-hover">{blog.title}</h3>
                    <div className="flex justify-between items-center">
                      <div className="flex md:flex-row gap-4 py-2">
                        <p>{blog.author}</p>
                        <p className="italic">{blog.date}</p>
                      </div>

                      <div className="flex flex-end gap-2">
                        {blog.tags.map((tag) => (
                          <p
                            className="px-2 rounded-full"
                            style={{ backgroundColor: "#f9d9a9" }}
                          >
                            {tag}
                          </p>
                        ))}
                      </div>
                    </div>
                    <p className="leading-5 text-hover">{blog.brief}</p>
                  </div>
                </Link>
              </Fade>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
      {filteredBlogs.length > displayCount && (
        <div className="flex justify-center items-center">
          <Fade triggerOnce duration={1500}>
            <Button
              onClick={() =>
                setDisplayCount((prevCount) =>
                  Math.min(prevCount + 5, filteredBlogs.length),
                )
              }
              varient="contained"
              style={{ backgroundColor: "black", color: "white" }}
            >
              More
            </Button>
          </Fade>
        </div>
      )}
    </div>
  );
}

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="flex space-x-4 mb-4">
      <TextField
        variant="outlined"
        label="Search Blogs"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="flex-1"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => setSearchQuery("")}
        style={{ backgroundColor: "black", color: "white" }}
      >
        Clear
      </Button>
    </div>
  );
};
