export default function Button({ handleCLick, gender }) {
  return (
    <button className='btn btn-primary border' onClick={handleCLick}>See {gender}</button>
  )
}