import Link from "next/link";

export default function StudentInfo() {
    return (
        <main>
            <h1>Ranjit Ladhroya</h1>
            <Link 
                href="https://github.com/RJ123496/cprg306-assignments" 
                target="_blank" 
            >
                Link to my GitHub Repositories
            </Link>
        </main>
    );
}