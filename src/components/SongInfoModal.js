function SongInfoModal({ onClose, song }) {
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div>
          <p>#{song.position}</p>
          <p>{song.title}</p>
          <p>{song.artist.name}</p>
          <p>{new Date(song.duration * 1000).toISOString().substring(14, 19)}</p>
        </div>
        <div>
          <button className="close-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default SongInfoModal;
