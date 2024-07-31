export default function Item(props) {
  return (
    <div className="w-[40rem]">
        <h1 className="flex">
            <input type="checkbox" className="w-5"/>
            <p className="pl-10 text-2xl">{props.todoText}</p>
        </h1>
    </div>
  )
}
