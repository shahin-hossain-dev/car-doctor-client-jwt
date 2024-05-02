const BookingRow = ({ booking }) => {
  console.log(booking);
  const { img, price, service, date } = booking;
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="rounded w-24 h-24">
              {img && <img src={img} alt="Image" />}
            </div>
          </div>
        </div>
      </td>
      <td>{service}</td>
      <td>{date}</td>
      <td>${price}</td>

      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default BookingRow;
