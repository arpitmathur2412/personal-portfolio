import { Col } from "react-bootstrap";
import file from "../assets/Arpit Mathur Resume.pdf"

export const ProjectCard = ({ title, description, imgUrl }) => {

  function handleDownload(){
    // Create a new anchor element.
    const anchor = document.createElement("a");

    // Set the anchor's href attribute to the path of the file to download.
    anchor.href = file;

    // Set the anchor's download attribute to the name of the file to download.
    anchor.download = file;

    // Click the anchor element to download the file.
    anchor.click();
  }
  return (
    <Col size={12} sm={6} md={4}>
      <div style={{cursor:"pointer"}} onClick={handleDownload} className="proj-imgbx">
        <img src={imgUrl} alt="" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
