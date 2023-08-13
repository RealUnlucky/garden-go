// import { useMemo, useRef, useState, Input } from "react"

// function Search() {
//   const [items, setItems] = useState([])
//   const [query, setQuery] = useState("")
//   const inputRef = useRef()

//   const filteredItems = useMemo(() => {
//     return items.filter(item => {
//       return item.toLowerCase().includes(query.toLowerCase())
//     })
//   }, [items, query])

//   function onSubmit(e) {
//     e.preventDefault()

//     const value = inputRef.current.value
//     if (value === "") return
//     setItems(prev => {
//       return [...prev, value]
//     })

//     inputRef.current.value = ""
//   }

//   return (
//     <>
//       <Text>
//         Search:
//       </Text>
//       <Input
//         value={query}
//         onChange={e => setQuery(e.target.value)}
//         type="search"
//       />
//       <form onSubmit={onSubmit}>
//         <Text>
//           New Item:
//         </Text> 
//         <Input ref={inputRef} type="text" />
//         <Button type="submit">Add</Button>
//       </form>
//       {filteredItems.map(item => (
//         <View>{item}</View>
//       ))}
//     </>
//   )
// }

// export default Search;