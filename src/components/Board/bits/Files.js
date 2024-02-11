import { getCharacter } from "../../../const";
import "./Files.css";

export const Files = ({ files }) => {
  return (
    <div className="files">
      {files.map((file) => (
        <span key={file}>{getCharacter(file)}</span>
      ))}
    </div>
  );
};
