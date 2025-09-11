import {BtnVolver} from "../ui/buttons/BtnVolver"
export const ImagenesPage =()=>{

    return(
        <main className="max-w-3xl mx-auto p-6 space-y-10">
            <BtnVolver/>
            <h1 className="font-extrabold text-4xl text-center">Imagenes con react</h1>
            <section>
                <h2 className="text-xl font-semibold">IMAGEN LOCAL IMPORTADA</h2>
                <img src="/yeah.jpg" alt="Yeah" className="max-w-xl w-full" />
            </section>
            <section>
                <h2 className="text-xl font-semibold">IMAGEN DESDE UNA URL</h2>
                <img src="https://ih1.redbubble.net/image.5069922589.6312/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg" alt="" className="" />
            </section>
            <section>
                <h2 className="text-xl font-semibold">IMAGEN COMO FONDO</h2>
                <div className="flex h-64 bg-cover bg-center rounded-2xl items-center justify-center"
                style={{backgroundImage:"url('https://i.imgflip.com/6prdhz.png')"}}>
                <span className="text-white font-extrabold px-4 py-2 bg-black/60 rounded-2xl">FONDO CON TEXTO ENCIMA</span>
                </div>
            </section>
            <section>
                <h2 className="text-xl font-semibold">IMAGEN LAZY LOADING</h2>
                <img src="https://ih1.redbubble.net/image.5069922589.6312/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg" alt="" className="" loading="lazy" />
            </section>
        </main>
    )
}