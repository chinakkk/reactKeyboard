import KeyString from "./KeyString";

const Keyboard = () => {
  const keyboardString=[
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'delete'],
    ['TAB','й','ц','у','к','е','н','г','ш','щ','з','х','ъ','ё'],
    ['ф','ы','в','а','п','р','о','л','д','ж','э','RETURN'],
    ['SHIFT','я','ч','с','м','и','т','ь','б','ю','/','SHIFT'],
    ['space']

  ]
  return (
        <div className='container'>
          <div className='keyboard'>
            {
              keyboardString.map((string) => <KeyString keyArr={string}/>)
            }
          </div>
        </div>
    )
}
export default Keyboard;