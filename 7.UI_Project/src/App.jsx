import Hero from "./components/hero_section/Hero"
import Navbar from "./components/Navbar"

function App() {

const data = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800",
    feedback: "Satisfied",
    color: "bg-blue-600"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800",
    feedback: "Confident",
    color: "bg-green-600"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800",
    feedback: "Focused",
    color: "bg-purple-600"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    feedback: "Motivated",
    color: "bg-orange-600"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800",
    feedback: "Successful",
    color: "bg-emerald-600"
  }
];


  return (
    <>
     <div className="bg-gray-400 p-12"> 
      <div className="bg-white h-dvh p-5 pb-8 flex flex-col rounded-2xl">
      <Navbar />
      <Hero data={data}/>
      </div>
     </div>
    </>
  )
}

export default App
