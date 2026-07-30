import Strands from "./Strands";
import Link from "next/link";


type HeroProps = {
  children: React.ReactNode;
};

export default function Hero({
  children,
}: HeroProps) {
  return (
    <section className="block items-center justify-center relative p-0">
<div style={{ width: '100%', height: '600px', position: 'relative' }} className='w-full'>
  <Strands
  style={[]}
    colors={["#F97316","#7C3AED","#6366f1"]}
    count={3}
    speed={0.5}
    amplitude={1}
    waviness={1}
    thickness={0.7}
    glow={2.6}
    taper={3}
    spread={1}
    intensity={0.6}
    saturation={2}
    opacity={1}
    scale={1.5}
    glass={false}
    refraction={1}
    dispersion={1}
    glassSize={1}
    hueShift={0}
    
/>
</div>
        <div className='p-4 absolute items-center block inset-0 justify-center lg:flex'>
        <h2 className='ml-4 mt-22 lg:mt-0'>Find Scholarships That Actually Match You.</h2>
        <p className='relative mt-32'>Scholar MatchAI analyzes your academic profile, preferred country <br/>
        and eligibility to recommend scholarships you are most likely to qualify for.
        </p>
        <div className='flex mt-4 lg:hidden'>
                <Link href='/login'>
                <button type="button" className='btn-primary p-2 float-right mr-8'>LOG IN</button>
                </Link> 
                 <Link href='/register'>
                <button type="button" className='btn-primary p-2 float-right'>SIGN UP</button>
                </Link>
            </div>  
      </div>

    </section>
  
  );
}