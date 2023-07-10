import React from "react";

import { useState } from "react";
import storage from "../firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

export const CobaFirebase = () => {
  const [imgUrl, setImgUrl] = useState(null);
  const [progresspercent, setProgresspercent] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const file = e.target[0]?.files[0];
    if (!file) return;
    const storageRef = ref(storage, `files/coba/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgresspercent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgUrl(downloadURL);
        });
      }
    );
  };

  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center gap-8">
      <form onSubmit={handleSubmit} className="form flex justify-between w-2/5">
        <input type="file" />
        <button
          type="submit"
          className="rounded-lg bg-yellow-500 font-bold text-white px-3 py-2"
        >
          Upload
        </button>
      </form>
      {!imgUrl && (
        <div className="w-2/5 bg-gray-500">
          <div
            className="bg-green-500 text-white font-semibold"
            style={{ width: `${progresspercent}%` }}
          >
            <p className="ml-4">{progresspercent}%</p>
          </div>
        </div>
      )}
      <p className="text-center w-3/4">{imgUrl}</p>
      {imgUrl && <img src={imgUrl} alt="uploaded file" className="w-2/5" />}
    </div>
  );
};
