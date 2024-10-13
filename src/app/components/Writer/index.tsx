"use client";

import { useState } from "react";
import Highlight from "@tiptap/extension-highlight";
import Typography from "@tiptap/extension-typography";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

type Props = {
  handleOnPostSave: (
    postStatus: String,
    postTitle: String,
    postContent: String,
    postCategory: String,
  ) => void;
};

const Writer = ({ handleOnPostSave }: Props) => {
  const [postStatus, setPostStatus] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [postCategory, setPostCategory] = useState("");
  const editor = useEditor({
    extensions: [StarterKit, Highlight, Typography],
    content: "Start writing...",
    onBlur({ editor }) {
      setPostContent(editor.getHTML());
    },
    immediatelyRender: false, // Need to pass this attribute to prevent rehydration mismatch when using SSR
  });

  return (
    <div>
      <button
        onClick={() =>
          handleOnPostSave(postStatus, postTitle, postContent, postCategory)
        }
      >
        Save
      </button>
      <input
        value={postStatus}
        onChange={(event) => setPostStatus(event.target.value)}
      />
      <input
        value={postTitle}
        onChange={(event) => setPostTitle(event.target.value)}
      />
      <EditorContent editor={editor} />
      <input
        value={postCategory}
        onChange={(event) => setPostCategory(event.target.value)}
      />
    </div>
  );
};

export default Writer;
