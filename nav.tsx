import Link from "next/link"

export function Nav(){
    return(
        <>
        <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contactus">Contact Us</Link></li>

        </ul>{""}
        

        </>    
    )
}