import Link from "next/link";

export default function Users({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <Link href={`/users/${user.id}`} key={user.id}>
          <li className="bg-slate-400 mb-2 p-5 rounded-md text-black flex justify-between">
            <div>
              <h5 className="font-bold">
                {user.id} {user.frist_name} {user.last_name}
              </h5>
              <p className="text-slate-100">email: {user.email}</p>
            </div>
            <img src={user.avatar} alt="" className="rounded-full w-20" />
          </li>
        </Link>
      ))}
    </ul>
  );
}
