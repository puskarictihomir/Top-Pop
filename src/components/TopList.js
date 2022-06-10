function TopList({ songList, isLoaded, error, handleSortChange, handleShowModal }) {
  if (!isLoaded) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Something went wrong</div>;
  } else {
    return (
      <div>
        <div>
          <select onClick={handleSortChange}>
            <option value="position">Position</option>
            <option value="ascending">Duration - ascending</option>
            <option value="descending">Duration - descending</option>
          </select>
        </div>
        <table>
          <tbody>
            {songList.map((s, i) => {
              return (
                <tr key={i} onClick={() => handleShowModal(i)}>
                  <td>{s.title}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TopList;
