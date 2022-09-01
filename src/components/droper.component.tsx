import React, { useState } from "react";
import { DroperType } from "./droper.type";

const Droper = ({ children , mode }: DroperType) => {
  const [files, setFiles] = useState<Object[] | null>(null);

  const overrideEventDefaults = (event: any) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDragAndDropFiles = (event: any) => {
    overrideEventDefaults(event);
    if (!event.dataTransfer) return;
    handleFiles(event.dataTransfer.files);
  };

  const handleFiles = (fileList: Object[]) => {
    if (fileList) {
      let files = Array.from(fileList);
      setFiles(files);
    }
  };

  console.log(files);

  return (
    <div
      onDrop={handleDragAndDropFiles}
      onDragEnter={overrideEventDefaults}
      onDragLeave={overrideEventDefaults}
      onDragOver={overrideEventDefaults}
    >
      {/* <input type="file" webkitdirectory="true" /> */}
      {children}
    </div>
  );
};

export default Droper;
