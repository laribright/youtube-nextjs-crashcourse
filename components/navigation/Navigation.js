import Link from "next/link";

const Navigation = () => {
  return (
    <nav>
      <ul className="flex justify-around px-4 py-2 bg-gray-300">
        <li className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700">
          <Link
            href="/"
          >
            HOME
          </Link>
        </li>
        <li className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700">
          <Link
            href="/add-blog"
          >
            Add-Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
