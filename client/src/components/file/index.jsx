import { useState } from "react";
import { fileUploadAPI } from "../../api";

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const SubmitFile = async () => {
    try {
      // Check if file is selected or file is not csv
      if (!file || file.type !== "text/csv") {
        alert("Either file is missing or not a csv file");
        return;
      }

      const formData = new FormData();
      formData.append("file", file);

      // Replace 'YOUR_SERVER_URL' with the actual server endpoint for file upload
     await fileUploadAPI(formData);
      alert("File uploaded successfully")
      setFile(null);
    } catch (error) {
      alert(error.response.data.content);
    }
  };

  return (
    <section className="flex flex-col justify-center items-center h-96">
      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold mb-5">Please upload your file</h1>
        <label
          htmlFor="fileInput"
          className="border-2 border-blue-500 bg-blue-100 py-2 px-4 mt-2 rounded-lg cursor-pointer focus:outline-none focus:border-blue-600
            hover:bg-blue-200 hover:border-blue-600 hover:text-blue-600
          "
        >
          {file ? file.name : "CHOOSE FILE"}
          <input
            id="fileInput"
            type="file"
            accept=".csv"
            multiple={false}
            className="hidden"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />
        </label>
        <br />
        <button
          className={`py-2 px-4 mt-2 rounded-lg cursor-pointer focus:outline-none focus:border-blue-600 border-2
            ${
              file
                ? "border-blue-500 bg-blue-100 hover:bg-blue-200 hover:border-blue-600 hover:text-blue-600"
                : "border-gray-300 bg-gray-100 text-gray-500 cursor-default"
            }
            `}
          onClick={SubmitFile}
          title={file ? "Submit file" : "Please select a file"}
          disabled={file ? false : true}
        >
          Submit
        </button>
      </div>
    </section>
  );
};

export default FileUpload;
