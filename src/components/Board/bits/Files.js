import './Files.css';

export const Files = ({ files }) => {
  return (
    <div className="files">
      {files.map((file) => (
        <span key={file}>{file}</span>
      ))}
    </div>
  );
};
