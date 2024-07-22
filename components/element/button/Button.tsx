import styled from '@emotion/styled';

const Button = ({
  children,
  ...props
}: {
  children: React.ReactNode;
  [x: string]: any;
}) => {
  return <BasicButton {...props}>{children}</BasicButton>;
};

export default Button;

const BasicButton = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  border-radius: 12px;
`;
