import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles/global.css'
import { Canvas } from '@react-three/fiber';
import Scene from './Scene.jsx';
import { useEffect , useRef} from 'react';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);


export default function App() {

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  })
  
  // Update ScrollTrigger on Lenis scroll
  lenis.on('scroll', ScrollTrigger.update)
  
  // Use GSAP's ticker to drive Lenis's raf
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })
  
  // Ensure smooth scrolling by setting lagSmoothing to 0
  gsap.ticker.lagSmoothing(0)

  const mainRef = useRef(null);
  const sceneRef =  useRef(null); 
  

  useEffect( () => {
    gsap.timeline(
      {
        scrollTrigger:{
          trigger: mainRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub:1
        }
      }
    )
    .to(sceneRef.current, {
      x: '25vw',
      y: '140vh',
      scale:1.5,
      rotateX:20
    })
    .to(sceneRef.current, {
      x: '-25vw',
      y: '200vh',
      scale:1
    })
    .to(sceneRef.current, {
      x: '25vw',
      y: '300vh'
    })
    

  },[])

  return (
    <main className='overflow-x-hidden' ref={mainRef}> 
      <section className="relative grid place-items-center h-[100vh]">
          <p className="text-black text-center absolute top-[5%] mx-4 w-fit text-8xl font-bold">
            Apple Watch
          </p>
          <p className="text-black text-center absolute bottom-[5%] mx-4 w-fit text-8xl font-bold">
            Ultra 2
          </p>

          <div ref={sceneRef} className='h-[100vh] w-[100vw] overflow-hidden flex items-center justify-center'>
        
            <Canvas>
              <Scene />
            </Canvas>
          </div>
      </section>
      
     
      <div className='bg-red-400 h-[100vh] w-full overflow-hidden'>

      </div>
      <div className='bg-blue-400 h-[100vh] w-full overflow-hidden'>

      </div>
      <div className='bg-green-400 h-[100vh] w-full overflow-hidden'>

      </div>
    </main>
  );
}
