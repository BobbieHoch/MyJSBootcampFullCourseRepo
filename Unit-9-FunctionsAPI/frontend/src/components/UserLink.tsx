import { Link } from 'react-router-dom';

interface Props {
  user: string;
}

function UserLink({ user }: Props) {
  return (
    <Link className="UserLink" to={`/user/${encodeURIComponent(user)}`} >
      { user }
    </Link>
  );
}

export default UserLink;