import Link from 'next/link'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
export default async function Header() {
  return (
    <header className='border-b bg-white py-4'>
      <div className='mx-auto flex max-w-4xl justify-between px-6'>
        <div className='flex items-center gap-6'>
          <Link href={'/'} className='flex items-center gap-2 text-blue-500'>
            <span className='font-bold text-blue-500'>Ryan</span>
          </Link>
          <nav className='flex items-center gap-4 text-sm text-slate-500'>
            <span>An ai intigrated blog app</span>
          </nav>
        </div>
        <nav className='flex items-center gap-4 text-sm text-slate-500'>
          <SignedIn>
            <UserButton afterSignOutUrl='/' />
          </SignedIn>

          <SignedOut>
            <SignInButton mode='modal'>
              <Button size='sm' variant='ghost'>
                Sign in
              </Button>
            </SignInButton>
          </SignedOut>
        </nav>
      </div>
    </header>
  )
}
