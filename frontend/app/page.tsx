import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs"


const page = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <SignedOut>
      <SignInButton />
    </SignedOut>
    </div>
  )
}

export default page
