import Strands from '../hero/Strands';

export default function Match_prev(){
    return(
        <section className='p-4'>
            <div className='block lg:flex justify-center items-center md:block sm:block'>
                <h1 className='relative'>Matching Preview</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 mt-4 gap-4 md:grid-cols-2 sm:grid-cols-2'>
                <div className='match-card flex justify-center items-center p-4'>
                    <div>
                    <h5>OJAH FOUNDATION SCHOLARSHIP</h5>
                    <h5>Match score</h5>
                    <h5>&#10003; GPA match</h5>
                    <h5>&#10003; Country match</h5>
                    <h5>&#10003; Degree match</h5>
                    <h5>&#10007; Leadership experience</h5>
                    </div>
                </div>
                 <div className='match-card flex justify-center items-center p-4'>
                    <div>
                    <h5>THE BRIDGE PROGRAM </h5>
                    <h5>Match score</h5>
                    <h5>&#10003; GPA match</h5>
                    <h5>&#10003; Country match</h5>
                    <h5>&#10003; Degree match</h5>
                    <h5>&#10007; Leadership experience</h5>
                    </div>
                </div>
                 <div className='match-card flex justify-center items-center p-4'>
                    <div>
                    <h5>TECH CRUSH SCHOLARSHIP</h5>
                    <h5>Match score</h5>
                    <h5>&#10003; GPA match</h5>
                    <h5>&#10003; Country match</h5>
                    <h5>&#10003; Degree match</h5>
                    <h5>&#10007; Leadership experience</h5>
                    </div>
                </div>
            </div>
    </section>
    )
}