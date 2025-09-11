
import { CardList } from "../CardList"
export const Home = () => {
    return (
    <main className="flex min-h-screen col items-center justify-center p-4 bg-black text-white">
        <div className="bg-amber-400 mx-auto w-full max-w-3xl">
            <h1 className="text-white font-semibold text-center mb-8">
                REACT 19 teoria
            </h1>
            <CardList />
        </div>
    </main>
    )
}