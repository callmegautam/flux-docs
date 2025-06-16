import { redirect } from "next/navigation";
import Link from "next/link";

export default function HomePage() {
    return redirect("/docs");
    return (
        <main>
            <div className="flex flex-col items-center justify-center min-h-screen">
                <h1 className="text-4xl font-bold mb-4">Documentation</h1>
                <p className="text-lg mb-8">
                    Welcome to the Flux documentation. Learn how to use Flux to manage your packages efficiently.
                </p>
                <Link href="/docs" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                    Go to Documentation{" "}
                </Link>
            </div>
        </main>
    );
}
