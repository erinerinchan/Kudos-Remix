import type { User } from '@prisma/client'
import { UserCircle } from '~/components/user-circle'
import { useNavigate } from '@remix-run/react'

interface props {
    users: User[]
}

export function UserPanel({ users }: props) {
  const navigate = useNavigate()
  return (
    <div className="w-1/6 bg-gray-200 flex flex-col">
      <div className="text-center bg-gray-300 h-20 flex items-center justify-center">
        <h2 className="text-xl text-[#3F3E42] font-semibold">My Team</h2>
      </div>
      <div className="flex-1 overflow-y-scroll py-4 flex flex-col gap-y-10">
        {users.map(user => (
          <UserCircle
            key={user.id}
            profile={user.profile}
            className="h-24 w-24 mx-auto flex-shrink-0"
            onClick={() => navigate(`kudo/${user.id}`)}
          />
        ))}
      </div>
      <div className="text-center p-6 bg-gray-300">
        <form action="/logout" method="post">
          <button
            type="submit"
            className="rounded-xl bg-[#3FA037] font-semibold text-[#3F3E42] px-3 py-2 transition duration-300 ease-in-out hover:bg-[#4DB33D] hover:-translate-y-1"
          >
            Sign Out
          </button>
        </form>
      </div>
    </div>
  )
}
