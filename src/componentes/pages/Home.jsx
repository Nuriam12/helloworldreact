
import { CardList } from "../CardList"
export const Home = () => {
    return (
    <main className="flex min-h-screen items-center justify-center p-4 bg-black text-white">
        <div className="flex-col border-amber-400 bg-black mx-auto w-full max-w-3xl">
            <h1 className="text-white text-3xl text-center mb-8 hover:text-violet-950 font-extrabold">
                REACT 19 
            </h1>
            <CardList />
        </div>
    </main>
    )
}