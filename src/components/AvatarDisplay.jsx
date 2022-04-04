function AvatarDisplay({ avatar }) {
  const blankAvatar =
    "https://kansai-resilience-forum.jp/wp-content/uploads/2019/02/IAFOR-Blank-Avatar-Image-1.jpg";
  return (
    <div className="avatar-container">
      <div className="img-container">
        <img src={avatar ? avatar : blankAvatar} alt="No Avatar" />
      </div>
    </div>
  );
}

export default AvatarDisplay;
