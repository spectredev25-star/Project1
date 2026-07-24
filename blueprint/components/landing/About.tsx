import { CircleUser, ScanSearch, GraduationCap} from 'lucide-react';



export default function About(){
    return(
        <section className='mt-32 mb-10 p-4'>
            <div className='flex justify-center items-center mb-6'>
                <h1 className='relative'>How Scholar MatchAI Works?</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:grid-cols-2 md-grid-2">
                <div className='card cursor-pointer'> 
                    <h2>Profile Creation <CircleUser className='float inline' color="#6366f1" size={24} strokeWidth={1.5} /></h2>
                    <p>Sign up on blueprint and fill profile details with correct informations.</p>
                </div>
                <div className='card cursor-pointer'>
                    <h2>Eligibility Analysis <ScanSearch className='float inline' color="#6366f1" size={24} strokeWidth={1.5} /></h2>
                    <p>We analyze your profile information and check scholarship requirements</p>
                </div>
                <div className='card cursor-pointer'>
                    <h2>Personalized Scholarships <GraduationCap className='float inline' color="#6366f1" size={24} strokeWidth={1.5} /></h2>
                    <p>Get scholarships that fits your information..</p>
                </div>
            </div>
        </section>
    )
}