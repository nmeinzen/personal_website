import FileViewer from "react-file-viewer";
import pdf_url from "../../Natasha_Meinzen_Resume.pdf";

const ExamplePDFViewer = () => {
  return <FileViewer fileType="pdf" filePath={pdf_url} />;
};

export default ExamplePDFViewer;
