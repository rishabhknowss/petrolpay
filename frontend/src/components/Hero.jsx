import Image from "../assets/petrolpay.png"

export function Hero() {
    return (
        <>
            <div className=" flex justify-center items-center h-screen">
                <img width={256} src={Image}></img>
            </div>
        </>
    )
}