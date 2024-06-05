import Link from "next/link";

export default function SecondButton({ url }) {
    return (
        <Link href={url} className="btn-third lusitana-regular text-center">REQUEST</Link>
    );
} 