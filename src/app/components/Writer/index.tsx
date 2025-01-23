"use client";

import styles from "./index.module.scss";
import { useState, useCallback } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
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
import { createPost, updatePost, deletePost } from "@/app/lib/db";

const Writer = ({ postData, userData }: any) => {
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

  const addImage = useCallback(() => {
    const url = window.prompt("URL");

    if (url && editor) {
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
      <input
        className={styles.WriterInput}
        value={postStatus}
        placeholder="Status"
        onChange={(event) => setPostStatus(event.target.value)}
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
        {postData && postData.id ? (
          <Button
            onButtonClickEvent={() =>
              updatePost(
                postData,
                postTitle,
                postThumbnail,
                postContent,
                postCategory,
                postStatus,
                userData,
              )
            }
            buttonText={"Update"}
          />
        ) : (
          <Button
            onButtonClickEvent={() =>
              createPost(
                postTitle,
                postCategory,
                postThumbnail,
                postStatus,
                postContent,
                userData,
              )
            }
            buttonText={"Create"}
          />
        )}
        {postData && postData.id ? (
          <Button
            onButtonClickEvent={() => deletePost(postData.id)}
            buttonText={"Delete"}
            buttonColor="red"
          />
        ) : null}
      </div>
    </div>
  );
};

export default Writer;
