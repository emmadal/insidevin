import Image from 'next/image'
import dynamic from 'next/dynamic';
const Header = dynamic(() => import("./components/Landing/Header"));

export default function Home() {
  return (
    <main>
     <Header />
    </main>
  )
}
