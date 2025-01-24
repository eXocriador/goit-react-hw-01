const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={`friend-item ${isOnline ? "online" : "offline"}`}>
      <img src={avatar} alt={name} width="50" />
      <p>{name}</p>
      <span>{isOnline ? "Online" : "Offline"}</span>
    </div>
  );
};

export default FriendListItem;
