import styled from 'styled-components';

const Wrapper = styled.div`
    grid-row-start: 1;
    grid-row-end: 3;
    grid-column-start: 5;
    grid-column-end: 7;
`;

const Trello = () => {

    const script = document.createElement("script");

    script.src = "https://p.trellocdn.com/embed.min.js";
    script.async = true;

    document.body.appendChild(script);
    document.body.removeChild(script);

    return (
        <Wrapper className='trello'>
            <blockquote className="trello-card">
                <a href="https:&#x2F;&#x2F;trello.com&#x2F;c&#x2F;WyLECFlj&#x2F;1-project-construct">Project: Construct</a>
            </blockquote>
                <script src="https://p.trellocdn.com/embed.min.js"></script>
        </Wrapper>
    )

}

export default Trello;