import { Button } from "@/components/ui/button"



export default function Hero(){
    return(
        <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        Before they sold out
        <br className="hidden lg:inline-block" />
        readymade gluten
      </h1>
      <p className="mb-8 leading-relaxed">
        Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
        plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk
        tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
        chambray.
      </p>
      <div className="flex justify-around ">
       <Button className="mr-4" >Find Doctor</Button>
       <Button variant="outline" >Register as Doctor</Button>
      </div>
    </div>
    <div className="flex justify-center items-center h-[40vh]">
  <img
    className="object-cover rounded-lg h-full w-full"
    alt="hero"
    src="https://content3.jdmagicbox.com/comp/guntur/y3/9999px863.x863.171026145621.b9y3/catalogue/swathi-multi-speciality-hospital-guntur-098RlGtnX5U2x0g.jpg"
  />
</div>

  </div>
</section>

    )
}