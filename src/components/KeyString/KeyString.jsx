import Key from "./Key/Key";

const KeyString = ({keyArr}) => {

  return (
      <div className="key_string">
        {
          keyArr.map((key) =>
              <Key value={key}/>
          )
        }
      </div>
  )
}
export default KeyString;