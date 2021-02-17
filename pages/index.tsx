/**
 *
 */

import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1 className={'text-sm'}>Hello World</h1>
      <Link href={'Login'}>Login</Link>
    </div>

  )
}

export default Home