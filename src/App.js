import React, { useEffect, useState } from "react";
import "./App.css";

// Render each post
function renderPost(post) {
  const {
    data: { title, url, author, id },
  } = post;
  const authorUrl = `https://www.reddit.com/u/${author}`;

  return (
    <div className="reddit_widget__post" key={id}>
      <div className="reddit_widget__posted_by">
        posted by{" "}
        <a
          href={authorUrl}
          className="reddit_widget__posted_by"
          target="_blank"
          rel="noopener noreferrer"
        >
          u/{author}
        </a>
      </div>
      <a
        href={url}
        className="reddit_widget__title"
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </a>
    </div>
  );
}

// Filter, since reddit always returns stickied posts up top
function nonStickiedOnly(post) {
  return !post.data.stickied;
}

function App() {
  return <div className="">hi</div>;
}

export default App;
