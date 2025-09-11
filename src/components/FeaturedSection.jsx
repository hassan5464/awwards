import { useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti"



const BentoCard = ({src, title, description}) => {
  return(
    <div className="relative size-full">
      <video 
      src={src}
      loop 
      autoPlay
      muted
      className="absolute left-0 top-0 size-full object-cover"/>

      <div className="relative z-10 flex size-full flex-col justify-between text-blue-50 p-5"> 
        <div>
          <h1 className="bento-title special-font ">{title}</h1>
          {description && <p className="mt-3 max-w-64 text-xs md:text-base">
          {description}
          </p>}
        </div>
      </div>
    </div>
  )
}


const BentoTilt = ( {children, className = ""}) =>{
  const itemRef = useRef();
  const [transformStyle, setTransformStyle] = useState("");
  const handleMouseMove = (e) =>{
    if(!itemRef.current) return ;
    const {left, top , width , height} = itemRef.current.getBoundingClientRect();
    
    let relativeX = (e.clientX - left ) / width;
    let relativeY = (e.clientX - top ) / height;
    let tiltX = (relativeX - 0.5) * 20;
    let tiltY = (relativeY - 0.5) * -20;

    const newtransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.95, 0.95, 0.95)`;
    setTransformStyle(newtransform);

  }
  
  const handleMouseLeave = ()=>{
    
    setTransformStyle("")
  }


  return(
    <div  className={className} onMouseMove={handleMouseMove} ref={itemRef}
    style={{transform : transformStyle}}  onMouseLeave={handleMouseLeave} >
      {children}
    </div>
  )
}



const FeaturedSection = () => {
  return (
    <section className="bg-black pb-52 ">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50 ">Into the Metagame Layer</p>
          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50 ">Immerse yourself in a rich and ever-expanding universe where a vibrant
            array of products converge into an interconnected overlay experience
            on your world.</p> 
        </div>
        <BentoTilt className="border-hsla relative mb-7 h-96 f-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard  
          src="/videos/feature-1.mp4"
          title={<>radi<b>n</b>t</>}
          description="A cross-platform metagame app, turning your activities across Web2 games into a rewarding adventure."
          />
        </BentoTilt>
        <div className="grid grid-cols-2 h-[135vh] grid-rows-3 gap-7">
          <BentoTilt className="row-sapn-1 bento-tilt_1 md:col-span-1 md:row-span-2">
            <BentoCard 
            src="/videos/feature-2.mp4"
            title={<>zig<b>m</b>a</>}
            description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
            />
          </BentoTilt>
          <BentoTilt className="ms-32 bento-tilt_1 row-span-1  md:col-span-1 md:ms-0">
            <BentoCard 
            src="/videos/feature-3.mp4"
            title={<>n<b>e</b>xus</>}
            description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
            />
          </BentoTilt>
          <BentoTilt className="me-10 bento-tilt_1  md:col-span-1 md:ms-0">
            <BentoCard 
            src="/videos/feature-4.mp4"
            title={<>az<b>u</b>l</>}
            description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
            />
          </BentoTilt>
          <BentoTilt   className="bento-tilt_2 ">
            <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
              <h1 className="bento-title special-font max-w-64 text-black">
                M<b>o</b>re co<b>m</b>ing s<b>o</b>on.
            </h1>
            <TiLocationArrow  className="m-5 scale-[5] self-end"/>
            </div>

          </BentoTilt>
          <BentoTilt   className="bento-tilt_2">
            <video 
            src="/videos/feature-5.mp4"
            loop 
            autoPlay 
            muted 
            className="size-full object-center object-cover"
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  )
}

export default FeaturedSection