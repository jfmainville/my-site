"use client";

import { useState } from "react";
import Highlight from "@tiptap/extension-highlight";
import Typography from "@tiptap/extension-typography";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { MY_SITE_URL } from "@/app/utils/constants";
import { useRouter } from "next/navigation";

const Writer = ({ postData }: any) => {
  const router = useRouter();
  const [postTitle, setPostTitle] = useState(postData ? postData.title : "");
  const [postContent, setPostContent] = useState(
    postData ? postData.content : "",
  );
  const [postCategory, setPostCategory] = useState(
    postData ? postData.category : "",
  );
  const editor = useEditor({
    extensions: [StarterKit, Highlight, Typography],
    content: postContent,
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
      if (!postData.id) {
        await fetch(`${MY_SITE_URL}/api/post`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: postTitle,
            slug: postTitle.replace(" ", "-").toLowerCase(),
            content: postContent,
            status: "DRAFT",
            category: postCategory,
            // TODO: Need to use the current userId as reference instead of a hardcoded value
            userId: "48eceb63-fc36-426f-85a5-58ccc850eade",
          }),
        });
      } else if (postData.id) {
        await fetch(`${MY_SITE_URL}/api/post`, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: postData.id,
            title: postTitle,
            slug: postTitle.replace(" ", "-").toLowerCase(),
            content: postContent,
            status: postData.status,
            category: postCategory,
            // TODO: Need to use the current userId as reference instead of a hardcoded value
            userId: "48eceb63-fc36-426f-85a5-58ccc850eade",
          }),
        });
      }

      // Navigate back to the admin page
      router.push("/admin");

      // Rehydrate the state after navigating back the admin page
      router.refresh();
    } catch (e) {
      console.error("Failed to create the post in the database");
    }
  };

  const handleOnPostDelete = async (postId: String) => {
    try {
      if (postId) {
        await fetch(`${MY_SITE_URL}/api/post`, {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: postId,
          }),
        });
      }

      // Navigate back to the admin page
      router.push("/admin");

      // Rehydrate the state after navigating back the admin page
      router.refresh();
    } catch (e) {
      console.error("Failed to create the post in the database");
    }
  };

  return (
    <div>
      <input
        value={postTitle}
        placeholder="Title"
        onChange={(event) => setPostTitle(event.target.value)}
      />
      <input
        value={postCategory}
        placeholder="Category"
        onChange={(event) => setPostCategory(event.target.value)}
      />
      <EditorContent data-testid="TipTap" editor={editor} />
      <button
        onClick={() => handleOnPostSave(postTitle, postContent, postCategory)}
      >
        Save
      </button>
      {postData ? (
        <button onClick={() => handleOnPostDelete(postData.id)}>Delete</button>
      ) : null}
    </div>
  );
};

export default Writer;
