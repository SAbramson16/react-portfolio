import Resume from '../components/Resume'

export default function ResumePage() {
  const onButtonClick = () => {
    const pdfUrl = "Sample.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "/src/assets/resume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
        <Resume onButtonClick={onButtonClick} />
    </div>
  );
}