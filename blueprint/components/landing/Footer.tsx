import Link from 'next/link';
export default function Footer(){
    return(
        <section className="flex justify-center items-center gap-2">
                <div><Link href='/'>About</Link></div>
                <div><Link href='/'>Contact</Link></div>
                <div><Link href='/'>Privacy Policy</Link></div>
        </section>
    )
}