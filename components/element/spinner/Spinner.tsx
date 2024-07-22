const Spinner = ({ size = 'md', ...props }) => {
    return <div {...props} className={`spinner spinner-${size}`} />;
}

export default Spinner;