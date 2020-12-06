import Markdown from "markdown-to-jsx";
import styled from "styled-components";

export default styled(Markdown)`
  pre{
    background: #eeeeee; 
    padding: 20px; 
    border-radius: 15px;
  }
  code {
    padding: 2px;
    margin: 2px;
    background: rgba(255, 255, 255, 0.1); 
    border-radius: 4px; 
  }

  blockquote {
    margin: 0px;
    padding-left: 22px;
    border-left: 4px solid #576877;
    background: rgba(255, 255, 255, 0.1);
  }

  li{
    margin-top: 5px;
  }
  hr{
    background-color: white;
  }
`;

