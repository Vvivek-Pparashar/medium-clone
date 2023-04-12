import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import "./TextEditor.css";
import { useRef } from "react";

export default function TextEditor({ setData, data, handleLoader }) {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      // console.log(editorRef.current.getContent());
      setData({ ...data, content: editorRef.current.getContent() });
    }
  };

  return (
    <>
      {/* <div className="editor" style={{ width: "100%", margin: 0 }}></div> */}
      <Editor
        onInit={(evt, editor) => (editorRef.current = editor)}
        // apiKey="y7gnmtbsaxnjbgh3405ioqbdm24eit5f0ovek49w8yvq5r9q"
        apiKey="5mdbv04bin261efmo9q0uzr93hcdgtix1pfvkct8pjj02rzi"
        initialValue=""
        init={{
          branding: false,
          height: 600,
          width: "100%",
          menubar: false,
          placeholder: "content",
          indent: false,
          plugins:
            "print preview paste searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists  imagetools textpattern charactercount",
          toolbar:
            "formatselect | bold italic underline link  | forecolor backcolor blockquote |   numlist bullist | outdent indent ",
          setup: function (editor) {
            editor.on("init", function (e) {
              handleLoader()
            });
          },
        }}
        onChange={log}
      />
      {/* <button onClick={log}>Log editor content</button> */}
    </>
  );
}
