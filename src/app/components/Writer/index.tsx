"use client";

import styles from "./index.module.scss";
import { useState } from "react";
import Highlight from "@tiptap/extension-highlight";
import Typography from "@tiptap/extension-typography";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { MY_SITE_URL } from "@/app/utils/constants";
import { useRouter } from "next/navigation";
import Button from "../../components/Button/index";

const Writer = ({ postData }: any) => {
  const router = useRouter();
  const [postTitle, setPostTitle] = useState(postData ? postData.title : "");
  const [postContent, setPostContent] = useState(
    postData ? postData.content : "Enter text here...",
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
      if (!postData) {
        try {
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
              userId: "874128cf-ae33-4836-89d1-4312a3e4d481",
            }),
          });
        } catch (e) {
          console.error("Failed to create the post in the database");
        }
      } else if (postData) {
        try {
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
              userId: "874128cf-ae33-4836-89d1-4312a3e4d481",
            }),
          });
        } catch (e) {
          console.error("Failed to update the post in the database");
        }
      }

      // Navigate back to the admin page
      router.push("/admin/post");

      // Rehydrate the state after navigating back the admin page
      router.refresh();
    } catch (e) {
      console.error("Failed to save the post in the database", e);
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
      router.push("/admin/post");

      // Rehydrate the state after navigating back the admin page
      router.refresh();
    } catch (e) {
      console.error("Failed to create the post in the database");
    }
  };

  return (
    <div className={styles.Writer}>
      <input
        className={styles.WriterInput}
        value={postTitle}
        placeholder="Title"
        required={true}
        onChange={(event) => setPostTitle(event.target.value)}
      />
      <input
        className={styles.WriterInput}
        value={postCategory}
        placeholder="Category"
        required={true}
        onChange={(event) => setPostCategory(event.target.value)}
      />
      <EditorContent
        data-testid="TipTap"
        className={styles.WriterContent}
        editor={editor}
      />
      <div className={styles.WriterButtons}>
        <Button
          onButtonClickEvent={() =>
            handleOnPostSave(postTitle, postContent, postCategory)
          }
          buttonText={"Save"}
        />
        {postData ? (
          <Button
            onButtonClickEvent={() => handleOnPostDelete(postData.id)}
            buttonText={"Delete"}
            buttonColor="red"
          />
        ) : null}
      </div>
    </div>
  );
};

export default Writer;
