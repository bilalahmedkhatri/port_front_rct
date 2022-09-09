import styled from '@emotion/styled';

export default function SectionTitle(props) {
  const SectionTitle = styled('h4')`
    font-size: 32px;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 40px;
    padding-bottom: 20px;
    position: relative;
    color: #45505b;
    text-align: center;
    overflow: hidden;
    padding-top: 60px;
    &::before {
        content: "";
        position: absolute;
        display: block;
        width: 120px;
        height: 1px;
        background: #ddd;
        bottom: 1px;
        left: calc(50% - 60px);
    };
    &::after {
        content: "";
        position: absolute;
        display: block;
        width: 40px;
        height: 3px;
        background: #4caf50;
        bottom: 0;
        left: calc(50% - 20px);
    }
  `;
  return (
    <SectionTitle>{props.title}</SectionTitle>
  )
}
