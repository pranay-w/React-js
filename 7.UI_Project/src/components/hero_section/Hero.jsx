import Hero_l from "./Hero_l"
import Hero_r from "./Hero_r"

const Hero = (props) => {
  return (
    <>
    <div className=" h-lvh  flex p-10 rounded-4xl gap-3">
      <Hero_l />
      <Hero_r data={props.data}/>
    </div>
    </>
  )
}

export default Hero