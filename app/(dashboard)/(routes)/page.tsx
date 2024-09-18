import { SignInButton, SignOutButton, UserButton } from "@clerk/nextjs";


export default function Home(){
    return (
        <div>
            <SignInButton />
            <SignOutButton redirectUrl="/"/>
        </div>
    )
}
