import ReactMarkdownWithHtml from 'react-markdown';

const MarkDownText = (props) => {
    const markdownContent = props.text;
    return (
      <div>
        <ReactMarkdownWithHtml>{markdownContent}</ReactMarkdownWithHtml>
      </div>
    );
  };

  export default MarkDownText;