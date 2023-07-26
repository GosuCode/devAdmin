import axios from "axios";
import { useEffect, useState } from "react";
import react from "../assets/react.svg";

interface User {
  id: number;
  username: string;
  profileImageUrl: string;
}

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get<User[]>(
          "http://localhost:3001/auth/user"
        );
        setUsers(response.data);
      } catch (error) {
        console.log("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div>
      {users.length === 0 ? (
        <div>Loading...</div>
      ) : (
        users.map((user) => (
          <div key={user.id}>
            <div>
              <img src={react} alt="user profile" />
            </div>
            <div>
              <span>{user.username}</span>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Users;
