"use client";

import { useState } from "react";
import Highlight from "@tiptap/extension-highlight";
import Typography from "@tiptap/extension-typography";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { MY_SITE_URL } from "@/app/utils/constants";
import { useRouter } from "next/navigation";

const Writer = () => {
  const { push } = useRouter();
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

  const handleOnPostSave = async (
    postTitle: String,
    postContent: String,
    postCategory: String,
  ) => {
    try {
      await fetch(`${MY_SITE_URL}/api/post`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: postTitle,
          content: postContent,
          status: "DRAFT",
          category: postCategory,
          // TODO: Need to use the current userId as reference instead of a hardcoded value
          userId: "41a75ede-1cbd-4002-8475-f7aef583cc7e",
        }),
      });
      push("/admin");
    } catch (e) {
      console.error("Failed to save the post in the database");
    }
  };

  return (
    <div>
      <input
        value={postTitle}
        onChange={(event) => setPostTitle(event.target.value)}
      />
      <input
        value={postCategory}
        onChange={(event) => setPostCategory(event.target.value)}
      />
      <EditorContent editor={editor} />
      <button
        onClick={() => handleOnPostSave(postTitle, postContent, postCategory)}
      >
        Save
      </button>
    </div>
  );
};

export default Writer;
