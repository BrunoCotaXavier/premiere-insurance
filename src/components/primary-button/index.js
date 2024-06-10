import Link from "next/link";

export default function PrimaryButton({ url }) {
    return (
        <Link href={url} className="btn-primary lusitana-regular text-center">REQUEST A QUOTE</Link>
    );
} 