const Tag = ({ children, ...props }: {
    children: React.ReactNode,
    [x: string]: any
}) => {
    return <div {...props}>{children}</div>;
}

export default Tag;