const TextField = ({ onChange, value}) => {
    return(
        <input onChange={onChange} value={value} placeholder={'enter search text'} />
    )
};

export default TextField;