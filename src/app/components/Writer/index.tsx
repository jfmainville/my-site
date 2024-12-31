"use client";

import styles from "./index.module.scss";
import { useState, useCallback } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import { MY_SITE_URL } from "@/app/utils/constants";
import { useRouter } from "next/navigation";
import Button from "../../components/Button/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBold,
  faItalic,
  faList,
  faListOl,
  faStrikethrough,
  faCode,
  faImage,
} from "@fortawesome/free-solid-svg-icons";

const Writer = ({ postData }: any) => {
  const router = useRouter();
  const [postTitle, setPostTitle] = useState(postData ? postData.title : "");
  const [postThumbnail, setPostThumbnail] = useState(
    postData ? postData.thumbnail : "",
  );
  const [postStatus, setPostStatus] = useState(
    postData ? postData.status : "DRAFT",
  );
  const [postContent, setPostContent] = useState(
    postData ? postData.content : "Enter text here...",
  );
  const [postCategory, setPostCategory] = useState(
    postData ? postData.category : "",
  );
  const editor = useEditor({
    editorProps: {
      attributes: {
        class: styles.WriterEditor,
      },
    },
    extensions: [StarterKit, Image],
    content: postContent,
    onBlur({ editor }) {
      setPostContent(editor.getHTML());
    },
    immediatelyRender: false, // Need to pass this attribute to prevent rehydration mismatch when using SSR
  });

  const handleOnPostSave = async (
    postTitle: String,
    postThumbnail: String,
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
              thumbnail: postThumbnail,
              slug: postTitle.replace(" ", "-").toLowerCase(),
              content: postContent,
              status: "DRAFT",
              category: postCategory,
              // TODO: Need to use the current userId as reference instead of a hardcoded value
              userId: "seed-user-1",
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
              thumbnail: postThumbnail,
              slug: postTitle.replace(" ", "-").toLowerCase(),
              content: postContent,
              status: postData.status,
              category: postCategory,
              // TODO: Need to use the current userId as reference instead of a hardcoded value
              userId: "seed-user-2",
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

  const addImage = useCallback(() => {
    const url = window.prompt("URL");

    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);
  if (!editor) {
    return null;
  }

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
      <input
        className={styles.WriterInput}
        value={postThumbnail}
        placeholder="Thumbnail"
        onChange={(event) => setPostThumbnail(event.target.value)}
      />
      <div className={styles.WriterEditorBar}>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={
            editor.isActive("bold")
              ? styles.WriterEditorButtonActive
              : styles.WriterEditorButton
          }
        >
          <FontAwesomeIcon icon={faBold} width="40" height="40" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={
            editor.isActive("italic")
              ? styles.WriterEditorButtonActive
              : styles.WriterEditorButton
          }
        >
          <FontAwesomeIcon icon={faItalic} width="40" height="40" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={
            editor.isActive("strike")
              ? styles.WriterEditorButtonActive
              : styles.WriterEditorButton
          }
        >
          <FontAwesomeIcon icon={faStrikethrough} width="40" height="40" />
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={
            editor.isActive("heading", { level: 1 })
              ? styles.WriterEditorButtonActive
              : styles.WriterEditorButton
          }
          style={{ width: "2.5rem" }}
        >
          H1
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={
            editor.isActive("heading", { level: 2 })
              ? styles.WriterEditorButtonActive
              : styles.WriterEditorButton
          }
          style={{ width: "2.5rem" }}
        >
          H2
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={
            editor.isActive("heading", { level: 3 })
              ? styles.WriterEditorButtonActive
              : styles.WriterEditorButton
          }
          style={{ width: "2.5rem" }}
        >
          H3
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={
            editor.isActive("bulletList")
              ? styles.WriterEditorButtonActive
              : styles.WriterEditorButton
          }
        >
          <FontAwesomeIcon icon={faList} width="40" height="40" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={
            editor.isActive("orderedList")
              ? styles.WriterEditorButtonActive
              : styles.WriterEditorButton
          }
        >
          <FontAwesomeIcon icon={faListOl} width="40" height="40" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={
            editor.isActive("codeBlock")
              ? styles.WriterEditorButtonActive
              : styles.WriterEditorButton
          }
        >
          <FontAwesomeIcon icon={faCode} width="40" height="40" />
        </button>
        <button
          onClick={addImage}
          className={
            editor.isActive("image")
              ? styles.WriterEditorButtonActive
              : styles.WriterEditorButton
          }
        >
          <FontAwesomeIcon icon={faImage} width="40" height="40" />
        </button>
      </div>
      <EditorContent data-testid="TipTap" editor={editor} />
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
