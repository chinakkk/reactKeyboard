const Key = ({value}) => {
    return (
        <div className="key" data-letters={value}>{value}</div>
    )
}
export default Key;