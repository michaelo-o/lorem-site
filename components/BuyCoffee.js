import Link from "next/link";
import Image from "next/dist/client/image";

const BuyCoffee = () => {
    return (
        <>
            <Link href="https://ko-fi.com/michae_l">
                <a target="_blank">
                    <div className="sticky">
                        <p>Since i got you all these cool lorem ipsums, you'd buy me a coffee right? 🙂☕ <Image src="/coffee.png" width={20} height={20} /></p>
                    </div>
                </a>
            </Link>


        </>
    );
}

export default BuyCoffee;