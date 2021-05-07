import React from "react"
import {
  StoryButton,
  StoryButtonGroup,
  StoryContainer,
  StoryDeleteButton,
  StoryDescription,
  StoryHeader,
  StoryImage,
  StoryNote,
  StoryReadGroup,
  StoryTitle,
} from "./styled"

export const Story = ({ StoryClass, story, handleDelete, handleRead }) => (
  <StoryContainer className={StoryClass}>
    <StoryHeader>
      <StoryImage src={story.image} alt={story.title} />
      <StoryTitle href={story.url} target="_blank" rel="noopener noreferrer">
        {story.title}
      </StoryTitle>
    </StoryHeader>
    <div>
      <StoryNote>
        <span style={{ fontSize: "1.2rem" }} role="img" aria-label="remainder">
          🛋
        </span>
        {story.note}
      </StoryNote>
      <StoryDescription>{`${String(story.description).substring(
        0,
        80
      )}...`}</StoryDescription>
      <StoryButtonGroup>
        <StoryButton href={story.url} target="_blank" rel="noreferrer">
          <span role="img" aria-label="link">
            🔗
          </span>
        </StoryButton>
        <StoryReadGroup>
          <input
            name={`h-${story._id}`}
            id={`h-${story._id}`}
            type="checkbox"
            checked={story.read}
            onChange={handleRead}
          />
          <label htmlFor={`h-${story._id}`}>
            <span role="img" aria-label="read">
              📖
            </span>
          </label>
        </StoryReadGroup>
        <StoryDeleteButton onClick={handleDelete}>
          <span role="img" aria-label="trash">
            🗑
          </span>
        </StoryDeleteButton>
      </StoryButtonGroup>
    </div>
  </StoryContainer>
)
