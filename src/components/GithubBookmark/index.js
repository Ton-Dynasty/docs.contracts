import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import { useColorMode } from "@docusaurus/theme-common";

export default function GithubBookmark({ repoName, owner }) {
  const [stars, setStars] = useState(0);
  const { isDarkTheme } = useColorMode();

  useEffect(() => {
    // Fetch star count from GitHub API
    console.log(stars);
    const fetchStarCount = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/repos/${owner}/${repoName}`
        );
        setStars(response.data.stargazers_count);
        console.log(response);
      } catch (error) {
        console.error("Error fetching star count:", error);
      }
    };

    fetchStarCount();
  }, [repoName, owner]);

  return (
    <a
      style={{
        display: "flex",
        alignItems: "center",
        padding: "0.8rem",
        border: "1px solid #e1e4e8",
        borderRadius: "5px",
        textDecoration: "none",
      }}
      target="_blank"
      href="https://github.com/Ton-Dynasty/tondynasty-contracts"
    >
      <FontAwesomeIcon
        icon={faGithub}
        style={{ marginRight: "5%" }}
        color={isDarkTheme ? "white" : "black"}
        size="3x"
      />
      <div style={{ flex: 1 }}>
        <a
          href={`https://github.com/${owner}/${repoName}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            color: isDarkTheme ? "white" : "black",
          }}
          className="bookmark-text"
        >
          <strong>{repoName || "tondynasty-contracts"}</strong>
          <br />
          <small>{owner || "ton-Dynasty"}</small>
        </a>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          color: isDarkTheme ? "white" : "black",
        }}
      >
        {/* Display stars count if available */}
        {stars !== null && (
          <>
            <span style={{ marginRight: "0.5rem" }}>{stars}</span>
            <FontAwesomeIcon icon={faStar} color="yellow" />
          </>
        )}
      </div>
    </a>
  );
}
